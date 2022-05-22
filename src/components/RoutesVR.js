import 'aframe';
import './RoutesVR.css';
import { setVideoActive } from './Video360Click.js';
import { useEffect } from 'react';
import MenuItem from './MenuItem';
import { useParams, useNavigate } from 'react-router-dom';
import { infoRoutes } from './infoRoutes';
import { Entity, Scene } from 'aframe-react';
import React from "react";

function RoutesVR() {
  const { route, stop } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    setVideoActive();
  }, []);

  const handleClickH = () => {
    navigate("/video-360/hub");
    console.log("Clicked");
  };

  return (
    <div className="my-container">
      <Scene >
        <a-assets>
          <video id="vid" loop={true} src={`/video/Route-${route}/Route-${route}-Stop-${stop}.mp4`} autoPlay={true} > </video>
        </a-assets>

        {/* <a-camera>
          <a-cursor fuse="true" fuse-timeout="2000" raycaster="objects: .clickable" rayorigin="mouse"></a-cursor>
        </a-camera> */}

        <a-camera>
          <a-cursor material="color:#008000"></a-cursor>
        </a-camera>

        <a-entity camera="" position="0 1.6 0" look-controls="" >
          <a-entity cursor="fuse:true;fuseTimeout:2000" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.02" position="0 0 -1.8" material="shader:flat;color:#008000" animation__mouseenter="from:1 1 1;dir:reverse;dur:2000;property:scale;startEvents:mouseenter;to:4 4 4"
            raycaster="objects: .clickable">
          </a-entity>
        </a-entity>

        <Entity
          geometry={{ primitive: "plane", width: "1.5", height: "0.25" }}
          material={{ color: "red" }}
          position={{ x: 1.2, y: 2.25, z: -3 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          text={{ value: "Hub", align: "center", color: "white", width: "5" }}
          events={{
            click: () => handleClickH(),
          }}
        />

        {
          infoRoutes[route - 1].stops.map((s, index) =>
            <MenuItem key={index} x=".8" y="1.6" pos={index - 1} route={route} stop={index} textToShow={s.name} available={s.video !== ""} />
          )
        }

        <a-videosphere src="#vid"></a-videosphere>
      </Scene>
    </div>
  );
}

export default RoutesVR;