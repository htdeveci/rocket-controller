export const getRoundedFloat = (value) => {
  return Math.round(value * 1000) / 1000;
};

export const getFormattedDateTime = (dateTime) => {
  if (dateTime !== null) {
    const date = new Date(Date.parse(dateTime));
    let result = "";
    result = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}/${
      date.getUTCMonth() + 1
    }/${date.getFullYear()}`;
    return result;
  } else {
    return "Never";
  }
};
