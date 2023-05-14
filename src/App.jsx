import styles from "./style"
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hackathons from "./pages/Hackathons";
import Event from "./pages/Event"
import Resources from "./pages/Resources";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Community from "./pages/Community";

const Layout = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Outlet />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Event />,
      },
      {
        path: "/hackathons",
        element: <Hackathons />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/resources",
        element: <Resources />,
      }
    ],
  },
]);


const App = () => (
  <div>
    <RouterProvider router={router} />
  </div>
);

export default App;
