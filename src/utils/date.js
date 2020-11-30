
export const getMonthName = (date) => {
  const options = { month: 'long'};
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const getDay = (date) => {
  const options = { day: '2-digit'};
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const getTime = (date) => {
  const options = { hour: '2-digit', minute: '2-digit'};
  return new Intl.DateTimeFormat('en-US', options).format(date);   
};

export const calculateTimeLeft = (eventDate) => {
  const difference = +new Date(eventDate) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};