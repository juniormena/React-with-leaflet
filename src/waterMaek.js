import { useLeaflet } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
//import * as geo from "leaflet-control-geocoder";

const Watermark = () => {
  const { map } = useLeaflet();
  
  useEffect(() => {
    const legend = L.control({position:'bottomleft'});
    legend.onAdd= function(){
      const img = L.DomUtil.create('div','watermark');
        return img;
    }
    legend.addTo(map);
  },[map]);
  return null;
};

export default Watermark;
