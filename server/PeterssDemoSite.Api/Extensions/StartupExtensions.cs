using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeterssDemoSite.Infrastructure.Extensions;

public static class StartupExtensions
{
    public static void StartupApplication(this IServiceCollection services, ConfigurationManager configuration)
    {
        services.ConfigureControllers();
        services.ConfigureSwagger();    
    }
    //public static void ConfigureDb(this IServiceCollection services, ConfigurationManager configuration)
    //{
    //    var connectionString = configuration.GetConnectionString("Default");
    //    services.AddDbContext<PeterssContext>(options =>
    //        options.UseSqlServer(connectionString));
    //}
    public static void ConfigureControllers(this IServiceCollection services)
    {
        services.AddControllers();
        services.AddEndpointsApiExplorer();
    }

    public static void ConfigureSwagger(this IServiceCollection services)
    {
        services.AddSwaggerGen();
    }
}
