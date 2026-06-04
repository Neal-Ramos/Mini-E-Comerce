namespace Domain.entities
{
    public class Files
    {
        public int Id {get; private set;}
        public Guid FileId {get; private set;} = new Guid();
        public string DocumentName {get; set;} = null!;
        public string FileName {get; set;} = null!;
        public string ContentType {get; set;} = null!;
        public string Format {get; set;} = null!;
        public string PublicId {get; set;} = null!;

        //Relations
        public Guid? ProductId {get; set;}
        public Products? Product {get; set;}
    }
}