'use client';

import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    // Tawk.to Live Chat Integration
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/68231290e6bf69190cdb15ac/1ir4g11o3";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      // Cleanup script if needed
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visually
};

export default LiveChat;