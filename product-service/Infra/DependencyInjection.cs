using Infra.persistence;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Infra.services.AWS3Service;
using Application.common.IService;
using Amazon.S3;
using Application.common.Interface;
using Infra.respository;

namespace Infra
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(
            this IServiceCollection services,
            IConfiguration configuration,
            bool isDevelopment
        )
        {
            services.AddDbContext<ProductServiceDbContext>((sp, options) =>
            {
                options.UseSqlServer(
                    configuration.GetConnectionString("ProductServiceDb")
                );
                options.EnableDetailedErrors();

                if (isDevelopment)
                {
                    options.EnableSensitiveDataLogging();
                }
            });

            services.AddSingleton<IAmazonS3>(sp =>
            {
                var config = new AmazonS3Config
                {
                    ServiceURL = configuration["AWS:ServiceURL"],
                    ForcePathStyle = true
                };
                return new AmazonS3Client(
                    configuration["AWS:AccessKey"],
                    configuration["AWS:SecretKey"],
                    config
                );
            });
            services.AddScoped<IProductServiceDb, ProductServiceDbContext>();

            services.AddScoped<IUploadFileService, S3Service>();

            services.AddScoped<IProductsRepository, ProductRepository>();
            services.AddScoped<IFilesRepository, FilesRepository>();

            return services;
        }
    }
}