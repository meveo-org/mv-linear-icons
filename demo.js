import { LitElement, html, css } from "lit-element";
import "./mv-linear-icon.js";

export class MvLinearIconDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
      
      .glyph {
        font-size: 16px;
        width: 15em;
        padding: 0.5em 0;
        margin: 0 2em;
        float: left;
        overflow: hidden;
      }
      .mls {
        margin-left: .25em;
      }
      .clearfix:before,
      .clearfix:after {
        content: " ";
        display: table;
      }
      .clearfix:after {
        clear: both;
      }
      .fs1 {
        font-size: 20px;
      }

      /* sample for overriding style */
      mv-linear-icon {
        font-size: 24px;
        color: #2196F3;
      }
    `;
  }

  render() {
    return html`
    <div class="clearfix mhl ptl">
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="home"></mv-linear-icon>
          <span class="mls"> home</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="apartment"></mv-linear-icon>
          <span class="mls"> apartment</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="pencil"></mv-linear-icon>
          <span class="mls"> pencil</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="magic-wand"></mv-linear-icon>
          <span class="mls"> magic-wand</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="drop"></mv-linear-icon>
          <span class="mls"> drop</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="lighter"></mv-linear-icon>
          <span class="mls"> lighter</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="poop"></mv-linear-icon>
          <span class="mls"> poop</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="sun"></mv-linear-icon>
          <span class="mls"> sun</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="moon"></mv-linear-icon>
          <span class="mls"> moon</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="cloud"></mv-linear-icon>
          <span class="mls"> cloud</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="cloud-upload"></mv-linear-icon>
          <span class="mls"> cloud-upload</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="cloud-download"></mv-linear-icon>
          <span class="mls"> cloud-download</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="cloud-sync"></mv-linear-icon>
          <span class="mls"> cloud-sync</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="cloud-check"></mv-linear-icon>
          <span class="mls"> cloud-check</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="database"></mv-linear-icon>
          <span class="mls"> database</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="lock"></mv-linear-icon>
          <span class="mls"> lock</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="cog"></mv-linear-icon>
          <span class="mls"> cog</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="trash"></mv-linear-icon>
          <span class="mls"> trash</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="dice"></mv-linear-icon>
          <span class="mls"> dice</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="heart"></mv-linear-icon>
          <span class="mls"> heart</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="star"></mv-linear-icon>
          <span class="mls"> star</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="star-half"></mv-linear-icon>
          <span class="mls"> star-half</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="star-empty"></mv-linear-icon>
          <span class="mls"> star-empty</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="flag"></mv-linear-icon>
          <span class="mls"> flag</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="envelope"></mv-linear-icon>
          <span class="mls"> envelope</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="paperclip"></mv-linear-icon>
          <span class="mls"> paperclip</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="inbox"></mv-linear-icon>
          <span class="mls"> inbox</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="eye"></mv-linear-icon>
          <span class="mls"> eye</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="printer"></mv-linear-icon>
          <span class="mls"> printer</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="file-empty"></mv-linear-icon>
          <span class="mls"> file-empty</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="file-add"></mv-linear-icon>
          <span class="mls"> file-add</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="enter"></mv-linear-icon>
          <span class="mls"> enter</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="exit"></mv-linear-icon>
          <span class="mls"> exit</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="graduation-hat"></mv-linear-icon>
          <span class="mls"> graduation-hat</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="license"></mv-linear-icon>
          <span class="mls"> license</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="music-note"></mv-linear-icon>
          <span class="mls"> music-note</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="film-play"></mv-linear-icon>
          <span class="mls"> film-play</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="camera-video"></mv-linear-icon>
          <span class="mls"> camera-video</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="camera"></mv-linear-icon>
          <span class="mls"> camera</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="picture"></mv-linear-icon>
          <span class="mls"> picture</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="book"></mv-linear-icon>
          <span class="mls"> book</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="bookmark"></mv-linear-icon>
          <span class="mls"> bookmark</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="user"></mv-linear-icon>
          <span class="mls"> user</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="users"></mv-linear-icon>
          <span class="mls"> users</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="shirt"></mv-linear-icon>
          <span class="mls"> shirt</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="store"></mv-linear-icon>
          <span class="mls"> store</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="cart"></mv-linear-icon>
          <span class="mls"> cart</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="tag"></mv-linear-icon>
          <span class="mls"> tag</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="phone-handset"></mv-linear-icon>
          <span class="mls"> phone-handset</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="phone"></mv-linear-icon>
          <span class="mls"> phone</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="pushpin"></mv-linear-icon>
          <span class="mls"> pushpin</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="map-marker"></mv-linear-icon>
          <span class="mls"> map-marker</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="map"></mv-linear-icon>
          <span class="mls"> map</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="location"></mv-linear-icon>
          <span class="mls"> location</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="calendar-full"></mv-linear-icon>
          <span class="mls"> calendar-full</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="keyboard"></mv-linear-icon>
          <span class="mls"> keyboard</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="spell-check"></mv-linear-icon>
          <span class="mls"> spell-check</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="screen"></mv-linear-icon>
          <span class="mls"> screen</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="smartphone"></mv-linear-icon>
          <span class="mls"> smartphone</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="tablet"></mv-linear-icon>
          <span class="mls"> tablet</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="laptop"></mv-linear-icon>
          <span class="mls"> laptop</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="laptop-phone"></mv-linear-icon>
          <span class="mls"> laptop-phone</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="power-switch"></mv-linear-icon>
          <span class="mls"> power-switch</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="bubble"></mv-linear-icon>
          <span class="mls"> bubble</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="heart-pulse"></mv-linear-icon>
          <span class="mls"> heart-pulse</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="construction"></mv-linear-icon>
          <span class="mls"> construction</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="pie-chart"></mv-linear-icon>
          <span class="mls"> pie-chart</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="chart-bars"></mv-linear-icon>
          <span class="mls"> chart-bars</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="gift"></mv-linear-icon>
          <span class="mls"> gift</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="diamond"></mv-linear-icon>
          <span class="mls"> diamond</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="linearicons"></mv-linear-icon>
          <span class="mls"> linearicons</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="dinner"></mv-linear-icon>
          <span class="mls"> dinner</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="coffee-cup"></mv-linear-icon>
          <span class="mls"> coffee-cup</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="leaf"></mv-linear-icon>
          <span class="mls"> leaf</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="paw"></mv-linear-icon>
          <span class="mls"> paw</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="rocket"></mv-linear-icon>
          <span class="mls"> rocket</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="briefcase"></mv-linear-icon>
          <span class="mls"> briefcase</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="bus"></mv-linear-icon>
          <span class="mls"> bus</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="car"></mv-linear-icon>
          <span class="mls"> car</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="train"></mv-linear-icon>
          <span class="mls"> train</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="bicycle"></mv-linear-icon>
          <span class="mls"> bicycle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="wheelchair"></mv-linear-icon>
          <span class="mls"> wheelchair</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="select"></mv-linear-icon>
          <span class="mls"> select</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="earth"></mv-linear-icon>
          <span class="mls"> earth</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="smile"></mv-linear-icon>
          <span class="mls"> smile</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="sad"></mv-linear-icon>
          <span class="mls"> sad</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="neutral"></mv-linear-icon>
          <span class="mls"> neutral</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="mustache"></mv-linear-icon>
          <span class="mls"> mustache</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="alarm"></mv-linear-icon>
          <span class="mls"> alarm</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="bullhorn"></mv-linear-icon>
          <span class="mls"> bullhorn</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="volume-high"></mv-linear-icon>
          <span class="mls"> volume-high</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="volume-medium"></mv-linear-icon>
          <span class="mls"> volume-medium</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="volume-low"></mv-linear-icon>
          <span class="mls"> volume-low</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="volume"></mv-linear-icon>
          <span class="mls"> volume</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="mic"></mv-linear-icon>
          <span class="mls"> mic</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="hourglass"></mv-linear-icon>
          <span class="mls"> hourglass</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="undo"></mv-linear-icon>
          <span class="mls"> undo</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="redo"></mv-linear-icon>
          <span class="mls"> redo</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="sync"></mv-linear-icon>
          <span class="mls"> sync</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="history"></mv-linear-icon>
          <span class="mls"> history</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="clock"></mv-linear-icon>
          <span class="mls"> clock</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="download"></mv-linear-icon>
          <span class="mls"> download</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="upload"></mv-linear-icon>
          <span class="mls"> upload</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="enter-down"></mv-linear-icon>
          <span class="mls"> enter-down</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="exit-up"></mv-linear-icon>
          <span class="mls"> exit-up</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="bug"></mv-linear-icon>
          <span class="mls"> bug</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="code"></mv-linear-icon>
          <span class="mls"> code</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="link"></mv-linear-icon>
          <span class="mls"> link</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="unlink"></mv-linear-icon>
          <span class="mls"> unlink</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="thumbs-up"></mv-linear-icon>
          <span class="mls"> thumbs-up</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="thumbs-down"></mv-linear-icon>
          <span class="mls"> thumbs-down</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="magnifier"></mv-linear-icon>
          <span class="mls"> magnifier</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="cross"></mv-linear-icon>
          <span class="mls"> cross</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="menu"></mv-linear-icon>
          <span class="mls"> menu</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="list"></mv-linear-icon>
          <span class="mls"> list</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="chevron-up"></mv-linear-icon>
          <span class="mls"> chevron-up</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="chevron-down"></mv-linear-icon>
          <span class="mls"> chevron-down</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="chevron-left"></mv-linear-icon>
          <span class="mls"> chevron-left</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="chevron-right"></mv-linear-icon>
          <span class="mls"> chevron-right</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="arrow-up"></mv-linear-icon>
          <span class="mls"> arrow-up</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="arrow-down"></mv-linear-icon>
          <span class="mls"> arrow-down</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="arrow-left"></mv-linear-icon>
          <span class="mls"> arrow-left</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="arrow-right"></mv-linear-icon>
          <span class="mls"> arrow-right</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="move"></mv-linear-icon>
          <span class="mls"> move</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="warning"></mv-linear-icon>
          <span class="mls"> warning</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="question-circle"></mv-linear-icon>
          <span class="mls"> question-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="menu-circle"></mv-linear-icon>
          <span class="mls"> menu-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="checkmark-circle"></mv-linear-icon>
          <span class="mls"> checkmark-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="cross-circle"></mv-linear-icon>
          <span class="mls"> cross-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="plus-circle"></mv-linear-icon>
          <span class="mls"> plus-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="circle-minus"></mv-linear-icon>
          <span class="mls"> circle-minus</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="arrow-up-circle"></mv-linear-icon>
          <span class="mls"> arrow-up-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="arrow-down-circle"></mv-linear-icon>
          <span class="mls"> arrow-down-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="arrow-left-circle"></mv-linear-icon>
          <span class="mls"> arrow-left-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="arrow-right-circle"></mv-linear-icon>
          <span class="mls"> arrow-right-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="chevron-up-circle"></mv-linear-icon>
          <span class="mls"> chevron-up-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="chevron-down-circle"></mv-linear-icon>
          <span class="mls"> chevron-down-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="chevron-left-circle"></mv-linear-icon>
          <span class="mls"> chevron-left-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="chevron-right-circle"></mv-linear-icon>
          <span class="mls"> chevron-right-circle</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="crop"></mv-linear-icon>
          <span class="mls"> crop</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="frame-expand"></mv-linear-icon>
          <span class="mls"> frame-expand</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="frame-contract"></mv-linear-icon>
          <span class="mls"> frame-contract</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="layers"></mv-linear-icon>
          <span class="mls"> layers</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="funnel"></mv-linear-icon>
          <span class="mls"> funnel</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="text-format"></mv-linear-icon>
          <span class="mls"> text-format</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="text-format-remove"></mv-linear-icon>
          <span class="mls"> text-format-remove</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="text-size"></mv-linear-icon>
          <span class="mls"> text-size</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="bold"></mv-linear-icon>
          <span class="mls"> bold</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="italic"></mv-linear-icon>
          <span class="mls"> italic</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="underline"></mv-linear-icon>
          <span class="mls"> underline</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="strikethrough"></mv-linear-icon>
          <span class="mls"> strikethrough</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="highlight"></mv-linear-icon>
          <span class="mls"> highlight</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="text-align-left"></mv-linear-icon>
          <span class="mls"> text-align-left</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="text-align-center"></mv-linear-icon>
          <span class="mls"> text-align-center</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="text-align-right"></mv-linear-icon>
          <span class="mls"> text-align-right</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="text-align-justify"></mv-linear-icon>
          <span class="mls"> text-align-justify</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="line-spacing"></mv-linear-icon>
          <span class="mls"> line-spacing</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="indent-increase"></mv-linear-icon>
          <span class="mls"> indent-increase</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="indent-decrease"></mv-linear-icon>
          <span class="mls"> indent-decrease</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="pilcrow"></mv-linear-icon>
          <span class="mls"> pilcrow</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="direction-ltr"></mv-linear-icon>
          <span class="mls"> direction-ltr</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="direction-rtl"></mv-linear-icon>
          <span class="mls"> direction-rtl</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="page-break"></mv-linear-icon>
          <span class="mls"> page-break</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="sort-alpha-asc"></mv-linear-icon>
          <span class="mls"> sort-alpha-asc</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="sort-amount-asc"></mv-linear-icon>
          <span class="mls"> sort-amount-asc</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="hand"></mv-linear-icon>
          <span class="mls"> hand</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="pointer-up"></mv-linear-icon>
          <span class="mls"> pointer-up</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="pointer-right"></mv-linear-icon>
          <span class="mls"> pointer-right</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="pointer-down"></mv-linear-icon>
          <span class="mls"> pointer-down</span>
        </div>
      </div>
      <div class="glyph fs1">
        <div class="clearfix">
          <mv-linear-icon icon="pointer-left"></mv-linear-icon>
          <span class="mls"> pointer-left</span>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("mv-linear-icon-demo", MvLinearIconDemo);
