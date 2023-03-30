using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Win32.SafeHandles;
using SP23.P03.Web.Data;
using SP23.P03.Web.Extensions;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Tickets;
using SP23.P03.Web.Migrations;

namespace SP23.P03.Web.Controllers
{
    [Route("api/tickets")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        private readonly DbSet<Tickets> tickets;
        private readonly DataContext dataContext;

        public TicketsController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            tickets = dataContext.Set<Tickets>();
        }

        [HttpGet]
        public IQueryable<TicketsDto> GetTickets()
        {
            return GetTicketsDtos(tickets);
        }

        private IQueryable<TicketsDto> GetTicketsDtos(DbSet<Tickets> tickets)
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<TicketsDto> GetTicketsById(int id)
        {
            var result = GetTicketsDtos(tickets
                .Where(x => x.Id == id));

            if (result == null)
            {
                return NotFound();
            }
            return Ok();
        }

        private object GetTicketsDtos(IQueryable<Tickets> tickets)
        {
            throw new NotImplementedException();
        }

        [HttpPost]

        public ActionResult<TicketsDto> CreateTickets(TicketsDto dto)
        {
            if (IsInvalid(dto))
            {
                return BadRequest();
            }
            var ticket = new Tickets
            {
                Price = dto.Price,
                TripId = dto.TripId,
                Trip = dto.Trip,
            };
            tickets.Add(ticket);
            dataContext.SaveChanges();
            dto.Id = ticket.Id;
            return CreatedAtAction(nameof(GetTicketsById), new { id = dto.Id }, dto);
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult<TicketsDto> UpdateTicket(int id, TicketsDto dto)
        {
            if (IsInvalid(dto))
            {
                return BadRequest();
            }
            var ticket = tickets.FirstOrDefault();
            if (ticket == null)
            {
                return NotFound();
            }
            ticket.Price = dto.Price;
            ticket.TripId = dto.TripId;
            ticket.Trip = dto.Trip;
            dataContext.SaveChanges();
            dto.Id = ticket.Id;
            return Ok(dto);
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult DeleteTickets(int id)
        {
            var ticket = tickets.FirstOrDefault(x => x.Id == id);
            if (ticket == null)
            {
                return NotFound();
            }
            tickets.Remove(ticket);
            dataContext.SaveChanges();
            return Ok();

        }

        private bool IsInvalid(TicketsDto dto)
        {
            throw new NotImplementedException();
        }
    }
}

