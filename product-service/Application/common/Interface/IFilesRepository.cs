using Application.common.DTOs;
using Domain.entities;

namespace Application.common.Interface
{
    public interface IFilesRepository
    {
        Task<Files> AddAsync(
            UploadFileDto File
        );
        Task<IEnumerable<Files>> AddManyAsync(
            IEnumerable<UploadFileDto> NewFiles
        );
        Task<IEnumerable<Files>> GetByProductId(Guid ProductId);
    }
}