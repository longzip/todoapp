"use strict";(globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[]).push([[901],{1664:(a,e,t)=>{t.d(e,{Z:()=>f});var l=t(9835);const o={class:"row"};function n(a,e,t,n,r,m){const s=(0,l.up)("q-input"),u=(0,l.up)("q-space"),i=(0,l.up)("q-btn"),d=(0,l.up)("q-form");return(0,l.wg)(),(0,l.j4)(d,{onSubmit:m.submitForm},{default:(0,l.w5)((()=>["register"==t.tab?((0,l.wg)(),(0,l.j4)(s,{key:0,modelValue:r.formData.name,"onUpdate:modelValue":e[0]||(e[0]=a=>r.formData.name=a),class:"q-mb-md",outlined:"",label:"Họ Tên"},null,8,["modelValue"])):(0,l.kq)("",!0),(0,l.Wm)(s,{modelValue:r.formData.email,"onUpdate:modelValue":e[1]||(e[1]=a=>r.formData.email=a),class:"q-mb-md",outlined:"",type:"email",label:"Tên đăng nhập"},null,8,["modelValue"]),(0,l.Wm)(s,{modelValue:r.formData.password,"onUpdate:modelValue":e[2]||(e[2]=a=>r.formData.password=a),class:"q-mb-md",outlined:"",type:"password",label:"Mật khẩu"},null,8,["modelValue"]),(0,l._)("div",o,[(0,l.Wm)(u),(0,l.Wm)(i,{color:"primary",type:"submit",label:t.tab},null,8,["label"])])])),_:1},8,["onSubmit"])}t(9665);var r=t(3100);const m={props:["tab"],data(){return{formData:{name:"",email:"",password:""}}},methods:{...(0,r.nv)("auth",["registerUser","loginUser"]),sleep(a){return new Promise((e=>setTimeout(e,a)))},async submitForm(){"login"==this.tab&&await this.loginUser(this.formData),await this.sleep(1e3),this.$router.push("/")}},mounted(){localStorage.getItem("setIsLogin")&&this.$router.push("/")}};var s=t(1639),u=t(8326),i=t(7471),d=t(136),p=t(4455),b=t(9984),c=t.n(b);const g=(0,s.Z)(m,[["render",n]]),f=g;c()(m,"components",{QForm:u.Z,QInput:i.Z,QSpace:d.Z,QBtn:p.Z})},9901:(a,e,t)=>{t.r(e),t.d(e,{default:()=>w});var l=t(9835);function o(a,e,t,o,n,r){const m=(0,l.up)("q-tab"),s=(0,l.up)("q-tabs"),u=(0,l.up)("q-separator"),i=(0,l.up)("login-register"),d=(0,l.up)("q-tab-panel"),p=(0,l.up)("q-tab-panels"),b=(0,l.up)("q-card"),c=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(c,{class:"flex q-pa-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"full-width"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:n.tab,"onUpdate:modelValue":e[0]||(e[0]=a=>n.tab=a),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"login",label:"Đăng nhập"}),(0,l.Wm)(m,{name:"register",label:"Đăng ký"})])),_:1},8,["modelValue"]),(0,l.Wm)(u),(0,l.Wm)(p,{modelValue:n.tab,"onUpdate:modelValue":e[1]||(e[1]=a=>n.tab=a),animated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"login"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{tab:n.tab},null,8,["tab"])])),_:1}),(0,l.Wm)(d,{name:"register"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{tab:n.tab},null,8,["tab"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}const n={data(){return{tab:"login"}},components:{"login-register":t(1664).Z}};var r=t(1639),m=t(9885),s=t(4458),u=t(2230),i=t(900),d=t(2218),p=t(9800),b=t(4106),c=t(9984),g=t.n(c);const f=(0,r.Z)(n,[["render",o]]),w=f;g()(n,"components",{QPage:m.Z,QCard:s.Z,QTabs:u.Z,QTab:i.Z,QSeparator:d.Z,QTabPanels:p.Z,QTabPanel:b.Z})}}]);