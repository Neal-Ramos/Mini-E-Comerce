using Application.common.DTOs;
using Domain.entities;

namespace Application.common.Interface
{
    public interface IFilesRepository
    {
        Task<Files> AddAsync(
            UploadFileDto File
        );
        Task<Files> AddManyAsync(
            IEnumerable<UploadFileDto> Files
        );
        Task<Files?> GetByProductId(Guid ProductId);
    }
}