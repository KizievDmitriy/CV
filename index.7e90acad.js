!function(){const e=document.querySelector(".burger"),t=document.querySelector(".navrr"),n=document.querySelector("body");e.addEventListener("click",(function(){e.classList.toggle("toggled"),t.classList.toggle("show"),n.classList.toggle("overflow")}));new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});!function(e,t){let n=e.innerHTML;e.innerHTML="";var o=0,r=setInterval((function(){o<n.length?(e.append(n.charAt(o)),o++):clearInterval(r)}),t)}(document.querySelector(".tittle-p"),150)}();
//# sourceMappingURL=index.7e90acad.js.map
