"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[597],{9473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var o=n(9835),a=n(6970),s=n(1957);const r={class:"q-gutter-y-md column"};function u(e,t,n,u,i,h){const c=(0,o.up)("q-btn"),l=(0,o.up)("ListHeader"),d=(0,o.up)("q-icon"),p=(0,o.up)("q-input"),g=(0,o.up)("ThongTinTheBHYT"),T=(0,o.up)("q-separator"),m=(0,o.up)("q-list"),y=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{bgcolor:"bg-orange-4"},{default:(0,o.w5)((()=>[(0,o.Uk)("Hồ Sơ Đã Nộp BDH (Tổng: "+(0,a.zw)(i.tongTien.toLocaleString())+"đ / "+(0,a.zw)(i.tongHoSo)+" HS)",1),(0,o.Wm)(c,{rounded:"",color:"primary",label:"Tải",onClick:t[0]||(t[0]=e=>h.dongBo()),icon:"sync"})])),_:1}),(0,o._)("div",r,[(0,o.Wm)(p,{outlined:"",modelValue:i.searchText,"onUpdate:modelValue":t[2]||(t[2]=e=>i.searchText=e),onKeyup:t[3]||(t[3]=(0,s.D2)((t=>e.traCuuTheoTen(i.searchText)),["enter"])),placeholder:"Họ và tên",hint:"Nhập họ và tên rồi nhấn Enter để tìm kiếm",dense:""},{append:(0,o.w5)((()=>[""!==i.searchText?((0,o.wg)(),(0,o.j4)(d,{key:0,name:"close",onClick:t[1]||(t[1]=e=>i.searchText=""),class:"cursor-pointer"})):(0,o.kq)("",!0),(0,o.Wm)(d,{name:"search"})])),_:1},8,["modelValue"])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.bhyts.filter((e=>3152==e.userId&&4==e.trangThaiHoSo)),(e=>((0,o.wg)(),(0,o.j4)(m,{key:e.id},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{bhyt:e},null,8,["bhyt"]),(0,o.Wm)(T,{spaced:"",inset:""})])),_:2},1024)))),128))])),_:1})}var i=n(3100),h=n(3657),c=n(4026);const l={components:{ThongTinTheBHYT:h.Z,ListHeader:c.Z},data(){return{searchText:"",items:[],tongTien:0,tongHoSo:0}},computed:{...(0,i.Se)("auth",["isLogin"]),...(0,i.Se)("bhyts",["bhyts"])},methods:{...(0,i.nv)("bhyts",["hoSoDaXuLy","giaHan"]),dongBo(){this.giaHan(this.bhyts)}},async mounted(){this.$route.query.q&&(this.searchText=this.$route.query.q),await this.hoSoDaXuLy({thangTruoc:0}),this.tongTien=this.bhyts.filter((e=>3152==e.userId&&4==e.trangThaiHoSo)).map((e=>e.tongTien)).reduce(((e,t)=>e+t),0),this.tongHoSo=this.bhyts.filter((e=>3152==e.userId&&4==e.trangThaiHoSo)).map((e=>e.tongTien)).reduce(((e,t)=>e+1),0)}};var d=n(1639),p=n(9885),g=n(4455),T=n(361),m=n(2857),y=n(3246),b=n(2218),H=n(9984),S=n.n(H);const w=(0,d.Z)(l,[["render",u]]),q=w;S()(l,"components",{QPage:p.Z,QBtn:g.Z,QInput:T.Z,QIcon:m.Z,QList:y.Z,QSeparator:b.Z})}}]);