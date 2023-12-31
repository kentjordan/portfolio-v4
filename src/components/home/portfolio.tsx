"use client";
import React, { useState } from "react";
import { Anton, Roboto } from "next/font/google";
import Image, { StaticImageData } from "next/image";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

import PeachTreeDesigns from "@/assets/ptd.png";
import GoExploreBatangas from "@/assets/goexplore.png";
import MDASCalculator from "@/assets/mdas_calculator.png";
import KabsahiCart from "@/assets/kabsahi_cart.png";
import BinarySearch from "@/assets/binary_search.png";
import LinearSearch from "@/assets/linear_search.png";
import ThreadsClone from "@/assets/threads-clone.png";

import Link from "next/link";

const Item = ({
  title,
  description,
  img_url,
  view_url,
  isOnDevelopment,
  tags,
}: {
  title: string;
  description: string;
  img_url: string | StaticImageData;
  view_url: string;
  isOnDevelopment: boolean;
  tags: string[];
}) => {
  return (
    <div className='flex flex-col justify-between my-8 max-w-[320px] w-full  bg-stone-900 rounded'>
      <div>
        <Image src={img_url} alt='works 1' width={400} height={200} />
        <div className='flex flex-col p-6'>
          {/*  Tags */}
          <div className='flex my-4'>
            {tags.map((item, index) => {
              if (index >= 1) {
                return (
                  <span
                    key={index}
                    className='ml-2 text-stone-300 font-bold text-sm'>
                    {item}
                  </span>
                );
              }
              return (
                <span key={index} className='text-stone-300 font-bold text-sm'>
                  {item}
                </span>
              );
            })}
          </div>
          {/*  Title */}
          <h1 className={`${roboto.className} mt-4  text-2xl font-bold`}>
            {title}
          </h1>
          {/* Description */}
          <p className='text-stone-300 my-2 '>{description}</p>
          {/*  */}
        </div>
      </div>
      {isOnDevelopment ? (
        <button
          onClick={() => alert("Project is still on development.")}
          className={`${roboto.className} border border-stone-400 text-stone-400 w-40 m-8 p-2`}>
          VIEW
        </button>
      ) : (
        <Link
          href={view_url}
          className={`${roboto.className} text-center border border-stone-400 text-stone-400 w-40 m-8 p-2`}
          target='_blank'>
          VIEW
        </Link>
      )}
    </div>
  );
};

function HomePortfolio() {
  const [fromClient, setFromClient] = useState([
    {
      title: "Peach Tree Designs",
      description:
        "Peach Tree Designs is my first US based client. I helped them by developing their portfolio website wherein I built an Admin Panel and the Backend which is written on Express.",
      img_url: PeachTreeDesigns,
      view_url: "https://www.peachtree-designs.com/",
      isOnDevelopment: false,
      tags: ["EXPRESS.JS", "ADMIN PANEL"],
    },
    {
      title: "Go Explore Batangas",
      description:
        "This is my second client. I was assigned as a backend developer and responsible for the cloud deployment.",
      img_url: GoExploreBatangas,
      isOnDevelopment: false,
      view_url: "https://www.goexplorebatangas.com/",
      tags: ["EXPRESS.JS"],
    },
  ]);

  const [personalProjects, setPersonalProjects] = useState([
    {
      title: "Kabsahi Cart",
      description: "A Cart System for an eCommerce supposedly for Kabsahi.",
      img_url: KabsahiCart,
      view_url: "https://kabsahi-devlopment.vercel.app/",
      isOnDevelopment: false,
      tags: ["REACT.JS"],
    },
    {
      title: "Calculator",
      description: "An MDAS calculator based on flutter web.",
      img_url: MDASCalculator,
      view_url: "https://calc-kjordan.vercel.app/",
      isOnDevelopment: false,
      tags: ["FLUTTER WEB"],
    },
    {
      title: "Binary Search Visualizer",
      description: "To visualize the binary search algorithm.",
      img_url: BinarySearch,
      view_url:
        "https://kjordan-visualize.vercel.app/algorithms/searching/binary-search/demo",
      isOnDevelopment: false,
      tags: ["REACT.JS"],
    },
    {
      title: "Linear Search Visualizer",
      description: "To visualize the linear search algorithm.",
      img_url: LinearSearch,
      view_url:
        "https://kjordan-visualize.vercel.app/algorithms/searching/linear-search/demo",
      isOnDevelopment: false,
      tags: ["REACT.JS"],
    },
  ]);

  const [onDevPersonalProjects, setOnDevPersonalProjects] = useState([
    {
      title: "Threads Clone",
      description:
        "This project is still on development. I will continue this when I got a spare time. 😜",
      img_url: ThreadsClone,
      view_url: "",
      isOnDevelopment: true,
      tags: ["REACT NATIVE", "EXPRESS.JS"],
    },
  ]);

  return (
    <div className='flex flex-col items-center p-4' id='works'>
      <h1 className={`${anton.className} text-6xl my-8 text-center`}>
        My recent works
      </h1>
      <div className='flex flex-col my-12 items-center'>
        <h1 className={`${roboto.className} text-2xl text-center`}>
          From a client
        </h1>
        <div className='flex gap-4 flex-wrap justify-center'>
          {fromClient.map((e, i) => {
            return (
              <Item
                key={i}
                title={e.title}
                description={e.description}
                img_url={e.img_url}
                view_url={e.view_url}
                isOnDevelopment={e.isOnDevelopment}
                tags={e.tags}
              />
            );
          })}
        </div>
      </div>
      <div className='flex flex-col my-12 items-center'>
        <h1 className={`${roboto.className} text-2xl text-center`}>
          Personal Projects
        </h1>
        <div className='flex gap-4 flex-wrap justify-center'>
          {personalProjects.map((e, i) => {
            return (
              <Item
                key={i * 2}
                title={e.title}
                description={e.description}
                img_url={e.img_url}
                view_url={e.view_url}
                isOnDevelopment={e.isOnDevelopment}
                tags={e.tags}
              />
            );
          })}
        </div>
      </div>
      <div className='flex flex-col my-12 items-center'>
        <h1 className={`${roboto.className} text-2xl text-center`}>
          On Development Personal Projects
        </h1>
        <div className='flex gap-4 flex-wrap justify-center'>
          {onDevPersonalProjects.map((e, i) => {
            return (
              <Item
                key={i * 2}
                title={e.title}
                description={e.description}
                img_url={e.img_url}
                view_url={e.view_url}
                isOnDevelopment={e.isOnDevelopment}
                tags={e.tags}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePortfolio;
