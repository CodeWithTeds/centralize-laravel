<script>
  // @ts-nocheck
  import { onMount } from 'svelte';
  import Scale from "@lucide/svelte/icons/scale";
  import { siGithub, siPackagist } from "simple-icons";
  import goatVideo from "./assets/goat.webm";
  import fastestVideo from "./assets/fastest.webm";
  import { marked } from "marked";
  import goatReadmeRaw from "./goatreadme.md?raw";
  let logoStars = [];
  const cols = 36;
  let showReadme = false;
  let readmeHtml = "";
  function openReadme(){ readmeHtml = marked.parse(goatReadmeRaw); showReadme = true; if(typeof document!=='undefined') document.body.style.overflow='hidden'; }
  function closeReadme(){ showReadme = false; if(typeof document!=='undefined') document.body.style.overflow=''; }
  function handleKeydown(e){ if(e.key==='Escape' && showReadme) closeReadme(); }
  const LARAVEL_PATH = "M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z";
  onMount(() => {
    const W = 500, H = 520;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    const scale = 9;
    const ox = (W - 50 * scale) / 2;
    const oy = (H - 52 * scale) / 2;
    ctx.translate(ox, oy);
    ctx.scale(scale, scale);
    ctx.fillStyle = '#fff';
    ctx.fill(new Path2D(LARAVEL_PATH));
    const img = ctx.getImageData(0, 0, W, H);
    const rows = Math.round(cols * 0.58);
    const cellW = W / cols, cellH = H / rows;
    const stars = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const px = Math.floor(x * cellW + cellW/2);
        const py = Math.floor(y * cellH + cellH/2);
        const a = img.data[(py * W + px) * 4 + 3];
        if (a > 40) stars.push({ x, y });
      }
    }
    logoStars = stars;
  });
</script>

<header class="header">
  <div class="header-inner">
    <a class="brand" href="/" aria-label="Home">
      <span class="brand-star">*</span>
      <span class="brand-text">laravel-packages</span>
    </a>
    <nav class="nav" aria-label="Main navigation">
      <a href="#packages">Packages</a>
      <a href="https://packagist.org" target="_blank" rel="noreferrer">Packagist</a>
      <a href="https://github.com/CodeWithTeds" target="_blank" rel="noreferrer">GitHub</a>
      <a class="nav-cta" href="https://github.com/CodeWithTeds/meehh" target="_blank" rel="noreferrer">Get Started</a>
    </nav>
  </div>
</header>

