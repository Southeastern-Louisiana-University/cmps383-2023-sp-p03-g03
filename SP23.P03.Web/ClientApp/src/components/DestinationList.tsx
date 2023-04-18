import axios from "axios";
import React, { useEffect, useState } from "react";

interface DestinationListProps {
  selectedDestination: Destination | null;
  setSelectedDestination: (destination: Destination | null) => void;
  searchTerm: string;
  children: React.ReactNode;
}

export function DestinationList({
  selectedDestination,
  setSelectedDestination,
  searchTerm,
  children,
}: DestinationListProps) {
  const [locatedDestinations, setLocatedDestinations] = useState<Destination[]>([]); 

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get(`/api/destinations?searchTerm=${searchTerm}`)
        .then((x) => setLocatedDestinations(x.data));
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <>
      <div className="Destination-list">
        {locatedDestinations.map((x) => (
          <div
            className={
              "Destination-list_item" +
              (x.id === selectedDestination?.id ? " selected" : "") 
            }
            key={x.id}
            onClick={() => setSelectedDestination(x)}
          >
            {x.city}
          </div>
        ))}
      </div>
      {children}
    </>
  );
}