namespace Domain.entities
{
    public class Products
    {
        public int Id {get; private set;}
        public Guid ProuctId {get; private set;} = new Guid();
        public string Title {get; set;} = null!;
        public string Description {get; set;} = null!;
        public int Price {get; set;}
        public DateTime DateCreated {get; set;}

        //Relatations
        public ICollection<Files>? Files {get; set;}
    }
}