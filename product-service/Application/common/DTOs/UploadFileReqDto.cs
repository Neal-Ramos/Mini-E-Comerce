namespace Application.common.DTOs
{
    public class UploadFileReqDto
    {
        public Guid ProductId {get; set;}
        public string FolderName {get; set;} = null!;
        public string DocumentName {get; set;} = null!;
        public string FileName {get; set;} = null!;
        public string ContentType {get; set;} = null!;
        public string Format {get; set;} = null!;
        public Stream Stream {get; set;} = null!;
    }
}