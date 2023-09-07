import React from "react";

const OrderListTable = ({ data }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3 border-spacing-x-0">
          <thead>
            <tr className="text-left text-[#B0CAD1] text-sm">
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, index) => (
              <tr key={index} className="rounded-sm bg-[#2B2E36] text-sm">
                <td className="px-4 py-4 text-white">{item.customer}</td>
                <td className="px-4 py-4 text-white">{item.orderId}</td>
                <td className="px-4 py-4 text-white">{item.product}</td>
                <td className="px-4 py-4 text-white">{item.quantity}</td>
                <td className="px-4 py-4 text-white">{item.price}</td>
                <td className="px-4 py-4 w-32">
                  <button
                    className={`${
                      item.status === "Paid"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    } px-2 py-1 rounded-full w-24`}
                  >
                    {item.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderListTable;
