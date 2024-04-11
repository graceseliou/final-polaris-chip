import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class ImageGallery extends DDD {

  static get tag() {
    return 'image-gallery';
  }

  constructor() {
    super();
    this.description="description of picture";
    this.images=["https://i.pinimg.com/originals/3e/ca/43/3eca437f53ae912f9503de5b6d4855c8.jpg",
    "https://i.pinimg.com/originals/13/2d/03/132d03a73d801a00d8ce8bb539b99d0e.jpg",
    "https://i.pinimg.com/originals/d2/f9/8e/d2f98e16fd3148b2c7cb1378d501d6c9.jpg",
    "https://i.pinimg.com/originals/ab/d8/67/abd8677623fa03050229c70060eba76a.jpg",
    "https://images.immediate.co.uk/production/volatile/sites/28/2019/02/have-these-funny-baby-photo-trends-gone-too-far_154133-6fb0bb7.jpg?quality=90&resize=549,366"];
    this.imageNumber=1;
    this.pages=5;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: serif;
      }

      .opened-wrapper {
        margin: 8px;
        padding: 8px;
        width: 550px;
        height: 550px;
        background-color: pink;
        color: black;
        border-radius: var(--ddd-radius-md);
      }

      .top-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .page-nav {
        margin: 8px;
        font-size: 16px;
        justify-content: left;
      }

      .description {
        justify-content: center;
      }
        
      .close-button {
        margin: 8px;
        justify-content: right;
        cursor: pointer;
      }

      .opened-image img {
        position: absolute;
        margin-left: 100px;
        margin-top: 55px;
        width: 350px;
        height: 350px;
        display: block;
        border-radius: var(--ddd-radius-md);
      }

      .page-buttons {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 530px;
        display: flex;
        margin: 8px;
        align-items: center;
        margin-top: 480px;
      }

      .left-button {
        cursor: pointer;
      }

      .right-button {
        cursor: pointer;
      }

      .slide-image {
        width: 100%;
        min-height: 200px;
        height: auto;
        max-height: 400px;
        padding: 10px;
        margin: 0 auto;
      }

    `;
  }

  render() {
    return html`
    <div class="website-wrapper">

      <div class="opened-wrapper">
        
        <div class="top-row">
          
          <div class="page-nav">
            ${this.imageNumber} / ${this.pages}
          </div>
          
          <div class="description"> 
            ${this.description}
          </div>
          <button class="close-button">
            X
          </button>

        </div>

        <div class="opened-image">
          <img src= ${this.images[this.imageNumber-1]}>
        </div>

        <div class="page-buttons">
          
          <button class="left-button" @click="${this.leftClick}">
            <-
          </button>
          <button class = "right-button" @click="${this.rightClick}">
            ->
          </button>

        </div>

      </div>
    </div>
    `;
  }

  rightClick() {
    if (this.imageNumber < this.pages)
      this.imageNumber = this.imageNumber+1;
    else {
      this.imageNumber=1;
    }
    
    this.requestUpdate();
  }

  leftClick() {
    if(this.imageNumber > 1)
      this.imageNumber = this.imageNumber-1;
    else {
      this.imageNumber = this.pages;
    }
    
    this.requestUpdate();
  }

  static get properties() {
    return {
      description: { type: String },
      image: { type: String },
      imageNumber: { type: String },
      pages: { type: String },
    };
  }
}

globalThis.customElements.define(ImageGallery.tag, ImageGallery);
