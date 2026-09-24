import { cloneElement } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useOutlet, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

function AppLayout() {
  const outlet = useOutlet();
  const location = useLocation();

  return (
    <div>
      <Navbar />

      <main className="flex justify-center mt-50">
        <AnimatePresence mode="wait">
          {outlet && cloneElement(outlet, { key: location.key })}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default AppLayout;
