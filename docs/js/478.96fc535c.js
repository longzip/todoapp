"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[478],{4026:(t,e,a)=>{a.d(e,{Z:()=>h});var n=a(9835),o=a(6970);const s={class:"text-bold text-subtitle1"};function i(t,e,a,i,l,r){const p=(0,n.up)("q-banner");return(0,n.wg)(),(0,n.j4)(p,{dense:"","inline-actions":"",class:(0,o.C_)([a.bgcolor,"list-header text-white text-center"])},{default:(0,n.w5)((()=>[(0,n._)("span",s,[(0,n.WI)(t.$slots,"default")])])),_:3},8,["class"])}const l={props:["bgcolor"]};var r=a(1639),p=a(7128),c=a(9984),d=a.n(c);const u=(0,r.Z)(l,[["render",i]]),h=u;d()(l,"components",{QBanner:p.Z})},9478:(t,e,a)=>{a.r(e),a.d(e,{default:()=>W});var n=a(9835),o=a(1957),s=a(6970);const i={class:"q-pa-md"},l=(0,n.Uk)("Khách hàng lớn "),r={class:"q-gutter-y-md column"},p=["href"];function c(t,e,a,c,d,u){const h=(0,n.up)("ListHeader"),m=(0,n.up)("q-icon"),g=(0,n.up)("q-input"),w=(0,n.up)("q-item-label"),k=(0,n.up)("q-item-section"),f=(0,n.up)("q-item"),b=(0,n.up)("q-separator"),v=(0,n.up)("q-list");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(h,{bgcolor:"bg-orange-4"},{default:(0,n.w5)((()=>[l])),_:1}),(0,n._)("div",r,[(0,n.Wm)(g,{outlined:"",modelValue:t.searchText,"onUpdate:modelValue":e[1]||(e[1]=e=>t.searchText=e),placeholder:"Từ khóa",hint:"Tìm kiếm theo thông tin thẻ BHYT",onKeyup:e[2]||(e[2]=(0,o.D2)((e=>t.loadData()),["enter"])),dense:""},{append:(0,n.w5)((()=>[""!==t.searchText?((0,n.wg)(),(0,n.j4)(m,{key:0,name:"close",onClick:e[0]||(e[0]=e=>t.searchText=""),class:"cursor-pointer"})):(0,n.kq)("",!0),(0,n.Wm)(m,{name:"search"})])),_:1},8,["modelValue"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.dsDonHang,(e=>((0,n.wg)(),(0,n.j4)(v,{key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(k,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.senderName),1)])),_:2},1024),(0,n.Wm)(w,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n._)("a",{href:`tel:${e.senderPhone}`},(0,s.zw)(e.senderPhone),9,p)])),_:2},1024),(0,n.Wm)(w,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.contentNote),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(k,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.ttNumber),1)])),_:2},1024),(0,n.Wm)(m,{name:"content_copy",onClick:a=>t.copyTextToClipboard(e.ttNumber)},null,8,["onClick"]),(0,n.Wm)(w,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)("Số tiền: "+(0,s.zw)(parseInt(e.totalFeeSpecial).toLocaleString()),1)])),_:2},1024),(0,n.Wm)(w,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(new Date(e.updatedDate).toLocaleString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,n.Wm)(b,{spaced:"",inset:""})])),_:2},1024)))),128))])}a(702);var d=a(9981),u=a.n(d),h=a(6827),m=a(4026);const g=(0,n.aZ)({components:{ListHeader:m.Z},name:"KHLPage",data(){return{searchText:"",tokenFe:"",dsDonHang:[]}},methods:{sleep(){return new Promise((t=>setTimeout(t,1500)))},async login(){var t=JSON.stringify({username:"142010_THAMHT",password:"Abc@123456789",ip:"",random:.8677049060452371}),e={method:"post",maxBodyLength:1/0,url:"https://api-portalkhl.vnpost.vn/api/auth/signinKhl",headers:{capikey:"19001235","Content-Type":"application/json"},data:t};const{data:{tokenFe:a}}=await u().post("https://api-portalkhl.vnpost.vn/api/auth/signinKhl",t,e);this.tokenFe=a},async loadData(){this.tokenFe||await this.login();const t=(new Date).toISOString().slice(0,10).split("-").reverse().join("/");var e=JSON.stringify({orgCode:"142010",tuNgay:"01/03/2023",denNgay:t,pageNum:0,pageSize:500,sourceSystem:"KHL"}),a={method:"post",maxBodyLength:1/0,url:"https://api-portalkhl.vnpost.vn/khl/getItemDtl",headers:{Authorization:`Bearer ${this.tokenFe}`,"Content-Type":"application/json"},data:e};const{data:[n,o]}=await u()(a);for(let s=0;s<n;s++){const t=o[s];await this.updateItem(t),await this.sleep()}this.dsDonHang=o},async updateItem({ttNumber:t,senderPhone:e,totalFeeSpecial:a,codAmount:n,updatedDate:o,createdDate:s}){u().put(`https://192.168.1.7:2024/api/khls/${t}`,{soTien:a,ghiNo:n,ten:e,updatedDate:o.toString().slice(0,10),createdDate:s.toString().slice(0,10)})},copyTextToClipboard(t){navigator.clipboard.writeText(`Để theo dõi định vị bưu gửi https://www.hotham.vn/tra-cuu-hang-buu-dien?q=${t}. (Bạn chỉ cần bấm vào link)`).then((function(){h.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(t){h.Z.create({type:"negative",message:"Không thực hiện được!"+t})}))}},mounted(){this.loadData()}});var w=a(1639),k=a(361),f=a(2857),b=a(3246),v=a(490),y=a(1233),_=a(3115),T=a(2218),D=a(9984),x=a.n(D);const S=(0,w.Z)(g,[["render",c]]),W=S;x()(g,"components",{QInput:k.Z,QIcon:f.Z,QList:b.Z,QItem:v.Z,QItemSection:y.Z,QItemLabel:_.Z,QSeparator:T.Z})}}]);