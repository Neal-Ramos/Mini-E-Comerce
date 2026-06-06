using Application.common.DTOs;

namespace Application.common.IService
{
    public interface IUploadFileService
    {
        Task<List<UploadFileResDto>> UploadManyAsync(
            IEnumerable<UploadFileDto> Files,
            Guid ProductId
        );
    }
}