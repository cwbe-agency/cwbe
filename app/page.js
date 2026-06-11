'use client'

import { useState, useEffect, createElement } from 'react'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";


// Hope Page Components
import TrustBar from "@/components/home/TrustBar";
import PainPoints from "@/components/home/PainPoints";
import SolutionPillars from "@/components/home/SolutionPillars";
import WhyChoose from "@/components/home/WhyChoose";
import Industries from "@/components/home/Industries";
import Projects from "@/components/home/Projects";
import Process from "@/components/home/Process";
import TrustSignals from "@/components/home/TrustSignals";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import Founder from "@/components/home/Founder";
import PrototypeForm from "@/components/home/PrototypeForm";
import FinalCTA from "@/components/home/FinalCTA";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import ContactMini from "@/components/home/ContactMini";

// Shim: render plain DOM elements, strip framer-motion animation props.
// (framer-motion's animate is not engaging in this environment, so we bypass it
// for static reveal content. Real fmMotion is used for AnimatePresence popups.)
const ANIM_PROPS = new Set(['initial','animate','whileInView','whileHover','whileTap','whileFocus','whileDrag','variants','viewport','transition','custom','exit','layout','layoutId','drag','dragConstraints','onAnimationStart','onAnimationComplete'])
const stripAnim = (props) => {
  const out = {}
  for (const k in props) if (!ANIM_PROPS.has(k)) out[k] = props[k]
  return out
}
const motion = new Proxy({}, {
  get(_, tag) {
    const C = (props) => createElement(tag, stripAnim(props))
    C.displayName = `m.${String(tag)}`
    return C
  },
})

/* ==================== APP ==================== */
function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <SolutionPillars />
        <WhyChoose />
        <Industries />
        <Projects />
        <Process />
        <TrustSignals />
        <Pricing />
        <FAQ />
        <Founder />
        <PrototypeForm />
        <ContactMini />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
