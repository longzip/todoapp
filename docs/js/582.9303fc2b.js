"use strict";(globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[]).push([[582],{6154:(t,e,n)=>{n.r(e),n.d(e,{default:()=>k});var a=n(9835),o=n(6970);const i={class:"q-pa-md"},h={class:"q-gutter-y-md column"};function s(t,e,n,s,r,u){const c=(0,a.up)("q-btn"),l=(0,a.up)("ListHeader"),d=(0,a.up)("q-icon"),g=(0,a.up)("q-input"),T=(0,a.up)("ThongTinTheBHYT"),p=(0,a.up)("q-separator"),m=(0,a.up)("q-list");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(l,{bgcolor:"bg-orange-4"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Báo cáo chi tiết giao dịch: "+(0,o.zw)(parseInt(t.tongTien).toLocaleString())+" / "+(0,o.zw)(parseInt(t.tongSoThe).toLocaleString()),1),(0,a.Wm)(c,{rounded:"",color:"primary",label:"Tải",onClick:e[0]||(e[0]=t=>u.loadData()),icon:"sync"}),(0,a.Wm)(c,{rounded:"",color:"primary",label:"Đồng bộ",onClick:e[1]||(e[1]=t=>u.dongBo()),icon:"sync"})])),_:1}),(0,a._)("div",h,[(0,a.Wm)(g,{outlined:"",modelValue:r.searchText,"onUpdate:modelValue":e[3]||(e[3]=t=>r.searchText=t),placeholder:"Họ và tên",hint:"Nhập họ và tên rồi nhấn Enter để tìm kiếm",dense:""},{append:(0,a.w5)((()=>[""!==r.searchText?((0,a.wg)(),(0,a.j4)(d,{key:0,name:"close",onClick:e[2]||(e[2]=t=>r.searchText=""),class:"cursor-pointer"})):(0,a.kq)("",!0),(0,a.Wm)(d,{name:"search"})])),_:1},8,["modelValue"])]),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.timBhyts(this.searchText),(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.id},[(0,a.Wm)(T,{bhyt:t},null,8,["bhyt"]),(0,a.Wm)(p,{spaced:"",inset:""})])))),128))])),_:1})])}var r=n(4026),u=n(6650),c=n(3100);const l={components:{ThongTinTheBHYT:u.Z,ListHeader:r.Z},data(){return{searchText:"",tuThang:"2023-01-01 00:00:00",denThang:"2024-01-01 00:00:00"}},methods:{...(0,c.nv)("bhyts",["getBaoCaoChiTietGiaoDich","capNhatBienLai"]),dongBo(){this.capNhatBienLai([...this.timBhyts()].reverse())},loadData(){this.$route.query.tuThang&&(this.tuThang=this.$route.query.tuThang),this.$route.query.denThang&&(this.denThang=this.$route.query.denThang),this.getBaoCaoChiTietGiaoDich({tuThang:this.tuThang,denThang:this.denThang,mangLuoiId:this.userDetails.quaTrinhCongTac.mangLuoiId})}},computed:{...(0,c.Se)("bhyts",["timBhyts","tongSoThe","tongTien"]),...(0,c.rn)("auth",["userDetails"])},mounted(){}};var d=n(1639),g=n(4455),T=n(7471),p=n(2857),m=n(3246),y=n(2218),b=n(9984),q=n.n(b);const B=(0,d.Z)(l,[["render",s]]),k=B;q()(l,"components",{QBtn:g.Z,QInput:T.Z,QIcon:p.Z,QList:m.Z,QSeparator:y.Z})}}]);