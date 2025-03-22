import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function MyorderPage() {
  const [orders, SetOrders] = useState("");
  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: 12345,
          createdAt: new Date(),
          shippingAddress: { city: "noida", country: "India" },
          orderItem: [
            {
              name: "product 1",
              image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: 12346,
          createdAt: new Date(),
          shippingAddress: { city: "noida", country: "India" },
          orderItem: [
            {
              name: "product 2",
              image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
            },
          ],
          totalPrice: 200,
          isPaid: true,
        },
      ];
      SetOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md  sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created At</th>
              <th className="py-2 px-4 sm:py-3"> Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.length > 0 ? (
              orders?.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className="px-2 py-2 sm:px-4 ">
                    <img
                      src={order.orderItem[0].image}
                      alt={order.orderItem[0].name}
                      className="w-full h-10 sm:w-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-2 py-2 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="px-2 py-2 sm:px-4 sm:py-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="px-2 py-2 sm:px-4 sm:py-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city},${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="px-2 py-2 sm:px-4 sm:py-4">
                    {order.orderItem.length}
                  </td>
                  <td className="px-2 py-2 sm:px-4 sm:py-4">
                    ${order.totalPrice}
                  </td>
                  <td className="px-2 py-2 sm:px-4 sm:py-4">
                   <span className={`${order.isPaid?"bg-green-100 text-green-700 p-2":"bg-red-100 text-red-700 "} px-2 py-1 rounded-full text-xs sm:text-sm font-medium `}>{order.isPaid?"Paid":"Pending"}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>You have no order</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyorderPage;
