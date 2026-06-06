using Application.common.DTOs;
using Application.common.Interface;
using Application.exeptions;
using AutoMapper;
using MediatR;

namespace Application.features.Queries.GetProductById
{
    public class GetProductIdHandler: IRequestHandler<GetProductByIdQuery, ProductsDto>
    {
        private IProductsRepository _productsRepository;
        private IMapper _mapper;

        public GetProductIdHandler(
            IProductsRepository productsRepository,
            IMapper mapper
        )
        {
            _productsRepository = productsRepository;
            _mapper = mapper;
        }

        public async Task<ProductsDto> Handle(
            GetProductByIdQuery req,
            CancellationToken cancellationToken
        )
        {
            var product = await _productsRepository.GetByProductId(req.ProductId)
                ?? throw new NotFoundExeption("Product Not Found");
            return _mapper.Map<ProductsDto>(product);
        }
    }
}