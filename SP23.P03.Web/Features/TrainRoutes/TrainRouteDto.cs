using SP23.P03.Web.Features.Destinations;

namespace SP23.P03.Web.Features.TrainRoutes
{
    public enum TripTypesDto
    {
        OneWay, // 0
        RoundTrip // 1
    }
    public class TrainRouteDto
    {
        public int Id { get; set; }
        public DateTimeOffset TripDate { get; set; }
        //This returns an int type representing which type of trip it is
        public TripTypesDto TripType { get; set; } 
        public int StartingDestinationId { get; set; }
        public int EndingDestinationId { get; set; }
        
    }
}
