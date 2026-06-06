using Application.common.DTOs;
using MediatR;

namespace Application.features.Queries.GetProductById
{
    public class GetProductByIdQuery: IRequest<ProductsDto>
    {
        public Guid ProductId {get; set;}
    }
}