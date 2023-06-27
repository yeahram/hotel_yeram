import { motion, MotionStyle } from "framer-motion";

const Main = () => {
  return (
    <>
      <p className="bg-slate-500 text-slate-50">Main</p>
      {/* <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotateZ: 360 }}>
        <p>framer motion</p>
      </motion.div> */}
      <header>
        <ul className="flex flex-auto">
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
          <li>menu4</li>
          <li>menu5</li>
        </ul>
      </header>
      <section>
        <article></article>
        <article></article>
        <article></article>
      </section>
      <footer></footer>
    </>
  );
};
export default Main;
