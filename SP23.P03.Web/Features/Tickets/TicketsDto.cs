using SP23.P03.Web.Features.Trips;

namespace SP23.P03.Web.Features.Tickets
{
    public class TicketsDto
    {
        public int Id { get; set; }
        public float Price { get; set; }
        public int TripId { get; set; }
        public Trip Trip { get; set; }
    }
}
