namespace Application.common.DTOs
{
    public class FilesDto
    {
        public Guid FileId {get; private set;} = new Guid();
        public string DocumentName {get; set;} = null!;
        public string FileName {get; set;} = null!;
        public string ContentType {get; set;} = null!;
        public string Format {get; set;} = null!;
        public string PublicId {get; set;} = null!;
        public Guid ProductId {get; set;}
    }
}