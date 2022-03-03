import Footer from "../Footer";
import CreativityNavbar from "../CreativityPage/CreativityNavbar";

const CreativityLayout = ({ children }) => {
  return (
    <div>
      <CreativityNavbar/>
      {children}
      <Footer />
    </div>
  );
};

export default CreativityLayout;
