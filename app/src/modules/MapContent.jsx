import React, { useEffect, useRef } from "react";
import { mount } from "mapContent/MapContentModule";

const MapContentModule = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div className="map-content-module" ref={ref} />;
};

export default MapContentModule;
