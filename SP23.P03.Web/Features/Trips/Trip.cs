﻿using Microsoft.EntityFrameworkCore.Diagnostics;

namespace SP23.P03.Web.Features.Trips
{
    public class Trip
    {
        public int Id { get; set; }
        public DateTimeOffset TripDate { get; set; }
        public int StartingDestinationId { get; set; }
        public int EndingDestinationId { get; set; }

    }
}
