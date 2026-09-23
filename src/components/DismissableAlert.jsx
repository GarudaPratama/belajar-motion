import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function DismissableAlert() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="px-3 py-1 rounded-lg bg-white max-w-max text-black cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        Toggle Alert
      </button>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            duration={{ duration: 0.25 }}
            exit={{ opacity: 0, y: 10 }}
            className="px-3 py-1 bg-red-500 text-white mt-1 rounded-lg"
          >
            Ini adalah Animalert
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DismissableAlert;
