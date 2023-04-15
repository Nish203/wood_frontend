import React from "react";
import img from "../images/back11.jpg";
import img1 from "../images/Oak_wood.jpg";
import img2 from "../images/teak.jpg";
import img3 from "../images/sheesham.jpg";
import img4 from "../images/natural_wood.jpg";
import {
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber3Filled,
  TbSquareRoundedNumber2Filled,
} from "react-icons/tb";
function Sofa_help() {
  return (
    <div className=" ">
      <img src={img} className=""></img>
      <h2 class=" text-center font-bold text-3xl py-2 mt-5 text-black">
        How to Measure for Your Sofa?{" "}
      </h2>
      <p className="text-center text-black text-base ">
        {" "}
        This sofa buying guide will also tell you about how to measure for your
        sofa. Have a look:{" "}
      </p>
      <div className="container sm:grid grid-cols-3 pb-16 mt-10 px-32 gap-5 ">
        <div class="block max-w- p-6 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            {" "}
            <TbSquareRoundedNumber1Filled className="ml-36 mb-3" size={50} />
          </div>
          <p class="font-normal text-black dark:text-gray-400 text-center">
            To measure for your sofa, examine the entire space of where the sofa
            will go.
          </p>
        </div>

        <div class="block max-w- p-6 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            {" "}
            <TbSquareRoundedNumber2Filled className="ml-36 mb-3" size={50} />
          </div>
          <p class="font-normal text-black dark:text-gray-400 text-center">
            Measure the maximum height and width of the particular space where
            the sofa will go. This will give you an idea of the biggest sofa you
            can fit.
          </p>
        </div>

        <div class="block max-w- p-6 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            {" "}
            <TbSquareRoundedNumber3Filled className="ml-36 mb-3" size={50} />
          </div>
          <p class="font-normal text-black dark:text-gray-400 text-center">
          Check out the other furniture pieces in that room where the sofa
            will go. You'll get an idea of how it'll look with your other
            furniture and highlight the problems, if having any.
          </p>
        </div>

       
      </div>

      {/* Matrial */}
      <h2 class=" text-center font-bold text-3xl py-3 mt-5 text-black">
        {" "}
        Here some wood material information.{" "}
      </h2>
      <p className="text-center text-black text-base ">
        {" "}
        Material put life into the sofa set. and for that, we offer you some
        material options that would complete the desired look of your furniture.{" "}
      </p>

      <div className="container sm:grid grid-cols-4 pb-16 mt-10 px-32 gap-5 ">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full h-50" src={img1} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Oak Wood</div>
            <p class="text-gray-700 text-base">
              Oak furniture requires regular maintenance to keep it looking its
              best. It may need periodic refinishing, polishing, or cleaning to
              preserve its appearance and protect it from wear and tear.
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full h-50" src={img2} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Teak Wood</div>
            <p class="text-gray-700 text-base">
              Teak wood is renowned for its exceptional durability, making it
              ideal for furniture that is exposed to the elements or heavy use.
              It is naturally resistant to decay, rot, insects, and weathering,
              making it highly durable and long-lasting.
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full h-50" src={img3} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Sheesham Wood</div>
            <p class="text-gray-700 text-base">
              Sheesham wood is known for its durability and strength, making it
              suitable for furniture that is intended to last for a long time.
              It is resistant to decay, making it a durable
              choice for furniture that is used in different environments.
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full h-50" src={img4} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Natural Wood</div>
            <p class="text-gray-700 text-base mb-10">
              Natural wood has a timeless appeal that transcends trends and can
              complement different interior styles over time. Wood furniture can
               developing a rich patina and character with use
              and time. 
            </p>
          </div>
        </div>
      </div>

      {/* Care sofa */}
      <div className="px-60 mb-20 border">
        <h2 class=" text-center font-bold text-3xl py-3 mt-5 text-black">
          {" "}
          How do I care for my sofa?{" "}
        </h2>
        <p className="text-center text-black text-base ">
          All the sofas came up with a “care label” attached to them when they
          arrives. These can be removed and kept in a safe place for referencing
          later. All the care instructions mentioned over it are applicable to
          that particular sofa.{" "}
        </p>

        <h5 className="text-center text-black mt-3 mb-3  font-bold ">
          How do you clean a fabric sofa?{" "}
        </h5>

        <p className="text-center text-black text-base mb-10">
          It is always recommended in every sofa guide to have professional
          cleaning, as it offers better results. In the case of small stains, it
          is advisable not to rub continuously over the stain as it will push
          the stain deeper into the fabric. Instead, wipe it off gently with a
          soft damp cloth.{" "}
        </p>
      </div>
    </div>
  );
}

export default Sofa_help;
