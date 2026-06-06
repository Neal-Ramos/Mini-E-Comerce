using Application.common.DTOs;
using MediatR;

namespace Application.features.Commands.AddProduct
{
    public class AddProductCommand: IRequest<ProductsDto>
    {
        public string Title {get; set;} = null!;
        public string Description {get; set;} = null!;
        public int Price {get; set;}
        public List<UploadFileDto> Files {get; set;} = null!;
    }
}