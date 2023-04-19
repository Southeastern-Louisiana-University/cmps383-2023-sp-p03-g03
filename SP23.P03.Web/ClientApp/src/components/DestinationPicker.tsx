import React, { useState } from "react";
import { SearchBox } from "./SearchBox";
import { DestinationList } from "./DestinationList";

interface DestinationPickerProps {
    title: string;
}
export function DestinationPicker({ title }: DestinationPickerProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDestination, setSelectedDestination] = useState<Destination | null>();
  
    return (
      <div>
        <h2>{title}</h2>
        <SearchBox
          label="search term"
          value={searchTerm}
          onChange={setSearchTerm}
        />
      
        <DestinationList
          searchTerm={searchTerm}
          selectedDestination={selectedDestination as Destination}
          setSelectedDestination={setSelectedDestination}
        >
          {/* {selectedDestination ? "Where do you want to go?": null} */}
          </DestinationList>
        
      </div>
    );
  }