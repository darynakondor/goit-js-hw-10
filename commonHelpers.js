import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as y,i as S}from"./assets/vendor-77e16229.js";const a=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let r=null,d=null;const c={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],b()}};y(a,c);function p(){e.disabled=!0}p();function b(){c.defaultDate>r?(S.error({icon:"",message:"Please choose a date in the future",position:"topRight"}),e.disabled=!0):e.disabled=!1}function D(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}e.addEventListener("click",()=>{g()});function u({days:t,hours:n,minutes:s,seconds:i}){o.days.textContent=String(t).padStart(2,"0"),o.hours.textContent=String(n).padStart(2,"0"),o.minutes.textContent=String(s).padStart(2,"0"),o.seconds.textContent=String(i).padStart(2,"0")}function g(){d=setInterval(()=>{const t=r-new Date;if(t<=0)clearInterval(d),u({days:0,hours:0,minutes:0,seconds:0}),a.disabled=!1;else{const n=D(t);u(n),a.disabled=!0,e.disabled=!0}},1e3)}
//# sourceMappingURL=commonHelpers.js.map
