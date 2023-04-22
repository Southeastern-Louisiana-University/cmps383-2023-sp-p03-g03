import React from "react";

interface SearchBoxProps {
    label: string;
    value: string; 
    onChange: (value: string) => void; 
}
export function SearchBox({ label, value, onChange }: SearchBoxProps) {
    return (
      <div>
        <label>{label}</label>
        <input style={{ textAlign: 'center' }} placeholder="Enter Location" value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
      );
    }