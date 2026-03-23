import { useEffect, useState } from "react";
import { CloudRain, Droplets, Wind, MapPin } from "lucide-react";

export function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      try {
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,cloud_cover`);

        const weatherData = await weatherRes.json();
        setWeather(weatherData.current);

        const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
        const geoData = await geoRes.json();

        const city =
          geoData.address.city ||
          geoData.address.town ||
          geoData.address.village ||
          "Unknown";

        const country = geoData.address.country;

        setLocation(`${city}, ${country}`);
      } catch (error) {
        console.log("Error:", error);
      }
    });
  }, []);

  if (!weather) {
    return <p className="text-sm text-slate-400">Loading weather...</p>;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Outside</p>
          <h3 className="text-base font-semibold text-slate-800">Weather</h3>
        </div>
      </div>
      <div className="w-full rounded-2xl overflow-hidden relative p-6 xl:p-4 min-h-[245px] xl:min-h-[204px] text-white bg-[linear-gradient(135deg,#111827_0%,#0f766e_70%,#0b3d2e_100%)] shadow-[0_14px_30px_rgba(15,23,42,0.24)]">
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full border border-white/15" />
        <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full border border-white/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.22)_0%,rgba(17,24,39,0)_35%)]" />

        <div className="relative z-10 flex flex-col items-center text-center gap-3">
          <div className="flex flex-row gap-1.5 items-center">
            <MapPin className="w-4 h-4 text-white/75" />
            <h2 className="text-sm text-white/75 font-medium">{location || "Loading..."}</h2>
          </div>
          <div className="text-5xl xl:text-[2.25rem] leading-none font-semibold tracking-[-2px] text-white">{Math.round(weather.temperature_2m)}°</div>
          <div className="flex items-center gap-2 text-sm text-white/75 font-medium">
            <span className="h-2 w-2 bg-emerald-300 rounded-full"></span>
            <span>Now</span>
          </div>
          <div className="w-2/3 h-[1px] bg-white/20 my-1" />
          <div className="flex items-center justify-between w-full max-w-[290px] px-4 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
            <div className="flex flex-col items-center gap-1">
              <CloudRain className="h-5 w-5 text-white/85" />
              <span className="text-sm text-white/85">{weather.cloud_cover ?? "--"}%</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Droplets className="h-5 w-5 text-white/85" />
              <span className="text-sm text-white/85">{weather.relative_humidity_2m ?? "--"}%</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Wind className="h-5 w-5 text-white/85" />
              <span className="text-sm text-white/85">{weather.wind_speed_10m} km/h</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}