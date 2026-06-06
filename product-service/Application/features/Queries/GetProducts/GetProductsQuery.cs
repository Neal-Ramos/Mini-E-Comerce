using MediatR;

namespace Application.features.Queries.GetProducts
{
    public class GetProductsQuery: IRequest<GetProductResDto>
    {
        public int Page {get; set;} = 1;
        public int PageSize {get; set;} = 5;
        public string? Search {get; set;}
    }
}