"use strict";(globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[]).push([[158],{7296:(t,e,n)=>{n.r(e),n.d(e,{default:()=>S});var o=n(9835),a=n(6970),s=n(1957);const h={class:"q-gutter-y-md column"};function i(t,e,n,i,r,u){const T=(0,o.up)("q-btn"),l=(0,o.up)("ListHeader"),c=(0,o.up)("q-icon"),g=(0,o.up)("q-input"),d=(0,o.up)("ThongTinTheBHYT"),H=(0,o.up)("q-separator"),p=(0,o.up)("q-list"),m=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{bgcolor:"bg-orange-4"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(t.bhyts.length)+" Hồ Sơ Chưa Xử Lý (BHYT: "+(0,a.zw)(r.tongTienBHYT.toLocaleString())+"đ / "+(0,a.zw)(r.soTheBHYT)+" Thẻ + BHXH: : "+(0,a.zw)(r.tongTienBHXH.toLocaleString())+"đ / "+(0,a.zw)(r.soSoBHXH)+")",1),(0,o.Wm)(T,{rounded:"",color:"primary",label:"Tải",onClick:e[0]||(e[0]=t=>u.dongBo()),icon:"sync"})])),_:1}),(0,o._)("div",h,[(0,o.Wm)(g,{outlined:"",modelValue:r.searchText,"onUpdate:modelValue":e[2]||(e[2]=t=>r.searchText=t),onKeyup:e[3]||(e[3]=(0,s.D2)((e=>t.traCuuTheoTen(r.searchText)),["enter"])),placeholder:"Họ và tên",hint:"Nhập họ và tên rồi nhấn Enter để tìm kiếm",dense:""},{append:(0,o.w5)((()=>[""!==r.searchText?((0,o.wg)(),(0,o.j4)(c,{key:0,name:"close",onClick:e[1]||(e[1]=t=>r.searchText=""),class:"cursor-pointer"})):(0,o.kq)("",!0),(0,o.Wm)(c,{name:"search"})])),_:1},8,["modelValue"])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.bhyts,(t=>((0,o.wg)(),(0,o.j4)(p,{key:t.id},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{bhyt:t},null,8,["bhyt"]),(0,o.Wm)(H,{spaced:"",inset:""})])),_:2},1024)))),128))])),_:1})}var r=n(3100),u=n(3464),T=n(4026);const l={components:{ThongTinTheBHYT:u.Z,ListHeader:T.Z},data(){return{searchText:"",items:[],tongTienBHYT:0,tongTienBHXH:0,soTheBHYT:0,soSoBHXH:0}},computed:{...(0,r.Se)("auth",["isLogin","userDetails"]),...(0,r.Se)("bhyts",["bhyts"])},methods:{...(0,r.nv)("bhyts",["hoSoChuaXuLy","giaHan"]),dongBo(){this.giaHan(this.bhyts)}},async mounted(){this.$route.query.q&&(this.searchText=this.$route.query.q),await this.hoSoChuaXuLy({mangLuoiId:this.userDetails.quaTrinhCongTac.mangLuoiId}),this.tongTienBHYT=this.bhyts.filter((t=>3152==t.userId&&2==t.trangThaiHoSo&&1===t.maThuTuc)).map((t=>t.tongTien)).reduce(((t,e)=>t+e),0),this.soTheBHYT=this.bhyts.filter((t=>3152==t.userId&&2==t.trangThaiHoSo&&1===t.maThuTuc)).length,this.tongTienBHXH=this.bhyts.filter((t=>3152==t.userId&&2==t.trangThaiHoSo&&0===t.maThuTuc)).map((t=>t.tongTien)).reduce(((t,e)=>t+e),0),this.soSoBHXH=this.bhyts.filter((t=>3152==t.userId&&2==t.trangThaiHoSo&&0===t.maThuTuc)).length,this.giaHan(this.bhyts.filter((t=>2==t.trangThaiHoSo&&(new Date).getDate()===new Date(t.ngayLap).getDate())))}};var c=n(1639),g=n(9885),d=n(4455),H=n(7471),p=n(2857),m=n(3246),y=n(2218),b=n(9984),B=n.n(b);const w=(0,c.Z)(l,[["render",i]]),S=w;B()(l,"components",{QPage:g.Z,QBtn:d.Z,QInput:H.Z,QIcon:p.Z,QList:m.Z,QSeparator:y.Z})}}]);