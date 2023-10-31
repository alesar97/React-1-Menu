import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Soup",
    ingredients: "Pumpkin cream soup with pink peppercorn",
    price: 6,
    photoName: "foods/soup.jpg",
    soldOut: false,
  },
  {
    name: "Avocado eggs",
    ingredients: "Avocado and Egg Toast",
    price: 8,
    photoName: "foods/egg.jpg",
    soldOut: false,
  },
  {
    name: "Hamburger",
    ingredients: "Chicken, Tomato and cheese",
    price: 10,
    photoName: "foods/hamburger.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "foods/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Cake",
    ingredients: "Pistachio and raspberries",
    price: 6,
    photoName: "foods/cake.jpg",
    soldOut: true,
  },
  {
    name: "Noodles",
    ingredients: "Ramen noodles with soft boiled egg, shrimp and snow peas",
    price: 7,
    photoName: "foods/noodles.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast Food Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* <Pizza /> */}

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic international cuisine. 6 ceative dishes to choose from.
            All from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              // <Pizza name={pizza.name} photoName={} />
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our Menu. please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* <span>{pizzaObj.soldOut ? "sold out" : pizzaObj.price}</span> */}

        {pizzaObj.soldOut ? (
          <span style={{ color: "#c00000", marginBottom: "auto" }}>
            Sould Out
          </span>
        ) : (
          <>
            <span
              style={{
                textDecoration: "line-through",
                textDecorationColor: "gray",
              }}
            >
              {parseFloat(pizzaObj.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
            <span style={{ fontSize: "20px", color: "#c00000" }}>
              {(parseFloat(pizzaObj.price) - 2).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </>
        )}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // we can use multiple returns based on condition
  //
  // if (!isOpen)
  //   return (
  //     <p>
  //       Sorry We are closed.. We are happy to welcome you between {openHour}
  //       :00 and {closeHour}:00{" "}
  //     </p>
  //   );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closehour={closeHour} openhour={openHour} />
      ) : (
        <p>
          Sorry We are closed.. We are happy to welcome you between {openHour}
          :00 and {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );
}

function Order({ closehour, openhour }) {
  return (
    <div className="order">
      <p>
        We are open from {openhour}:00 to {closehour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
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

// React before 18
// React.render(<App/>,document.getElementById("root"));
