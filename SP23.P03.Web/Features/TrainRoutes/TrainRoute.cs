﻿using SP23.P03.Web.Features.Destinations;

namespace SP23.P03.Web.Features
{
    public enum TripTypes
    {
        OneWay,
        RoundTrip
    }
    public class TrainRoute
    {
        public int Id { get; set; }
        public DateTimeOffset TripDate { get; set; }
        public TripTypes TripType { get; set; }
        public int StartingDestinationId { get; set; }
        public int EndingDestinationId { get; set; }
        public Destination StartingDestination { get; set; }
        public Destination EndingDestination { get; set; }
    }
}
