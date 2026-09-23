import { motion } from "motion/react";

function LiveBadge() {
  return (
    <motion.div
      animate={{ scale: 1.3 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      className="text-white bg-red-500 rounded-full py-1 px-3 text-sm"
    >
      Live
    </motion.div>
  );
}

export default LiveBadge;

// repeat digunakan untuk mengulang animasi
// repeatType digunakan untuk mengatur tipe repeat seperti reverse, yaitu mengulang dari belakang
// repeatDelay digunakan untuk mengatur delay pada repeat
