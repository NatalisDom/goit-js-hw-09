const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");e.addEventListener("click",(function(){n=setInterval((function(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(n),t.disabled=!0,e.disabled=!1})),t.disabled=!0;let n=null;
//# sourceMappingURL=01-color-switcher.d7500f34.js.map
