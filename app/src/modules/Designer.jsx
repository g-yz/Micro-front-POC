import React, { useEffect, useRef } from "react";
import { mount } from "designer/DesignerModule";
// import "./Header.css";
const DesignerModule = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div className="designer-module" ref={ref} />;
};

export default DesignerModule;
