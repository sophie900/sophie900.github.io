import React from "react";
import { motion } from "framer-motion";
import TextReveal from "../components/TextReveal";
// import GalleryItem from "../components/GalleryItem";

// import function credit to https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
function importAll(r) {
  let images = {};

  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
    return images;
  });

  return images;
}

// import icons
const icons = importAll(
  require.context("../assets/icons", false, /\.(png|jpe?g|svg)$/)
);

// full size
const images = importAll(
  require.context("../assets/images", false, /\.(png|jpe?g|svg)$/)
);

// slide (credit to https://blog.noelcserepy.com/creating-keyframe-animations-with-framer-motion)
const variants = {
  slide: {
    y: [0, 20, 0],
    transition: {
      // total duration
      duration: 3,

      // looping behaviour
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

function HomePage() {
  return (
    <>
      <img src={images["hero_img.png"]} alt="Hero" className="hero-image" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div id="main-content-home">
          <TextReveal />
          <motion.h3
            className="slogan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          ></motion.h3>

          <motion.div
            variants={variants}
            animate="slide"
            className="home-arrow-container"
          >
            <a href="#scroll-content">
              <img
                src={icons["double_downward_arrow.svg"]}
                alt="Downward Arrow"
                className="home-arrow"
              />
            </a>
          </motion.div>
        </div>

        <div id="scroll-content">
          <section className="about-section">
            <h1 className="section-header">about me 🥭</h1>
            <p className="home-text">
              Hi! I'm Sophie Rong, a college student from the U.S. I love web
              development, art, design, math, and piano. Feel free to say hi!
            </p>
          </section>

          <section>
            <h1 className="section-header">art & design 🎨</h1>
            <p className="home-text">Work in progress</p>
          </section>

          <section>
            <h1 className="section-header">contact 📞</h1>
            <p className="home-text">Work in progress</p>
          </section>
        </div>
      </motion.div>
    </>
  );
}

export default HomePage;
