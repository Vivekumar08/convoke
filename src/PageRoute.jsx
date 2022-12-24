import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Timeline from "./Pages/Timeline";
import { AnimatePresence } from "framer-motion";

const PageRoute = () => {
  const location = useLocation(0);
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<Home />} path="/" exact />
        <Route element={<Timeline />} path="/timeline" exact />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </AnimatePresence>
  );
};

export default PageRoute;
