
using Application.common.Interface;
using Domain.entities;
using Infra.persistence.configurations;
using Microsoft.EntityFrameworkCore;

namespace Infra.persistence
{
    public class ProductServiceDbContext: DbContext, IProductService
    {
        public ProductServiceDbContext(DbContextOptions<ProductServiceDbContext> options): base(options)
        {
        }

        public DbSet<Products> Products => Set<Products>();
        public DbSet<Files> Files => Set<Files>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ProductsConfig).Assembly);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(FilesConfig).Assembly);
        }
    }
}