import React, { useRef, useState, useEffect } from "react";

export const useComponentVisible = initialValue => {
  const [isVisible, setIsVisible] = useState(initialValue);
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
};
