using Domain.entities;

namespace Application.common.Interface
{
    public interface IProductsRepository
    {
        Task<Products> AddAsync(
            string Title,
            string Description,
            int Price,
            DateTime DateCreated
        );
        Task<Products?> GetByProductId(
            Guid ProductId
        );
        Task<IEnumerable<Products>> GetProducts(
            int Page,
            int PageSize,
            string? Search
        );
        Task<int> GetTotalCount(
            string? Search
        );
    }
}