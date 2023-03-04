(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7484:function(t){var e,n,r,i,s,a,u,o,c,d,h,l,f,m,_,p,M,$,y,v,D;t.exports=(e="millisecond",n="second",r="minute",i="hour",s="week",a="month",u="quarter",o="year",c="date",d="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},(_={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},p=function(t){return t instanceof v},M=function t(e,n,r){var i;if(!e)return m;if("string"==typeof e){var s=e.toLowerCase();_[s]&&(i=s),n&&(_[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;_[u]=e,i=u}return!r&&i&&(m=i),i||!r&&m},$=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},(y={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:o,w:s,d:"day",D:c,h:i,m:r,s:n,ms:e,Q:u})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=M,y.i=p,y.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},D=(v=function(){function t(t){this.$L=M(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return this.$d.toString()!==d},f.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return $(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<$(t)},f.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var u=this,d=!!y.u(e)||e,h=y.p(t),l=function(t,e){var n=y.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return d?n:n.endOf("day")},f=function(t,e){return y.w(u.toDate()[t].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},m=this.$W,_=this.$M,p=this.$D,M="set"+(this.$u?"UTC":"");switch(h){case o:return d?l(1,0):l(31,11);case a:return d?l(1,_):l(0,_+1);case s:var $=this.$locale().weekStart||0,v=(m<$?m+7:m)-$;return l(d?p-v:p+(6-v),_);case"day":case c:return f(M+"Hours",0);case i:return f(M+"Minutes",1);case r:return f(M+"Seconds",2);case n:return f(M+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,s){var u,d=y.p(t),h="set"+(this.$u?"UTC":""),l=((u={}).day=h+"Date",u[c]=h+"Date",u[a]=h+"Month",u[o]=h+"FullYear",u[i]=h+"Hours",u[r]=h+"Minutes",u[n]=h+"Seconds",u[e]=h+"Milliseconds",u)[d],f="day"===d?this.$D+(s-this.$W):s;if(d===a||d===o){var m=this.clone().set(c,1);m.$d[l](f),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,e){var u,c=this;t=Number(t);var d=y.p(e),h=function(e){var n=$(c);return y.w(n.date(n.date()+Math.round(e*t)),c)};if(d===a)return this.set(a,this.$M+t);if(d===o)return this.set(o,this.$y+t);if("day"===d)return h(1);if(d===s)return h(7);var l=((u={})[r]=6e4,u[i]=36e5,u[n]=1e3,u)[d]||1,f=this.$d.getTime()+t*l;return y.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},f=function(t){return y.s(s%12||12,t,"0")},m=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:y.s(u+1,2,"0"),MMM:h(n.monthsShort,u,c,3),MMMM:h(c,u),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:y.s(s,2,"0"),h:f(1),hh:f(2),a:m(s,a,!0),A:m(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return r.replace(l,function(t,e){return e||_[t]||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,c){var d,h=y.p(e),l=$(t),f=(l.utcOffset()-this.utcOffset())*6e4,m=this-l,_=y.m(this,l);return _=((d={})[o]=_/12,d[a]=_,d[u]=_/3,d[s]=(m-f)/6048e5,d.day=(m-f)/864e5,d[i]=m/36e5,d[r]=m/6e4,d[n]=m/1e3,d)[h]||m,c?_:y.a(_)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return _[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,$.prototype=D,[["$ms",e],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",a],["$y",o],["$D",c]].forEach(function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),$.extend=function(t,e){return t.$i||(t(e,v,$),t.$i=!0),$},$.locale=M,$.isDayjs=p,$.unix=function(t){return $(1e3*t)},$.en=_[m],$.Ls=_,$.p={},$)},9132:function(t,e,n){var r,i;t.exports=(r=n(7484),i={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(t){return t},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(t){return t<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}},(r&&"object"==typeof r&&"default"in r?r:{default:r}).default.locale(i,null,!0),i)},6607:function(t){t.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var s=n(t),a=n(e),u="("===(i=i||"()")[0],o=")"===i[1];return(u?this.isAfter(s,r):!this.isBefore(s,r))&&(o?this.isBefore(a,r):!this.isAfter(a,r))||(u?this.isBefore(s,r):!this.isAfter(s,r))&&(o?this.isAfter(a,r):!this.isBefore(a,r))}}},8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4549)}])},4549:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return S}});var r=n(5893),i=n(9008),s=n.n(i),a=n(3915),u=n.n(a),o=n(7294),c=n(7484),d=n.n(c),h=n(6607),l=n.n(h);n(9132),d().extend(l()),d().locale("ko");let f=()=>{let[t,e]=(0,o.useState)(""),{current:n}=(0,o.useRef)(d()());return(0,o.useEffect)(()=>{n.isBetween(d()("00:00:00","HH:mm:ss"),d()("10:00:00","HH:mm:ss"))?e("오늘 점심 빠르게 주문해봐요!"):n.isBetween(d()("10:00:00","HH:mm:ss"),d()("14:00:00","HH:mm:ss"))?e("오늘 저녁 빠르게 주문해봐요!"):e("내일 점심 미리 주문해봐요!")},[n]),{orderMent:t,today:n}};var m=n(5383),_=n.n(m);let p=()=>{let{orderMent:t}=f();return(0,r.jsxs)("div",{className:_().fastOrderWrapper,children:[(0,r.jsx)("h2",{children:"Fast 주문"}),(0,r.jsx)("p",{children:t})]})};var M=n(7919),$=n.n(M);d().locale("ko");let y=t=>{let e=d()().day();switch(e){case 0:return"일";case 1:return"월";case 2:return"화";case 3:return"수";case 4:return"목";case 5:return"금";case 6:return"토"}},v=t=>Number(d()(t).format("HHmm")),D=()=>{let[t,e]=(0,o.useState)(""),n=()=>{let t=()=>{let t=new Date,r=t.getMinutes(),i=new Date(t);r<30?i.setMinutes(30):(i.setHours(i.getHours()+1),i.setMinutes(0)),i.setSeconds(0);let s=i.getTime()-t.getTime();if(s<=0){clearInterval(n),console.log("카운트다운 종료");return}e("".concat(Math.floor(s/6e4),"분 ").concat(Math.floor(s/1e3%60),"초 남음"))},n=setInterval(t,1e3)};return{timer:n,countdownTime:t}},w=t=>{let{method:e}=t,{timer:n,countdownTime:r}=D(),[i,s]=(0,o.useState)({name:"",description:""}),{current:a}=(0,o.useRef)(v());(0,o.useEffect)(()=>{u()},[]);let u=()=>{let t=y();switch(t){case"월":case"화":case"수":case"목":case"금":c(!0,"weekday");break;case"토":c(!1,"saturday");break;case"일":c(!0,"sunday")}},c=(t,r)=>{switch(e){case"parcel":t&&a>=1130&&a<1700&&n(),"weekday"===r?s({name:"택배주문",description:"택배 주문 17시까지 주문 시 당일 발송"}):"saturday"===r?s({name:"택배주문",description:"택배 주문 화요일 발송"}):"sunday"===r&&s({name:"택배주문",description:"택배 주문 17시까지 주문 시 화요일 발송"});break;case"morning":t&&a>=1630&&a<1700&&n(),"weekday"===r?s({name:"새벽주문",description:"새벽 주문 17시까지 주문 시 다음날 새벽 7시 전 도착"}):"sunday"===r?s({name:"새벽주문",description:"새벽 주문 화요일 새벽 7시 전 도착"}):"saturday"===r&&s({name:"새벽주문",description:"새벽 주문 17시까지 주문 시 화요일 새벽 7시 전 도착"})}};return{deliveryInfo:i,countdownTime:r}},g=t=>{let{deliveryType:e}=t,{deliveryInfo:n,countdownTime:i}=w({method:e});return(0,r.jsx)("div",{className:$().deliveryCardItem,children:i?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:n.name}),(0,r.jsx)("p",{children:i})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:n.name}),(0,r.jsx)("p",{children:n.description})]})})},Y=()=>(0,r.jsx)("div",{className:$().deliveryCardWrapper,children:["parcel","morning"].map((t,e)=>(0,r.jsx)(g,{deliveryType:t},t+e))});function S(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{className:u().main,children:(0,r.jsxs)("div",{className:u().home,children:[(0,r.jsx)(p,{}),(0,r.jsx)(Y,{})]})})]})}},7919:function(t){t.exports={deliveryCardWrapper:"DeliveryCard_deliveryCardWrapper__YlsaO",deliveryCardItem:"DeliveryCard_deliveryCardItem__C5KLK"}},5383:function(t){t.exports={fastOrderWrapper:"FastOrder_fastOrderWrapper__mN_GL"}},3915:function(t){t.exports={main:"Home_main__EtNt2",home:"Home_home__5N3iB"}},9008:function(t,e,n){t.exports=n(3121)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);