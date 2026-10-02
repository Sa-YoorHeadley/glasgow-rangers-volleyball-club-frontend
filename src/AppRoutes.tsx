import { Routes, Route, useLocation } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const Players = lazy(() => import("./pages/Players"));
const Teams = lazy(() => import("./pages/Teams"));
const Team = lazy(() => import("./pages/Team"));
const Training = lazy(() => import("./pages/Training"));
const News = lazy(() => import("./pages/News"));
const Events = lazy(() => import("./pages/Events"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Registration = lazy(() => import("./pages/Registration"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Maintenance = lazy(() => import("./pages/Maintenance"));
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import { ROUTES } from "./config/ROUTES";

// Layout component wraps all pages with shared UI (Banner, Navbar, Footer)
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path={ROUTES.HOME}
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path={ROUTES.ABOUT}
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path={ROUTES.SPONSORS}
          element={
            <Layout>
              <Sponsors />
            </Layout>
          }
        />

        <Route
          path={ROUTES.PLAYERS}
          element={
            <Layout>
              <Players />
            </Layout>
          }
        />

        <Route
          path={ROUTES.TRAINING}
          element={
            <Layout>
              <Training />
            </Layout>
          }
        />

        <Route
          path={ROUTES.GALLERY}
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path={ROUTES.NEWS}
          element={
            <Layout>
              <News />
            </Layout>
          }
        />
        <Route
          path={ROUTES.EVENTS}
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />
        <Route
          path={ROUTES.TEAMS}
          element={
            <Layout>
              <Teams />
            </Layout>
          }
        />

        <Route
          path="/teams/:slug"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />

        <Route
          path={ROUTES.REGISTRATION}
          element={
            <Layout>
              <Registration />
            </Layout>
          }
        />
        <Route
          path={ROUTES.CONTACT}
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        {/* Maintenance and NotFound routes */}
        <Route path={ROUTES.MAINTENANCE} element={<Maintenance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
