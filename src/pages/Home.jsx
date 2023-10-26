import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { toast } from "react-hot-toast";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  async function fetchProductData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setItems(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Error Loading Data");
      setItems([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : items.length > 0 ? (
        <div
          className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
        gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]"
        >
          {items.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center w-screen h-screen">
          <p className="font-bold">No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
