import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

function Maps() {
  return (
    <div className="map-container">
      <MapContainer
        center={[28.112045053214192, -15.420358423947544]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[28.112045053214192, -15.420358423947544]}>
          <Popup>
            Cervecería Canarias Brew
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Maps;