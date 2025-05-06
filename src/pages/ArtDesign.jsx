import React from "react";
import { motion } from "framer-motion";
import GalleryItem from "../components/GalleryItem";

// import function credit to https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
function importAll(r) {
  let images = {};

  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
    return images;
  });

  return images;
}

// art
// compressed
// const artComp = importAll(
//   require.context(
//     "../assets/images/art/compressed",
//     false,
//     /\.(png|jpe?g|svg)$/
//   )
// );

// full size
const artFull = importAll(
  require.context("../assets/images/art", false, /\.(png|jpe?g|svg)$/)
);

function ArtDesign() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="main-content">
        <h1 className="page-header">Art & Design</h1>
        <br></br>

        <div className="grid-items">
          <GalleryItem
            href={artFull["13 Modular Typeface.png"]}
            src={artFull["13 Modular Typeface.png"]}
            title={"Modular Typeface"}
          />

          <GalleryItem
            href={artFull["True_2_You.png"]}
            src={artFull["True_2_You.png"]}
            title={"True 2 You"}
          />

          <GalleryItem
            href={artFull["11 Tea Time.png"]}
            src={artFull["11 Tea Time.png"]}
            title={"Tea Time"}
          />

          <GalleryItem
            href={artFull["October_1.png"]}
            src={artFull["October_1.png"]}
            title={"October Illustration"}
          />

          <GalleryItem
            href={artFull["Sea_Turtle_Poster.png"]}
            src={artFull["Sea_Turtle_Poster.png"]}
            title={"Sea Turtle Poster"}
          />

          <GalleryItem
            href={artFull["15 Sonder.png"]}
            src={artFull["15 Sonder.png"]}
            title={"Sonder"}
          />

          <GalleryItem
            href={artFull["01 Rhythm.png"]}
            src={artFull["01 Rhythm.png"]}
            title={"Rhythm"}
          />

          <GalleryItem
            href={artFull["02 Concealed Memories.png"]}
            src={artFull["02 Concealed Memories.png"]}
            title={"Concealed Memories"}
          />

          <GalleryItem
            href={artFull["03 Decomposition.jpg"]}
            src={artFull["03 Decomposition.jpg"]}
            title={"Decomposition"}
          />

          <GalleryItem
            href={artFull["04 Fragments of Us.jpg"]}
            src={artFull["04 Fragments of Us.jpg"]}
            title={"Fragments of Us"}
          />

          <GalleryItem
            href={artFull["05 An Inch of Gold for an Inch of Time.jpg"]}
            src={artFull["05 An Inch of Gold for an Inch of Time.jpg"]}
            title={"An Inch of Gold for an Inch of Time"}
          />

          <GalleryItem
            href={artFull["06 Entropy.jpg"]}
            src={artFull["06 Entropy.jpg"]}
            title={"Entropy"}
          />

          <GalleryItem
            href={artFull["12 Dada Kit.png"]}
            src={artFull["12 Dada Kit.png"]}
            title={"Dada Kit"}
          />

          <GalleryItem
            href={artFull["14 In the Shadows.png"]}
            src={artFull["14 In the Shadows.png"]}
            title={"In the Shadows"}
          />

          <GalleryItem
            href={artFull["10 Systems.jpg"]}
            src={artFull["10 Systems.jpg"]}
            title={"Systems"}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ArtDesign;
