import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ warehouses }) => {
  //   console.log(warehouses);
  const position = [23.8041, 90.4152];
  const mapRef = useRef(null); // using ref to go to the location
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const area = form.area.value;
    console.log({ area });
    const district = warehouses.find((w) =>
      w.district.toLowerCase().includes(area.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 14); // using location here and flyTo method to zoom and go
    }
  };
  return (
    <>
      <div className="bg-white p-6 my-5 rounded-[20px]">
        {/* search form here */}
        <div>
          <h2 className="font-extrabold text-[36px] md:text-[42px] lg:text-[58px]">
            We are available in 64 districts
          </h2>
          {/* search form */}
          <div className="my-4">
            <form onSubmit={handleSearch}>
              <input
                className="py-4 px-5 bg-[#CBD5E1] rounded-full w-4/12 outline-none"
                type="text"
                name="area"
                placeholder="Search Here"
              />
              <input
                className="bg-secondary py-4 px-5 rounded-full -ml-[70px] cursor-pointer"
                type="submit"
                value="Search"
              />
            </form>
          </div>
        </div>
        {/* divider */}
        <div className="divider"></div>
        <div>
          <h2 className="text-lg font-bold my-3">
            We deliver almost all over Bangladesh
          </h2>
        </div>
        {/* map here */}
        <div className="h-[700px]">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="h-[700px]"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {warehouses.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong>
                  <br />
                  covered area: {center.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Map;
