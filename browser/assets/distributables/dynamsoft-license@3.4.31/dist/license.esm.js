/*!
 * Dynamsoft JavaScript Library
 * @product Dynamsoft License JS Edition
 * @website https://www.dynamsoft.com
 * @copyright Copyright 2024, Dynamsoft Corporation
 * @author Dynamsoft
 * @version 3.4.31
 * @fileoverview Dynamsoft JavaScript Library for Core
 * More info DL JS: https://www.dynamsoft.com/capture-vision/docs/web/programming/javascript/api-reference/license/license-module.html
 */
import{mapPackageRegister as e,loadWasm as t,doOrWaitAsyncDependency as s,getNextTaskID as r,mapTaskCallBack as n,onLog as i,CoreModule as o,handleEngineResourcePaths as a,waitAsyncDependency as c,worker as l,mapAsyncDependency as d,workerAutoResources as u,compareVersion as f,innerVersions as h}from"dynamsoft-core";const g="undefined"==typeof self,m=g?{}:self,p="function"==typeof importScripts,y=(()=>{if(!p){if(!g&&document.currentScript){let e=document.currentScript.src,t=e.indexOf("?");if(-1!=t)e=e.substring(0,t);else{let t=e.indexOf("#");-1!=t&&(e=e.substring(0,t))}return e.substring(0,e.lastIndexOf("/")+1)}return"./"}})(),v=e=>{if(null==e&&(e="./"),g||p);else{let t=document.createElement("a");t.href=e,e=t.href}return e.endsWith("/")||(e+="/"),e},w=e=>e&&"object"==typeof e&&"function"==typeof e.then,b=(async()=>{})().constructor;class S extends b{get status(){return this._s}get isPending(){return"pending"===this._s}get isFulfilled(){return"fulfilled"===this._s}get isRejected(){return"rejected"===this._s}get task(){return this._task}set task(e){let t;this._task=e,w(e)?t=e:"function"==typeof e&&(t=new b(e)),t&&(async()=>{try{const s=await t;e===this._task&&this.resolve(s)}catch(t){e===this._task&&this.reject(t)}})()}get isEmpty(){return null==this._task}constructor(e){let t,s;super(((e,r)=>{t=e,s=r})),this._s="pending",this.resolve=e=>{this.isPending&&(w(e)?this.task=e:(this._s="fulfilled",t(e)))},this.reject=e=>{this.isPending&&(this._s="rejected",s(e))},this.task=e}}const _=" is not allowed to change after `createInstance` or `loadWasm` is called.",k=!g&&document.currentScript&&(document.currentScript.getAttribute("data-license")||document.currentScript.getAttribute("data-productKeys")||document.currentScript.getAttribute("data-licenseKey")||document.currentScript.getAttribute("data-handshakeCode")||document.currentScript.getAttribute("data-organizationID"))||"",E=(e,t)=>{const s=e;if(s._license!==t){if(!s._pLoad.isEmpty)throw new Error("`license`"+_);s._license=t}};!g&&document.currentScript&&document.currentScript.getAttribute("data-sessionPassword");const L=e=>{if(null==e)e=[];else{e=e instanceof Array?[...e]:[e];for(let t=0;t<e.length;++t){if(!g){let s=document.createElement("a");s.href=e[t],e[t]=s.href}e[t].endsWith("/")||(e[t]+="/")}}return e},O=(e,t)=>{t=L(t);const s=e;if(s._licenseServer!==t){if(!s._pLoad.isEmpty)throw new Error("`licenseServer`"+_);s._licenseServer=t}},x=(e,t)=>{t=t||"";const s=e;if(s._deviceFriendlyName!==t){if(!s._pLoad.isEmpty)throw new Error("`deviceFriendlyName`"+_);s._deviceFriendlyName=t}};let C,P,N,I,R;"undefined"!=typeof navigator&&(C=navigator,P=C.userAgent,N=C.platform,I=C.mediaDevices),function(){if(!g){const e={Edge:{search:"Edg",verSearch:"Edg"},OPR:null,Chrome:null,Safari:{str:C.vendor,search:"Apple",verSearch:["Version","iPhone OS","CPU OS"]},Firefox:null,Explorer:{search:"MSIE",verSearch:"MSIE"}},t={HarmonyOS:null,Android:null,iPhone:null,iPad:null,Windows:{str:N,search:"Win"},Mac:{str:N},Linux:{str:N}};let s="unknownBrowser",r=0,n="unknownOS";for(let t in e){const n=e[t]||{};let i=n.str||P,o=n.search||t,a=n.verStr||P,c=n.verSearch||t;if(c instanceof Array||(c=[c]),-1!=i.indexOf(o)){s=t;for(let e of c){let t=a.indexOf(e);if(-1!=t){r=parseFloat(a.substring(t+e.length+1));break}}break}}for(let e in t){const s=t[e]||{};let r=s.str||P,i=s.search||e;if(-1!=r.indexOf(i)){n=e;break}}"Linux"==n&&-1!=P.indexOf("Windows NT")&&(n="HarmonyOS"),R={browser:s,version:r,OS:n}}g&&(R={browser:"ssr",version:0,OS:"ssr"})}(),I&&I.getUserMedia,"Chrome"===R.browser&&R.version>66||"Safari"===R.browser&&R.version>13||"OPR"===R.browser&&R.version>43||"Edge"===R.browser&&R.version;const W=()=>(t("license"),s("dynamsoft_inited",(async()=>{let{lt:e,l:t,ls:s,sp:d,rmk:u,cv:f}=((e,t=!1)=>{const s=e;if(s._pLoad.isEmpty){let e,r,n,i=s._license||"",o=JSON.parse(JSON.stringify(s._licenseServer)),a=s._sessionPassword,c=0;if(i.startsWith("t")||i.startsWith("f"))c=0;else if(0===i.length||i.startsWith("P")||i.startsWith("L")||i.startsWith("Y")||i.startsWith("A"))c=1;else{c=2;const t=i.indexOf(":");-1!=t&&(i=i.substring(t+1));const s=i.indexOf("?");if(-1!=s&&(r=i.substring(s+1),i=i.substring(0,s)),i.startsWith("DLC2"))c=0;else{if(i.startsWith("DLS2")){let t;try{let e=i.substring(4);e=atob(e),t=JSON.parse(e)}catch(e){throw new Error("Format Error: The license string you specified is invalid, please check to make sure it is correct.")}if(i=t.handshakeCode?t.handshakeCode:t.organizationID?t.organizationID:"","number"==typeof i&&(i=JSON.stringify(i)),0===o.length){let e=[];t.mainServerURL&&(e[0]=t.mainServerURL),t.standbyServerURL&&(e[1]=t.standbyServerURL),o=L(e)}!a&&t.sessionPassword&&(a=t.sessionPassword),e=t.remark}i&&"200001"!==i&&!i.startsWith("200001-")||(c=1)}}if(c&&(t||(m.crypto||(n="Please upgrade your browser to support online key."),m.crypto.subtle||(n="Require https to use online key in this browser."))),n)throw new Error(n);return 1===c&&(i="",console.warn("Applying for a public trial license ...")),{lt:c,l:i,ls:o,sp:a,rmk:e,cv:r}}throw new Error("Can't preprocess license again"+_)})(D),h=new S;D._pLoad.task=h,(async()=>{try{await D._pLoad}catch(e){}})();let g=r();n[g]=t=>{if(t.message&&D._onAuthMessage){let e=D._onAuthMessage(t.message);null!=e&&(t.message=e)}let s,r=!1;if(1===e&&(r=!0),t.success?(i&&i("init license success"),t.message&&console.warn(t.message),o._bSupportIRTModule=t.bSupportIRTModule,o._bSupportDce4Module=t.bSupportDce4Module,D.bPassValidation=!0,[0,-10076].includes(t.initLicenseInfo.errorCode)?[-10076].includes(t.initLicenseInfo.errorCode)&&console.warn(t.initLicenseInfo.errorString):h.reject(new Error(t.initLicenseInfo.errorString))):(s=Error(t.message),t.stack&&(s.stack=t.stack),t.ltsErrorCode&&(s.ltsErrorCode=t.ltsErrorCode),r||111==t.ltsErrorCode&&-1!=t.message.toLowerCase().indexOf("trial license")&&(r=!0)),r){const e=a(o.engineResourcePaths);(async(e,t,s)=>{if(!e._bNeverShowDialog)try{let r=await fetch(e.engineResourcePath+"dls.license.dialog.html");if(!r.ok)throw Error("Get license dialog fail. Network Error: "+r.statusText);let n=await r.text();if(!n.trim().startsWith("<"))throw Error("Get license dialog fail. Can't get valid HTMLElement.");let i=document.createElement("div");i.innerHTML=n;let o=[];for(let e=0;e<i.childElementCount;++e){let t=i.children[e];t instanceof HTMLStyleElement&&(o.push(t),document.head.append(t))}let a=1==i.childElementCount?i.children[0]:i;a.remove();let c,l,d,u,f,h=[a],g=a.children;for(let e of g)h.push(e);for(let e=0;e<h.length;++e)for(let t of h[e].children)h.push(t);for(let e of h)if(!c&&e.classList.contains("dls-license-mask"))c=e,e.addEventListener("click",(t=>{if(e==t.target){a.remove();for(let e of o)e.remove()}}));else if(!l&&e.classList.contains("dls-license-icon-close"))l=e,e.addEventListener("click",(()=>{a.remove();for(let e of o)e.remove()}));else if(!d&&e.classList.contains("dls-license-icon-error"))d=e,"error"!=t&&e.remove();else if(!u&&e.classList.contains("dls-license-icon-warn"))u=e,"warn"!=t&&e.remove();else if(!f&&e.classList.contains("dls-license-msg-content")){f=e;let t=s;for(;t;){let s=t.indexOf("["),r=t.indexOf("]",s),n=t.indexOf("(",r),i=t.indexOf(")",n);if(-1==s||-1==r||-1==n||-1==i){e.appendChild(new Text(t));break}s>0&&e.appendChild(new Text(t.substring(0,s)));let o=document.createElement("a"),a=t.substring(s+1,r);o.innerText=a;let c=t.substring(n+1,i);o.setAttribute("href",c),o.setAttribute("target","_blank"),e.appendChild(o),t=t.substring(i+1)}}document.body.appendChild(a)}catch(t){e._onLog&&e._onLog(t.message||t)}})({_bNeverShowDialog:D._bNeverShowDialog,engineResourcePath:e.license,_onLog:i},t.success?"warn":"error",t.message)}t.success?h.resolve(void 0):h.reject(s)},await c("core"),l.postMessage({type:"license_dynamsoft",body:{v:"3.4.31",brtk:!!e,bptk:1===e,l:t,os:R,fn:D.deviceFriendlyName,ls:s,sp:d,rmk:u,cv:f},id:g}),D.bCallInitLicense=!0,await h})));let A;e.license={},e.license.dynamsoft=W,e.license.getAR=async()=>{{let e=d.dynamsoft_inited;e&&e.isRejected&&await e}return l?new Promise(((e,t)=>{let s=r();n[s]=async s=>{if(s.success){delete s.success;{let e=D.license;e&&(e.startsWith("t")||e.startsWith("f"))&&(s.pk=e)}if(Object.keys(s).length){if(s.lem){let e=Error(s.lem);e.ltsErrorCode=s.lec,delete s.lem,delete s.lec,s.ae=e}e(s)}else e(null)}else{let e=Error(s.message);s.stack&&(e.stack=s.stack),t(e)}},l.postMessage({type:"license_getAR",id:s})})):null};class D{static setLicenseServer(e){O(D,e)}static get license(){return this._license}static set license(e){E(D,e)}static get licenseServer(){return this._licenseServer}static set licenseServer(e){O(D,e)}static get deviceFriendlyName(){return this._deviceFriendlyName}static set deviceFriendlyName(e){x(D,e)}static initLicense(e,t){if(E(D,e),D.bCallInitLicense=!0,"boolean"==typeof t&&t||"object"==typeof t&&t.executeNow)return W()}static setDeviceFriendlyName(e){x(D,e)}static getDeviceFriendlyName(){return D._deviceFriendlyName}static getDeviceUUID(){return(async()=>(await s("dynamsoft_uuid",(async()=>{await t();let e=new S,s=r();n[s]=t=>{if(t.success)e.resolve(t.uuid);else{const s=Error(t.message);t.stack&&(s.stack=t.stack),e.reject(s)}},l.postMessage({type:"license_getDeviceUUID",id:s}),A=await e})),A))()}}D._pLoad=new S,D.bPassValidation=!1,D.bCallInitLicense=!1,D._license=k,D._licenseServer=[],D._deviceFriendlyName="",o.engineResourcePaths.license={version:"3.4.31",path:y,isInternal:!0},u.license={wasm:!0,js:!0},e.license.LicenseManager=D;const M="1.4.21";"string"!=typeof o.engineResourcePaths.std&&f(o.engineResourcePaths.std.version,M)<0&&(o.engineResourcePaths.std={version:M,path:v(y+`../../dynamsoft-capture-vision-std@${M}/dist/`),isInternal:!0});class F{static getVersion(){return`3.4.31(Worker: ${h.license&&h.license.worker||"Not Loaded"}, Wasm: ${h.license&&h.license.wasm||"Not Loaded"})`}}export{D as LicenseManager,F as LicenseModule};
