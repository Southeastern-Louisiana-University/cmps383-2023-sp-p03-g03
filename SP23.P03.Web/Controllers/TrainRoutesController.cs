using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
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

        [HttpGet]
        [Route("{id}")]
        public ActionResult<TrainRouteDto> GetTrainRouteById(int id)
        {
            var result = GetTrainRouteDtos(trainRoutes
                .Where(x => x.Id == id))
                .FirstOrDefault();
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpPost]
        public ActionResult<TrainRouteDto> CreateTrainRoute(TrainRouteDto dto)
        {
            if (IsInvalid(dto))
            {
                return BadRequest();
            }

            var trainRoute = new TrainRoute
            {
                TripDate = dto.TripDate,
                TripType = (TripTypes)dto.TripType,
                StartingDestinationId = dto.StartingDestinationId,
                EndingDestinationId = dto.EndingDestinationId,
            };
            trainRoutes.Add(trainRoute);
            dataContext.SaveChanges();
            dto.Id = trainRoute.Id;
            return CreatedAtAction(nameof(GetTrainRouteById), new {id = dto.Id}, dto);
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult<TrainRouteDto> UpdateTrainRoute(int id, TrainRouteDto dto)
        {
            if (IsInvalid(dto))
            {
                return BadRequest();
            }
            var trainRoute = trainRoutes.FirstOrDefault(x => x.Id == id);
            if (trainRoute == null) {
                return NotFound();
            }
            trainRoute.TripDate = dto.TripDate;
            trainRoute.TripType = (TripTypes)dto.TripType;
            trainRoute.StartingDestinationId = dto.StartingDestinationId;
            trainRoute.EndingDestinationId = dto.EndingDestinationId;
            dataContext.SaveChanges();
            dto.Id = trainRoute.Id;
            return Ok(dto);
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult DeleteTrainRoute(int id)
        {
            var trainRoute = trainRoutes.FirstOrDefault(x =>x.Id == id);
            if (trainRoute == null)
            {
                return NotFound();
            }
            trainRoutes.Remove(trainRoute);
            dataContext.SaveChanges();
            return Ok();
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
        private bool IsInvalid(TrainRouteDto dto)
        {
            return int.IsNegative(dto.StartingDestinationId) ||
                   dto.StartingDestinationId == 0 ||
                   int.IsNegative(dto.EndingDestinationId) ||
                   dto.EndingDestinationId == 0;
        }
    }
}