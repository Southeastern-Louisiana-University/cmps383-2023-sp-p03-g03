using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features;
using SP23.P03.Web.Features.Destinations;
using SP23.P03.Web.Features.TrainRoutes;

namespace SP23.P03.Web.Controllers
{

    [Route("api/trainRoutes")]
    [ApiController]
    public class TrainRouteController : ControllerBase
    {
        private readonly DbSet<TrainRoute> trainRoutes;
        private readonly DataContext dataContext;

        public TrainRouteController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            trainRoutes = dataContext.Set<TrainRoute>();
        }

        [HttpGet]
        public IQueryable<TrainRouteDto> GetTrainRoutes()
        {
            return GetTrainRouteDtos(trainRoutes);

        }


        private static IQueryable<TrainRouteDto> GetTrainRouteDtos(IQueryable<TrainRoute> trainRoutes)
        {
            return trainRoutes
                .Select(x => new TrainRouteDto
            {
                Id = x.Id,
                TripDate = x.TripDate,
                StartingDestination = x.StartingDestination,
                EndingDestination = x.EndingDestination,
            });
        }
    }
}
