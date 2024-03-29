import React, { useEffect, useRef } from "react";
import { mount } from "leftSideBar/leftSideBar";

const ChatModule = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();
  }, []);
  return (
    <div className="chat-module">
      <app-root></app-root>
    </div>
  );
};

export default ChatModule;
