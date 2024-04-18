import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class MediaImage extends DDD {

    static get tag() {
        return 'media-image';
    }

    constructor() {
        super();
        this.caption="picture caption";
        this.picture="#";
        this.text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            .title {
                margin-top: -55px;
                margin-bottom: var(--ddd-spacing-8);
                font-size: 24px;
                padding: var(--ddd-spacing-5);
                position: sticky;
                top: 0;
                background-color: white;
                z-index: 1000;
            }

            .wrapper-1 {
                margin: var(--ddd-spacing-5);
                display: flex;
                align-items: center;
                grid-template-columns: 1fr 1fr 1fr;
                column-gap: var(--ddd-spacing-5);
                font-size: 18px;
            }

            .wrapper-2 {
                margin: var(--ddd-spacing-5);
                display: flex;
                align-items: center;
                grid-template-columns: 1fr 1fr 1fr;
                column-gap: var(--ddd-spacing-5);
                font-size: 18px;
            }

            .pictures {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .pictures img {
                width: 200px;
                height: 200px;
                border: 2px solid black;
                border-radius: var(--ddd-radius-md);
                transition: transform 0.3s ease-in;
            }
            .pictures img:hover {
                cursor: pointer;
                transform: translate(8px, -8px);
                box-shadow: -8px 8px black
            }

            .caption {
                margin-top: 10px;
                font-size: 18px;
            }
        `;
    }

    static get properties() {
        return {
            caption: { type: String },
            picture: { type: String },
            text: { type: String },
        };
    }

    render() {
        return html`

        <div class="title">website title</div>

        <div class="wrapper-1">
            <div class="pictures" id="p1">
                <img src="https://i.pinimg.com/originals/3e/ca/43/3eca437f53ae912f9503de5b6d4855c8.jpg">
                <div class="caption" id="c1">${this.caption}</div>
            </div>
            <div class="texts" id="t1">
                ${this.text}
            </div>
        </div>

        <div class="wrapper-2">
            <div class="texts" id="t2">
                ${this.text}
            </div>
            <div class="pictures" id="p2">
                <img src="https://i.pinimg.com/originals/13/2d/03/132d03a73d801a00d8ce8bb539b99d0e.jpg">
                <div class="caption" id="c1">${this.caption}</div>
            </div>
        </div>

        <div class="wrapper-1">
            <div class="pictures" id="p3">
                <img src="https://i.pinimg.com/originals/d2/f9/8e/d2f98e16fd3148b2c7cb1378d501d6c9.jpg">
                <div class="caption" id="c3">${this.caption}</div>
            </div>
            <div class="texts" id="t3">
                ${this.text}
            </div>
        </div>

        <div class="wrapper-2">
            <div class="texts" id="t4">
                ${this.text}
            </div>
            <div class="pictures" id="p4">
                <img src="https://i.pinimg.com/originals/ab/d8/67/abd8677623fa03050229c70060eba76a.jpg">
                <div class="caption" id="c4">${this.caption}</div>
            </div>
        </div>

        <div class="wrapper-1">
            <div class="pictures" id="p5" @click="${this.openImageGallery}">
                <img src="https://i.pinimg.com/564x/9f/20/54/9f205457aa706fa88fe905df7698458c.jpg">
                <div class="caption" id="c5">${this.caption}</div>
            </div>
            <div class="texts" id="t5">
                ${this.text}
            </div>
        </div>

        `;
    }


}

globalThis.customElements.define(MediaImage.tag, MediaImage);

// as a music enthusiast, i found this project to be the perfect opportunity for me to blog about one of
// my favorite things to talk about - my spotify playlists. this will be my first time blogging and creating
// an entire webpage (relatively) using html/css/js, so it's going to be fresh. i'm hoping it can serve as the
// blueprint for an ongoing project that i'll add to as i go through my career as a woman in technology.
    

// the first album i'd like to share about is titled "back to the future", referencing the 1985 hit movie that i've
// actually never watched. it's a mix of songs from the 2000s and early 2010s that shaped my childhood - a time where
// my main method of consuming music was through the car radio and by searching questionable lyrics using the youtube 
// search bar. it's the only playlist that i have continuously added to over the years as i remember banger after banger.
// the first track, 1999 by charli xcx and troye sivan was released in 2018, which might seem somewhat recent. that's 
// because every masterpiece has to start somewhere, and this song was the one that inspired me to create this playlist. 
// something about charli and troye singing about taking them back to 1999 resonated with me, despite not having been born.
