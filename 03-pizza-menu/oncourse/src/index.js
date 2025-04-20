import React from "react";
import ReactDOM from "react-dom/client";

// This is a Pizza Data array
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// This is a class component
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// This is a functional component
function Header() {
  return (
    <header>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// This is a class component
function Menu() {
  return (
    <main>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

// This is a functional component
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log("isOpen", isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open!");
  // } else {
  //   alert("sorry we're currently closed!");
  // }

  return (
    <footer>
      <p> {new Date().toLocaleDateString()}. We're currently open</p>
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

// This is a functional component
function Pizza() {
  return (
    <div>
      <img src={pizzaData[2].photoName} alt="Pizza  Spinaci"></img>
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React v17 and below
// React.render(<App />);
