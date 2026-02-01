# up.ps1
# Run this from the repo root (where your docker-compose.yml lives)

$ErrorActionPreference = "Stop"

function Get-ComposeCmd {
    # Prefer: docker compose
    $docker = Get-Command docker -ErrorAction SilentlyContinue
    if ($docker) {
        try {
            docker compose version *> $null
            return @("docker", "compose")
        }
        catch {}
    }

    # Fallback: docker-compose (legacy)
    $dc = Get-Command docker-compose -ErrorAction SilentlyContinue
    if ($dc) { return @("docker-compose") }

    throw "Neither 'docker compose' nor 'docker-compose' is available."
}

$compose = Get-ComposeCmd

# Compose file set (base + prod + override if present)
$files = @("docker-compose.yml")
if (Test-Path "docker-compose.prod.yml") { $files += "docker-compose.prod.yml" }
if (Test-Path "docker-compose.override.yml") { $files += "docker-compose.override.yml" }

$args = @()
foreach ($f in $files) { $args += @("-f", $f) }

Write-Host "Using: $($compose -join ' ')" -ForegroundColor Cyan
Write-Host "Compose files: $($files -join ', ')" -ForegroundColor Cyan

# Optional: pull images (won't fail your run if it can't pull)
try {
    & $compose @args pull
}
catch {
    Write-Host "Pull failed (continuing): $($_.Exception.Message)" -ForegroundColor Yellow
}

# Build + start
& $compose @args up -d --build

# Show status
& $compose @args ps

Write-Host "`nDone. If something is unhealthy, run:" -ForegroundColor Green
Write-Host "  $($compose -join ' ') $($args -join ' ') logs -f --tail=100 web" -ForegroundColor Green
Write-Host "  $($compose -join ' ') $($args -join ' ') logs -f --tail=100 api" -ForegroundColor Green
