import React, {useEffect, useState} from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

let loadScriptPromise;

const loadScript = () => {
  if (!loadScriptPromise) {
    loadScriptPromise = new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }
  return loadScriptPromise;
};

const MyMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    loadScript().then(() => {
      setMapLoaded(true);
    });
  }, []);

  return mapLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {/* Child components, like markers, info windows, etc. */}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default React.memo(MyMap);