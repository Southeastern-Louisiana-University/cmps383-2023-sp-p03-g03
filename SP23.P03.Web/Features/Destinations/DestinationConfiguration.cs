using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Features.Destinations
{
    public class DestinationConfiguration : IEntityTypeConfiguration<Destination>
    {
        public void Configure(EntityTypeBuilder<Destination> builder)
        {
            
                builder.Property(x => x.City)
                .HasMaxLength(70)
                .IsRequired();

                builder.Property(x => x.State)
                .HasMaxLength(70)
                .IsRequired();

               

        }
    }
}
