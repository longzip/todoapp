"use strict";(globalThis["webpackChunktodo_buudienxatulap"]=globalThis["webpackChunktodo_buudienxatulap"]||[]).push([[615],{1615:(t,n,i)=>{i.r(n),i.d(n,{default:()=>W});var e=i(9835);function a(t,n,i,a,o,l){const c=(0,e.up)("q-btn"),h=(0,e.up)("q-toolbar-title"),u=(0,e.up)("q-toolbar"),p=(0,e.up)("q-header"),r=(0,e.up)("q-item-label"),s=(0,e.up)("EssentialLink"),d=(0,e.up)("q-list"),g=(0,e.up)("q-drawer"),m=(0,e.up)("router-view"),k=(0,e.up)("q-page-container"),f=(0,e.up)("q-layout");return(0,e.wg)(),(0,e.j4)(f,{view:"lHh Lpr lFf"},{default:(0,e.w5)((()=>[(0,e.Wm)(p,{elevated:""},{default:(0,e.w5)((()=>[(0,e.Wm)(u,null,{default:(0,e.w5)((()=>[(0,e.Wm)(c,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),(0,e.Wm)(h,null,{default:(0,e.w5)((()=>[(0,e.Uk)("BHXH và BHYT")])),_:1}),(0,e.Wm)(c,{round:"",color:"primary",icon:"logout",onClick:t.logoutUser,to:"/auth"},null,8,["onClick"])])),_:1})])),_:1}),(0,e.Wm)(g,{modelValue:t.leftDrawerOpen,"onUpdate:modelValue":n[0]||(n[0]=n=>t.leftDrawerOpen=n),"show-if-above":"",bordered:""},{default:(0,e.w5)((()=>[(0,e.Wm)(d,null,{default:(0,e.w5)((()=>[(0,e.Wm)(r,{header:""},{default:(0,e.w5)((()=>[(0,e.Uk)(" Các chức năng ")])),_:1}),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.essentialLinks,(t=>((0,e.wg)(),(0,e.j4)(s,(0,e.dG)({key:t.title},t),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,e.Wm)(k,null,{default:(0,e.w5)((()=>[(0,e.Wm)(m)])),_:1})])),_:1})}var o=i(499),l=i(3100),c=i(6970);function h(t,n,i,a,o,l){const h=(0,e.up)("q-icon"),u=(0,e.up)("q-item-section"),p=(0,e.up)("q-item-label"),r=(0,e.up)("q-item");return(0,e.wg)(),(0,e.j4)(r,{clickable:"",tag:"a",to:t.link},{default:(0,e.w5)((()=>[t.icon?((0,e.wg)(),(0,e.j4)(u,{key:0,avatar:""},{default:(0,e.w5)((()=>[(0,e.Wm)(h,{name:t.icon},null,8,["name"])])),_:1})):(0,e.kq)("",!0),(0,e.Wm)(u,null,{default:(0,e.w5)((()=>[(0,e.Wm)(p,null,{default:(0,e.w5)((()=>[(0,e.Uk)((0,c.zw)(t.title),1)])),_:1}),(0,e.Wm)(p,{caption:""},{default:(0,e.w5)((()=>[(0,e.Uk)((0,c.zw)(t.caption),1)])),_:1})])),_:1})])),_:1},8,["to"])}const u=(0,e.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var p=i(1639),r=i(490),s=i(1233),d=i(2857),g=i(3115),m=i(9984),k=i.n(m);const f=(0,p.Z)(u,[["render",h]]),w=f;k()(u,"components",{QItem:r.Z,QItemSection:s.Z,QIcon:d.Z,QItemLabel:g.Z});const T=[{title:"Tìm kiếm",caption:"Theo Tên, Mã thẻ, số đt",icon:"search",link:"/"},{title:"Khách hàng lớn",caption:"Theo Tên, số đt, địa chỉ",icon:"payment",link:"/khl2"},{title:"Danh sách đơn hàng",caption:"Theo dõi bưu gửi",icon:"payment",link:"/items"},{title:"Khách tạo đơn",caption:"Theo Tên, số đt, địa chỉ",icon:"payment",link:"/dons"},{title:"Sản phẩm",caption:"Sản phẩm",icon:"payment",link:"/san-pham"},{title:"Tái tục",caption:"DS BHYT tái tục",icon:"history",link:"/tai-tuc"},{title:"Đã hết hạn",caption:"DS BHYT đã hết hạn",icon:"alarm_off",link:"/het-han"},{title:"Tra cứu",caption:"Tìm theo mã BHXH",icon:"perm_identity",link:"/tra-cuu"},{title:"Tìm kiếm",caption:"Tìm theo họ tên",icon:"person_search",link:"/tim-kiem"},{title:"Hồ sơ chưa xử lý",caption:"Các hồ sơ chưa xử lý",icon:"timer",link:"/ho-so-chua-xu-ly"},{title:"Hồ sơ đã nộp BDH",caption:"Các hồ sơ đã nộp",icon:"verified",link:"/ho-so-da-nop"},{title:"Hồ sơ đã xử lý",caption:"Các hồ sơ đã xử lý",icon:"verified",link:"/ho-so-da-xu-ly"},{title:"Cập nhật ngày biên lai",caption:"Báo cáo chi tiết giao dịch",icon:"verified",link:`/export-chi-tiet?tuThang=2023-${(new Date).getMonth()}-01&denThang=2024-01-01`},{title:"Chi tiết giao dịch 2023",caption:"Báo cáo chi tiết giao dịch",icon:"verified",link:"/export-chi-tiet?tuThang=2023-01-01&denThang=2024-01-01"},{title:"Chi tiết giao dịch 2022",caption:"Báo cáo chi tiết giao dịch",icon:"verified",link:"/export-chi-tiet?tuThang=2022-01-01&denThang=2023-01-01"},{title:"Đang theo dõi",caption:"Mã số BHXH đang theo dõi",icon:"star",link:"/theo-doi"},{title:"Danh sách khách hàng tái tục BHYT",caption:"Danh sách khách hàng chưa nộp",icon:"contact_page",link:"/khach-hang-chua-nop"},{title:"Danh sách khách hàng tái tục BHXH",caption:"Danh sách khách hàng chưa nộp",icon:"contact_page",link:"/khach-hang-tai-tuc-bhxh"},{title:"Ngừng theo dõi",caption:"Mã số BHXH ngừng hoạt động",icon:"do_not_disturb_on",link:"/ngung-hoat-dong"},{title:"Chưa có dữ liệu",caption:"Mã số BHXH chưa cập nhật",icon:"sync",link:"/dong-bo"},{title:"Cài đặt",caption:"Thông tin người dùng",icon:"settings",link:"/settings"}],b=(0,e.aZ)({name:"MainLayout",components:{EssentialLink:w},setup(){const t=(0,o.iH)(!1);return{essentialLinks:T,leftDrawerOpen:t,toggleLeftDrawer(){t.value=!t.value}}},methods:{...(0,l.nv)("auth",["logoutUser"])}});var H=i(7605),_=i(6602),y=i(1663),v=i(4455),Z=i(1973),C=i(7230),D=i(3246),q=i(2133);const B=(0,p.Z)(b,[["render",a]]),W=B;k()(b,"components",{QLayout:H.Z,QHeader:_.Z,QToolbar:y.Z,QBtn:v.Z,QToolbarTitle:Z.Z,QDrawer:C.Z,QList:D.Z,QItemLabel:g.Z,QPageContainer:q.Z})}}]);