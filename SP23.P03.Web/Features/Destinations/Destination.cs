using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Features.Destinations
{
    public class Destination
    {
        public int Id { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int? TrainStationId { get; set; }
        public TrainStation? TrainStation { get; set; }


    }
}
