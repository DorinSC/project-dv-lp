import { useEffect, useState } from "react";

const useCTAObserver = () => {
  const [hasScrolledPastCTA, setHasScrolledPastCTA] = useState(false);

  useEffect(() => {
    const ctaElement = document.getElementById("cta-section");
    if (!ctaElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasScrolledPastCTA(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0, // Trigger as soon as it's completely out of view
      }
    );

    observer.observe(ctaElement);

    return () => {
      if (ctaElement) observer.unobserve(ctaElement);
    };
  }, []);

  return hasScrolledPastCTA;
};

export default useCTAObserver;
