"use strict";(globalThis["webpackChunktodo_buudienxatulap"]=globalThis["webpackChunktodo_buudienxatulap"]||[]).push([[155],{7307:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(9835);const o={class:"q-pa-md"},s=(0,n.Uk)("Danh sách thẻ BHYT đánh dấu"),h={class:"q-gutter-y-md column"};function i(e,t,a,i,d,l){const u=(0,n.up)("q-btn"),c=(0,n.up)("ListHeader"),r=(0,n.up)("q-icon"),m=(0,n.up)("q-input"),p=(0,n.up)("ThongTinTheBHYT"),T=(0,n.up)("q-separator"),g=(0,n.up)("q-list");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(c,{bgcolor:"bg-orange-4"},{default:(0,n.w5)((()=>[s,(0,n.Wm)(u,{rounded:"",color:"primary",label:"Tải",onClick:t[0]||(t[0]=t=>e.dongBo()),icon:"sync"})])),_:1}),(0,n._)("div",h,[(0,n.Wm)(m,{outlined:"",modelValue:e.searchText,"onUpdate:modelValue":t[2]||(t[2]=t=>e.searchText=t),placeholder:"Từ khóa",hint:"Tìm kiếm danh sách hiện tại",dense:""},{append:(0,n.w5)((()=>[""!==e.searchText?((0,n.wg)(),(0,n.j4)(r,{key:0,name:"close",onClick:t[1]||(t[1]=t=>e.searchText=""),class:"cursor-pointer"})):(0,n.kq)("",!0),(0,n.Wm)(r,{name:"search"})])),_:1},8,["modelValue"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.timBhyts(e.searchText),(e=>((0,n.wg)(),(0,n.j4)(g,{key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{bhyt:e},null,8,["bhyt"]),(0,n.Wm)(T,{spaced:"",inset:""})])),_:2},1024)))),128))])}var d=a(3100),l=a(2994),u=a(4026);const c=(0,n.aZ)({components:{ThongTinTheBHYT:l.Z,ListHeader:u.Z},name:"IndexPage",data(){return{searchText:""}},methods:{...(0,d.nv)("bhyts",["getAllBhyts","dongBoDuLieu"]),async loadData(){await this.getAllBhyts({completed:1,thang:1,disabled:"0"})},async dongBo(){this.dongBoDuLieu(this.timBhyts(this.searchText).map((e=>e.maSoBhxh)).join())}},computed:{...(0,d.Se)("bhyts",["timBhyts"])},mounted(){this.loadData()}});var r=a(1639),m=a(4455),p=a(8627),T=a(2857),g=a(3246),y=a(2218),b=a(9984),B=a.n(b);const k=(0,r.Z)(c,[["render",i]]),x=k;B()(c,"components",{QBtn:m.Z,QInput:p.Z,QIcon:T.Z,QList:g.Z,QSeparator:y.Z})}}]);