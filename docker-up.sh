cat > docker-up.sh <<'EOF'
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

FILES=(-f docker-compose.yml)

[[ -f docker-compose.prod.yml ]] && FILES+=(-f docker-compose.prod.yml)

docker compose "${FILES[@]}" up -d --build
docker compose "${FILES[@]}" ps
EOF