import React from "react";
import StatCard from "./components/StatCard";
import OrderListTable from "./components/OrderListTable";
import FeedbackCard from "./components/FeedbackCard";
import FoodCard from "./components/FoodCard";

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

            <p class="text-base text-white">
              This Year Winner to Tomatus.
              <span className="text-red-500">Congratulation!</span>
            </p>

            <p class="text-white text-center text-sm">
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
        <div class="md:col-span-2 col-span-full">
          <h6 className="text-white mb-2">Statistic</h6>
          <div className="grid grid-cols-2 gap-x-2 gap-y-2">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
        <div class="md:col-span-4 col-span-full md:ml-8 md:mt-10">
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

const stats = [
  {
    number: 7540,
    title: "Order Received",
    icon: "images/orderRec.png",
    color: "red",
  },
  {
    number: 2625,
    title: "Today Delivered",
    icon: "images/delivery.png",
    color: "green",
  },
  {
    number: 9846,
    title: "New Customers",
    icon: "images/newCustomer.png",
    color: "#6257F7",
  },
  {
    number: 6532,
    title: "Net Earning",
    icon: "images/earning.png",
    color: "orange",
  },
  {
    number: 7540,
    title: "Daily sales",
    icon: "images/sales.png",
    color: "green",
  },
  {
    number: 6765,
    title: "Daily Expense",
    icon: "images/expense.png",
    color: "red",
  },
];

const orders = [
  {
    customer: "John Doe",
    orderId: "#12345",
    product: "Widget",
    quantity: 2,
    price: 10.99,
    status: "Paid",
  },
  {
    customer: "Jane Smith",
    orderId: "#67890",
    product: "Gadget",
    quantity: 1,
    price: 19.99,
    status: "Cancel",
  },
  {
    customer: "Bob Johnson",
    orderId: "#24680",
    product: "Thingamajig",
    quantity: 3,
    price: 7.99,
    status: "Paid",
  },
  {
    customer: "Alice Brown",
    orderId: "#13579",
    product: "Doohickey",
    quantity: 4,
    price: 5.99,
    status: "Paid",
  },
  {
    customer: "Charlie Green",
    orderId: "#86420",
    product: "Whatchamacallit",
    quantity: 2,
    price: 12.99,
    status: "Cancel",
  },
  {
    customer: "Eve White",
    orderId: "#97531",
    product: "Thingamajig",
    quantity: 1,
    price: 7.99,
    status: "Cancel",
  },
];

const feedbackData = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Excellent service and product quality!",
    time: "3 hours ago",
    imageSrc: "images/customerImage.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Fast delivery and great customer support.",
    time: "5 hours ago",
    imageSrc: "images/customerImage.png",
  },
  {
    id: 3,
    name: "Alice Johnson",
    feedback: "I love their products. Will buy again!",
    time: "8 hours ago",
    imageSrc: "images/customerImage.png",
  },
  {
    id: 4,
    name: "Bob Brown",
    feedback: "Good experience overall. Prompt delivery.",
    time: "12 hours ago",
    imageSrc: "images/customerImage.png",
  },
];

const foodData = [
  {
    id: 1,
    foodName: "Pizza Margherita",
    price: 12.99,
  },
  {
    id: 2,
    foodName: "Spaghetti Carbonara",
    price: 10,
  },
  {
    id: 3,
    foodName: "Chicken Alfredo",
    price: 14.99,
  },
  {
    id: 4,
    foodName: "Hamburger",
    price: 8,
  },
  {
    id: 5,
    foodName: "Salad Bowl",
    price: 7.99,
  },
];

export default Home;
