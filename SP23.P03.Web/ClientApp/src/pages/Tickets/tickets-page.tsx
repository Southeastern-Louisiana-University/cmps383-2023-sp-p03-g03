import React from "react";
import "../Tickets/tickets-page.css";

export function TicketsPage(): React.ReactElement {
  return (
    <body className="local-style">
      <div className="local-style-cards">
        <h2 className="local-style-header">EnTrack Ticket Options</h2>
        <div className="local-style-services">
          <div className="local-style-content local-style-content-1">
            <div className="local-style-fab fab fa-twitter"></div>
            <h2>One-Way</h2>
            <p>
            A one-way ticket is a type of ticket with a travel option that allows a passenger to purchase a ticket for a single journey from one location to another without a return trip. This means that the passenger would need to purchase a separate ticket if they wish to return to their starting point. 
            </p>
            <a href="/destinations">Buy Now</a>
          </div>
          <div className="local-style-content local-style-content-2">
            <div className="local-style-fab fab fa-instagram"></div>
            <h2>Round-Trip</h2>
            <p>
            A round trip ticket is a type of ticket that allows a passenger to travel from one destination to another and then back to the original starting point. This type of ticket typically includes both an outbound and return flight, and the dates and times of both flights are scheduled in advance.
            </p>
            <a href="/destinations">Buy Now</a>
          </div>
        </div>
      </div>
    </body>
  );
}
