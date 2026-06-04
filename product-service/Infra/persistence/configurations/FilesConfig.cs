using Domain.entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.persistence.configurations
{
    public class FilesConfig: IEntityTypeConfiguration<Files>
    {
        public void Configure(EntityTypeBuilder<Files> builder)
        {
            builder.ToTable("Files");

            builder.HasKey(f => f.Id);
            builder.HasIndex(f => f.FileId)
                .IsUnique();
                
            builder.Property(f => f.Id)
                .ValueGeneratedOnAdd();
            builder.Property(f => f.FileId)
                .HasDefaultValueSql("NEWID()");
            builder.Property(f => f.DocumentName)
                .IsRequired();
            builder.Property(f => f.FileName)
                .IsRequired();
            builder.Property(f => f.ContentType)
                .IsRequired();
            builder.Property(f => f.Format)
                .IsRequired();
            builder.Property(f => f.PublicId)
                .IsRequired();

            //Relations
            builder.HasOne(f => f.Product)
                .WithMany(p => p.Files)
                .HasForeignKey(f => f.ProductId)
                .HasPrincipalKey(p => p.ProuctId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}