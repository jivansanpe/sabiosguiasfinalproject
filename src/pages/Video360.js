import 'aframe';
import './Video360.css';
import { setVideoActive } from '../components/Video360Click.js';
import { useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import { useParams } from 'react-router-dom';
import { infoRoutes } from '../components/infoRoutes';

function Video360() {
  const { route, stop } = useParams();

  useEffect(() => {
    setVideoActive();
  }, []);

  return (
    <div className="my-container">
      {/* <button id="play-button">Play</button> */}

      <a-scene>
        <a-assets>
          <video id="vid" loop={true} src={`/video/Route-${route}/Route-${route}-Stop-${stop}.mp4`} autoPlay={true} > </video>
        </a-assets>

        <a-camera>
            <a-cursor raycaster="objects: .clickable" rayorigin="mouse"></a-cursor>
        </a-camera>

        <a-cursor raycaster="objects: .clickable" rayOrigin="mouse"></a-cursor>

        {
          infoRoutes[route - 1].stops.map((s, index) =>
            <MenuItem key={index} x=".8" y="1.6" pos={index - 1} route={route} stop={index} textToShow={s.name}/>
          )
        }

        <a-videosphere src="#vid"></a-videosphere>
      </a-scene>
    </div>
  );
}

export default Video360;