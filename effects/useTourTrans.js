import { useEffect } from "react";

const useTourTrans = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://www.tourtrans.ru/js/online-styles/new/modules.css";
    link.rel = "stylesheet";
    link.type = "text/css";

    const script = document.createElement("script");
    script.src = "https://www.tourtrans.ru/js/online-styles/new/modules.js";
    script.charset = "uft-8";
    script.async = true;

    document.body.appendChild(link);
    document.body.appendChild(script);
  }, []);
};

export default useTourTrans;
