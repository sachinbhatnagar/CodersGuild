import React from "react";
import NavContainer from "./NavContainer.js";
import List from "./List.js";

export function Nav({ price }) {
  return (
    <NavContainer>
      <div className="logos-container">
        <div className="title">
          <span>shophub</span>
        </div>
      </div>
      <List>
        <li>Home</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Contact</li>
      </List>
      <div className="price-container flex a-i-c">
        <div className="price">
          <span>${price}</span>
        </div>
        <div className="cart">
          <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-cart-user-interface-icongeek26-flat-icongeek26.png" />
        </div>
      </div>
    </NavContainer>
  );
}
