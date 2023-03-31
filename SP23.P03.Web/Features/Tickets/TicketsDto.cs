namespace SP23.P03.Web.Features.Tickets
{
    public class TicketsDto
    {
        public int Id { get; set; }
        public float Price { get; set; }
        public int RouteId { get; set; }
        public TicketTypes TicketType { get; set; }
       
    }
}
