import { Headphones } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Header */}
      <header className='px-6 h-20 flex items-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-xl font-bold'>PROOH.AI</h1>
        </motion.div>
      </header>

      <div className='flex justify-center items-center flex-col h-full'>
        {/* Notification Banner */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='flex justify-center'
        >
          <div className='bg-zinc-800/50 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2'>
            <span className='text-amber-500'>🎉</span>
            <span className='text-sm'>Prooh Automations is now live!</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <main className='max-w-6xl font-bricolage mx-auto px-4 text-center'>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className='text-5xl md:text-7xl font-bold leading-[60px] md:leading-[89px] tracking-[-2px]'
          >
            Smarter, Digital
            <br />
            Outdoor Advertising.
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='mt-6 text-zinc-400 max-w-2xl mx-auto text-lg'
          >
            Harness the power of data-driven campaigns to create meaningful
            connections with your audience, leaving a lasting impression that
            drives results
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className='mt-10 flex items-center justify-center gap-4'
          >
            <button className='bg-white text-black px-6 py-2 border-none rounded-md hover:bg-zinc-200'>
              Plan Campaign
            </button>
            <button className='border-zinc-700'>
              <Headphones className='h-5 w-5' />
            </button>
          </motion.div>
        </main>

        {/* Brand Logos */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className='max-w-6xl mx-auto px-4 mt-32'
        >
          <div className='grid grid-cols-4 md:grid-cols-8 gap-8 items-center opacity-50'>
            {[
              "/coca-cola-logo.svg",
              "/slack-logo.svg",
              "/walmart-logo.svg",
              "/plain-logo.svg",
              "/samsung-logo.svg",
              "/openai-logo.svg",
              "/asus-logo.svg",
              "/pallet-logo.svg",
            ].map((logo, index) => (
              <div key={index} className='h-8'>
                <img
                  src={logo}
                  alt='Brand Logo'
                  className='h-full w-full object-contain invert'
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
