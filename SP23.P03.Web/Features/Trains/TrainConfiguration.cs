using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SP23.P03.Web.Features.Trains
{
    public class TrainConfiguration : IEntityTypeConfiguration<Train>
    {
        public void Configure(EntityTypeBuilder<Train> builder)
        {
            builder.Property(x => x.Type)
            .HasMaxLength(120)
            .IsRequired();

            builder.Property(x => x.Occupancy)
            .HasMaxLength(500)
            .IsRequired();
        }
    }
}
