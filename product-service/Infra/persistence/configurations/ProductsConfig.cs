using Domain.entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.persistence.configurations
{
    public class ProductsConfig: IEntityTypeConfiguration<Products>
    {
        public void Configure(EntityTypeBuilder<Products> builder)
        {
            builder.ToTable("Products");

            builder.HasKey(p => p.Id);
            builder.HasIndex(p => p.ProuctId)
                .IsUnique();

            builder.Property(p => p.Id)
                .ValueGeneratedOnAdd();
            builder.Property(p => p.ProuctId)
                .HasDefaultValueSql("NEWID()");
            builder.Property(p => p.Title)
                .IsRequired()
                .HasMaxLength(200);
            builder.Property(p => p.Description)
                .IsRequired()
                .HasMaxLength(1000);
            builder.Property(p => p.Price)
                .IsRequired();
            builder.Property(p => p.DateCreated)
                .IsRequired();
            
            //Relations
            builder.HasMany(p => p.Files)
                .WithOne(f => f.Product)
                .HasForeignKey(f => f.ProductId)
                .HasPrincipalKey(p => p.ProuctId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}