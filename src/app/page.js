
import MidleSlider from "@/components/sliderMidle/MidleSlider";
import ChairCollection from "@/components/chairCollection/ChairCollection";
import Tabing from "@/components/tabing/Tabing";
import ShopingNow from "@/components/middleimg/ShopingNow";
import Responsive from "@/components/slickSliderBestProjects/BestProject";
import Custumers from "./custumersSaySlider/Custumers";
import NewsLetter from "./ourNewsLetter/NewsLetter";



export default function Home() {
  return (

    <>
      <MidleSlider />
      <ChairCollection />
      <Tabing />
      <ShopingNow />
      <Responsive />
      <Custumers />
      <NewsLetter />
    </>
  );
}
