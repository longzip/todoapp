if(!self.define){let n,e={};const i=(i,s)=>(i=new URL(i+".js",s).href,e[i]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=e,document.head.appendChild(n)}else n=i,importScripts(i),e()})).then((()=>{let n=e[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(s,c)=>{const l=n||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let r={};const o=n=>i(n,l),f={module:{uri:l},exports:r,require:o};e[l]=Promise.all(s.map((n=>f[n]||o(n)))).then((n=>(c(...n),r)))}}define(["./workbox-a91ef639"],(function(n){"use strict";n.setCacheNameDetails({prefix:"todolist"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"CNAME",revision:"0e219fadb83de280d8280b5f5177e63e"},{url:"css/300.5ae00156.css",revision:null},{url:"css/432.5ae00156.css",revision:null},{url:"css/569.5ae00156.css",revision:null},{url:"css/804.5ae00156.css",revision:null},{url:"css/825.5ae00156.css",revision:null},{url:"css/829.5ae00156.css",revision:null},{url:"css/970.5ae00156.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.c7997c93.css",revision:null},{url:"evn.js",revision:"dc808628a6297737b9dc1af3e82b4bb4"},{url:"evn2.js",revision:"b6c4fb36f7bd53f223fee6880839326b"},{url:"evn3.js",revision:"b6c4fb36f7bd53f223fee6880839326b"},{url:"favicon.ico",revision:"5d5b0d2528b25f31e1deb5732f3ab73c"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"hgd.js",revision:"931d178994bb77b071867348e31070f3"},{url:"icons/apple-icon-120x120.png",revision:"e7ffc92dc7ea7fd03966475279efcd1d"},{url:"icons/apple-icon-152x152.png",revision:"091be6d16fa24fa8fbc8c020d814209f"},{url:"icons/apple-icon-167x167.png",revision:"cf7a56c223db71e0f8a83f44ec59bfe3"},{url:"icons/apple-icon-180x180.png",revision:"4964e5d03ae80eb3bdeae8007aab5879"},{url:"icons/apple-launch-1080x2340.png",revision:"abe8ce0088fff11df0567bfe9e61ec10"},{url:"icons/apple-launch-1125x2436.png",revision:"559920128ff4600531fd2c5b3eca7a43"},{url:"icons/apple-launch-1170x2532.png",revision:"0ed4193cb1869f34ba798cb6bc8a90df"},{url:"icons/apple-launch-1179x2556.png",revision:"be17902054bbfd18bc4a998033988f24"},{url:"icons/apple-launch-1242x2208.png",revision:"cacdd052183849546d75da463568a9dc"},{url:"icons/apple-launch-1242x2688.png",revision:"a84797624e2c461841c53ed0432d4630"},{url:"icons/apple-launch-1284x2778.png",revision:"4422d8f8474f6abb8f7e6c8f3453f8e7"},{url:"icons/apple-launch-1290x2796.png",revision:"97514ef6745ef3df61728d1a7a5a29da"},{url:"icons/apple-launch-1536x2048.png",revision:"71991490a081b9b515e9dd311051fe6c"},{url:"icons/apple-launch-1620x2160.png",revision:"f027c46b9096127286dc2c11efc39d1c"},{url:"icons/apple-launch-1668x2224.png",revision:"e216c04baf2e274cbd5a8c1d3e35c641"},{url:"icons/apple-launch-1668x2388.png",revision:"73e288efcea24b9a671a89a516acb740"},{url:"icons/apple-launch-2048x2732.png",revision:"e494cfba3732eee8564f3f2fb7850b04"},{url:"icons/apple-launch-750x1334.png",revision:"57f039edf4fb7c1bbca88fc73ca46c27"},{url:"icons/apple-launch-828x1792.png",revision:"32fd825a18691c08a3af6c39c940f51a"},{url:"icons/favicon-128x128.png",revision:"1116160cb44603dced4cfd88ebb6cd8d"},{url:"icons/favicon-16x16.png",revision:"04ab2ec53a35909ae931218212acca02"},{url:"icons/favicon-32x32.png",revision:"e46a1a9cecf342d5dbc8c980785ffe90"},{url:"icons/favicon-96x96.png",revision:"ed09a68f4d8373ef74bfff721a91f69d"},{url:"icons/icon-128x128.png",revision:"230e6857acd8cc77adb5fcbace3b23b0"},{url:"icons/icon-192x192.png",revision:"f0733baeb25770dea466633c76ba124f"},{url:"icons/icon-256x256.png",revision:"74ce6fb0d06058974507f26678d493c3"},{url:"icons/icon-384x384.png",revision:"db3dd6429bcb33e0d516d06b62671002"},{url:"icons/icon-512x512.png",revision:"bb1a048fbb506691f3801171766f39d4"},{url:"icons/ms-icon-144x144.png",revision:"a1004ad2bb860d142fdffca2c88780a6"},{url:"icons/safari-pinned-tab.svg",revision:"d85d2b077eec458df061a4a8072f7fad"},{url:"index.html",revision:"7b65cb5fa0205baa336963c232a06e32"},{url:"js/271.0a9dcafd.js",revision:null},{url:"js/300.0a765ff5.js",revision:null},{url:"js/362.197b97b7.js",revision:null},{url:"js/432.e9ecf108.js",revision:null},{url:"js/504.6973efc7.js",revision:null},{url:"js/56.da8a57d2.js",revision:null},{url:"js/569.dac9d729.js",revision:null},{url:"js/652.75d02a94.js",revision:null},{url:"js/70.1f3e8754.js",revision:null},{url:"js/804.0bc81114.js",revision:null},{url:"js/825.79ddd035.js",revision:null},{url:"js/829.062ca0bb.js",revision:null},{url:"js/970.178e404f.js",revision:null},{url:"js/app.4f2edd9c.js",revision:null},{url:"js/chunk-common.a09070f0.js",revision:null},{url:"js/vendor.cfdbc053.js",revision:null},{url:"manifest.json",revision:"8791a62c5e157d22e43c12d5fa9a9750"},{url:"print.css",revision:"20c8532f778392c84c5ac4a59ba9ef96"},{url:"printv2.css",revision:"20c8532f778392c84c5ac4a59ba9ef96"},{url:"robots.txt",revision:"6978a616c585d03cb5b542a891995efb"},{url:"ssm.js",revision:"fa662a801e5253b3d62ea58b7639adcb"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
