using System.Reflection;
using Application.features;
using Microsoft.Extensions.DependencyInjection;

namespace Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(
            this IServiceCollection services
        )
        {
            services.AddMediatR(cfg =>
                cfg.RegisterServicesFromAssembly(
                    Assembly.GetExecutingAssembly()
                )
            );
            services.AddAutoMapper(typeof(MappingProfile));

            return services;
        }
    }
}