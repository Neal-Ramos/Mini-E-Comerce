using Application.common.DTOs;
using Application.common.Interface;
using Domain.entities;
using Infra.persistence;
using Microsoft.EntityFrameworkCore;

namespace Infra.respository
{
    public class FilesRepository: IFilesRepository
    {
        private readonly ProductServiceDbContext _productServiceDbContext;

        public FilesRepository(
            ProductServiceDbContext productServiceDbContext
        )
        {
            _productServiceDbContext = productServiceDbContext;
        }

        public async Task<Files> AddAsync(
            UploadFileDto File
        )
        {
            var newFile = new Files
            {
                DocumentName = File.DocumentName,
                FileName = File.FileName,
                ContentType = File.ContentType,
                Format = File.Format,
                PublicId = File.PublicId,
                ProductId = File.ProductId
            };
            await _productServiceDbContext.AddAsync(newFile);

            return newFile;
        }
        public async Task<IEnumerable<Files>> AddManyAsync(
            IEnumerable<UploadFileDto> NewFiles
        )
        {
            var newFile = new List<Files>();
            foreach(var File in NewFiles)
            {
                newFile.Add(new Files
                {
                    DocumentName = File.DocumentName,
                    FileName = File.FileName,
                    ContentType = File.ContentType,
                    Format = File.Format,
                    PublicId = File.PublicId,
                    ProductId = File.ProductId
                });
            }
            await _productServiceDbContext.Files.AddRangeAsync(newFile);

            return newFile;
        }
        public async Task<IEnumerable<Files>> GetByProductId(Guid ProductId)
        {
            return await _productServiceDbContext.Files
                .Where(f => f.ProductId == ProductId)
                .ToListAsync();
        }
    }
}