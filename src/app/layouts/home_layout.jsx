import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function HomeLayout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
