import HomeLayout from "../components/home_layout";
import Splashscreen from "../components/splashscreen";
import AboutPage from "./about";
import Splash2 from "../components/splash_2";

export default function About() {
  return (
    <>
      {/* <Splashscreen /> */}
      <Splash2 />
      <HomeLayout>
        <AboutPage />
      </HomeLayout>
    </>
  );
}
