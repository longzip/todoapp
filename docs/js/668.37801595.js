"use strict";(globalThis["webpackChunktodo_buudienxatulap"]=globalThis["webpackChunktodo_buudienxatulap"]||[]).push([[668],{7498:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var o=n(9835),a=n(1957);const i={class:"q-pa-md"},s=(0,o.Uk)("Danh sách thẻ BHYT "),c={class:"q-gutter-y-md column"};function h(e,t,n,h,r,p){const l=(0,o.up)("q-btn"),u=(0,o.up)("ListHeader"),d=(0,o.up)("q-icon"),m=(0,o.up)("q-input"),g=(0,o.up)("ThongTinTheBHYT"),T=(0,o.up)("q-separator"),y=(0,o.up)("q-list");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(u,{bgcolor:"bg-orange-4"},{default:(0,o.w5)((()=>[s,(0,o.Wm)(l,{rounded:"",color:"primary",onClick:t[0]||(t[0]=t=>e.dongBo()),icon:"sync"}),(0,o.Wm)(l,{rounded:"",color:"primary",onClick:t[1]||(t[1]=t=>e.copyTextToClipboard()),icon:"content_copy"}),(0,o.Wm)(l,{rounded:"",color:"primary",onClick:t[2]||(t[2]=t=>e.copyMaBhxhToClipboard()),icon:"content_copy"})])),_:1}),(0,o._)("div",c,[(0,o.Wm)(m,{outlined:"",modelValue:e.searchText,"onUpdate:modelValue":t[4]||(t[4]=t=>e.searchText=t),placeholder:"Từ khóa",hint:"Tìm kiếm theo thông tin thẻ BHYT",onKeyup:(0,a.D2)(e.timKiem,["enter"]),dense:""},{append:(0,o.w5)((()=>[""!==e.searchText?((0,o.wg)(),(0,o.j4)(d,{key:0,name:"close",onClick:t[3]||(t[3]=t=>e.searchText=""),class:"cursor-pointer"})):(0,o.kq)("",!0),(0,o.Wm)(d,{name:"search"})])),_:1},8,["modelValue","onKeyup"])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.timBhyts(this.searchText),(e=>((0,o.wg)(),(0,o.j4)(y,{key:e.id},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{bhyt:e},null,8,["bhyt"]),(0,o.Wm)(T,{spaced:"",inset:""})])),_:2},1024)))),128))])}var r=n(3100),p=n(6827),l=n(2994),u=n(4026);const d=(0,o.aZ)({components:{ThongTinTheBHYT:l.Z,ListHeader:u.Z},name:"IndexPage",data(){return{searchText:"",tong:0}},methods:{...(0,r.nv)("bhyts",["getAllBhyts","dongBoDuLieu"]),async timKiem(){const e=this.searchText.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),t=/[0-9]/g,n=this.searchText.match(t);await this.getAllBhyts({name:n?n.join(""):e}),this.searchText=""},async dongBo(){this.dongBoDuLieu(this.bhyts.map((e=>e.maSoBhxh)).join())},copyTextToClipboard(){navigator.clipboard.writeText([...new Set(this.soDienThoais)].join()).then((function(){p.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){p.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},copyMaBhxhToClipboard(){navigator.clipboard.writeText(this.bhyts.map((e=>e.maSoBhxh)).join()).then((function(){p.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){p.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))}},computed:{...(0,r.Se)("bhyts",["timBhyts","soDienThoais","bhyts"])}});var m=n(1639),g=n(4455),T=n(8627),y=n(2857),b=n(3246),x=n(2218),B=n(9984),k=n.n(B);const w=(0,m.Z)(d,[["render",h]]),Z=w;k()(d,"components",{QBtn:g.Z,QInput:T.Z,QIcon:y.Z,QList:b.Z,QSeparator:x.Z})}}]);