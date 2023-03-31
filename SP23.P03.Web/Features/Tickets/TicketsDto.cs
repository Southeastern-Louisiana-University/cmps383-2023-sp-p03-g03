namespace SP23.P03.Web.Features.Tickets
{
    public enum TicketTypesDto
    {
        Coach,
        Luxury,
        FirstClass
    }
    public class TicketsDto
    {
        public int Id { get; set; }
        public float Price { get; set; }
        public int RouteId { get; set; }
        public TicketTypesDto TicketType { get; set; }
       
    }
}
