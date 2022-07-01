import React, { useEffect, useRef } from "react";
import { mount } from "mapContent/MapContentModule";
// import "./LeftSidebar.css";

const MapContentModule = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div className="map-content-module" ref={ref} />;
};

export default MapContentModule;
