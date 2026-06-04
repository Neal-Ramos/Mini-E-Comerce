using Application.common.DTOs;

namespace Application.common.IService
{
    public interface IUploadFileService
    {
        Task<IEnumerable<UploadFileDto>> UploadManyAsync(
            List<UploadFileReqDto> Files
        );
    }
}