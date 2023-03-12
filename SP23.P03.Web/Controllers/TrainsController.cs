using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Win32.SafeHandles;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Controllers
{
    [Route("api/trains")]
    [ApiController]
    public class TrainsController : ControllerBase
    {
        private readonly DbSet<Train> trains;
        private readonly DataContext dataContext;
        public TrainsController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            trains = dataContext.Set<Train>();
        }

        [HttpGet]
        public IQueryable<TrainDto> GetAllTrains()
        {
            return GetTrainDtos(trains);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<TrainDto> GetTrainById(int id)
        {
            var result = GetTrainDtos(trains.Where (x => x.Id == id)).FirstOrDefault();
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpPost]
        public ActionResult<TrainDto> CreateTrain(TrainDto dto)
        {
            if (IsInvalid(dto))
            {
                return BadRequest();
            }
            var train = new Train
            {
                Type = dto.Type,
                Occupancy = dto.Occupancy,
               
            };
            trains.Add(train);
            dataContext.SaveChanges();
            dto.Id = train.Id;
            return CreatedAtAction(nameof(GetTrainById), new {id = dto.Id}, dto);
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult<TrainDto> UpdateTrain(int id, TrainDto dto)
        {
            if (IsInvalid(dto))
            {
                return BadRequest();
            }
            var train = trains.FirstOrDefault(x => x.Id == id);
            if (train == null)
            {
                return NotFound();
            }

            train.Type= dto.Type;
            train.Occupancy= dto.Occupancy;
            dataContext.SaveChanges();
            dto.Id = train.Id;
            return Ok(dto);
        }
        [HttpDelete]
        [Route("{id}")]
        public ActionResult DeleteTrain(int id)
        {
            var train = trains.FirstOrDefault(x =>x.Id == id);
            if (train == null)
            {
                return NotFound();
            }
            trains.Remove(train);
            dataContext.SaveChanges();
            return Ok();
        }

        private IQueryable<TrainDto> GetTrainDtos(IQueryable<Train> trains)
        {
            return trains
                .Select(x => new TrainDto
            {
                    Id = x.Id,
                    Type = x.Type,
                    Occupancy = x.Occupancy,
            });
        }
        private bool IsInvalid(TrainDto dto)
        {
            return string.IsNullOrWhiteSpace(dto.Type) ||
                   dto.Type.Length > 120 ||
                   dto.Occupancy == 0 ||
                   dto.Occupancy > 500;
                   
        }
        private bool InvalidManagerId(int? managerId)
        {
            if (managerId == null)
            {
                return false;
            }

            if (!User.IsInRole(RoleNames.Admin))
            {
                // only admins can change manager ids anyway
                return false;
            }
            return !dataContext.Set<User>().Any(x => x.Id == managerId);
        }
    }
}
