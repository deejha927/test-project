import React, { useState } from "react";
import { useEffect } from "react";

function First() {
  const [data, setData] = useState([]);
  const handleClick = async () => {
    console.log("here i am");
    try {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await response.json();
      const result = [];
      for (let key in data?.bpi) {
        result.push(data.bpi[key]);
        console.log("hello");
      }
      setData(result);
    } catch (err) {
      console.log(err);
    }
    console.log("here i am at the end");
  };
  return (
    <div>
      <button onClick={handleClick}>Call Api Now</button>
      {data.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <td>Code</td>
              <td>Description</td>
              <td>Rate</td>
              <td>Symbol</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.code}</td>
                <td>{item.description}</td>
                <td>{item.rate_float}</td>
                <td>{item.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default First;
