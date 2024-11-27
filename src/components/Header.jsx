import { motion } from "framer-motion";
export default function Header() {
  return (
    <header className='h-20 flex fixed top-0 w-full  items-center bg-black text-white'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='responsiveWidth'
      >
        <h1 className='text-xl font-bold'>PROOH.AI</h1>
      </motion.div>
    </header>
  );
}
