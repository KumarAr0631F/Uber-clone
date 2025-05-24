import React from "react";

const LocationSearchPanel = (props) => {
  // sample array for location
  const location = [
    "D-27/9 dada jagira bhawan near HiFi Chemist chattarpur extn. New Delhi-110074",
    "B-24/12 dada singhania bhawan near JVTS Garden chattarpur extn. New Delhi-110074",
    "C-2/9 Kapoor's house near deepak general store chattarpur extn. New Delhi-110074",
    "E-34 Block E near maidan gadi road chattarpur extn. New Delhi-110074",
  ];

  return (
    <div>
      {/* This is sample data */}
      {location.map(function (elem, idx) {
        return (
        <div key={idx} onClick={() => {
          props.setVehiclePanel(true);
          props.setPanelOpen(false);
        }} className="flex gap-4 border-2 border-white active:border-black p-3 rounded-xl items-center justify-start">
          <h2 className="bg-gray-200 h-10 w-24 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-line"></i>
          </h2>
          <h4 className="font-medium text-sm">
            {elem}
          </h4>
        </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
