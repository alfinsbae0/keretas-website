import Footer from "./footer";
import Navbar from "./navbar";

export default function HomeLayout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
