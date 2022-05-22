import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Hub from "./pages/Video360";
import AllRoutes from "./pages/AllRoutes";
import RouteDetail from "./pages/RouteDetail";
import Main from "./pages/Main";


import ShowRSSFile from "./components/ShowRSSFile";
import RoutesVR from "./components/RoutesVR";

function App() {
  // const location = useLocation();

  // const [displayLocation, setDisplayLocation] = useState(location);
  // const [transitionStage, setTransistionStage] = useState("fadeIn");

  // useEffect(() => {
  //   if (location !== displayLocation) setTransistionStage("fadeOut");
  // }, [location, displayLocation]);

  return (
    <>
      <Router>
        {/* <div
          className={`${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              setTransistionStage("fadeIn");
              setDisplayLocation(location);
            }
          }}
        > */}
          {/* <Routes location={displayLocation}> */}
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/rss-file" element={<ShowRSSFile />} />
            <Route path="/route-detail/:id" element={<RouteDetail />} />
            <Route path="/all-routes" element={<AllRoutes />} />
            <Route path="/video-360/hub" element={<Hub />} />
            <Route path="/video-360/:route/:stop" element={<RoutesVR />} />
            <Route path="/" element={<AllRoutes />} />
          </Routes>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
