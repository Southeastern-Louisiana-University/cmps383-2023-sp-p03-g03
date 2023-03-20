using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Extensions;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Destinations;
using static System.Collections.Specialized.BitVector32;

namespace SP23.P03.Web.Controllers
{

    [Route("api/destinations")]
    [ApiController]
    public class DestinationsController : ControllerBase
    {
        private readonly DbSet<Destination> destinations;
        private readonly DataContext dataContext;

        public DestinationsController(DataContext datacontext)
        {
            this.dataContext = datacontext;
            destinations = dataContext.Set<Destination>();
        }

        [HttpGet]
        public IQueryable<DestinationDto> GetDestinations()
        {
            return GetDestinationDtos(destinations);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<DestinationDto> GetDestinationById(int id)
        {
            var result = GetDestinationDtos(destinations
                .Where(x => x.Id == id))
                .FirstOrDefault();

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPost]
        //needs authorization here, refer to stations controller

        public ActionResult<DestinationDto> CreateDestination(DestinationDto dto)
        {
            
        }

        [HttpDelete]
        [Route("{id}")]
        [Authorize]
        public ActionResult DeleteDestination(int id) 
        { 
            var destination = destinations.FirstOrDefault(x => x.Id == id);
            if (destination == null)
            {
                return NotFound();
            }
            // Authorization goes here, refer to stations controller

            /*if (!User.IsInRole(RoleNames.Admin) && User.GetCurrentUserId() != station.ManagerId)
            {
                return Forbid();
            }*/
            destinations.Remove(destination);
            dataContext.SaveChanges();
            return Ok();
        }




        private static IQueryable<DestinationDto> GetDestinationDtos(IQueryable<Destination> destinations)
        {
            return destinations
                .Select(x => new DestinationDto
                {
                    Id = x.Id,
                    City= x.City,
                    State= x.State,
                    TrainStationId= x.TrainStationId,
            });
        }
    }
}
