import { useEffect, useState } from 'react';
import "./HeaderSlideDown.scss";
import variables from "./HeaderSlideDown.scss";

export default function HeaderSlideDown() {
  const [collapsedMenu, setCollapsedMenu] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const clientWidth = document.documentElement.clientWidth;
      if (clientWidth >= 576) { //above xm screens only
        const scrollY = window.scrollY;
        const headerMaxHeight = variables.headerMaxHeight * 16;
        const newHeaderHeight = scrollY < headerMaxHeight / 2 ? Math.round(headerMaxHeight - scrollY) : headerMaxHeight / 2;
        document.documentElement.style.setProperty("--header-height", `${newHeaderHeight}px`);
        return;
      }
    });

    document.addEventListener("resize", () => {
      setCollapsedMenu(false);
    })
  }, []);

  const handleCollapsedMenu = () => {
    setCollapsedMenu(!collapsedMenu);
  }

  return (
    <>
      <header className="header-container">
        <div className="header-logos">
          <div className="header-logos-start">
            <img src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal" />
            <img src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" />
            <img src="/img/LogoSabiosGuias-Inverso.png" alt="Sabios Guías Intérpretes" />
          </div>
          <div className="header-logos-end">
            <img src="/img/menu.png" alt="menu" onClick={handleCollapsedMenu} />
          </div>
        </div>
        <ul className={`header-menu ${collapsedMenu ? "header-collapsed-menu" : "header-not-collapsed-menu"}`} >
          <li><a href="/">INICIO</a></li>
          <li><a href="/all-routes">RUTAS</a></li>
        </ul>
      </header>
    </>
  );
}