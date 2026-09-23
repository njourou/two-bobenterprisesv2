"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [-1.263, 36.806];

const pin = L.divIcon({
  className: "tb-map-pin",
  html: `<span></span>`,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
});

export default function SiteMap() {
  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className="tb-map"
      aria-label="Map showing Two Bob Enterprises in Westlands, Nairobi"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={pin}>
        <Popup>
          Two Bob Enterprises
          <br />
          Kyuna Crescent #30, Westlands
        </Popup>
      </Marker>
    </MapContainer>
  );
}
