import React, { useEffect, useRef } from "react";
import { mount } from "leftSideBar/leftSideBar";

const LeftPanelModule = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();
  }, []);
  return (
    <div className="left-panel-module">
      <app-root></app-root>
    </div>
  );
};

export default LeftPanelModule;
