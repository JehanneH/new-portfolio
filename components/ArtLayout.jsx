import Footer from "./Footer";
import Navbar from "./Navbar";

const ArtLayout = ({ children }) => {
  return (
    <div>

      <h1>art projects go here</h1>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
      <h1>art projects go here</h1>
    </div>
  );
};

export default ArtLayout;
