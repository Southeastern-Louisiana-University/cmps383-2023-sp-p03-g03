using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features;
using SP23.P03.Web.Features.TrainRoutes;

namespace SP23.P03.Web.Controllers
{

    [Route("api/trainroutes")]
    [ApiController]
    public class TrainRoutesController : ControllerBase
    {
        private readonly DbSet<TrainRoute> trainRoutes;
        private readonly DataContext dataContext;

        public TrainRoutesController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            trainRoutes = dataContext.Set<TrainRoute>();
        }

        [HttpGet]
        public IQueryable<TrainRouteDto> GetTrainRoutes()
        {
            return GetTrainRouteDtos(trainRoutes);
        }

        private IQueryable<TrainRouteDto> GetTrainRouteDtos(IQueryable<TrainRoute> trainRoutes)
        {
            return trainRoutes
                .Select(x => new TrainRouteDto
                {
                    Id = x.Id,
                    TripDate = x.TripDate,
                    TripType = (TripTypesDto)x.TripType,
                    StartingDestinationId = x.StartingDestinationId,
                    EndingDestinationId = x.EndingDestinationId,
                });
        }
    }
}