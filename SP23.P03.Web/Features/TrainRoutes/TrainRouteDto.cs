﻿using SP23.P03.Web.Features.Destinations;

namespace SP23.P03.Web.Features.TrainRoutes
{
    public enum TripTypesDto
    {
        OneWay,
        RoundTrip
    }
    public class TrainRouteDto
    {
        public int Id { get; set; }
        public DateTimeOffset TripDate { get; set; }
        public TripTypesDto TripType { get; set; }
        public int StartingDestinationId { get; set; }
        public int EndingDestinationId { get; set; }
        
    }
}
