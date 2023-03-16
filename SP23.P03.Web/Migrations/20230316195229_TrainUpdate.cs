using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class TrainUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Occupancy",
                table: "Train");

            migrationBuilder.AddColumn<int>(
                name: "MaxTicketCount",
                table: "Train",
                type: "int",
                maxLength: 500,
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Destination",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    City = table.Column<string>(type: "nvarchar(70)", maxLength: 70, nullable: false),
                    State = table.Column<string>(type: "nvarchar(70)", maxLength: 70, nullable: false),
                    TrainStationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destination", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Destination_TrainStation_TrainStationId",
                        column: x => x.TrainStationId,
                        principalTable: "TrainStation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Destination_TrainStationId",
                table: "Destination",
                column: "TrainStationId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Destination");

            migrationBuilder.DropColumn(
                name: "MaxTicketCount",
                table: "Train");

            migrationBuilder.AddColumn<int>(
                name: "Occupancy",
                table: "Train",
                type: "int",
                maxLength: 2147483647,
                nullable: false,
                defaultValue: 0);
        }
    }
}
