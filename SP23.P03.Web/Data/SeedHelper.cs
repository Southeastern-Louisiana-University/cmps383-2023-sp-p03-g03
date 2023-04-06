using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Any;
using SP23.P03.Web.Features;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Destinations;
using SP23.P03.Web.Features.Tickets;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Migrations;
using System.Data;
using System.Runtime.CompilerServices;

namespace SP23.P03.Web.Data;

public static class SeedHelper
{
    public static async Task MigrateAndSeed(IServiceProvider serviceProvider)
    {
        var dataContext = serviceProvider.GetRequiredService<DataContext>();

        await dataContext.Database.MigrateAsync();

        await AddRoles(serviceProvider);
        await AddUsers(serviceProvider);

        await AddTrainStation(dataContext);
        await AddTrain(dataContext);
        await AddDestination(dataContext);
        await AddTrainRoute(dataContext);
    }

    private static async Task AddTrain(DataContext dataContext)
    {
        var trains = dataContext.Set<Train>();

        if (!trains.Any(x => x.Type == "Passanger"))
        {
            dataContext.Set<Train>()
                   .Add(new Train
                   {
                       Type = "Passanger",
                       MaxTicketCount = 500,
                   });
        }
        if (!trains.Any(x => x.Type == "Sleeper"))
        {
            dataContext.Set<Train>()
                   .Add(new Train
                   {
                       Type = "Sleeper",
                       MaxTicketCount = 250,
                   });
        }
        if (!trains.Any(x => x.Type == "Luxury Passanger"))
        {
            dataContext.Set<Train>()
                   .Add(new Train
                   {
                       Type = "Luxury Passanger",
                       MaxTicketCount = 200,
                   });
        }
        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrainRoute(DataContext dataContext)
    {
        var trainRoutes = dataContext.Set<TrainRoute>();
        if (!trainRoutes.Any(x => x.StartingDestinationId == dataContext.Set<Destination>().First(x => x.City == "New Orleans").Id)
            && !trainRoutes.Any(x => x.EndingDestinationId == dataContext.Set<Destination>().First(x => x.City == "Slidell").Id))
        {
            dataContext.Set<TrainRoute>().Add(new TrainRoute
            {
                TripDate = DateTime.Now,
                TripType = TripTypes.OneWay,
                StartingDestinationId = dataContext.Set<Destination>().First(x => x.City == "New Orleans").Id,
                EndingDestinationId = dataContext.Set<Destination>().First(x => x.City == "Slidell").Id
            });
        }
        await dataContext.SaveChangesAsync();
    }

    private static async Task AddDestination(DataContext dataContext)
    {
        var destinations = dataContext.Set<Destination>();
        if (!destinations.Any(x => x.City == "New Orleans"))
        {
            dataContext.Set<Destination>().Add(new Destination
            {
                City = "New Orleans",
                State = "Louisiana",
                TrainStationId = dataContext.Set<TrainStation>().First(x => x.Name == "New Orleans").Id
            });
        }

        if (!destinations.Any(x => x.City == "Slidell"))
        {
            dataContext.Set<Destination>().Add(new Destination
            {
                City = "Slidell",
                State = "Louisiana",
                TrainStationId = dataContext.Set<TrainStation>().First(x => x.Name == "Slidell").Id
            });
        }
        await dataContext.SaveChangesAsync();
    }

    private static async Task AddUsers(IServiceProvider serviceProvider)
    {
        const string defaultPassword = "Password123!";
        var userManager = serviceProvider.GetRequiredService<UserManager<User>>();

        if (userManager.Users.Any())
        {
            return;
        }

        var adminUser = new User
        {
            UserName = "galkadi"
        };
        await userManager.CreateAsync(adminUser, defaultPassword);
        await userManager.AddToRoleAsync(adminUser, RoleNames.Admin);

        var bob = new User
        {
            UserName = "bob"
        };
        await userManager.CreateAsync(bob, defaultPassword);
        await userManager.AddToRoleAsync(bob, RoleNames.User);

        var sue = new User
        {
            UserName = "sue"
        };
        await userManager.CreateAsync(sue, defaultPassword);
        await userManager.AddToRoleAsync(sue, RoleNames.User);
    }

    private static async Task AddRoles(IServiceProvider serviceProvider)
    {
        var roleManager = serviceProvider.GetRequiredService<RoleManager<Role>>();
        if (roleManager.Roles.Any())
        {
            return;
        }
        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.Admin
        });

        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.User
        });
    }

    private static async Task AddTrainStation(DataContext dataContext)
    {
        var trainStations = dataContext.Set<TrainStation>();

        if (!trainStations.Any(x => x.Name == "New Orleans")){

            dataContext.Set<TrainStation>()
                .Add(new TrainStation
                {
                    Name = "New Orleans",
                    Address = "1234 Place st"
                });
        }

        if (!trainStations.Any(x => x.Name == "Slidell"))
        {

            dataContext.Set<TrainStation>()
                .Add(new TrainStation
                {
                    Name = "Slidell",
                    Address = "4764 Street St"
                });
        }
        await dataContext.SaveChangesAsync();
    }

    private static async Task AddTickets(DataContext dataContext)
    //If there arent any tickets set them up based on a Route 
    // In theory a person could buy a ticket based on the level of seating. I think......
    //Dont fully understand work but it works.
    {
        var tickets = dataContext.Set<Tickets>();
        if (!tickets.Any(x => x.Price ==  300))
        {
            tickets
                .Add(new Tickets
                {
                    Price = 300,

                });
            await dataContext.SaveChangesAsync();

        }
          if  (!tickets.Any(x => x.TicketType == TicketTypes.Coach))
           {

            tickets
            .Add(new Tickets
            {
                TicketType = TicketTypes.Coach
            });
            await dataContext.SaveChangesAsync();

           }
            if (!tickets.Any(x => x.TicketType == TicketTypes.FirstClass))
            {
            tickets
            .Add(new Tickets
            {
                TicketType = TicketTypes.FirstClass

            });
            await dataContext.SaveChangesAsync();

            }

            if (!tickets.Any(x => x.TicketType == TicketTypes.Luxury))
            {

            tickets
            .Add(new Tickets
            {
                TicketType = TicketTypes.Luxury
            });
            await dataContext.SaveChangesAsync();
            }


        await dataContext.SaveChangesAsync();

    }
    
}