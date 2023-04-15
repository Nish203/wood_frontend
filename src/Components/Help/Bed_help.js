import React from "react";
import img from "../images/bg_bed.jpg";
import img1 from "../images/Oak_wood.jpg";
import img2 from "../images/teak.jpg";
import img3 from "../images/sheesham.jpg";
import img4 from "../images/natural_wood.jpg";
import bed1 from "../images/single_bed.jpg";
import bed2 from "../images/2_bed.jpg";
import bed3 from "../images/queen.jpg";

import {
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber3Filled,
  TbSquareRoundedNumber2Filled,
} from "react-icons/tb";
function Bed_help() {
  return (
    <div className=" ">
      <img src={img} className=""></img>
      <h2 class=" text-center font-bold text-3xl py-3 mt-5 text-black">
      Bed Buying Guide : How to Choose the Right Bed? {" "}
      </h2>
      <p className="text-center text-black text-base px-40">
        {" "}
        A bed is an inevitable furniture piece in every home. A bed is a place where you spend most of the time. From waking up fresh in the morning to ending your day, a human spends the majority of his/her life sleeping on a bed. Ranging from beds with storage to without, king size bed to queen-sized ones, whatever your need is, we have got you covered. Explore the exclusive collection of beds online and find the one that's ideal for you.{" "}
      </p>
      <div className="container sm:grid grid-cols-3 pb-16 mt-10 px-32 gap-5 ">
       

<div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full h-50" src={bed1} alt="Sunset in the mountains" />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">Single Beds</div>
            <p class="text-gray-700 text-base">
            Single beds are an ideal option for smaller bedrooms, as they don't take up much space. Our single bed units are a combination of form and functionality, ensuring they match your room interiors. The different options in this type of beds are bunk, trundle, stackable, divan beds, etc.
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full h-50" src={bed2} alt="Sunset in the mountains" />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">King Size Beds</div>
            <p class="text-gray-700 text-base">
            An extra inch of comfort and coziness can be achieved in king size beds. From reading marathons to late-night movie sessions, king-size beds are always there to offer more space. Its broader structure provides you with extra comfort for stretching out your arms and legs comfortably.
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full h-50" src={bed3} alt="Sunset in the mountains" />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">Double Beds</div>
            <p class="text-gray-700 text-base">
            Double beds are one of the most suitable options when it comes to furnishing the bedroom. This type of beds in a bedroom suits various purposes and are available in two configurations such as a double bed with storage and without. 
            </p>
          </div>
        </div>
      </div>

      {/* Matrial */}
      <h2 class=" text-center font-bold text-3xl py-2 mt-3 text-black">
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
      <div className="px-40 mb-20 border text-left">
        <h2 class="  font-bold text-3xl py-2  mt-5 text-black">
          {" "}
          How Do I Care for My Beds?{" "}
        </h2>
        <h5 className=" text-black mt-3 mb-3  font-bold ">
        Dust Often :{" "}
        </h5>

        <p className=" text-black text-base mb-10">
        Dusting frequently to your wooden bed is one of the best ways to take care of your furniture. Airborne particles can build a filmy layer on wood that can damage the surface. Also, use the soft cloth while dusting to avoid damage.{" "}
        </p>

        <h5 className=" text-black mt-1  mb-1  font-bold ">
        Make Your Wooden Beds Smell Fresh :{" "}
        </h5>

        <p className=" text-black text-base mb-10">
        Sometimes older pieces will develop an unpleasant odor, especially if they’ve been stored. You can sprinkle the surface with baking soda to freshen it up.{" "}
        </p>

        <h5 className=" text-black mt-1 mb-1  font-bold ">
        Avoid Direct Heat and Sunlight :{" "}
        </h5>

        <p className=" text-black text-base mb-10">
        Do not place your wooden bed where it will get direct heat and sunlight. It will fade your high-quality wooden bed so use drapes, sheer curtains or protective window films to guard against the sun rays.{" "}
        </p>
      </div>
    </div>
  );
}

export default Bed_help;
