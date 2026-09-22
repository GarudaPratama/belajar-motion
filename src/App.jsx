import { motion } from "motion/react";

function App() {
  const students = [
    { id: 1, name: "Avrijal", kelas: "XII RPL 1" },
    { id: 2, name: "Acho", kelas: "XII RPL 1" },
    { id: 3, name: "Tsani", kelas: "XII RPL 1" },
    { id: 4, name: "Al-Thafa", kelas: "XII RPL 1" },
    { id: 5, name: "Anhar", kelas: "XII RPL 1" },
    { id: 6, name: "Jaris", kelas: "XII RPL 1" },
    { id: 7, name: "Faqih", kelas: "XII RPL 1" },
    { id: 8, name: "Rafif", kelas: "XII RPL 1" },
    { id: 9, name: "Mustafid", kelas: "XII RPL 1" },
    { id: 10, name: "Fathi", kelas: "XII RPL 1" },
    { id: 11, name: "Salafy", kelas: "XII RPL 1" },
    { id: 12, name: "Baraka", kelas: "XII RPL 1" },
    { id: 13, name: "Aldi", kelas: "XII RPL 1" },
  ];

  return (
    <div className="w-screen bg-slate-900 flex flex-col items-center justify-center overflow-hidden select-none">
      <h1 className="text-4xl text-white font-bold flex items-center mt-100 mb-100">
        Scroll Kebawah BREEE
      </h1>
      <div className="w-1/2 flex flex-col items-start gap-4 mb-30">
        {students.map((student) => {
          return (
            <motion.div
              key={student.id}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.7, once: true }}
              transition={{ type: "spring", duration: 0.3 }}
              /* 💡 TAMBAHKAN flex-col DAN items-start DI SINI */
              className="w-full px-8 py-10 rounded-md flex flex-col items-start justify-center text-white border border-white cursor-pointer"
            >
              {/* Teks Nama Utama */}
              <span className="text-2xl font-bold">{student.name}</span>

              {/* Teks Kecil Subtitle di Bawahnya */}
              <span className="text-xs font-normal text-gray-100 mt-1">
                {student.kelas}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

// drag digunakan untuk mengatur drag (kalau mau pakai drag harus tulis drag)
// dragConstraints digunakan untuk mengatur batas drag
// dragElastic digunakan untuk mengatur elastic drag maksudnya jika kita drag ke luar batas maka akan kembali ke batas
// whileHover digunakan untuk mengatur animasi saat hover
// whileTap digunakan untuk mengatur animasi saat tap
// transition digunakan untuk mengatur animasi
