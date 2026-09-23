import React from 'react'
import DismissableAlert from './components/DismissableAlert';
import StepSwitcher from './components/StepSwitcher';
import CollapsibleList from './components/CollapsibleList';
import LiveBadge from './components/LiveBadge';

function App() {
  return (
    <div className="w-screen h-screen bg-slate-900 flex items-center justify-center gap-12">

      <LiveBadge />
      
      {/* <DismissableAlert /> */}

      {/* <StepSwitcher /> */}

      {/* <CollapsibleList /> */}

    </div>
  )
}

export default App;

// drag digunakan untuk mengatur drag (kalau mau pakai drag harus tulis drag)
// dragConstraints digunakan untuk mengatur batas drag
// dragElastic digunakan untuk mengatur elastic drag maksudnya jika kita drag ke luar batas maka akan kembali ke batas
// whileHover digunakan untuk mengatur animasi saat hover
// whileTap digunakan untuk mengatur animasi saat tap
// transition digunakan untuk mengatur animasi


