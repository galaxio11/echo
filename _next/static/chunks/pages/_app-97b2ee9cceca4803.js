(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{6170:(t,e,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2448)}])},9314:(t,e,n)=>{"use strict";n.d(e,{r:()=>i,v:()=>l});var s=n(4848),a=n(6540);let o=(0,a.createContext)(null);function i(t){let{children:e}=t,[n,i]=(0,a.useState)(null),[l,r]=(0,a.useState)(null),[c,h]=(0,a.useState)(!1);(0,a.useEffect)(()=>{(async()=>{try{var t,e;if(null===(e=window)||void 0===e?void 0:null===(t=e.solana)||void 0===t?void 0:t.isPhantom){let t=window.solana;i(t),t.on("connect",t=>{console.log("Wallet connected:",t.toBase58()),r(t.toBase58())}),t.on("disconnect",()=>{console.log("Wallet disconnected"),r(null)}),t.isConnected&&r(t.publicKey.toBase58())}}catch(t){console.error("Phantom wallet error:",t)}})()},[]);let u=async()=>{try{if(h(!0),!n)throw Error("Phantom wallet not installed");await n.connect()}catch(t){if(t.message.includes("User rejected"))throw Error("Connection cancelled");if(n)throw Error("Failed to connect wallet");throw Error("Please install Phantom wallet")}finally{h(!1)}},d=async()=>{try{if(!n)throw Error("No wallet connected");await n.disconnect(),r(null)}catch(t){throw Error("Failed to disconnect wallet")}};return(0,s.jsx)(o.Provider,{value:{wallet:n,publicKey:l,connecting:c,connect:u,disconnect:d},children:e})}function l(){let t=(0,a.useContext)(o);if(!t)throw Error("useWallet must be used within a WalletProvider");return t}},2373:(t,e,n)=>{"use strict";n.d(e,{f:()=>c,h:()=>h});var s=n(4848),a=n(6540);let o=()=>{let t="https:"===window.location.protocol?"wss":"ws",e=window.location.host;return"".concat(t,"://").concat(e,"/api/chat")};class i{connect(){try{let t=o();console.log("\uD83D\uDD0C Connecting to WebSocket:",t),this.ws=new WebSocket(t),this.ws.onopen=()=>{var t;for(console.log("✅ WebSocket connected"),this.isConnected=!0,this.reconnectAttempts=0,this.reconnectDelay=1e3,null===(t=this.onStatusUpdate)||void 0===t||t.call(this,"connected"),this.startHeartbeat();this.messageQueue.length>0;){let t=this.messageQueue.shift();this.send(t)}},this.ws.onclose=()=>{var t;console.log("❌ WebSocket disconnected"),this.isConnected=!1,this.stopHeartbeat(),null===(t=this.onStatusUpdate)||void 0===t||t.call(this,"disconnected"),this.handleReconnect()},this.ws.onerror=t=>{var e;console.error("⚠️ WebSocket error:",t),null===(e=this.onStatusUpdate)||void 0===e||e.call(this,"error")},this.ws.onmessage=t=>{try{if("pong"===t.data){this.pongReceived();return}let e=JSON.parse(t.data);console.log("\uD83D\uDCE5 Received:",e),this.handleMessage(e)}catch(t){console.error("❌ Error parsing message:",t)}}}catch(t){console.error("❌ Connection error:",t),this.handleReconnect()}}handleReconnect(){if(this.reconnectAttempts<this.maxReconnectAttempts){let t=1e3*Math.random(),e=Math.min(this.reconnectDelay*Math.pow(1.5,this.reconnectAttempts)+t,this.maxReconnectDelay);console.log("\uD83D\uDD04 Attempting to reconnect in ".concat(Math.round(e/1e3),"s... (Attempt ").concat(this.reconnectAttempts+1,"/").concat(this.maxReconnectAttempts,")")),setTimeout(()=>{this.reconnectAttempts++,this.connect()},e)}else{var t;console.log("❌ Max reconnection attempts reached. Please refresh the page."),null===(t=this.onStatusUpdate)||void 0===t||t.call(this,"failed")}}handleMessage(t){switch(t.type){case"display_update":this.onStatsUpdate({totalCreations:t.total_creations,totalPixels:t.total_pixels,viewers:t.viewers});break;case"request_canvas_data":this.sendCanvasData();break;default:this.listeners.forEach(e=>e(t))}}sendCanvasData(){let t=document.getElementById("artCanvas");if(t){let e=t.toDataURL("image/png");this.send({type:"canvas_data",data:e})}}send(t){if(!this.isConnected){this.messageQueue.push(t);return}this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}addMessageListener(t){return this.listeners.add(t),()=>this.listeners.delete(t)}disconnect(){this.ws&&this.ws.close()}onStatusUpdate(t){this.statusCallback&&this.statusCallback(t)}onStatsUpdate(t){this.statsCallback&&this.statsCallback(t)}setStatusCallback(t){this.statusCallback=t}setStatsCallback(t){this.statsCallback=t}startHeartbeat(){this.pingInterval=setInterval(()=>{this.ws.readyState===WebSocket.OPEN&&(this.ws.send("ping"),this.pongTimeout=setTimeout(()=>{console.log("\uD83D\uDC94 Heartbeat timeout - reconnecting..."),this.ws.close()},5e3))},3e4)}stopHeartbeat(){this.pingInterval&&clearInterval(this.pingInterval),this.pongTimeout&&clearTimeout(this.pongTimeout)}pongReceived(){this.pongTimeout&&clearTimeout(this.pongTimeout)}cleanup(){this.stopHeartbeat(),this.ws&&this.ws.close(),this.listeners.clear()}constructor(){this.connect(),this.messageQueue=[],this.listeners=new Set,this.reconnectAttempts=0,this.maxReconnectAttempts=10,this.isConnected=!1,this.reconnectDelay=1e3,this.maxReconnectDelay=3e4,this.pingInterval=null,this.pongTimeout=null}}var l=n(8197);let r=(0,a.createContext)(null);function c(t){let{children:e}=t,[n,o]=(0,a.useState)(null),[c,h]=(0,a.useState)("connecting"),[u,d]=(0,a.useState)({totalCreations:0,totalPixels:0,viewers:0}),[p,m]=(0,a.useState)(null),[g,w]=(0,a.useState)("waiting"),[f,v]=(0,a.useState)(null),[k,S]=(0,a.useState)(null),[y,C]=(0,a.useState)(null),[b,x]=(0,a.useState)([]),[E,_]=(0,a.useState)(null);(0,a.useEffect)(()=>{try{let t=localStorage.getItem("lastGeneratedArtwork");if(t){let e=JSON.parse(t);(!y||e.timestamp>y.timestamp)&&(console.log("\uD83C\uDFA8 Loading cached artwork from:",new Date(e.timestamp).toLocaleTimeString()),C(e),v(e.instructions))}}catch(t){console.error("Error loading cached artwork:",t)}},[]);let P=async()=>{try{let t=await fetch("/api/gallery/latest");if(t.ok){let e=await t.json();e&&(!y||e.timestamp>y.timestamp)&&(console.log("\uD83D\uDCE5 Polling: Found newer artwork"),R({instructions:e.drawingInstructions,timestamp:e.timestamp}))}}catch(t){console.error("Polling error:",t)}};(0,a.useEffect)(()=>("disconnected"===c||"error"===c?(console.log("\uD83D\uDD04 Starting backup polling..."),_(setInterval(P,5e3))):E&&(console.log("✋ Stopping backup polling"),clearInterval(E),_(null)),()=>{E&&clearInterval(E)}),[c]),(0,a.useEffect)(()=>{P();let t=setInterval(P,3e4);return()=>clearInterval(t)},[]),(0,a.useEffect)(()=>{if(!g||"initializing"===g)return;let t={id:Date.now(),text:{title:"ideation"===g?"Concept":"creation"===g?"Artwork":"reflection"===g?"Reflection":"storage"===g?"Saving":"completed"===g?"Complete":"Resting",content:"ideation"===g?p||"Generating new concept...":"creation"===g?"Creating geometric artwork...":"reflection"===g?k||"Contemplating creation...":"storage"===g?"Preserving artwork in gallery...":"completed"===g?"Generation complete! View this piece in the gallery.":y?"Last artwork generated at ".concat(new Date(y.timestamp).toLocaleTimeString(),". View it in the gallery."):"Waiting for next generation cycle...",isComplete:"completed"===g||"waiting"===g||"resting"===g}};x(e=>{let n=e.reduce((t,e)=>{let n=t.find(t=>t.text.title===e.text.title);return n&&("Contemplating creation..."===e.text.content||"Contemplating creation..."!==n.text.content)?t:[...t.filter(t=>t.text.title!==e.text.title),e]},[]);return n.some(e=>e.text.title===t.text.title&&e.text.content===t.text.content)||"Reflection"===t.text.title&&"Contemplating creation..."===t.text.content&&n.some(t=>"Reflection"===t.text.title&&"Contemplating creation..."!==t.text.content)?n:[...n,t]})},[g,p,k,y]);let R=t=>{if(t&&t.instructions&&(!y||t.timestamp>y.timestamp)){console.log("\uD83D\uDD04 Updating to more recent artwork from:",new Date(t.timestamp).toLocaleTimeString()),C(t),v(t.instructions),localStorage.setItem("lastGeneratedArtwork",JSON.stringify(t));let e=document.getElementById("artCanvas");if(e){let n=e.getContext("2d");(0,l.V)(n,t.instructions,!1)}}},A=(0,a.useCallback)(t=>{switch(console.log("\uD83D\uDCE8 Received message:",t),t.type){case"state_update":h(t.status),"ideation"===t.phase&&"ideation"!==g&&(x([]),m(null),S(null),v(null)),w(t.phase),m(t.idea),d(e=>({...e,totalCreations:t.total_creations,totalPixels:t.total_pixels,viewers:t.viewers})),"completed"===t.phase&&t.lastArtwork&&R({...t.lastArtwork,timestamp:Date.now()});break;case"drawing_instructions":v(t.instructions),("completed"===g||"storage"===g)&&R({instructions:t.instructions,timestamp:Date.now()});break;case"reflection":S(t.reflection);break;case"sync_artwork":R(t.artwork)}},[g,y]);return(0,a.useEffect)(()=>{try{let t=new i;return o(t),t.onStatusUpdate=t=>{h(t)},t.addMessageListener(A),t.onConnect=()=>{t.send({type:"request_sync"})},()=>{t.cleanup()}}catch(t){console.error("❌ WebSocket initialization error:",t)}},[A]),(0,s.jsx)(r.Provider,{value:{wsClient:n,status:c,stats:u,currentIdea:p,currentPhase:g,drawingInstructions:f,currentReflection:k,lastGenerated:y,messages:b,setMessages:x},children:e})}function h(){let t=(0,a.useContext)(r);if(!t)throw Error("useWebSocket must be used within a WebSocketProvider");return t}},2448:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var s=n(4848);n(4472);var a=n(2373),o=n(9314);function i(t){let{Component:e,pageProps:n}=t;return(0,s.jsx)(o.r,{children:(0,s.jsx)(a.f,{children:(0,s.jsx)(e,{...n})})})}},8197:(t,e,n)=>{"use strict";n.d(e,{V:()=>a});let s=(t,e)=>{switch(t.beginPath(),t.strokeStyle=e.color,t.lineWidth=e.stroke_width,e.type){case"circle":let[n,s]=e.points[0],a=e.points[1]?Math.hypot(e.points[1][0]-n,e.points[1][1]-s):50;t.arc(n,s,a,0,2*Math.PI);break;case"line":case"wave":case"spiral":e.points.forEach((e,n)=>{0===n?t.moveTo(e[0],e[1]):t.lineTo(e[0],e[1])})}e.closed&&t.closePath(),t.stroke()},a=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t&&e){if(t.clearRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle=e.background||"#000000",t.fillRect(0,0,t.canvas.width,t.canvas.height),n){let n=0,a=()=>{n<e.elements.length&&(s(t,e.elements[n]),n++,requestAnimationFrame(a))};requestAnimationFrame(a)}else e.elements.forEach(e=>s(t,e))}}},4472:()=>{}},t=>{var e=e=>t(t.s=e);t.O(0,[593,792],()=>(e(6170),e(8440))),_N_E=t.O()}]);