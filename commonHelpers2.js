import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const l=document.querySelector(".form");l.addEventListener("submit",function(e){e.preventDefault();const t=parseInt(this.elements.delay.value),o=this.elements.state.value;new Promise((i,n)=>{setTimeout(()=>{o==="fulfilled"?i(t):n(t)},t)}).then(m).catch(c)});function m(e){s.success({icon:"",close:!1,message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}function c(e){s.error({icon:"",close:!1,message:`❌ Rejected promise in ${e}ms`,position:"topRight"})}
//# sourceMappingURL=commonHelpers2.js.map