<div class="page">
  <aside class="left">
    <div class="logo" style="--cols:{cols}">
      {#each logoStars as s}
        <span style="grid-column:{s.x+1};grid-row:{s.y+1}">*</span>
      {/each}
    </div>
    <h1>This website is for devs and contains packages that they need.</h1>
    <p>Curated Laravel packages, tools and resources — built for developers, by developers. Find, compare and install the packages you need.</p>
    <div class="verify">
      <a href="https://packagist.org/" target="_blank" rel="noreferrer" class="icon-btn nobg" aria-label="Packagist.org">
        <svg viewBox="0 0 24 24" class="size-10" fill="white" aria-hidden="true"><path d={siPackagist.path}/></svg>
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer" class="icon-btn github" aria-label="GitHub">
        <svg viewBox="0 0 24 24" class="size-10" fill="white" aria-hidden="true"><path d={siGithub.path}/></svg>
      </a>
      <a href="https://opensource.org/license/mit" target="_blank" rel="noreferrer" class="icon-btn mit" aria-label="MIT License">
        <Scale class="size-10 text-white" />
      </a>
    </div>
  </aside>
  <main class="main">
    <div id="packages" class="packages">
      <!-- Package 1: meehh/laravel-goat -->
      <article class="pkg">
        <div class="pkg-media">
          <video src={goatVideo} autoplay muted loop playsinline preload="auto" aria-label="laravel-goat goat animation"></video>
        </div>
        <div class="pkg-body">
          <div class="pkg-head">
            <a class="pkg-title" href="https://github.com/CodeWithTeds/meehh" target="_blank" rel="noreferrer">meehh/laravel-goat</a>
            <span class="pkg-meta">MIT · Owned by Prof Alex / TE-AD</span>
          </div>
          <p class="pkg-desc">
            <span class="pkg-cmd">composer require meehh/laravel-goat</span> is a Laravel feature generator that transforms your schema into complete boilerplate including migrations, models, controllers, and API routes.
          </p>
          <div class="pkg-links">
            <div class="links-left">
              <a href="https://packagist.org/packages/meehh/laravel-goat" target="_blank" rel="noreferrer">packagist.org</a>
              <a href="https://github.com/CodeWithTeds/meehh" target="_blank" rel="noreferrer">github.com/CodeWithTeds/meehh</a>
            </div>
          </div>
        </div>
      </article>

      <!-- Package 2: Emergency Response Routing -->
      <article class="pkg">
        <div class="pkg-media">
          <video src={fastestVideo} autoplay muted loop playsinline preload="auto" aria-label="Emergency Response Routing animation"></video>
        </div>
        <div class="pkg-body">
          <div class="pkg-head">
            <a class="pkg-title" href="https://github.com/CodeWithTeds/Shortest-Path-Optimization" target="_blank" rel="noreferrer">Emergency Response Routing</a>
          </div>
          <p class="pkg-desc">
            Building a first-of-its-kind offline 3D navigation system for emergency response—designed to work where there's no internet. It combines detailed 3D maps with smart routing, giving responders reliable guidance when every second counts.
          </p>
          <div class="pkg-links">
            <div class="links-left">
              <a href="https://github.com/CodeWithTeds/Shortest-Path-Optimization" target="_blank" rel="noreferrer">github.com/CodeWithTeds/Shortest-Path-Optimization</a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </main>
</div>

<style>
  :global(body){margin:0;background:#000}
  :global(html){scroll-behavior:smooth}
  .header{
    height: 56px;
    min-height: 56px;
    background: #000;
    border-bottom: 1px solid #161616;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 50;
  }
  .header-inner{
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  .brand{
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #fff;
    font-family: "Instrument Sans", sans-serif;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }
  .brand-star{
    color: #FF2D20;
    font-family: monospace;
    font-size: 18px;
    line-height: 1;
    text-shadow: 0 0 8px #FF2D20, 0 0 14px rgba(255,45,32,0.6);
  }
  .brand-text{ color: #fff; }
  .nav{
    display: flex;
    align-items: center;
    gap: 22px;
  }
  .nav a{
    font-family: "Instrument Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #a1a1aa;
    text-decoration: none;
    transition: color 0.15s;
    white-space: nowrap;
  }
  .nav a:hover{ color: #fff; }
  .nav-cta{
    color: #fff !important;
    background: #FF2D20;
    border: 1px solid #FF2D20;
    border-radius: 999px;
    padding: 7px 16px;
    font-weight: 500;
    font-size: 13px;
    line-height: 1;
    transition: background 0.15s, border-color 0.15s, opacity 0.15s;
  }
  .nav-cta:hover{
    background: #ff4d3a;
    border-color: #ff4d3a;
  }
  .page{
    height: calc(100svh - 56px);
    display:flex;
    background:#000;
  }
  .left{
    width: 30%;
    min-width: 320px;
    background:#000;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding: 36px 32px;
    gap: 24px;
    border-right: 1px solid #111;
  }
  .logo{
    display:grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    width: 100%;
    max-width: 380px;
    align-self:center;
    margin-inline:auto;
    font-family: monospace;
    font-size: 15px;
    line-height:1;
    color:#FF2D20;
    text-shadow: 0 0 8px #FF2D20, 0 0 18px rgba(255,45,32,0.65);
  }
  .logo span{ text-align:center; }
  h1{
    font-family: "Instrument Sans", sans-serif;
    font-size: 34px;
    font-weight: 400;
    line-height: 1.15;
    color:#fff;
    margin:0;
    letter-spacing: -0.02em;
    text-align:center;
  }
  p{
    font-family: "Instrument Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    color: rgba(255,255,255,0.62);
    margin:0;
    text-align:center;
  }
  .verify{
    display:flex;
    flex-wrap:wrap;
    gap: 10px;
    margin-top: 4px;
    align-items:center;
    justify-content:center;
  }
  .icon-btn{
    display:grid;
    place-items:center;
    width: 64px;
    height: 64px;
    background: transparent;
    border: none;
    color: #fff;
    text-decoration:none;
  }
  .icon-btn .size-10{ width: 40px; height: 40px; }
  .main{
    width: 70%;
    background:#050507;
    overflow-y:auto;
    padding: 56px 0;
    display:flex;
    flex-direction:column;
    border-left: 1px solid #161616;
  }
  .packages{
    display:flex;
    flex-direction:column;
    gap: 0;
    max-width: none;
    width: 100%;
    margin: 0;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    border-top: none;
  }
  .pkg{
    display:grid;
    grid-template-columns: 220px 1fr;
    gap: 20px;
    align-items: center;
  }
  .pkg-media{
    display:grid;
    place-items:center;
    padding-top: 0;
  }
  .pkg-media video{
    width: 220px;
    height: 220px;
    object-fit: contain;
    display:block;
    image-rendering: pixelated;
    filter: drop-shadow(0 0 14px rgba(255,255,255,0.08));
  }
  .pkg-body{
    display:flex;
    flex-direction:column;
    gap: 12px;
    min-width:0;
  }
  .pkg-head{
    display:flex;
    flex-wrap:wrap;
    align-items:baseline;
    gap: 10px 14px;
  }
  .pkg-title{
    font-family: "Instrument Sans", sans-serif;
    font-size: 22px;
    font-weight: 600;
    color:#FF2D20;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1.5px;
    line-height:1.2;
  }
  .pkg-title:hover{ color:#ff4d3a; }
  .pkg-meta{
    font-family: "Instrument Sans", sans-serif;
    font-size: 13px;
    color: #7a7a85;
    font-weight:400;
    white-space:nowrap;
  }
  .pkg-desc{
    font-family: "Instrument Sans", sans-serif;
    font-size: 17px;
    line-height:1.55;
    color: #a1a1aa;
    text-align:left;
    margin:0;
  }
  .pkg-cmd{
    color:#cbd5e1;
    font-weight:500;
  }
  .pkg-links{
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    gap: 14px 16px;
    margin-top: 8px;
  }
  .links-left{
    display:flex;
    flex-wrap:wrap;
    gap: 18px 22px;
    align-items:center;
  }
  .links-left a{
    font-family: "Instrument Sans", sans-serif;
    font-size: 14px;
    color:#8b8b93;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: #3a3a3f;
  }
  .links-left a:hover{ color:#cbd5e1; text-decoration-color:#cbd5e1; }


  @media (max-width: 1100px){
    .pkg{ grid-template-columns: 190px 1fr; gap: 16px; }
    .pkg-media video{ width: 190px; height:190px; }
    .main{ padding: 40px 0; }
  }
  @media (max-width: 860px){
    .header-inner{ padding: 0 16px; }
    .nav{ gap: 14px; }
    .nav a{ font-size: 13px; }
    .nav a:not(.nav-cta){ display: none; }
    .page{ flex-direction: column; height:auto; min-height:calc(100svh - 56px); }
    .left{ width:100%; min-width:0; border-right:none; border-bottom:1px solid #161616; }
    .main{ width:100%; overflow:visible; padding: 28px 0; }
    .pkg{ grid-template-columns: 1fr; padding: 0 16px; }
    .packages{ padding-left: 0; padding-right: 0; }
    .pkg-media{ justify-items:center; }
    .pkg-media video{ width: 220px; height:220px; }
    .pkg-desc{ text-align:left; }
  }
</style>
