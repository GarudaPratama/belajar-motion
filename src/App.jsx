import { motion } from 'motion/react';

function App() {
  return (
    <div className='w-screen h-screen bg-slate-900 flex flex-col items-center justify-center gap-12 overflow-hidden select-none'>
      <motion.button
        whileHover={{ y: -10, scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className='px-3 py-1 rounded-lg flex items-center justify-center text-white font-bold shadow-lg border border-white cursor-pointer'>
        Click me
      </motion.button>
    </div>
  );
}

export default App;
