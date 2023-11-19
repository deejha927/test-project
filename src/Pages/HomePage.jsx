import React, { useEffect, useState } from "react";

function HomePage() {
  const apiCall = () => {
    console.log("here");
  };
  const postApiCall = async () => {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    });
    const data = await res.json();
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Login Successful</h1>
      <p>Welcome to the Home page!</p>
      <button onClick={apiCall}>Call the api</button>
      <button onClick={postApiCall}>Call post method</button>
    </div>
  );
}

export default HomePage;
