namespace Application.common.DTOs
{
    public class ProductsDto
    {
        public Guid ProuctId {get; private set;} = new Guid();
        public string Title {get; set;} = null!;
        public string Description {get; set;} = null!;
        public int Price {get; set;}
        public DateTime DateCreated {get; set;}
    }
}