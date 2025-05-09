import React from "react";
import MyButton from "../component/MyButton";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert("You clicked me!");
  }
  const user = {
    name: "Giri",
    imageUrl:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageSize: 50,
    lastName: "Sankaran",
  };

  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Apple", isFruit: true, id: 2 },
  ];

  const listItem = products.map((product) => (
    <li key={product.id} style={{ color: product.isFruit ? "green" : "red" }}>
      {product.title}
    </li>
  ));

  return (
    <>
      <ul>{listItem}</ul>
      <div>
        <h1>Welcome to KGSL</h1>
        <p>
          Hey buddy
          <br />
          How you do
        </p>
        <h3>{user.name === "Giri" ? user.lastName : user.name}</h3>
        <h2>{user.name}</h2>

        <img
          className="avatar"
          src={user.imageUrl}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
          alt={`${user.name}'s avatar`}
        />
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    </>
  );
};

export default Home;
