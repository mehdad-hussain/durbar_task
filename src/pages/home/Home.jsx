import React from "react";
import StatCard from "./components/StatCard";
import OrderListTable from "./components/OrderListTable";
import FeedbackCard from "./components/FeedbackCard";
import FoodCard from "./components/FoodCard";
import { feedbackData, foodData, orders, stats } from "../../utils/constants";

const Home = () => {
  return (
    <>
      <div class="grid md:grid-cols-6 gap-y-8 mx-8">
        {/* <!-- First Row --> */}
        <div class="md:col-span-2 col-span-full ">
          <div class="flex items-center flex-col justify-center p-10 rounded-sm bg-[#2B2E36]">
            <img
              src="images/15yrs.png"
              alt="years"
              class="w-16 h-16 rounded-full"
            />
            <h2 class="text-2xl tracking-wide font-semibold mb-1">
              15<sub>th</sub> Years
            </h2>

            <p class="text-base text-white text-center ">
              This Year Winner to Tomatus.
              <span className="text-red-500">Congratulation!</span>
            </p>

            <p class="text-white text-center md:text-sm text-xs mt-2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
          </div>
        </div>

        <div class="md:col-span-4 col-span-full md:ml-8 h-[296px] rounded-sm">
          <img
            src="images/GRAPH.png"
            alt="graph"
            className=" object-cover h-full w-full"
          />
        </div>

        {/* <!-- Second Row --> */}
        <div class="xl:col-span-2 lg:col-span-3 col-span-full">
          <h6 className="text-white mb-2">Statistic</h6>
          <div className="grid grid-cols-2 gap-x-2 gap-y-2">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        <div class="xl:col-span-4 lg:col-span-3 col-span-full lg:ml-8 md:mt-10">
          <div className="flex justify-between items-end text-white mb-3">
            <h6>Customer Feed</h6>
            <button type="button" className=" tracking-wider">
              View All
            </button>
          </div>
          <div className=" space-y-2">
            {feedbackData.map((feedback, index) => (
              <FeedbackCard key={index} {...feedback} />
            ))}
          </div>
        </div>

        {/* <!-- Third Row --> */}
        <div class="md:col-span-4 col-span-full">
          <div className="flex justify-between items-end text-white">
            <h6>Receive Order Lists</h6>
            <button type="button" className=" text-2xl tracking-wider">
              ...
            </button>
          </div>
          <OrderListTable data={orders} />
        </div>
        <div class="md:col-span-2 col-span-full  md:ml-8">
          <div className="flex justify-between items-end text-white mb-4">
            <h6>Hot Food Menu</h6>
            <button type="button" className=" text-2xl tracking-wider">
              ...
            </button>
          </div>
          <div className="divide-y divide-gray-500 shadow-sm shadow-slate-500">
            {foodData.map((food, index) => (
              <FoodCard key={index} {...food} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
