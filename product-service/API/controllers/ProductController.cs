using API.common.Responses;
using Application.common.DTOs;
using Application.features.Commands.AddProduct;
using Application.features.Queries.GetProductById;
using Application.features.Queries.GetProducts;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ProductController(
            IMediator mediator
        )
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct(
            [FromForm] string Title,
            [FromForm] string Description,
            [FromForm] string Price,
            CancellationToken cancellationToken
        )
        {
            var Files = (await Task.WhenAll(Request.Form.Files.Select(async file =>
            {
                var memoryStream = new MemoryStream();
                await file.CopyToAsync(memoryStream);
                memoryStream.Position = 0;

                return new UploadFileDto
                {
                    Name = file.Name,
                    FileName = file.FileName,
                    ContentType = file.ContentType,
                    Format = Path.GetExtension(file.FileName).TrimStart('.'),
                    Stream = memoryStream
                };
            }))).ToList();

            var query = new AddProductCommand
            {
                Title = Title,
                Description = Description,
                Price = int.Parse(Price),
                Files = Files
            };
            var result = await _mediator.Send(query, cancellationToken);

            return Ok();
        }
        [HttpGet]
        public async Task<IActionResult> GetProducts(
            [FromQuery] int Page,
            [FromQuery] int PageSize,
            [FromQuery] string Search,
            CancellationToken cancellationToken
        )
        {
            var query = new GetProductsQuery
            {
                Page = Page,
                PageSize = PageSize,
                Search = Search
            };
            var result = await _mediator.Send(query, cancellationToken);

            return Ok(new APIResponse<object>
            {
                Data = result.Products,
                Meta = new Dictionary<string, object>
                {
                    ["Total"] = result.Total,
                    ["TotalPage"] = result.TotalPage
                }
            });
        }
        [HttpGet("/:ProductId")]
        public async Task<IActionResult> GetProductByPRoductId(
            [FromRoute] Guid ProductId,
            CancellationToken cancellationToken
        )
        {
            var query = new GetProductByIdQuery{
                ProductId= ProductId
            };
            var result = await _mediator.Send(query, cancellationToken);

            return Ok(new APIResponse<object>
            {
                Data = result
            });
        }
    }
}