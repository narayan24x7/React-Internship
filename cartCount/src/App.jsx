import { useState } from "react";

function App() {
  const foodItems = [
    { name: "Pizza", price: 120 },
    { name: "Burger", price: 30 },
    { name: "Pasta", price: 45 },
    { name: "Salad", price: 25 },
  ];

  const [quantities, setQuantities] = useState(new Array(foodItems.length).fill(0));

  const increment = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const decrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) newQuantities[index]--;
    setQuantities(newQuantities);
  };

  const resetCart = () => {
    setQuantities(new Array(foodItems.length).fill(0));
  };

  const totalPrice = foodItems.reduce(
    (total, item, index) => total + item.price * quantities[index],
    0
  );

  return (
          <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Simple Food Cart</h1>
      <table className="table-auto w-full text-left mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Food Item</th>
            <th className="border px-4 py-2">Price (₹)</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.price}</td>
              <td className="border px-4 py-2">{quantities[index]}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => increment(index)}
                  className="bg-green-500 text-white px-2 py-1 mr-2"
                >
                  +
                </button>
                <button
                  onClick={() => decrement(index)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-lg font-semibold">Total: ₹{totalPrice}</h2>

      <button
        onClick={resetCart}
        className="mt-4 bg-gray-500 text-white p-2"
      >
        Reset Cart
      </button>
    </div>
  );
}

export default App;
