import React, { useState } from "react";

function Third() {
  const [data, setData] = useState({
    title: "my title",
    body: "my body",
    userId: 1,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("testing");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.id) {
          alert("Item has been created");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data.title}
          placeholder="Add title"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <br />
        <input
          type="text"
          value={data.body}
          placeholder="Add title"
          onChange={(e) => setData({ ...data, body: e.target.value })}
        />
        <br />
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default Third;
