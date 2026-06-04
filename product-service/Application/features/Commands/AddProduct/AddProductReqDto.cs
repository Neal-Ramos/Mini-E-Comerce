namespace Application.features.Commands.AddProduct
{
    public class AddProductReqDto
    {
        public string FolderName {get; set;} = null!;
        public string DocumentName {get; set;} = null!;
        public string FileName {get; set;} = null!;
        public string ContentType {get; set;} = null!;
        public string Format {get; set;} = null!;
        public Stream Stream {get; set;} = null!;
    }
}