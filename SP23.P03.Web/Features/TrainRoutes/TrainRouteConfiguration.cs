using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SP23.P03.Web.Features.TrainRoutes
{
    public class TrainRouteConfiguration : IEntityTypeConfiguration<TrainRoute>
    {
        public void Configure(EntityTypeBuilder<TrainRoute> builder)
        {
            builder.Property(x => x.TripDate)
                .IsRequired();

            builder.Property(x => x.StartingDestinationId)
                .IsRequired();

            builder.Property(x => x.EndingDestinationId)
               .IsRequired();
        }
    }
}
