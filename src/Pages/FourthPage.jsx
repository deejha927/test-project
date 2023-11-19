import React, { useState } from "react";

function FourthPage() {
  const [data, setData] = useState({
    id: 1,
    title: "my title",
    body: "my body",
    userId: 1,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
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

export default FourthPage;
