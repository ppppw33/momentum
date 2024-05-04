const API_KEY = "a483744df1a05ecd9bd9e359bdd14e83";

// 위치 권한 상태를 확인하고 요청하는 함수
function checkAndRequestPermission() {
  navigator.permissions.query({ name: "geolocation" }).then(function (result) {
    if (result.state === "granted") {
      // 권한이 이미 부여된 경우
      navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    } else if (result.state === "prompt") {
      // 권한을 요청할 수 있는 경우
      navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    } else if (result.state === "denied") {
      // 권한이 거부된 경우
      alert("위치 정보 권한이 거부되었습니다. 날씨 정보를 제공받으려면 권한을 허용해주세요.");
    }
  });
}

function onGeoOk(position) {
  const lastUpdate = localStorage.getItem("lastUpdate");
  const currentDate = new Date();
  const currentDay = `${currentDate.getFullYear()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}`;
  // 마지막 업데이트 시간이 저장되어 있지 않거나, 24시간이 지났다면 날씨 정보 업데이트
  if (lastUpdate !== currentDay) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C / `;

        // 날씨 정보와 마지막 업데이트 시간을 로컬 스토리지에 저장하기
        localStorage.setItem("weatherData", JSON.stringify(data));
        localStorage.setItem("lastUpdate", currentDay);
      });
  } else {
    // 24시간이 지나지 않았다면 로컬 스토리지에서 날씨 정보 불러오기
    const savedWeatherData = JSON.parse(localStorage.getItem("weatherData"));
    if (savedWeatherData) {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = savedWeatherData.name;
      weather.innerText = `${savedWeatherData.weather[0].main} / ${savedWeatherData.main.temp}°C / `;
    }
  }
}

function onGeoError() {
  alert("위치 정보를 가져올 수 없습니다.");
}

// 페이지 로드 시 로컬 스토리지에서 날씨 데이터 불러오기
document.addEventListener("DOMContentLoaded", () => {
  const savedWeatherData = JSON.parse(localStorage.getItem("weatherData"));
  if (!savedWeatherData) {
    // 날씨 정보가 없을 때 위치 권한 확인 및 요청..
    checkAndRequestPermission();
  } else {
    // 날씨 정보가 있을 때 화면에 표시
    const weatherContainer = document.querySelector("#weather");
    if (weatherContainer) {
      const weather = weatherContainer.querySelector("span:first-child");
      const city = weatherContainer.querySelector("span:last-child");
      city.innerText = savedWeatherData.name;
      weather.innerText = `${savedWeatherData.weather[0].main} / ${savedWeatherData.main.temp}°C /`;
    }
  }
});
