"use strict";(globalThis["webpackChunktodo_buudienxatulap"]=globalThis["webpackChunktodo_buudienxatulap"]||[]).push([[83],{83:(a,e,t)=>{t.r(e),t.d(e,{default:()=>D});var n=t(9835);function s(a,e,t,s,o,l){const u=(0,n.up)("q-input"),i=(0,n.up)("q-icon"),r=(0,n.up)("q-btn"),d=(0,n.up)("q-form"),h=(0,n.up)("q-card"),m=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,{class:"q-pa-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{onSubmit:l.luuThongTin,class:"q-gutter-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{filled:"",modelValue:o.formData.name,"onUpdate:modelValue":e[0]||(e[0]=a=>o.formData.name=a),label:"Tên của bạn *",hint:"Tên hoặc họ và tên","lazy-rules":"",rules:[a=>a&&a.length>0||"Vui lòng cho biết tên của bạn"]},null,8,["modelValue","rules"]),(0,n.Wm)(u,{modelValue:o.formData.email,"onUpdate:modelValue":e[1]||(e[1]=a=>o.formData.email=a),class:"q-mb-md",outlined:"",type:"email",label:"Tên đăng nhập",disable:""},null,8,["modelValue"]),(0,n.Wm)(i,{name:"update",onClick:e[2]||(e[2]=a=>l.taoKhoaMoi({}))}),(0,n.Wm)(u,{modelValue:o.formData.isLogin,"onUpdate:modelValue":e[3]||(e[3]=a=>o.formData.isLogin=a),class:"q-mb-md",outlined:"",type:"textarea",label:"Khóa bí mật"},null,8,["modelValue"]),(0,n._)("div",null,[(0,n.Wm)(r,{label:"Cập nhật",type:"submit",color:"primary"})])])),_:1},8,["onSubmit"])])),_:1})])),_:1})}var o=t(9981),l=t.n(o),u=t(3100);const i={data(){return{formData:{name:"Bưu điện xã Tự Lập",email:"info@buudienxatulap.ga",smsText:"sss",isLogin:"a"}}},computed:{...(0,u.Se)("auth",["userDetails"])},methods:{...(0,u.nv)("auth",["firebaseUpdateUser","handleAuthStateChanged"]),luuThongTin(){this.$q.dialog({title:"Xác nhận",message:"Bạn có muốn lưu thông tin cấu hình",cancel:!0,persistent:!0}).onOk((()=>{this.firebaseUpdateUser({userId:this.userDetails.userId,updates:this.formData}),this.handleAuthStateChanged()}))},async saveBHYT(a){const e={"Content-Type":"application/json"},t="https://app.hotham.vn/api/user-ghi-chu",n=await fetch(t,{method:"PUT",headers:e,body:JSON.stringify({ghiChu:a})}),s=await n.json();if(s.errors)throw console.error(s.errors),new Error("Failed to fetch API");return s},async taoKhoaMoi(){let a={method:"post",maxBodyLength:1/0,url:"https://ssm-api.vnpost.vn/api/TokenAuth/Authenticate",headers:{Accept:"application/json","Content-Type":"application/json"},data:this.userDetails.smsText};const{data:e}=await l().request(a);this.formData.isLogin=e.result.accessToken,this.firebaseUpdateUser({userId:this.userDetails.userId,updates:this.formData}),this.handleAuthStateChanged()}},created(){this.formData={...this.userDetails}}};var r=t(1639),d=t(9885),h=t(4458),m=t(8326),p=t(8627),c=t(2857),b=t(4455),f=t(9984),g=t.n(f);const T=(0,r.Z)(i,[["render",s]]),D=T;g()(i,"components",{QPage:d.Z,QCard:h.Z,QForm:m.Z,QInput:p.Z,QIcon:c.Z,QBtn:b.Z})}}]);