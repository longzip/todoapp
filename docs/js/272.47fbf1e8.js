"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[272],{9914:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var o=n(9835),a=n(6970),s=n(1957);const h={class:"q-gutter-y-md column"};function i(e,t,n,i,u,r){const T=(0,o.up)("q-btn"),l=(0,o.up)("ListHeader"),c=(0,o.up)("q-icon"),g=(0,o.up)("q-input"),d=(0,o.up)("ThongTinTheBHYT"),H=(0,o.up)("q-separator"),p=(0,o.up)("q-list"),m=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{bgcolor:"bg-orange-4"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.bhyts.length)+" Hồ Sơ Chưa Xử Lý (BHYT: "+(0,a.zw)(u.tongTienBHYT.toLocaleString())+"đ / "+(0,a.zw)(u.soTheBHYT)+" Thẻ + BHXH: : "+(0,a.zw)(u.tongTienBHXH.toLocaleString())+"đ / "+(0,a.zw)(u.soSoBHXH)+")",1),(0,o.Wm)(T,{rounded:"",color:"primary",label:"Tải",onClick:t[0]||(t[0]=e=>r.dongBo()),icon:"sync"})])),_:1}),(0,o._)("div",h,[(0,o.Wm)(g,{outlined:"",modelValue:u.searchText,"onUpdate:modelValue":t[2]||(t[2]=e=>u.searchText=e),onKeyup:t[3]||(t[3]=(0,s.D2)((t=>e.traCuuTheoTen(u.searchText)),["enter"])),placeholder:"Họ và tên",hint:"Nhập họ và tên rồi nhấn Enter để tìm kiếm",dense:""},{append:(0,o.w5)((()=>[""!==u.searchText?((0,o.wg)(),(0,o.j4)(c,{key:0,name:"close",onClick:t[1]||(t[1]=e=>u.searchText=""),class:"cursor-pointer"})):(0,o.kq)("",!0),(0,o.Wm)(c,{name:"search"})])),_:1},8,["modelValue"])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.bhyts,(e=>((0,o.wg)(),(0,o.j4)(p,{key:e.id},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{bhyt:e},null,8,["bhyt"]),(0,o.Wm)(H,{spaced:"",inset:""})])),_:2},1024)))),128))])),_:1})}var u=n(3100),r=n(3657),T=n(4026);const l={components:{ThongTinTheBHYT:r.Z,ListHeader:T.Z},data(){return{searchText:"",items:[],tongTienBHYT:0,tongTienBHXH:0,soTheBHYT:0,soSoBHXH:0}},computed:{...(0,u.Se)("auth",["isLogin"]),...(0,u.Se)("bhyts",["bhyts"])},methods:{...(0,u.nv)("bhyts",["hoSoChuaXuLy","giaHan"]),dongBo(){this.giaHan(this.bhyts)}},async mounted(){this.$route.query.q&&(this.searchText=this.$route.query.q),await this.hoSoChuaXuLy(),this.tongTienBHYT=this.bhyts.filter((e=>3152==e.userId&&2==e.trangThaiHoSo&&1===e.maThuTuc)).map((e=>e.tongTien)).reduce(((e,t)=>e+t),0),this.soTheBHYT=this.bhyts.filter((e=>3152==e.userId&&2==e.trangThaiHoSo&&1===e.maThuTuc)).length,this.tongTienBHXH=this.bhyts.filter((e=>3152==e.userId&&2==e.trangThaiHoSo&&0===e.maThuTuc)).map((e=>e.tongTien)).reduce(((e,t)=>e+t),0),this.soSoBHXH=this.bhyts.filter((e=>3152==e.userId&&2==e.trangThaiHoSo&&0===e.maThuTuc)).length,this.giaHan(this.bhyts.filter((e=>2==e.trangThaiHoSo&&(new Date).getDate()===new Date(e.ngayLap).getDate())))}};var c=n(1639),g=n(9885),d=n(4455),H=n(361),p=n(2857),m=n(3246),y=n(2218),b=n(9984),B=n.n(b);const w=(0,c.Z)(l,[["render",i]]),S=w;B()(l,"components",{QPage:g.Z,QBtn:d.Z,QInput:H.Z,QIcon:p.Z,QList:m.Z,QSeparator:y.Z})}}]);