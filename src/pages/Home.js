import FooterHome from "../components/FooterHome";
import HeaderHome from "../components/HeaderHome";
import Grid from "../components/FullWithGrid";
import ReactSimplyCarouselExample from "../components/Carousel";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <div class="fluid">
        <img src="/img/banner.jpg" width="100%" />
        <Grid />
        <ReactSimplyCarouselExample />
      </div>

      <FooterHome />
    </>
  );
}