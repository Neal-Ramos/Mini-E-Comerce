using Application.common.DTOs;
using Application.common.Interface;
using Application.common.IService;
using MediatR;

namespace Application.features.Commands.AddProduct
{
    public class AddProductHandler: IRequestHandler<AddProductCommand, ProductsDto>
    {
        private readonly IUploadFileService _uploadFileService;
        private readonly IProductsRepository _productRepository;
        private readonly IFilesRepository _filesRepository;
        private readonly IProductServiceDb _productServiceDb;

        public AddProductHandler(
            IUploadFileService uploadFileService,
            IProductsRepository productRepository,
            IFilesRepository filesRepository,
            IProductServiceDb productServiceDb
        )
        {
            _uploadFileService = uploadFileService;
            _productRepository = productRepository;
            _filesRepository = filesRepository;
            _productServiceDb = productServiceDb;
        }

        public async Task<ProductsDto> Handle(
            AddProductCommand req,
            CancellationToken cancellationToken
        )
        {
            var product = await _productRepository.AddAsync(
                Title: req.Title,
                Description: req.Description,
                Price: req.Price,
                DateCreated: new DateTime()
            );
            var uploadResult = await _uploadFileService.UploadManyAsync(req.Files, product.ProuctId);
            await _filesRepository.AddManyAsync(uploadResult);

            await _productServiceDb.SaveChangesAsync(cancellationToken);
            return new ProductsDto{};
        }
    }
}