import { useNavigate, useParams } from "react-router-dom";
import StopMap from "../components/StopMap";
import { infoRoutes } from "../components/infoRoutes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./RouteDetail.css";

export default function RouteDetail() {
  let { id } = useParams();

  const navigate = useNavigate();

  const showRoute = (r) => {
    return (
      <div className="route-detail-container">
        <div className="route-detail-id" style={{ backgroundColor: r.color }}>{r.id}</div>
        <div className="route-detail-name-and-description">
          <div className="route-detail-name">{r.name}</div>
          <div className="route-detail-description">{r.description}</div>
          {
            infoRoutes[id].stops.map(showStop)
          }
        </div>
      </div>
    );
  }

  const showVideo360 = (route, stop) => {
    navigate(`/video-360/${route}/${stop}`);
  }

  const showStop = (stop, index) => {
    const { video } = stop;
    return (
      <>
        {
          video !== "" ?
            <div key={index} className="route-detail-stops route-detail-stops-with-data" onClick={() => showVideo360(parseInt(id) + 1, index + 1)}>
              <span>Parada {stop.idStop}:</span> {stop.name}. <span className="route-detail-more">más...</span>
            </div>
            :
            <div key={index} className="route-detail-stops">
              <span>Parada {stop.idStop}:</span> {stop.name}.
            </div>
        }
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="route-detail-outer-container">
        {
          showRoute(infoRoutes[id])
        }
        <div className="route-detail-stop-map">
          <StopMap location={infoRoutes[id].stops[0].location} />
        </div>
      </div>
      <Footer />
    </>
  );
}