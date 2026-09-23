import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function StepSwitcher() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="px-3 py-1 rounded-lg bg-white max-w-max text-black cursor-pointer"
        onClick={() => setStep((prevState) => (prevState === 1 ? 2 : 1))}
      >
        Toggle Alert
      </button>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            exit={{ opacity: 0, y: 10 }}
            className="px-3 py-1 bg-red-500 text-white mt-1 rounded-lg"
          >
            Ini adalah Animalert 1
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            exit={{ opacity: 0, y: 10 }}
            className="px-3 py-1 bg-red-500 text-white mt-1 rounded-lg"
          >
            Ini adalah Animalert 2
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default StepSwitcher;
