---
description: Weather API
---

# Fetch

## Weather API

```javascript
import React, { useState } from "react";

export const Form = () => {
  const [city, setCity] = useState<string>("");

  const url =
    "https://api.weatherapi.com/v1/current.json?key=8fce98a127594df58f8105440210309&q=London&aqi=no";
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="city"
          placeholder="都市名"
          onChange={e => setCity(e.target.value)}
        />
        <button type="submit" onClick={getWeather}>
          Get Weather
        </button>
      </form>
      <p></p>
    </>
  );
};

```

