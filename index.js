import{S as l,i as a}from"./assets/vendor-Dg3uDB0e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function u(t){const o="49395214-508d98637227ed6d41be849b6",s="https://pixabay.com/api/",n=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});try{const e=await fetch(`${s}?${n}`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){throw e}}function d(t){return t.map(({webformatURL:o,largeImageURL:s,tags:n,likes:e,views:r,comments:i,downloads:c})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img 
              class="gallery-image" 
              src="${o}" 
              alt="${n}" 
              loading="lazy"
            />
            <div class="image-info">
              <p class="info-item">
                <b>Likes</b>
                ${e}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${r}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${i}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${c}
              </p>
            </div>
          </a>
        </li>
      `).join("")}function f(t){t.innerHTML=""}function m(t){t.classList.remove("hidden")}function h(t){t.classList.add("hidden")}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".form"),o=document.querySelector(".gallery"),s=document.querySelector(".loader");let n=new l(".gallery a",{captionsData:"alt",captionDelay:250});t.addEventListener("submit",e=>{e.preventDefault();const r=e.target.elements.searchQuery.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}f(o),m(s),u(r).then(i=>{if(i.hits.length===0){a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}o.innerHTML=d(i.hits),n.refresh()}).catch(i=>{a.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.error(i)}).finally(()=>{h(s),e.target.reset()})})});
//# sourceMappingURL=index.js.map
