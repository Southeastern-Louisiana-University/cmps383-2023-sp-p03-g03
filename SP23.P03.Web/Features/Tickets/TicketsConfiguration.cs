using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace SP23.P03.Web.Features.Tickets
{
    public class TicketsConfiguration : IEntityTypeConfiguration<Tickets>
    {
        public void Configure(EntityTypeBuilder<Tickets> builder)
        {
            builder.Property(x => x.Price)
                .HasMaxLength(70)
                .IsRequired();

            builder.Property(x => x.RouteId)
                .HasMaxLength(70)
                .IsRequired();

            builder.Property(x => x.TicketType)
                .IsRequired();
        }
    }
}
