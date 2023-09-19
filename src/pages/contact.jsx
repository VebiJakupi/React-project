import React from "react";
import "./contact.css";


export const Contact = () => {
  return <>
  <h1>Contact Us</h1>
  <form action="">
    <input type="text" placeholder="UserName" required/>
    <input type="email" placeholder="Email" required/>
    <input type="password" placeholder="Password" required/>
    <button type="button">Submit</button>
  </form>
  </>;
};
