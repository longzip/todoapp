"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[672],{9426:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(9835),o=n(6970);const s={class:"q-pa-md"},d={class:"q-gutter-y-md column"};function h(e,t,n,h,u,l){const i=(0,a.up)("q-btn"),c=(0,a.up)("ListHeader"),r=(0,a.up)("q-icon"),p=(0,a.up)("q-input"),m=(0,a.up)("ThongTinTheBHYT"),g=(0,a.up)("q-separator"),b=(0,a.up)("q-list");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(c,{bgcolor:"bg-orange-4"},{default:(0,a.w5)((()=>[(0,a.Uk)("Danh sách thẻ BHYT ngừng hoạt động: ("+(0,o.zw)(e.bhyts.length)+")",1),(0,a.Wm)(i,{rounded:"",color:"primary",label:"Tải",onClick:t[0]||(t[0]=t=>e.dongBo()),icon:"sync"})])),_:1}),(0,a._)("div",d,[(0,a.Wm)(p,{outlined:"",modelValue:e.searchText,"onUpdate:modelValue":t[2]||(t[2]=t=>e.searchText=t),placeholder:"Từ khóa",hint:"Tìm kiếm danh sách hiện tại",dense:""},{append:(0,a.w5)((()=>[""!==e.searchText?((0,a.wg)(),(0,a.j4)(r,{key:0,name:"close",onClick:t[1]||(t[1]=t=>e.searchText=""),class:"cursor-pointer"})):(0,a.kq)("",!0),(0,a.Wm)(r,{name:"search"})])),_:1},8,["modelValue"])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.bhyts,(e=>((0,a.wg)(),(0,a.j4)(b,{key:e.id},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{bhyt:e},null,8,["bhyt"]),(0,a.Wm)(g,{spaced:"",inset:""})])),_:2},1024)))),128))])}var u=n(3100),l=n(3657),i=n(4026);const c=(0,a.aZ)({components:{ThongTinTheBHYT:l.Z,ListHeader:i.Z},name:"IndexPage",data(){return{searchText:""}},methods:{...(0,u.nv)("bhyts",["getAllBhyts","dongBoDuLieu"]),loadData(){this.getAllBhyts({disabled:1})},async dongBo(){this.dongBoDuLieu(this.bhyts.map((e=>e.maSoBhxh)).join())}},computed:{...(0,u.Se)("bhyts",["bhyts"])},mounted(){this.loadData()}});var r=n(1639),p=n(4455),m=n(361),g=n(2857),b=n(3246),T=n(2218),y=n(9984),k=n.n(y);const B=(0,r.Z)(c,[["render",h]]),w=B;k()(c,"components",{QBtn:p.Z,QInput:m.Z,QIcon:g.Z,QList:b.Z,QSeparator:T.Z})}}]);