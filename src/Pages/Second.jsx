import React, { useEffect, useState } from "react";

function Second() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("INdia");
  useEffect(() => {
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, [country]);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter country name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button>Call Api</button>
      </form>
      {data.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <td>Alpha code</td>
              <td>Name</td>
              <td>Domain</td>
              <td>country</td>
              <td>Web Page</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.alpha_two_code}</td>
                <td>{item.name}</td>
                <td>{item.domains[0]}</td>
                <td>{item.country}</td>
                <td>{item.web_pages[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>Loading....</>
      )}
    </div>
  );
}

export default Second;
