import { useState } from "react";
import { motion } from 'motion/react';

const items = [
  { title: "Item 1", content: "Ini konten untuk item 1." },
  { title: "Item 2", content: "Ini konten untuk item 2." },
  { title: "Item 3", content: "Ini konten untuk item 3." },
];

function CollapsibleList() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-md mx-auto space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            layout
            key={index}
            className="bg-slate-900 border border-white rounded-xl overflow-hidden shadow-md "
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-5 py-4 text-left font-medium text-white flex justify-between items-center transition-colors cursor-pointer"
            >
              <span>{item.title}</span>
            </button>

            {isOpen && (
              <div
                layout
                className="px-5 pb-4 pt-3 text-slate-200 text-sm border-t border-slate-200"
              >
                {item.content}
              </div>
            )}
          </motion.div>
        );
      })}
    </section>
  );
}

export default CollapsibleList;
