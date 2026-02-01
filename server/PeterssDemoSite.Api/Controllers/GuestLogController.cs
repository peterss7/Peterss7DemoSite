
using Microsoft.AspNetCore.Mvc;

namespace PeterssDemoSite.Api.Controllers;

[Route(API_ROUTE)]
[ApiController]
public class GuestLogController : ControllerBase
{
    private const string API_ROUTE = "guestlog";
    private const string CREATE_ROUTE = "";

    private readonly ILogger<GuestLogController> _logger;

    public GuestLogController(ILogger<GuestLogController> logger)
    {
        _logger = logger;
    }

    [HttpPost(CREATE_ROUTE)]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult> CreateLog([FromBody] string log)
    {
        try
        {
            _logger.LogError("{Controller}.{Action} not implemented.", nameof(GuestLogController), nameof(CreateLog));
            return StatusCode(StatusCodes.Status501NotImplemented, "Endpoint not implemented.");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unhandled exception in {Controller}.{Action}", nameof(GuestLogController), nameof(CreateLog));
            return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while creating the guest log.");
        }
    }
}
