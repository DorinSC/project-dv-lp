export const handleCall = () => {
  if (typeof window !== "undefined") {
    window.location.href = `tel:${"+373079733221"}`;
  }
};
