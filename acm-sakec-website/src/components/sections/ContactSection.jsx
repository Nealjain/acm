import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const ContactSection = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* Animated form will go here */}
          </div>
          <div>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
              </GoogleMap>
            ) : <></>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ContactSection)
