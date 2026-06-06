using Application.common.DTOs;
using Application.common.Interface;
using AutoMapper;
using MediatR;

namespace Application.features.Queries.GetProducts
{
    public class GetProductsHandler: IRequestHandler<GetProductsQuery, GetProductResDto>
    {
        private readonly IProductsRepository _productsRepository;
        private readonly IMapper _mapper;

        public GetProductsHandler(
            IProductsRepository productsRepository,
            IMapper mapper
        )
        {
            _productsRepository = productsRepository;
            _mapper = mapper;
        }

        public async Task<GetProductResDto> Handle(
            GetProductsQuery req,
            CancellationToken cancellationToken
        )
        {
            var products = _productsRepository.GetProducts(
                Page: req.Page,
                PageSize: req.PageSize,
                Search: req.Search
            );
            var totalCount = _productsRepository.GetTotalCount(req.Search);
            await Task.WhenAll(products, totalCount);

            var totalCountResult = await totalCount;
                        
            return new GetProductResDto
            {
                Products = _mapper.Map<ICollection<ProductsDto>>(await products),
                TotalPage = (int)Math.Ceiling((double)totalCountResult / req.PageSize),
                Total = totalCountResult
            };
        }
    }
}