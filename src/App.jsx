import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import styles from "./style";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hackathons from "./pages/Hackathons";
import Event from "./pages/Event";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Blogs from "./pages/Blogs";

const Layout = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className="flex-grow">
        <Outlet />
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};



const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
