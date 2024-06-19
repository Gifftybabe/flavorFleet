import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Whether you're craving a hearty meal, a light snack, we've got you
          covered. Fresh, hot, and delicious meals are just a tap away,
          delivered straight to your doorstep with speed and convenience. Don't
          wait—treat yourself to a delicious meal today!
        </p>
        <button>View More</button>
      </div>
    </div>
  );
};

export default Header;
