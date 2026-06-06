using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FilesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public FilesController(
            IMediator mediator
        )
        {
            _mediator = mediator;
        }
        
    }
}