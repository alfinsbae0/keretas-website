import HomeLayout from "../components/home_layout";
import Splashscreen from "../components/splashscreen";
import AboutPage from "./about";

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
