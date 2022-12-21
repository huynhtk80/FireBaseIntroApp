import { RestofApp } from "./components/RestofApp.jsx";
import "./App.css";
import FirebaseProvider from "./providers/FirebaseProvider.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import TestComponent from "./components/TestComponent";
import VideoJS from "./components/VideoJS.jsx";
import videojs from "video.js";
import React from "react";

function App() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: "https://dash.akamaized.net/dash264/TestCasesHD/2b/qualcomm/1/MultiResMPEG2.mpd",
        type: "application/dash+xml",
      },
    ],
  };

  const videoJsOptions2 = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: "http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest(format=m3u8-aapl)",
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <FirebaseProvider>
      <AuthProvider>
        <RestofApp />;
        {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default App;
