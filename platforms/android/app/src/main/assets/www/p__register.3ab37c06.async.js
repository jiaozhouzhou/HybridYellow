(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"+cRp":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return w}));n("HVTF");var a=n("OT5E"),r=n("vDqi"),o=n.n(r),i=n("9kvl"),s=n("ShuE"),c=n("gjeX"),u=n.n(c),d=n("p58V"),l=n("vwip"),p=n("NFKh"),f=!1;function h(e,t,n){var a="",r=t,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(r=Math.round(Math.random()*(n-t))+t);for(var i=0;i<r;i++)a+=o[Math.round(Math.random()*(o.length-1))];return a}var m=window.baseUrl,b=o.a.create({baseURL:m,timeout:6e4});b.interceptors.request.use((function(t){t.loading&&(a["a"].loading("\u52a0\u8f7d\u4e2d..."),f=!0),Object(s["c"])(t),Object(s["a"])(t),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var n=e.store.getState().user.token;n&&(t.headers["userId"]=n.userId,n.accessToken&&(t.headers["token"]=n.accessToken));var r=t.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(r).map((function(e){return e+"="+r[e]})),c=(i=i.concat(["qid="+h(!1,16),"terminal=h5"]).sort()).join("&"),d="sign="+u()(c+o);return t.data=c+"&"+d,t}),(function(e){return e}));var g=p.enc.Utf8.parse("jH5%!i%eDAEW@#@$"),v=p.enc.Utf8.parse("jfdkwqew!#S#$%78");function y(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=l["a"].get(e);return!o||200!==o.code||Array.isArray(o.data)&&0===o.data.length?t(...a).then(t=>(l["a"].set(e,t,a[2]),t)).catch((function(e){return e})):o}b.interceptors.response.use((function(t){var n;if(Object(s["c"])(t),window.encry){var r=p.AES.decrypt(t.data,g,{iv:v,padding:p.pad.Pkcs7}).toString(p.enc.Utf8);n=JSON.parse(r)}else n=t.data;var o=e.store,c=o.dispatch,u=o.getState;if(200==n.code||-97==n.code)return f&&a["a"].hide(),f=!1,n;if(-1==n.code)a["a"].info(n.data);else if(-98==n.code)a["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),c(d["default"].LoggedOut()),i["a"].push("/login");else if(-99==n.code){c(d["default"].ClearAccessToken());var l=u().user.token;l&&b.post("api/user/applyToken",{refershToken:l.refershToken}).then(e=>{e&&(l.accessToken=e.data.accessToken,l.refershToken=e.data.refershToken,c(d["default"].UpdateToken(l)),location.reload())})}f=!1}),(function(e){if(a["a"].hide(),e.response)switch(e.response.status){case 404:a["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:a["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:a["a"].info("\u8fde\u63a5\u8d85\u65f6");break}f=!1})),t["a"]=b;var w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t[0],r=u.a.hex(a+"[POST]"+JSON.stringify(t));return y(r,b.post,...t)}}).call(this,n("yLpj"))},"/P0+":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a),o="XLJO";class i extends a["Component"]{constructor(e){super(e),this.Change=e=>{var t=e.target.value,n=this.props,a=n.reg,r=n.required,o=n.min,i=n.max;if(null===t)this.setState({text:t,verifyStatus:1}),this.props.bindValue&&this.props.bindValue(t,1);else if(r&&""===t||a&&!a.test(t)||t<o||t>i){var s=r&&""===t?"*\u5fc5\u586b\u9879\u4e0d\u80fd\u4e3a\u7a7a":this.props.errorMag;if(a&&!r)return this.setState({text:t,border:"",verifyStatus:1,errorMag:s}),void(this.props.bindValue&&this.props.bindValue(t,1));this.setState({text:t,border:"error",verifyStatus:3,errorMag:s}),this.props.bindValue&&this.props.bindValue(t,3)}else r||a||t>=o||t<=i?(this.setState({text:t,border:"success",verifyStatus:2,errorMag:""}),this.props.bindValue&&this.props.bindValue(t,2)):(this.setState({text:t}),this.props.bindValue&&this.props.bindValue(t))},this.onFocus=()=>{1===this.state.verifyStatus&&this.setState({border:"fource"})},this.onBlur=()=>{this.state.verifyStatus},this.state={text:this.props.value,border:this.props.style&&this.props.style.borderColor?this.props.style.borderColor:"default",verifyStatus:1,errorMag:""}}componentDidMount(){}render(){return r.a.createElement("div",{className:"inputBox",key:"".concat(o,"11")},r.a.createElement("input",{type:this.props.password?"password":"text",value:this.props.value,defaultValue:this.props.defaultValue,className:"input ".concat(this.props.className," ").concat(this.state.border),placeholder:this.props.placeholder,onChange:this.Change,onFocus:this.onFocus,onBlur:this.onBlur,key:"".concat(o,"21")}),this.props.required||this.props.reg?r.a.createElement("p",{className:"errorMsg ".concat(this.props.ErrorClass),key:"".concat(o,"31")},this.state.errorMag):null,this.props.rightCon?r.a.createElement("div",{className:"RightCon",key:"".concat(o,"12")},this.props.rightCon):null)}}},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"7c/T":function(e,t,n){"use strict";n.r(t);n("XGli");var a,r=n("NHyu"),o=(n("HVTF"),n("OT5E")),i=n("o0o1"),s=n.n(i),c=n("HaE+"),u=n("q1tI"),d=n.n(u),l=n("9kvl"),p=n("G8a/"),f=n.n(p),h=n("Nlzp"),m=n("p58V"),b=n("/MKj"),g=n("/P0+"),v="IHOl";class y extends u["Component"]{constructor(e){var t;super(e),t=this,this.handleSendCode=Object(c["a"])(s.a.mark((function e(){var n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.time){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(h["f"])({phone:t.state.phone,codeType:1});case 4:n=e.sent,n&&t.timer(60);case 6:case"end":return e.stop()}}),e)}))),this.timer=e=>{e>0?(e--,this.time=e,this.setState({time:e}),a=setTimeout(()=>this.timer(e),1e3)):a&&(clearTimeout(a),a=null)},this.bindValue=e=>function(){var n=Object(c["a"])(s.a.mark((function n(a,r){var o,i;return s.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:o={},i=t.state.verifyData,o[e]=a,i[e]=r,o["verifyData"]=i,t.setState(o),"phone"==e&&2==r&&t.getVerifyCode(a);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),this.getVerifyCode=function(){var e=Object(c["a"])(s.a.mark((function e(n){var a,r;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="string"==typeof n?n:t.state.phone,e.next=3,Object(h["g"])({phone:a,codeType:1});case 3:r=e.sent,r&&t.setState({verifyImg:r.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.submitform=Object(c["a"])(s.a.mark((function e(){var n,a,r,i,c,u;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,a=n.phone,r=n.passWd,i=n.code,c=n.spreadId,e.next=3,Object(h["C"])({phone:a,passWd:r,code:i,spreadId:c});case 3:if(u=e.sent,!u){e.next=12;break}if(o["a"].info("\u606d\u559c\u60a8\uff01\u6ce8\u518c\u6210\u529f"),t.props.dispatch(m["default"].LoggedIn(u.data,a)),l["a"].push("/user"),!t.props.location.query.c){e.next=10;break}return e.abrupt("return",location.href="https://ly.wzwtsdn.com/");case 10:e.next=13;break;case 12:t.getVerifyCode(a);case 13:case"end":return e.stop()}}),e)}))),this.state={phone:"",passWd:"",code:"",spreadId:this.props.location.query.c||"",verifyImg:"",verifyData:{},time:0}}componentWillMount(){this.getVerifyCode("13444444444")}componentWillUnmount(){clearTimeout(a)}render(){var e=this.state,t=e.phone,n=e.passWd,a=e.code,o=e.spreadId,i=e.verifyData,s=e.verifyImg;return d.a.createElement("form",{className:f.a.loginAndRegister,key:"".concat(v,"11")},d.a.createElement("div",{className:f.a.itemli,key:"".concat(v,"21")},d.a.createElement("p",{className:f.a.left,key:"".concat(v,"31")},"\u624b\u673a\u53f7"),d.a.createElement(g["a"],{value:t,bindValue:this.bindValue("phone"),placeholder:"\u624b\u673a\u53f7\u7801",required:!0,reg:/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][2-9])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,errorMag:"\u65e0\u6548\u7684\u624b\u673a\u53f7\u7801",className:f.a.input,ErrorClass:f.a.error,key:"".concat(v,"41")})),d.a.createElement("div",{className:f.a.itemli,key:"".concat(v,"22")},d.a.createElement("p",{className:f.a.left,key:"".concat(v,"32")},"\u5bc6\u7801"),d.a.createElement(g["a"],{value:n,bindValue:this.bindValue("passWd"),placeholder:"6-32\u4e2a\u5b57\u6bcd\u6570\u5b57\u7ec4\u5408\u7684\u5bc6\u7801",password:!0,required:!0,reg:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,32}$/,errorMag:"\u5bc6\u7801\u683c\u5f0f\u4e0d\u6b63\u786e",className:f.a.input,ErrorClass:f.a.error,key:"".concat(v,"42")})),d.a.createElement("div",{className:f.a.itemli,key:"".concat(v,"23")},d.a.createElement("p",{className:f.a.left,key:"".concat(v,"33")},"\u9a8c\u8bc1\u7801"),d.a.createElement(g["a"],{value:a,bindValue:this.bindValue("code"),required:!0,reg:/\d{4}$/,placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",className:f.a.input,ErrorClass:f.a.error,key:"".concat(v,"43")}),s?d.a.createElement("img",{src:s,onClick:this.getVerifyCode,title:"\u70b9\u51fb\u5237\u65b0",key:"".concat(v,"51")}):null),d.a.createElement("div",{className:f.a.itemli,key:"".concat(v,"24")},d.a.createElement("p",{className:f.a.left,key:"".concat(v,"34")},"\u63a8\u5e7f\u7801"),d.a.createElement(g["a"],{value:o,bindValue:this.bindValue("spreadId"),placeholder:"\u53ef\u4e0d\u586b",reg:/\d{4}$/,className:f.a.input,key:"".concat(v,"44")})),d.a.createElement(r["a"],{onClick:this.submitform,disabled:2!=i.phone||2!=i.code||2!=i.passWd,className:"btn_submit",key:"".concat(v,"61")},"\u6ce8\u518c"))}}t["default"]=Object(b["b"])()(y)},BSlI:function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,'.am-button {\n  display: block;\n  outline: 0 none;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  padding: 0;\n  text-align: center;\n  font-size: 4.8vw;\n  height: 12.5333333vw;\n  line-height: 12.5333333vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  white-space: nowrap;\n  color: #000;\n  background-color: #fff;\n  border: 1PX solid #ddd;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button {\n  font-size: 0.48rem;\n  height: 1.2533333rem;\n  line-height: 1.2533333rem;\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #ddd;\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-borderfix:before {\n  transform: scale(0.49) !important;\n}\n.am-button.am-button-active {\n  background-color: #ddd;\n}\n.am-button.am-button-disabled {\n  color: rgba(0, 0, 0, 0.3);\n  opacity: 0.6;\n}\n.am-button-primary {\n  color: #fff;\n  background-color: #108ee9;\n  border: 1PX solid #108ee9;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button-primary {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-primary {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-primary::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-primary::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-primary.am-button-active {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #0e80d2;\n}\n.am-button-primary.am-button-disabled {\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 0.4;\n}\n.am-button-ghost {\n  color: #108ee9;\n  background-color: transparent;\n  border: 1PX solid #108ee9;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button-ghost {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-ghost::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-ghost.am-button-active {\n  color: rgba(16, 142, 233, 0.6);\n  background-color: transparent;\n  border: 1PX solid rgba(16, 142, 233, 0.6);\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button-ghost.am-button-active {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost.am-button-active {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost.am-button-active::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid rgba(16, 142, 233, 0.6);\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-ghost.am-button-active::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-ghost.am-button-disabled {\n  color: rgba(0, 0, 0, 0.1);\n  border: 1PX solid rgba(0, 0, 0, 0.1);\n  border-radius: 1.3333333vw;\n  opacity: 1;\n}[data-rem="true"] .am-button-ghost.am-button-disabled {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost.am-button-disabled {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost.am-button-disabled::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid rgba(0, 0, 0, 0.1);\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-ghost.am-button-disabled::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-warning {\n  color: #fff;\n  background-color: #e94f4f;\n}\n.am-button-warning.am-button-active {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #d24747;\n}\n.am-button-warning.am-button-disabled {\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 0.4;\n}\n.am-button-inline {\n  display: inline-block;\n  padding: 0 4vw;\n}[data-rem="true"] .am-button-inline {\n  padding: 0 0.4rem\n}\n.am-button-inline.am-button-icon {\n  display: inline-flex;\n}\n.am-button-small {\n  font-size: 3.4666667vw;\n  height: 8vw;\n  line-height: 8vw;\n  padding: 0 4vw;\n}[data-rem="true"] .am-button-small {\n  font-size: 0.3466667rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  padding: 0 0.4rem\n}\n.am-button-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.am-button > .am-button-icon {\n  margin-right: 0.5em;\n}\n',""]),e.exports=t},NHyu:function(e,t,n){"use strict";var a=n("QbLZ"),r=n.n(a),o=n("YEIV"),i=n.n(o),s=n("iCc5"),c=n.n(s),u=n("V7oC"),d=n.n(u),l=n("FYw3"),p=n.n(l),f=n("mRg0"),h=n.n(f),m=n("TSYQ"),b=n.n(m),g=n("q1tI"),v=n("uJlo"),y=n("2ROE"),w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},k=/^[\u4e00-\u9fa5]{2}$/,x=k.test.bind(k);function E(e){return"string"===typeof e}function S(e){return E(e.type)&&x(e.props.children)?g["cloneElement"](e,{},e.props.children.split("").join(" ")):E(e)?(x(e)&&(e=e.split("").join(" ")),g["createElement"]("span",null,e)):e}var O=function(e){function t(){return c()(this,t),p()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h()(t,e),d()(t,[{key:"render",value:function(){var e,t=this.props,n=t.children,a=t.className,o=t.prefixCls,s=t.type,c=t.size,u=t.inline,d=t.disabled,l=t.icon,p=t.loading,f=t.activeStyle,h=t.activeClassName,m=t.onClick,k=w(t,["children","className","prefixCls","type","size","inline","disabled","icon","loading","activeStyle","activeClassName","onClick"]),x=p?"loading":l,E=b()(o,a,(e={},i()(e,o+"-primary","primary"===s),i()(e,o+"-ghost","ghost"===s),i()(e,o+"-warning","warning"===s),i()(e,o+"-small","small"===c),i()(e,o+"-inline",u),i()(e,o+"-disabled",d),i()(e,o+"-loading",p),i()(e,o+"-icon",!!x),e)),O=g["Children"].map(n,S),C=void 0;if("string"===typeof x)C=g["createElement"](y["a"],{"aria-hidden":"true",type:x,size:"small"===c?"xxs":"md",className:o+"-icon"});else if(x){var T=x.props&&x.props.className,N=b()("am-icon",o+"-icon","small"===c?"am-icon-xxs":"am-icon-md");C=g["cloneElement"](x,{className:T?T+" "+N:N})}return g["createElement"](v["a"],{activeClassName:h||(f?o+"-active":void 0),disabled:d,activeStyle:f},g["createElement"]("a",r()({role:"button",className:E},k,{onClick:d?void 0:m,"aria-disabled":d}),C,O))}}]),t}(g["Component"]);O.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,activeStyle:{}},t["a"]=O},Nlzp:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"y",(function(){return o})),n.d(t,"C",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"k",(function(){return c})),n.d(t,"D",(function(){return u})),n.d(t,"N",(function(){return d})),n.d(t,"E",(function(){return l})),n.d(t,"M",(function(){return p})),n.d(t,"z",(function(){return f})),n.d(t,"H",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"p",(function(){return b})),n.d(t,"q",(function(){return g})),n.d(t,"h",(function(){return v})),n.d(t,"v",(function(){return y})),n.d(t,"x",(function(){return w})),n.d(t,"O",(function(){return k})),n.d(t,"w",(function(){return x})),n.d(t,"r",(function(){return E})),n.d(t,"j",(function(){return S})),n.d(t,"K",(function(){return O})),n.d(t,"L",(function(){return C})),n.d(t,"o",(function(){return T})),n.d(t,"n",(function(){return N})),n.d(t,"t",(function(){return I})),n.d(t,"d",(function(){return j})),n.d(t,"B",(function(){return V})),n.d(t,"s",(function(){return M})),n.d(t,"u",(function(){return P})),n.d(t,"I",(function(){return L})),n.d(t,"J",(function(){return D})),n.d(t,"i",(function(){return _})),n.d(t,"b",(function(){return z})),n.d(t,"l",(function(){return U})),n.d(t,"a",(function(){return A})),n.d(t,"F",(function(){return R})),n.d(t,"m",(function(){return F})),n.d(t,"e",(function(){return q})),n.d(t,"G",(function(){return J})),n.d(t,"A",(function(){return X}));var a=n("+cRp"),r=e=>a["a"].post("api/user/getVerifyCode",e),o=e=>a["a"].post("api/user/login",e,{loading:!0}),i=e=>a["a"].post("api/user/register",e,{loading:!0}),s=e=>a["a"].post("api/user/SendCode",e),c=e=>a["a"].post("api/user/forgetPass",e,{loading:!0}),u=e=>a["a"].post("api/user/resetPass",e,{loading:!0}),d=e=>a["a"].post("api/user/getRights",e),l=e=>a["a"].post("api/user/sendFeedback",e,{loading:!0}),p=e=>a["a"].post("api/user/getUserInfo",e),f=e=>a["a"].post("api/site/notice",e),h=e=>a["a"].post("api/site/moduleCfg",e),m=e=>Object(a["b"])("api/video/Home",e,6e4),b=e=>a["a"].post("api/video/getList",e),g=e=>Object(a["b"])("api/video/getList",e,6e4),v=e=>a["a"].post("api/video/VideoRecommon",e),y=e=>a["a"].post("api/video/getVideoInfo",e),w=e=>a["a"].post("api/video/getVideoRelation",e),k=e=>a["a"].post("api/video/watchingVideo",e),x=e=>a["a"].post("api/video/getVideoRank",e),E=e=>a["a"].post("api/video/getMoiveHis",e),S=e=>a["a"].post("api/video/discoveryPage",e),O=e=>a["a"].post("api/video/thematicList",e),C=e=>a["a"].post("api/video/thematicVideo",e),T=e=>a["a"].post("api/video/getGirlList",e),N=e=>a["a"].post("api/video/getGirlInfo",e),I=e=>a["a"].post("api/video/getSearchRank",e),j=e=>a["a"].post("api/recharge/PayConfig",e),V=e=>a["a"].post("api/recharge/pay",e,{loading:!0}),M=e=>a["a"].post("api/user/getOrder",e,{loading:!0}),P=e=>a["a"].post("api/user/getSpread",e),L=e=>a["a"].post("api/user/spreadInfo",e),D=e=>Object(a["b"])("api/site/spreadRules",e,864e5),_=e=>a["a"].post("api/fiction/getList",e),z=e=>a["a"].post("api/fiction/CartoonList",e),U=e=>a["a"].post("api/fiction/getChapter",e),A=e=>a["a"].post("api/fiction/CartoonInfo",e),R=e=>a["a"].post("api/fiction/setPraise",e),F=e=>a["a"].post("api/user/getFeedback",e),q=e=>a["a"].post("api/user/Reply",e),J=e=>a["a"].post("api/user/setReaded",e),X=e=>a["a"].post("api/video/pushVideoData",e)},ShuE:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return l}));var a=n("ODXe"),r=n("Qyje"),o=n.n(r),i=n("vDqi"),s=n.n(i),c=new Map,u=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{c.has(t)||c.set(t,e)})},d=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(c.has(t)){var n=c.get(t);n(t),c.delete(t)}},l=()=>{var e=!0,t=!1,n=void 0;try{for(var r,o=c[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value,s=Object(a["a"])(i,2),u=s[0],d=s[1];d(u)}}catch(l){t=!0,n=l}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}c.clear()}},TJML:function(e,t,n){var a=n("LboF"),r=n("BSlI");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},XGli:function(e,t,n){"use strict";n("ywh3"),n("D2jH"),n("TJML")},p58V:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return u})),n.d(t,"userInfo",(function(){return f})),n.d(t,"registerYB",(function(){return h})),n.d(t,"reducer",(function(){return w}));var a=n("VTBJ"),r=n("o0o1"),o=n.n(r),i=n("HaE+"),s=n("zyFE"),c=n("Nlzp"),u={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},d=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),l=d.Types,p=d.Creators;function f(e){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["M"])();case 2:a=e.sent,a&&t(p.UpdateUserInfo(a.data));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function h(){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}t["default"]=p;var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",t.payload,t.phone),Object.assign({},e,Object(a["a"])({loginInProgress:!1,loggedIn:!0,phone:t.phone},t.payload))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:t.payload})},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return t.token&&(t.token.accessToken=null),t},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:t.payload})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},w=Object(s["createReducer"])(u,{[l.LOGGED_IN]:m,[l.LOGGED_OUT]:y,[l.UPDATE_TOKEN]:b,[l.UPDATE_USER_INFO]:v,[l.CLEAR_ACCESS_TOKEN]:g})},uJlo:function(e,t,n){"use strict";var a=n("QbLZ"),r=n.n(a),o=n("iCc5"),i=n.n(o),s=n("V7oC"),c=n.n(s),u=n("FYw3"),d=n.n(u),l=n("mRg0"),p=n.n(l),f=n("q1tI"),h=n.n(f),m=n("TSYQ"),b=n.n(m),g=function(e){function t(){i()(this,t);var e=d()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(t){e.triggerEvent("TouchStart",!0,t)},e.onTouchMove=function(t){e.triggerEvent("TouchMove",!1,t)},e.onTouchEnd=function(t){e.triggerEvent("TouchEnd",!1,t)},e.onTouchCancel=function(t){e.triggerEvent("TouchCancel",!1,t)},e.onMouseDown=function(t){e.triggerEvent("MouseDown",!0,t)},e.onMouseUp=function(t){e.triggerEvent("MouseUp",!1,t)},e.onMouseLeave=function(t){e.triggerEvent("MouseLeave",!1,t)},e}return p()(t,e),c()(t,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,t,n){var a="on"+e,r=this.props.children;r.props[a]&&r.props[a](n),t!==this.state.active&&this.setState({active:t})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.disabled,a=e.activeClassName,o=e.activeStyle,i=n?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},s=h.a.Children.only(t);if(!n&&this.state.active){var c=s.props,u=c.style,d=c.className;return!1!==o&&(o&&(u=r()({},u,o)),d=b()(d,a)),h.a.cloneElement(s,r()({className:d,style:u},i))}return h.a.cloneElement(s,i)}}]),t}(h.a.Component),v=g;g.defaultProps={disabled:!1},n.d(t,"a",(function(){return v}))},vwip:function(e,t,n){"use strict";t["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,t,n){localStorage.removeItem(e);var a=(new Date).getTime(),r=n||this.age,o={};return o._value=t,o._time=a,o._age=a+r,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var t=!0,n=localStorage.getItem(e),a=(new Date).getTime();return n&&(n=JSON.parse(n),t=a>n._age),t},get:function(e){var t=this.isExpire(e),n=null;return t?(localStorage.removeItem(e),n):(n=localStorage.getItem(e),n=JSON.parse(n),n._value)}}}}]);