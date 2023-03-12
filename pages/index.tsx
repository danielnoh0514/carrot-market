import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className=" grid  min-h-screen  place-content-center  gap-10 bg-slate-400 py-20 px-20 lg:grid-cols-2 xl:grid-cols-3">
      <div className="   rounded-3xl bg-white p-10 shadow-2xl dark:bg-black xl:flex xl:flex-col xl:justify-between">
        <div className="xl:start xl:flex">
          <span className="text-2xl font-extrabold  dark:text-white">
            Select Item
          </span>
        </div>
        <div className="mb-16 space-y-3">
          <div className=" flex justify-between">
            <span className="text-gray-400">Grey Chair</span>
            <span className="text-xl font-extrabold dark:text-white">$19</span>
          </div>
          <div className="  flex justify-between">
            <span className="text-gray-400">Tooly Table</span>
            <span className="text-xl font-extrabold dark:text-white">$19</span>
          </div>
        </div>
        <div className="mt-2 flex border-spacing-2 justify-between border-t-4 border-dashed pt-2 font-extrabold">
          <span className="dark:text-white">Total</span>
          <span className="text-xl font-extrabold dark:text-white">$9</span>
        </div>
        <div className="flex justify-center ">
          <button
            className="mt-8 w-48  rounded-xl bg-blue-500 p-3 text-white hover:bg-red-300 dark:border-2 dark:border-white dark:bg-black
          dark:hover:bg-blue-400 
          "
          >
            Checkout
          </button>
        </div>
      </div>
      <div className="group overflow-hidden rounded-xl bg-white shadow-2xl ">
        <div className=" bg-blue-500 p-5 pb-14 xl:pb-28">
          <span className="text-2xl  text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center  ">
              <span className="text-gray-400">Orders</span>
              <span className="text-lg font-extrabold">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-red-400 transition group-hover:bg-pink-500" />
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Spent</span>
              <span className="text-lg font-extrabold">$2,310</span>
            </div>
          </div>
          <div className="relative  mr-4 -mt-10 flex flex-col items-center ">
            <span className="text-xl font-extrabold">Daniel Noh</span>
            <span>South Korea</span>
          </div>
        </div>
      </div>

      <div className=" rounded-xl bg-white p-10 shadow-2xl lg:col-span-2 xl:col-span-1">
        <div className="flex items-center justify-between">
          <span>⬅️</span>
          <div className="space-x-3 ">
            <span className="font-bold">⭐️ 4.9</span>
            <span>❤️</span>
          </div>
        </div>
        <div className="h-60 max-w-full bg-zinc-400" />
        <div>
          <div className="flex flex-col ">
            <span className="font-bold">Swoon Lounge</span>
            <span className="text-gray-400">Chair</span>
          </div>
          <div className="flex justify-between">
            <div className="mt-2 flex space-x-2 ">
              <button className="h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2"></button>
              <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2"></button>
              <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2"></button>
            </div>
            <div className="space-x-3">
              <button className="rounded-lg bg-slate-300 py-1 px-3 ">-</button>
              <span>1</span>
              <button className="rounded-lg bg-slate-300 py-1 px-3 ">+</button>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-2xl font-bold">$ 450</span>
            <div className="rounded-xl bg-blue-400 py-3 px-10">
              <span className="text-white">Add to cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
