import React from "react";
import { Routes , Route } from 'react-router-dom';
import classes from "./Cards.module.css"
import imageh1 from "../assets/image/hackathon1.jpg"
import image2 from "../assets/image/hackathon2.png"
function card (){
    return(<div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card">
        <img src={image2} class="card-img-top" alt="error"></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button>register</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src={imageh1} class="card-img-top" alt="error"></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button>register</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src={image2} class="card-img-top" alt="error"></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          <button>register</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src={image2} class="card-img-top" alt="error"></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button>register</button>
        </div>
      </div>
    </div>
  </div>
    );

    
}
export default card;