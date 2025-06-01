import Homepage from "./home/homepage";
import HomeLayout from "./components/home_layout";
import Splashscreen from "./components/splashscreen";

export default function Home() {
  return (
    <>
      <Splashscreen />
      <HomeLayout>
        <Homepage />
      </HomeLayout>
    </>
  );
}
