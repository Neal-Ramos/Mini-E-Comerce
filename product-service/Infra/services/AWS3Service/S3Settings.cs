namespace Infra.services.AWS3Service
{
    public class S3Settings
    {
        public string ServiceURL { get; set; } = null!;
        public string BucketName { get; set; } = null!;
        public string AccessKey { get; set; } = null!;
        public string SecretKey { get; set; } = null!;
        public string Region { get; set; } = null!;
    }
}