using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Features;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Destinations;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Migrations;

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
                State = "1001 Loyola Ave, LA 70113",
                TrainStationId = dataContext.Set<TrainStation>().First(x => x.Name == "New Orleans").Id
            });
        }

        if (!destinations.Any(x => x.City == "Slidell"))
        {
            dataContext.Set<Destination>().Add(new Destination
            {
                City = "Slidell",
                State = "1827 Front St, LA 70458",
                TrainStationId = dataContext.Set<TrainStation>().First(x => x.Name == "Slidell").Id
            });
        }

        if (!destinations.Any(x => x.City == "Hammond"))
        {
            dataContext.Set<Destination>().Add(new Destination
            {
                City = "Hammond",
                State = "404 NW Railroad Ave, LA 70401",
                TrainStationId = dataContext.Set<TrainStation>().First(x => x.Name == "Hammond").Id
            });
        }

        if (!destinations.Any(x => x.City == "Baton Rouge"))
        {
            dataContext.Set<Destination>().Add(new Destination
            {
                City = "Baton Rouge",
                State = "1253 Florida Blvd, LA 70802",
                TrainStationId = dataContext.Set<TrainStation>().First(x => x.Name == "Baton Rouge").Id
            });
        }

        if (!destinations.Any(x => x.City == "Lafayette"))
        {
            dataContext.Set<Destination>().Add(new Destination
            {
                City = "Lafayette",
                State = "100 Lee Ave, LA 70501",
                TrainStationId = dataContext.Set<TrainStation>().First(x => x.Name == "Lafayette").Id
            });
        }

        if (!destinations.Any(x => x.City == "Fort Worth"))
        {
            dataContext.Set<Destination>().Add(new Destination
            {
                City = "Fort Worth",
                State = "1001 Jones St, TX 76102",
                TrainStationId = dataContext.Set<TrainStation>().First(x => x.Name == "Fort Worth").Id
            });
        }

        if (!destinations.Any(x => x.City == "Cleburne"))
        {
            dataContext.Set<Destination>().Add(new Destination
            {
                City = "Cleburne",
                State = "206 N Border St, TX 7603",
                TrainStationId = dataContext.Set<TrainStation>().First(x => x.Name == "Cleburne").Id
            });
        }

        if (!destinations.Any(x => x.City == "San Antonio"))
        {
            dataContext.Set<Destination>().Add(new Destination
            {
                City = "San Antonio",
                State = "350 Hoefgen Ave, TX 78205",
                TrainStationId = dataContext.Set<TrainStation>().First(x => x.Name == "San Antonio").Id
            });
        }

        if (!destinations.Any(x => x.City == "Jackson"))
        {
            dataContext.Set<Destination>().Add(new Destination
            {
                City = "Jackson",
                State = "300 W Capitol St, MS 39203",
                TrainStationId = dataContext.Set<TrainStation>().First(x => x.Name == "Jackson").Id
            });
        }

        if (!destinations.Any(x => x.City == "Picayune"))
        {
            dataContext.Set<Destination>().Add(new Destination
            {
                City = "Picayune",
                State = "200 Hwy 11 S, MS 39466",
                TrainStationId = dataContext.Set<TrainStation>().First(x => x.Name == "Picayune").Id
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

        if (!trainStations.Any(x => x.Name == "Hammond"))
        {

            dataContext.Set<TrainStation>()
                .Add(new TrainStation
                {
                    Name = "Hammond",
                    Address = "404 NW Railroad Ave"
                });
        }

        if (!trainStations.Any(x => x.Name == "Baton Rouge"))
        {

            dataContext.Set<TrainStation>()
                .Add(new TrainStation
                {
                    Name = "Baton Rouge",
                    Address = "1253 Florida Blvd"
                });
        }

        if (!trainStations.Any(x => x.Name == "Lafayette"))
        {

            dataContext.Set<TrainStation>()
                .Add(new TrainStation
                {
                    Name = "Lafayette",
                    Address = "100 Lee Ave"
                });
        }

        if (!trainStations.Any(x => x.Name == "Shreveport"))
        {

            dataContext.Set<TrainStation>()
                .Add(new TrainStation
                {
                    Name = "Shreveport",
                    Address = "1257 Murphy St"
                });
        }

        if (!trainStations.Any(x => x.Name == "Fort Worth"))
        {

            dataContext.Set<TrainStation>()
                .Add(new TrainStation
                {
                    Name = "Fort Worth",
                    Address = "1001 Jones St"
                });
        }

        if (!trainStations.Any(x => x.Name == "Cleburne"))
        {

            dataContext.Set<TrainStation>()
                .Add(new TrainStation
                {
                    Name = "Cleburne",
                    Address = "206 N Border St"
                });
        }

        if (!trainStations.Any(x => x.Name == "San Antonio"))
        {

            dataContext.Set<TrainStation>()
                .Add(new TrainStation
                {
                    Name = "San Antonio",
                    Address = "350 Hoefgen Aven"
                });
        }

        if (!trainStations.Any(x => x.Name == "Jackson"))
        {

            dataContext.Set<TrainStation>()
                .Add(new TrainStation
                {
                    Name = "Jackson",
                    Address = "300 W Capitol St"
                });
        }

        if (!trainStations.Any(x => x.Name == "Picayune"))
        {

            dataContext.Set<TrainStation>()
                .Add(new TrainStation
                {
                    Name = "Picayune",
                    Address = "200 Hwy 11 S"
                });
        }
        await dataContext.SaveChangesAsync();
    }
}