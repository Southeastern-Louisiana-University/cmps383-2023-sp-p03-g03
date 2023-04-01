using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class addedTicketTypes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TrainRoute",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TripDate = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    StartingDestinationId = table.Column<int>(type: "int", nullable: false),
                    EndingDestinationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrainRoute", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TrainRoute_Destination_EndingDestinationId",
                        column: x => x.EndingDestinationId,
                        principalTable: "Destination",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_TrainRoute_Destination_StartingDestinationId",
                        column: x => x.StartingDestinationId,
                        principalTable: "Destination",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Tickets",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Price = table.Column<float>(type: "real", maxLength: 70, nullable: false),
                    RouteId = table.Column<int>(type: "int", maxLength: 70, nullable: false),
                    TicketType = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tickets", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tickets_TrainRoute_RouteId",
                        column: x => x.RouteId,
                        principalTable: "TrainRoute",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_RouteId",
                table: "Tickets",
                column: "RouteId");

            migrationBuilder.CreateIndex(
                name: "IX_TrainRoute_EndingDestinationId",
                table: "TrainRoute",
                column: "EndingDestinationId");

            migrationBuilder.CreateIndex(
                name: "IX_TrainRoute_StartingDestinationId",
                table: "TrainRoute",
                column: "StartingDestinationId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tickets");

            migrationBuilder.DropTable(
                name: "TrainRoute");
        }
    }
}
