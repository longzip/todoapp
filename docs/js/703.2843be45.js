"use strict";(globalThis["webpackChunktodo_buudienxatulap"]=globalThis["webpackChunktodo_buudienxatulap"]||[]).push([[703],{993:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var o=n(9835),a=n(6970),i=n(1957);const s={class:"q-gutter-y-md column"};function h(e,t,n,h,c,r){const u=(0,o.up)("q-btn"),p=(0,o.up)("ListHeader"),l=(0,o.up)("q-icon"),d=(0,o.up)("q-input"),T=(0,o.up)("ThongTinTheBHYT"),m=(0,o.up)("q-separator"),g=(0,o.up)("q-list"),y=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{bgcolor:"bg-orange-4"},{default:(0,o.w5)((()=>[(0,o.Uk)("Danh sách BHYT tái tục tiếp: ("+(0,a.zw)(e.bhyts.length)+")",1),(0,o.Wm)(u,{rounded:"",color:"primary",onClick:t[0]||(t[0]=e=>r.dongBo()),icon:"sync"}),(0,o.Wm)(u,{rounded:"",color:"primary",onClick:t[1]||(t[1]=e=>r.copyTextToClipboard()),icon:"content_copy"})])),_:1}),(0,o._)("div",s,[(0,o.Wm)(d,{outlined:"",modelValue:c.searchText,"onUpdate:modelValue":t[3]||(t[3]=e=>c.searchText=e),onKeyup:t[4]||(t[4]=(0,i.D2)((t=>e.traCuuTheoTen(c.searchText)),["enter"])),placeholder:"Họ và tên",hint:"Nhập họ và tên rồi nhấn Enter để tìm kiếm",dense:""},{append:(0,o.w5)((()=>[""!==c.searchText?((0,o.wg)(),(0,o.j4)(l,{key:0,name:"close",onClick:t[2]||(t[2]=e=>c.searchText=""),class:"cursor-pointer"})):(0,o.kq)("",!0),(0,o.Wm)(l,{name:"search"})])),_:1},8,["modelValue"])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.bhyts,(e=>((0,o.wg)(),(0,o.j4)(g,{key:e.id},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{bhyt:e},null,8,["bhyt"]),(0,o.Wm)(m,{spaced:"",inset:""})])),_:2},1024)))),128))])),_:1})}var c=n(3100),r=n(6827),u=n(2994),p=n(4026);const l={components:{ThongTinTheBHYT:u.Z,ListHeader:p.Z},data(){return{searchText:"",items:[]}},computed:{...(0,c.Se)("auth",["isLogin"]),...(0,c.Se)("bhyts",["bhyts","soDienThoais"])},methods:{...(0,c.nv)("bhyts",["khachChuaNop","taiTuc"]),dongBo(){this.taiTuc(this.bhyts.map((e=>e.maSoBHXH)).join())},copyTextToClipboard(){navigator.clipboard.writeText([...new Set(this.soDienThoais)].join()).then((function(){r.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){r.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))}},async mounted(){this.$route.query.q&&(this.searchText=this.$route.query.q),await this.khachChuaNop()}};var d=n(1639),T=n(9885),m=n(4455),g=n(8627),y=n(2857),b=n(3246),k=n(2218),w=n(9984),q=n.n(w);const x=(0,d.Z)(l,[["render",h]]),Z=x;q()(l,"components",{QPage:T.Z,QBtn:m.Z,QInput:g.Z,QIcon:y.Z,QList:b.Z,QSeparator:k.Z})}}]);