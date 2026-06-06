using Application.common.DTOs;
using Domain.entities;

namespace Application.common.Interface
{
    public interface IFilesRepository
    {
        Task<Files> AddAsync(
            UploadFileResDto File
        );
        Task<IEnumerable<Files>> AddManyAsync(
            IEnumerable<UploadFileResDto> NewFiles
        );
        Task<IEnumerable<Files>> GetByProductId(Guid ProductId);
    }
}