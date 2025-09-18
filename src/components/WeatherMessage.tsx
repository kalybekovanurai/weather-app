type Temperature = {
  temp: number | null;
};

const WeatherMessage = ({ temp }: Temperature) => {
  if (temp === null) {
    return <></>;
  }

  let message = "";
  let style = "";

  if (temp < 0) {
    message = "Холодно ❄️";
    style = "bg-blue-950 text-white font-semibold"; 
  } else if (temp >= 0 && temp <= 25) {
    message = "Нормально 🌤";
    style = "bg-green-700 text-white font-semibold";
  } else {
    message = "Жарко ☀️";
    style = "bg-orange-500 text-white font-semibold";
  }

  return (
    <p className={`${style} font-bold text-lg rounded-xl p-4 text-center`}>
      {message}
    </p>
  );
};

export default WeatherMessage;
