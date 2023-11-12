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
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    const stick = document.querySelector('.stick');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        stick.style.position = 'fixed';
        stick.style.top = '0';
        stick.style.zIndex = '100';
        
        stick.style.display = 'flex';
        stick.style.justifyContent = 'space-between';
        stick.style.height = '80px';
        stick.style.padding = '0 0 20px 20px'
      } else if(window.scrollY <= 15) {
        stick.style.height = '80px';
        stick.style.padding = '0 0 20px 20px'
      } else {
        stick.style.position = '';
        stick.style.top = '';
        stick.style.zIndex = '';
      }
    });
  }, [window.scrollY]);

  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth} stick`}>
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
