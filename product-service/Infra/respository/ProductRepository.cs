using Application.common.Interface;
using Domain.entities;
using Infra.persistence;
using Microsoft.EntityFrameworkCore;

namespace Infra.respository
{
    
    public class ProductRepository: IProductsRepository
    {
        private readonly ProductServiceDbContext _productServiceDbContext;

        public ProductRepository(
            ProductServiceDbContext productServiceDbContext
        )
        {
            _productServiceDbContext = productServiceDbContext;
        }

        public async Task<Products> AddAsync(
            string Title,
            string Description,
            int Price,
            DateTime DateCreated
        )
        {
            var newProduct = new Products
            {
                Title = Title,
                Description = Description,
                Price = Price,
                DateCreated = DateCreated
            };
            await _productServiceDbContext.AddAsync(newProduct);
            return newProduct;
        }
        public async Task<Products?> GetByProductId(
            Guid ProductId
        ){
            return await _productServiceDbContext.Products.FirstOrDefaultAsync(p => p.ProuctId == ProductId);
        }
        public async Task<IEnumerable<Products>> GetProducts(
            int Page,
            int PageSize,
            string? Search
        ){
            var query = _productServiceDbContext.Products.AsQueryable();
            if(Search != null) query = query.Where(p => p.Title.StartsWith(Search));


            return await query
                .Skip((Page - 1) * PageSize)
                .Take(PageSize)
                .ToListAsync();
        }
        public async Task<int> GetTotalCount(
            string? Search
        )
        {
            var query = _productServiceDbContext.Products.AsQueryable();

            if(Search != null) query = query.Where(p => p.Title.StartsWith(Search));
            return await query.CountAsync();
        }
    }
}