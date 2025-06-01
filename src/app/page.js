import Homepage from "./home/homepage";
import HomeLayout from "./components/home_layout";
import Splashscreen from "./components/splashscreen";
import Splash2 from "./components/splash_2";

export default function Home() {
  return (
    <>
      {/* <Splashscreen /> */}
      <Splash2 />
      <HomeLayout>
        <Homepage />
      </HomeLayout>
    </>
  );
}
