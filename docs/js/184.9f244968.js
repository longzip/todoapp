"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[184],{8922:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(9835),o=n(6970);const h={class:"q-pa-md"},i={class:"q-gutter-y-md column"};function s(e,t,n,s,u,r){const c=(0,a.up)("ListHeader"),d=(0,a.up)("q-icon"),l=(0,a.up)("q-input"),T=(0,a.up)("ThongTinTheBHYT"),g=(0,a.up)("q-separator"),p=(0,a.up)("q-list");return(0,a.wg)(),(0,a.iD)("div",h,[(0,a.Wm)(c,{bgcolor:"bg-orange-4"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Báo cáo chi tiết giao dịch: "+(0,o.zw)(parseInt(e.tongTien).toLocaleString())+" / "+(0,o.zw)(parseInt(e.tongSoThe).toLocaleString()),1)])),_:1}),(0,a._)("div",i,[(0,a.Wm)(l,{outlined:"",modelValue:u.searchText,"onUpdate:modelValue":t[1]||(t[1]=e=>u.searchText=e),placeholder:"Họ và tên",hint:"Nhập họ và tên rồi nhấn Enter để tìm kiếm",dense:""},{append:(0,a.w5)((()=>[""!==u.searchText?((0,a.wg)(),(0,a.j4)(d,{key:0,name:"close",onClick:t[0]||(t[0]=e=>u.searchText=""),class:"cursor-pointer"})):(0,a.kq)("",!0),(0,a.Wm)(d,{name:"search"})])),_:1},8,["modelValue"])]),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.timBhyts(this.searchText),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a.Wm)(T,{bhyt:e},null,8,["bhyt"]),(0,a.Wm)(g,{spaced:"",inset:""})])))),128))])),_:1})])}var u=n(4026),r=n(6401),c=n(3100);const d={components:{ThongTinTheBHYT:r.Z,ListHeader:u.Z},data(){return{searchText:"",tuThang:"2023-01-01 00:00:00",denThang:"2024-01-01 00:00:00"}},methods:{...(0,c.nv)("bhyts",["getBaoCaoChiTietGiaoDich"])},computed:{...(0,c.Se)("bhyts",["timBhyts","tongSoThe","tongTien"])},mounted(){this.$route.query.tuThang&&(this.tuThang=this.$route.query.tuThang),this.$route.query.denThang&&(this.denThang=this.$route.query.denThang),this.getBaoCaoChiTietGiaoDich({tuThang:this.tuThang,denThang:this.denThang})}};var l=n(1639),T=n(361),g=n(2857),p=n(3246),m=n(2218),y=n(9984),q=n.n(y);const w=(0,l.Z)(d,[["render",s]]),b=w;q()(d,"components",{QInput:T.Z,QIcon:g.Z,QList:p.Z,QSeparator:m.Z})}}]);