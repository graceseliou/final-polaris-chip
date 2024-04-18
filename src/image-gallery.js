import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class ImageGallery extends DDD {

  static get tag() {
    return 'image-gallery';
  }

  constructor() {
    super();
    this.caption="picture caption";
    this.description="description of picture";
    
    this.images=[];
    
    this.imageNumber=1;
    this.pages=6;

    this.opened=false; //default closed
  }

  firstUpdated(){
    var data = document.querySelectorAll('media-image');
    data.forEach((picture) => {
      this.images.push(picture.getAttribute('picture'));
    })

    console.log(this.images)

    document.addEventListener('open-image-gallery', (e) => {
        var data = e.target.attributes.picture.nodeValue;
        this.imageNumber = this.images.indexOf(data);
        this.opened = true;
    })


  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7); /* Black with 70% opacity */
        z-index: 1000; /* Ensure it's above other content */
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .opened-wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-2);
        width: 750px;
        height: 750px;
        background-color: lightblue;
        color: black;
        border: 2px solid black;
        border-radius: var(--ddd-radius-md);
        overflow: auto;
      }

      .top-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .page-nav {
        margin: var(--ddd-spacing-2);
        font-size: 18px;
        justify-content: left;
      }

      .caption {
        justify-content: center;
      }
        
      .close-button {
        margin: var(--ddd-spacing-2);
        justify-content: right;
        cursor: pointer;
      }

      .opened-image img {
        position: absolute;
        margin-left: 100px;
        margin-top: 40px;
        width: 550px;
        height: 550px;
        display: block;
        border: 2px solid black;
        border-radius: var(--ddd-radius-md);
      }

      .description {
        margin-top: 600px;
        justify-content: center;
      }

      .page-buttons {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 735px;
        display: flex;
        margin: var(--ddd-spacing-2);
        align-items: center;
        margin-top: 60px;
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

  static get properties() {
    return {
      caption: { type: String },
      description: { type: String },
      image: { type: String },
      imageNumber: { type: String },
      pages: { type: String },
      opened: { type: Boolean },
    };
  }

  render() {
    if (!this.opened){
      return html``;
    }

    return html`
    <div class="fullscreen">
      <div class="opened-wrapper">
        
        <div class="top-row">
          <div class="page-nav">${this.imageNumber+1} / ${this.pages}</div>
          <div class="caption">${this.caption}</div>
          <button class="close-button" @click="${this.closeGallery}">X</button>
        </div>

        <div class="opened-image">
          <img src= ${this.images[this.imageNumber]}>
        </div>

        <div class="description">${this.description}</div>

        <div class="page-buttons">
          <button class="left-button" @click="${this.leftClick}"><</button>
          <button class = "right-button" @click="${this.rightClick}">></button>
        </div>

      </div>
    </div>
    `;
  }

  open(index) {
    this.imageNumber = index + 1;
    this.opened = true;
    
    this.requestUpdate();
  }

  closeGallery() {
    this.opened = false;

    this.requestUpdate();
  }

  rightClick() {
    this.imageNumber = (this.imageNumber + 1) % this.pages;

    // if (this.imageNumber < this.pages)
    //   this.imageNumber = this.imageNumber+1;
    // else {
    //   this.imageNumber=1;
    // }
    
    this.requestUpdate();
  }

  leftClick() {
    this.imageNumber = (this.imageNumber - 1 + this.pages) % this.pages;

    // if(this.imageNumber > 1)
    //   this.imageNumber = this.imageNumber-1;
    // else {
    //   this.imageNumber = this.pages;
    // }
    
    this.requestUpdate();
  }

}

globalThis.customElements.define(ImageGallery.tag, ImageGallery);
