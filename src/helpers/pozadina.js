export function setBackgroundImage(main, setBGGif) {
    switch (main) {
      case "Snow":
        setBGGif("url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')");
        break;
      case "Clouds":
        setBGGif("url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')");
        break;
      case "Fog":
        setBGGif("url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')");
        break;
      case "Rain":
        setBGGif("url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')");
        break;
      case "Clear":
        setBGGif("url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')");
        break;
      case "Thunderstorm":
        setBGGif("url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')");
        break;
      default:
        setBGGif("url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')");
        break;
    }
  }