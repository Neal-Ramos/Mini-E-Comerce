using Amazon.S3;
using Amazon.S3.Model;
using Application.common.DTOs;
using Application.common.IService;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace Infra.services.AWS3Service
{
    public class S3Service: IUploadFileService
    {
        private readonly IAmazonS3 _amazonS3;
        private readonly S3Settings _s3Settings;
        public S3Service (
            IAmazonS3 amazonS3,
            IConfiguration configuration
        )
        {
            _amazonS3 = amazonS3;
            _s3Settings = new S3Settings
            {
                ServiceURL = configuration["AWS:ServiceURL"]!,
                BucketName = configuration["AWS:BucketName"]!,
                AccessKey = configuration["AWS:AccessKey"]!,
                SecretKey = configuration["AWS:SecretKey"]!,
                Region = configuration["AWS:Region"]!
            };
        }
        
        public async Task<IEnumerable<UploadFileDto>> UploadManyAsync(
            List<UploadFileReqDto> Files
        )
        {
            var result = new List<UploadFileDto>();
            foreach(var file in Files)
            {
                var key = $"{Guid.NewGuid()}_{file.FileName}_{file.ProductId}";

                var req = new PutObjectRequest
                {
                    BucketName = _s3Settings.BucketName,
                    Key = key,
                    InputStream = file.Stream,
                    ContentType = file.ContentType
                };

                await _amazonS3.PutObjectAsync(req);

                result.Add(new UploadFileDto
                {
                    DocumentName = file.DocumentName,
                    FileName = file.FileName,
                    ContentType = file.ContentType,
                    Format = file.Format,
                    PublicId = key,
                    ProductId = file.ProductId
                });
            }

            return result;
        }
    }
}