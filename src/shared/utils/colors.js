const ROCKET_STATUS_WAITING = "#e0cc12";
const ROCKET_STATUS_LAUNCHED = "#0bcc0b";
const ROCKET_STATUS_DEPLOYED = "#0b750b";
const ROCKET_STATUS_CANCELLED = "#e06565";

export const getColorByRocketStatus = (status) => {
  switch (status) {
    case "waiting":
      return ROCKET_STATUS_WAITING;
    case "launched":
      return ROCKET_STATUS_LAUNCHED;
    case "deployed":
      return ROCKET_STATUS_DEPLOYED;
    case "cancelled":
      return ROCKET_STATUS_CANCELLED;
    default:
      return null;
  }
};
