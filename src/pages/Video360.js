
import { useNavigate } from "react-router-dom";
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import React from "react";


export default function Hub() {
  const navigate = useNavigate();

  const handleClickR2 = () => {
    navigate("/video-360/2/1");
    console.log("Clicked");
  };

  const handleClickR7 = () => {
    navigate("/video-360/7/1");
    console.log("Clicked");
  };

  return (
    <div>
      <Scene >
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>

        <a-assets>
        <img id="hub" src="/img/hub.jpg" alt="hub" />
        </a-assets>
      <a-videosphere src="#hub"></a-videosphere> 

      <a-text value="Nuestras rutas" color="black" align="center" position="0, 2.15, -3" font="sourcecodepro"></a-text>
        <Entity
          geometry={{ primitive: "plane", width: "1.5", height: "0.25" }}
          material={{ color: "gray" }}
          position={{ x: 0, y: 1.79, z: -3 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          text={{ value: "Ruta 2", align: "center", color: "black", width: "5" }}
          events={{
            click: () => handleClickR2(),
          }}
        />
        <Entity
          geometry={{ primitive: "plane", width: "1.5", height: "0.25" }}
          material={{ color: "gray" }}
          position={{ x: 0, y: 1.53, z: -3 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          text={{ value: "Ruta 7", align: "center", color: "black", width: "5" }}
          events={{
            click: () => handleClickR7(),
          }}
        />
      </Scene>
    </div>
  );
}

// onClick={handleClick}

{/* <a-scene>
<a-assets>
  <img id="Routes-hub" src="assets/img/Las_salinas/Las_salinas_home.jpg" alt="Routes-hub" />
  <img id="Route-2" src="assets/img/Muelle_Arinaga/Muelle_Arinaga_home.jpg" alt="Route-2" />
  <img id="Route-7" src="assets/img/Hornos_de_la_Cal/Hornos_de_la_Cal_home.jpg"
    alt="Route-7" />
  <audio id="Muelle-Eva" src="assets/ogg/El_Muelle_de_Arinaga.ogg" preload="auto"></audio>
  <audio id="Hornos-Eva" src="assets/ogg/Hornos_de_la_Cal.ogg" preload="auto"></audio>
  <audio id="Salinas-Eva" src="assets/ogg/Las_Salinas_de_Arinaga.ogg" preload="auto"></audio>
</a-assets>

<a-camera position="0 3 0">
  <a-cursor raycaster="objects: .clickable"></a-cursor>
  <script>src = "assets/js/change_site.js"</script>
</a-camera>

<a-text value="Nuestras rutas" color="black" align="center" position="0, 3, -2" font="sourcecodepro"></a-text>
<a-entity>
  <a-entity>
    <a-box position="-1.7 2.05 -3" scale="0.15 0.15 0.15" rotation="45 45 45" color="red" visible="true"
      animation__position="property: rotation; to: 360 0 0; dir: alternate; dur: 4000; loop: true">
    </a-box>
    <a-plane color="white" position="0 2.05 -3" width="3" height="0.25" class="clickable"
      change-site="img: #Routes-hub" sound="on: mouseenter; src: #Hornos-Eva">
      <a-text value="Hub" color="gray" align="center"></a-text>
    </a-plane>
  </a-entity>

  <a-entity>
    <a-box position="-1.7 1.52 -3" scale="0.15 0.15 0.15" rotation="45 45 45" color="red" visible="false"
      animation__position="property: rotation; to: 360 0 0; dir: alternate; dur: 4000; loop: true">
    </a-box>
    <a-plane
      color="white" position="0 1.53 -3" width="3" height="0.25"
      sound="on: mouseenter; src: #Hornos-Eva" >
      <Entity events={{
        click: handleClick,
        collided: handleCollide
      }} />
      <a-text value="Ruta 7" color="gray" align="center" />
    </a-plane>
  </a-entity>

  <a-entity>
    <a-box position="-1.7 1.8 -3" scale="0.15 0.15 0.15" rotation="45 45 45" color="red" visible="false"
      animation__position="property: rotation; to: 360 0 0; dir: alternate; dur: 4000; loop: true">
    </a-box>
    <a-plane color="white" position="0 1.79 -3" width="3" height="0.25" class="clickable"
      change-site="img: #Route-2" sound="on: mouseenter; src: #Muelle-Eva">
      <a-text value="Ruta 2" color="gray" align="center"></a-text>
    </a-plane>
  </a-entity>
</a-entity>

<a-videosphere id="my-sky" src="#Routes-hub"></a-videosphere>
</a-scene> */}