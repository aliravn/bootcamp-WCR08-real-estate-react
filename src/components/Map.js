import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Map.css";

class Map extends React.Component {
  	render() {
		return (
			<LeafletMap
				center={[38, -100]}
				zoom={3}
				maxZoom={17}
				attributionControl={true}
				zoomControl={true}
				doubleClickZoom={true}
				scrollWheelZoom={true}
				dragging={true}
				animate={true}
				easeLinearity={0.35}
			>
				<TileLayer
				  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[40.645009, -74.074943]}>
					<Popup>
						NewYork Head Office
					</Popup>
				</Marker>
				<Marker position={[41.873754, -87.647909]}>
					<Popup>
						Chicago Office
					</Popup>
				</Marker>
				<Marker position={[34.084102, -118.320726]}>
					<Popup>
						LosAngeles Office
					</Popup>
				</Marker>
				<Marker position={[29.947733, -90.080202]}>
					<Popup>
						NewOrleans Office
					</Popup>
				</Marker>
				<Marker position={[25.751749, -80.201325]}>
					<Popup>
						Miami Office
					</Popup>
				</Marker>				
			</LeafletMap>
		);
	}
}

export default Map;