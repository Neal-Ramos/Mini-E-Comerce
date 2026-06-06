using Application.common.DTOs;

namespace Application.features.Queries.GetProducts
{
    public class GetProductResDto
    {
        public ICollection<ProductsDto> Products {get; set;} = [];
        public int TotalPage {get; set;}
        public int Total {get; set;}
    }
}