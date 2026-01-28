using Microsoft.EntityFrameworkCore;
using PeterssDemoSite.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeterssDemoSite.Infrastructure.Data;

public class PeterssContext : DbContext
{
    public PeterssContext(DbContextOptions<PeterssContext> options) : base(options) { }

    public DbSet<GuestLogEfc> GuestLogs => Set<GuestLogEfc>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var e = modelBuilder.Entity<GuestLogEfc>();
        e.HasKey(x => x.GuestLogId);
        //e.Property(x => x.DisplayName).HasMaxLength(60).IsRequired();
        e.Property(x => x.Message).HasMaxLength(1000).IsRequired();
        //e.Property(x => x.CreatedUtc).IsRequired();

        //e.HasIndex(x => x.CreatedUtc);
    }
}
