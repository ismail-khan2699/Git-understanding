import BestSpoke from "./Components/5BestSpoke";
import ChoseUs from "./Components/4ChoseUs";
import Clients from "./Components/9Clients";
import IntegratedPart from "./Components/3Integrated";
import LatestIns from "./Components/8LatestIns";
import LatestInsights from "./Components/10LatestInsights";
import OurWrok from "./Components/7OurWrok";
import ServiceOv from "./Components/6ServiceOv";
import WelCome from "./Components/2WelCome";
import IntroSection from "./Components/1intro";
import './page.css';
import TalkForm from "./Components/11TalkForm";
import FooterContact from "./Components/12Footer";

export default function Home() {
  return (
    <div>
    <IntroSection/>

      <div id='welcome'>
      <WelCome/>
      </div>
      <div id='integrated'>
        <IntegratedPart/>
      </div>
      <div id='chooseUs'>
        <ChoseUs/>
      </div>
      <div id='BestSpoke'>
        <BestSpoke/>
      </div>
      <div id='serviceOverview'>
        <ServiceOv/>
      </div>
      <div id='ourWork'>
        <OurWrok/>
      </div>
      <div id='OurProjects'>
        <LatestIns/>
      </div>
      <div id="clients">
        <Clients/>
      </div>
      <div id='latestInsights' className=" h-auto block " >
        <LatestInsights/>
      </div>
      <div id='talk'>
        <TalkForm/>
      </div>
      <div id='footer'>
        <FooterContact/>
      </div>
    </div>
  )
}
