import HomeLayout from "../layouts/home_layout";
import Splashscreen from "../components/splashscreen";
import Splash2 from "../components/splash_2";
import ArticlesPage from "./articles";

export default function Articles() {
  return (
    <>
      {/* <Splashscreen /> */}
      <Splash2 />
      <HomeLayout>
        <ArticlesPage />
      </HomeLayout>
    </>
  );
}
