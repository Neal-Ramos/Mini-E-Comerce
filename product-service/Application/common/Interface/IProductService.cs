namespace Application.common.Interface
{
    public interface IProductServiceDb
    {
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}