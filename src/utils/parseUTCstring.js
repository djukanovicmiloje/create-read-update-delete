const UTCtoDateObj = UTCstring => {
  const date = UTCstring.split("T")[0].split("-");
  const time = UTCstring.split("T")[1].split(":");

  return {
    year: date[0],
    month: date[1],
    day: date[2],
    hour: time[0],
    minute: time[1]
  };
};

export default UTCtoDateObj;
