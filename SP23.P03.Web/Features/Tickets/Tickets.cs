namespace SP23.P03.Web.Features.Tickets
{
    public enum TicketTypes
    {
        Coach,
        Luxury,
        FirstClass
    }
    public class Tickets
    {
        public int Id { get; set; }
        public float Price { get; set; }
        public int RouteId { get; set; }
        public TicketTypes TicketType { get; set; }
        public TrainRoute Route { get; set; }
    }
}
