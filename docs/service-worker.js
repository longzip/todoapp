if(!self.define){let s,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,e)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const c=s=>n(s,r),o={module:{uri:r},exports:u,require:c};l[r]=Promise.all(i.map((s=>o[s]||c(s)))).then((s=>(e(...s),u)))}}define(["./workbox-8a99996d"],(function(s){"use strict";s.setCacheNameDetails({prefix:"todo-buudienxatulap"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"CNAME",revision:"9863088da63ccc3f9d492713a439136f"},{url:"css/155.5ae00156.css",revision:null},{url:"css/184.5ae00156.css",revision:null},{url:"css/223.5ae00156.css",revision:null},{url:"css/229.5ae00156.css",revision:null},{url:"css/272.5ae00156.css",revision:null},{url:"css/312.5ae00156.css",revision:null},{url:"css/423.5ae00156.css",revision:null},{url:"css/431.5ae00156.css",revision:null},{url:"css/532.5ae00156.css",revision:null},{url:"css/535.5ae00156.css",revision:null},{url:"css/597.5ae00156.css",revision:null},{url:"css/619.5ae00156.css",revision:null},{url:"css/647.5ae00156.css",revision:null},{url:"css/651.5ae00156.css",revision:null},{url:"css/661.5ae00156.css",revision:null},{url:"css/667.5ae00156.css",revision:null},{url:"css/668.5ae00156.css",revision:null},{url:"css/672.5ae00156.css",revision:null},{url:"css/703.5ae00156.css",revision:null},{url:"css/811.5ae00156.css",revision:null},{url:"css/884.5ae00156.css",revision:null},{url:"css/917.5ae00156.css",revision:null},{url:"css/983.5ae00156.css",revision:null},{url:"css/99.5ae00156.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.76a71318.css",revision:null},{url:"evn.js",revision:"915e659f9eaea884be8bf12b18526e28"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.824b570f.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.97b9b185.woff2",revision:null},{url:"hgd.js",revision:"931d178994bb77b071867348e31070f3"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"d7e761dcc211a6e56bc782e0c9123a46"},{url:"js/155.1df37f99.js",revision:null},{url:"js/184.c6845ef3.js",revision:null},{url:"js/223.038f9c28.js",revision:null},{url:"js/229.31c6a7d9.js",revision:null},{url:"js/272.4be96c11.js",revision:null},{url:"js/312.8ca75811.js",revision:null},{url:"js/423.43d15bd6.js",revision:null},{url:"js/431.78c1469f.js",revision:null},{url:"js/532.b645152e.js",revision:null},{url:"js/535.590343ec.js",revision:null},{url:"js/597.afc3f873.js",revision:null},{url:"js/619.f6ba9b5f.js",revision:null},{url:"js/647.ff33e79b.js",revision:null},{url:"js/651.a25d3802.js",revision:null},{url:"js/661.4f74acdd.js",revision:null},{url:"js/667.a26e1708.js",revision:null},{url:"js/668.37801595.js",revision:null},{url:"js/672.7e3e2829.js",revision:null},{url:"js/703.2843be45.js",revision:null},{url:"js/792.1a261a26.js",revision:null},{url:"js/811.156874b9.js",revision:null},{url:"js/83.c1014cef.js",revision:null},{url:"js/862.00b32ddd.js",revision:null},{url:"js/884.429483f5.js",revision:null},{url:"js/901.c1668846.js",revision:null},{url:"js/917.002d0aef.js",revision:null},{url:"js/983.a7f099c1.js",revision:null},{url:"js/99.3b1769bd.js",revision:null},{url:"js/app.80bc41ed.js",revision:null},{url:"js/chunk-common.2f2ff022.js",revision:null},{url:"js/vendor.2e983f4a.js",revision:null},{url:"manifest.json",revision:"24add5da2c3cb848c3c592256490285f"},{url:"print.css",revision:"20c8532f778392c84c5ac4a59ba9ef96"},{url:"printv2.css",revision:"20c8532f778392c84c5ac4a59ba9ef96"},{url:"robots.txt",revision:"6978a616c585d03cb5b542a891995efb"},{url:"ssm.js",revision:"fa662a801e5253b3d62ea58b7639adcb"}],{}),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
