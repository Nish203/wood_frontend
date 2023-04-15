import React from "react";
import img from "../images/bg11.jpg";
import img1 from "../images/Oak_wood.jpg";
import img2 from "../images/teak.jpg";
import img3 from "../images/sheesham.jpg";
import img4 from "../images/natural_wood.jpg";
import bed1 from "../images/bar2 cabinate.jpg";
import bed2 from "../images/cabinate1.webp";
import bed3 from "../images/wall cabinate2.jpg";

import {
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber3Filled,
  TbSquareRoundedNumber2Filled,
} from "react-icons/tb";
function Cabinet_help() {
  return (
    <div className=" ">
      <img src={img} className=""></img>
      <h2 class=" text-center font-bold text-3xl py-2 mt-12   text-black">
       How to Choose the Right cabinet? {" "}
      </h2>
      <p className="text-center text-black text-base px-40">
        {" "}
        Choosing the right cabinet can greatly impact the functionality, aesthetics, and overall design of a space. {" "}
      </p>
      <div className="container sm:grid grid-cols-3 pb-16 mt-10 px-32 gap-5 ">
       

<div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full h-50" src={bed1} alt="Sunset in the mountains" />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">Bar Cabinet</div>
            <p class="text-gray-700 text-base">
            Bar cabinets come in various styles and designs to complement different interior aesthetics. They can range from traditional to modern, rustic to contemporary, and can be made from different materials such as wood, metal, or a combination of materials. 
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full h-50" src={bed2} alt="Sunset in the mountains" />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2"> Bedsit Cabinet </div>
            <p class="text-gray-700 text-base">
            Bedsit cabinets often come with built-in storage features to help keep the living area organized and clutter-free. They may include shelves, drawers, or compartments for storing various items, such as clothes, books, electronics, and personal belongings. 
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full h-50" src={bed3} alt="Sunset in the mountains" />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">Wall Cabinet</div>
            <p class="text-gray-700 text-base">
            When choosing wall cabinets, it's important to consider factors such as the available wall space, the items you need to store, the style and design of the room, and your budget. It's also important to ensure that the wall cabinets are installed properly and securely to ensure stability and safety.
            </p>
          </div>
        </div>
      </div>

      {/* Matrial */}
      <h2 class=" text-center font-bold text-3xl py-3 mt-2 text-black">
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
    </div>
  );
}

export default Cabinet_help;
