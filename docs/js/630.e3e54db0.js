"use strict";(globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[]).push([[630],{8108:(e,n,a)=>{a.r(n),a.d(n,{default:()=>Q});var o=a(9835),t=a(6970),s=a(1957);const l={class:"q-pa-md"},i={class:"q-gutter-y-md column"},h=["href"],d={class:"text-strike"},u={class:"text-bold"},r={class:"text-strike"},c={class:"text-h6"},g=["href"],p={class:"text-h6"},m={class:"row items-center justify-end"};function T(e,n,a,T,w,C){const D=(0,o.up)("q-btn"),y=(0,o.up)("ListHeader"),k=(0,o.up)("q-icon"),f=(0,o.up)("q-input"),W=(0,o.up)("q-item-label"),_=(0,o.up)("q-item-section"),v=(0,o.up)("q-badge"),S=(0,o.up)("q-item"),N=(0,o.up)("q-separator"),H=(0,o.up)("q-list"),V=(0,o.up)("q-card-section"),b=(0,o.up)("q-card-actions"),I=(0,o.up)("q-card"),L=(0,o.up)("q-dialog"),O=(0,o.up)("q-date"),P=(0,o.up)("q-popup-proxy"),B=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(y,{bgcolor:"bg-orange-4"},{default:(0,o.w5)((()=>[(0,o.Uk)("KHL "+(0,t.zw)(e.doanhThu.toLocaleString())+"đ / "+(0,t.zw)(e.tongSoBuuGui)+" bưu gửi ",1),(0,o.Wm)(D,{rounded:"",color:"primary",onClick:n[0]||(n[0]=n=>e.copySoDienThoaiToClipboard()),icon:"content_copy"}),(0,o.Wm)(D,{rounded:"",color:"primary",onClick:n[1]||(n[1]=n=>e.copyChiCODToClipboard()),icon:"done_all"})])),_:1}),(0,o._)("div",i,[(0,o.Wm)(f,{outlined:"",modelValue:e.searchText,"onUpdate:modelValue":n[3]||(n[3]=n=>e.searchText=n),placeholder:"Từ khóa",hint:`Cước còn: ${(e.doanhThu-e.tongCuocDaThanhToan).toLocaleString()}đ / đã trừ: ${e.tongCuocDaThanhToan.toLocaleString()}đ / `,onKeyup:n[4]||(n[4]=(0,s.D2)((n=>e.traCuu()),["enter"])),dense:""},{append:(0,o.w5)((()=>[""!==e.searchText?((0,o.wg)(),(0,o.j4)(k,{key:0,name:"close",onClick:n[2]||(n[2]=n=>e.searchText=""),class:"cursor-pointer"})):(0,o.kq)("",!0),(0,o.Wm)(k,{name:"search"})])),_:1},8,["modelValue","hint"])]),(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.khls.sort((function(e,n){return n.soLuong-e.soLuong})),(n=>((0,o.wg)(),(0,o.iD)("div",{key:n.senderPhone},[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(n.senderName)+" ",1)])),_:2},1024),(0,o.Wm)(W,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o._)("a",{href:`tel:${n.senderPhone}`},(0,t.zw)(n.senderPhone),9,h)])),_:2},1024),(0,o.Wm)(W,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(n.senderAdd),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(_,{side:"",top:""},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{caption:""},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"info",onClick:a=>e.showItems(n.senderPhone),class:"cursor-pointer"},null,8,["onClick"]),(0,o.Wm)(v,{color:"teal",label:n.soLuong},null,8,["label"])])),_:2},1024),(0,o.Wm)(k,{name:"access_time",onClick:a=>e.showKHL(n.senderPhone)},null,8,["onClick"]),(0,o.Wm)(W,{caption:""},{default:(0,o.w5)((()=>[(0,o._)("strong",null,"COD: "+(0,t.zw)(parseInt(n.tongCOD-n.soTienDaChiCOD).toLocaleString()),1),(0,o._)("span",d,(0,t.zw)(parseInt(n.tongCOD).toLocaleString()),1)])),_:2},1024),(0,o.Wm)(W,{caption:""},{default:(0,o.w5)((()=>[(0,o._)("strong",u,"Còn nợ: "+(0,t.zw)(parseInt(n.tongCuoc-n.soTienDaTruCongNo).toLocaleString()),1),(0,o._)("span",r,(0,t.zw)(parseInt(n.soTienDaTruCongNo).toLocaleString()),1)])),_:2},1024),(0,o.Wm)(W,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Tổng cước: "+(0,t.zw)(parseInt(n.tongCuoc).toLocaleString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,o.Wm)(N,{spaced:"",inset:""})])))),128))])),_:1}),(0,o.Wm)(L,{modelValue:e.showSelectedItems,"onUpdate:modelValue":n[5]||(n[5]=n=>e.showSelectedItems=n),"full-height":""},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{class:"column full-height"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,null,{default:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o.Uk)((0,t.zw)(e.khl.hoTen)+" ",1),(0,o.Wm)(v,{label:e.selectItems.length},null,8,["label"])])])),_:1}),(0,o.Wm)(V,{class:"col q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{bordered:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.allCods.filter((n=>n.soDienThoai==e.khl.soDienThoai)),(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{color:"primary",name:"paid"})])),_:1}),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,{overline:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(e.tenNguoiHuong),1)])),_:2},1024),(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(e.soTaiKhoanNganHang)+"-"+(0,t.zw)(e.tenNganHang),1)])),_:2},1024),(0,o.Wm)(W,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Đã chi: "+(0,t.zw)(parseInt(e.soTienCODvePaypost-e.soTienBuTruCongNo).toLocaleString()),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(_,{side:"",top:""},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(e.ngayLamViec),1)])),_:2},1024),(0,o.Wm)(W,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("COD: "+(0,t.zw)(parseInt(e.soTienCODvePaypost).toLocaleString()),1)])),_:2},1024),(0,o.Wm)(W,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Cước:"+(0,t.zw)(parseInt(e.soTienBuTruCongNo).toLocaleString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128)),(0,o.Wm)(N,{spaced:"",inset:"item"}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.selectItems,(n=>((0,o.wg)(),(0,o.iD)("div",{key:n.id},[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(n.senderName),1)])),_:2},1024),(0,o.Wm)(W,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o._)("a",{href:`tel:${n.senderPhone}`},(0,t.zw)(n.senderPhone),9,g)])),_:2},1024),(0,o.Wm)(W,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(n.contentNote),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(_,{side:"",top:""},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(n.ttNumber),1)])),_:2},1024),(0,o.Wm)(k,{name:"content_copy",onClick:a=>e.copyTextToClipboard(n.ttNumber)},null,8,["onClick"]),(0,o.Wm)(W,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Số tiền: "+(0,t.zw)(parseInt(n.totalFeeSpecial).toLocaleString()),1)])),_:2},1024),(0,o.Wm)(W,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(new Date(n.updatedDate).toLocaleString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,o.Wm)(N,{spaced:"",inset:""})])))),128))])),_:1})])),_:1}),(0,o.Wm)(b,{align:"right",class:"bg-white text-teal"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(D,{flat:"",label:"OK"},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(L,{modelValue:e.showDialog,"onUpdate:modelValue":n[18]||(n[18]=n=>e.showDialog=n),"full-height":""},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{class:"column full-height"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,null,{default:(0,o.w5)((()=>[(0,o._)("div",p,(0,t.zw)(e.khl.hoTen)+" - "+(0,t.zw)(e.khl.soDienThoai),1)])),_:1}),(0,o.Wm)(V,{class:"col q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{modelValue:e.khl.hoTen,"onUpdate:modelValue":n[6]||(n[6]=n=>e.khl.hoTen=n),label:"Họ và tên"},null,8,["modelValue"]),(0,o.Wm)(f,{modelValue:e.khl.maCRM,"onUpdate:modelValue":n[8]||(n[8]=n=>e.khl.maCRM=n),label:"Mã CRM"},{append:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"content_copy",onClick:n[7]||(n[7]=n=>e.copyTextDienThoaiToClipboard(e.khl.maCRM))})])),_:1},8,["modelValue"]),(0,o.Wm)(f,{modelValue:e.khl.hopDong,"onUpdate:modelValue":n[9]||(n[9]=n=>e.khl.hopDong=n),label:"Hợp đồng DVBC"},null,8,["modelValue"]),(0,o.Wm)(f,{modelValue:e.khl.ngayHopDong,"onUpdate:modelValue":n[11]||(n[11]=n=>e.khl.ngayHopDong=n),label:"Ngày hợp đồng",mask:"date",rules:["date"],dense:e.dense},{append:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(P,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{modelValue:e.khl.ngayHopDong,"onUpdate:modelValue":n[10]||(n[10]=n=>e.khl.ngayHopDong=n)},{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o.wy)((0,o.Wm)(D,{label:"Đóng",color:"primary",flat:"",dense:e.dense},null,8,["dense"]),[[B]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","dense"]),(0,o.Wm)(f,{modelValue:e.khl.tenNguoiHuong,"onUpdate:modelValue":n[12]||(n[12]=n=>e.khl.tenNguoiHuong=n),label:"Tên người hưởng",dense:e.dense},null,8,["modelValue","dense"]),(0,o.Wm)(f,{modelValue:e.khl.soTaiKhoanNganHang,"onUpdate:modelValue":n[13]||(n[13]=n=>e.khl.soTaiKhoanNganHang=n),label:"Số tài khoản ngân hàng",dense:e.dense},null,8,["modelValue","dense"]),(0,o.Wm)(f,{modelValue:e.khl.tenNganHang,"onUpdate:modelValue":n[14]||(n[14]=n=>e.khl.tenNganHang=n),label:"Tên ngân hàng",dense:e.dense},null,8,["modelValue","dense"]),(0,o.Wm)(f,{modelValue:e.khl.soTienBuTruCongNo,"onUpdate:modelValue":n[15]||(n[15]=n=>e.khl.soTienBuTruCongNo=n),label:"Số tiền trừ công nợ",dense:e.dense},null,8,["modelValue","dense"]),(0,o.Wm)(f,{modelValue:e.khl.soTienCODvePaypost,"onUpdate:modelValue":n[17]||(n[17]=n=>e.khl.soTienCODvePaypost=n),label:"Số tiền COD về Paypost",dense:e.dense},{after:(0,o.w5)((()=>[(0,o.Wm)(D,{round:"",dense:"",flat:"",icon:"send",onClick:n[16]||(n[16]=n=>e.updateKHL(e.khl))})])),_:1},8,["modelValue","dense"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}a(9665);var w=a(9981),C=a.n(w),D=a(4328),y=a(4026);const k=(0,o.aZ)({components:{ListHeader:y.Z},name:"KHLPage",data(){const[e,n,a]=(new Date).toISOString().slice(0,10).split("-");return{ngayLamViec:[e,n,a].join("/"),showDialog:!1,showSelectedItems:!1,ngay:a,thang:n,nam:e,searchText:[n,e].join("/"),tokenFe:"",dsDonHang:[],khls:[],tongSoBuuGui:0,doanhThu:0,tongCuocDaThanhToan:0,khl:{hoTen:"Nguyễn Văn Thìn",soDienThoai:"0978333963",hopDong:"Mlinh-191022-622000",ngayHopDong:"2022/10/19",soTienCODvePaypost:4e6,soTienBuTruCongNo:77500,soTienDaTruCongNo:0,tenNguoiHuong:"Nguyễn Văn Thìn",soTaiKhoanNganHang:"1618081988",tenNganHang:"MB",maCRM:"14200A04000622000"},selectItems:[],cods:[],allCods:[]}},methods:{sleep(){return new Promise((e=>setTimeout(e,1500)))},async login(){var e=JSON.stringify({username:"142010_THAMHT",password:"Abc@123456789",ip:"",random:.8677049060452371}),n={method:"post",maxBodyLength:1/0,url:"https://api-portalkhl.vnpost.vn/api/auth/signinKhl",headers:{capikey:"19001235","Content-Type":"application/json"},data:e};const{data:{tokenFe:a}}=await C().post("https://api-portalkhl.vnpost.vn/api/auth/signinKhl",e,n);this.tokenFe=a},async loadData(e=0){this.dsDonHang=[],this.tokenFe||await this.login();var n=JSON.stringify({orgCode:"142010",tuNgay:[1,parseInt(this.thang-e||12),this.nam].join("/"),denNgay:new Date(this.nam,parseInt(this.thang-e),1).toISOString().slice(0,10).split("-").reverse().join("/"),pageNum:0,pageSize:5e3,sourceSystem:"KHL"}),a={method:"post",maxBodyLength:1/0,url:"https://api-portalkhl.vnpost.vn/khl/getItemDtl",headers:{Authorization:`Bearer ${this.tokenFe}`,"Content-Type":"application/json"},data:n};const{data:[o,t]}=await C()(a);this.tongSoBuuGui=o,this.doanhThu=t.reduce(((e,{totalFeeSpecial:n})=>e+parseInt(n)),0),this.dsDonHang=t;const s=new Map,l=t.map((({senderPhone:e,senderName:n,senderAdd:a})=>({senderPhone:e,senderName:n,senderAdd:a})));for(let i=0;i<l.length;i++){const e=l[i];if(!s.has(e.senderPhone)){const n=t.filter((n=>n.senderPhone===e.senderPhone));s.set(e.senderPhone,{...e,soLuong:n.length,tongCuoc:n.reduce(((e,{totalFeeSpecial:n})=>e+parseInt(n)),0),tongCOD:n.filter((e=>e.codAmount)).reduce(((e,{codAmount:n})=>e+parseInt(n)),0),soTienDaTruCongNo:this.tongSoTienBuTruCongNoDaTru(e.senderPhone),soTienDaChiCOD:this.tongSoTienDaChiCOD(e.senderPhone)})}}this.khls=[...s.values()]},async traCuu(){const[e,n]=this.searchText.split("/");this.thang=e,this.nam=n,this.loadData()},async findItems(e){return this.dsDonHang.filter((n=>n.senderPhone===e))},async tongCuoc(e){return e.reduce(((e,{totalFeeSpecial:n})=>e+parseInt(n)),0)},async tongSoTienBuTruCongNo(e){const n=await this.tongCuoc(await this.findItems(e))-this.cods.reduce(((e,{soTienBuTruCongNo:n})=>e+parseInt(n)),0);return parseInt(n).toLocaleString()},tongSoTienBuTruCongNoDaTru(e){const n=this.allCods.filter((n=>n.soDienThoai==e)).reduce(((e,{soTienBuTruCongNo:n})=>e+parseInt(n)),0);return n},tongSoTienDaChiCOD(e){const n=this.allCods.filter((n=>n.soDienThoai==e)).reduce(((e,{soTienCODvePaypost:n})=>e+parseInt(n)),0);return n},async updateKHL({soDienThoai:e,hoTen:n,hopDong:a,ngayHopDong:o,tenNguoiHuong:t,soTaiKhoanNganHang:s,tenNganHang:l,maCRM:i,soTienCODvePaypost:h,soTienBuTruCongNo:d}){try{const{data:u}=await this.$api.post("https://app.hotham.vn/api/cods",{soDienThoai:e,hoTen:n,hopDong:a,ngayHopDong:o,tenNguoiHuong:t,soTaiKhoanNganHang:s,tenNganHang:l,maCRM:i,soTienCODvePaypost:h.replaceAll(".",""),soTienBuTruCongNo:d.replaceAll(".",""),ngayLamViec:this.ngayLamViec}),r=this.cods.find((n=>n.soDienThoai===e&&new Date(n.ngayLamViec).toISOString().slice(0,10)===(new Date).toISOString().slice(0,10)));r?Object.assign(r,u):this.allCods.push(u),await this.$api.put(`https://app.hotham.vn/api/khls/${e}`,{hoTen:n,hopDong:a,ngayHopDong:o,tenNguoiHuong:t,soTaiKhoanNganHang:s,tenNganHang:l,maCRM:i}),this.showDialog=!1,D.Z.create({type:"positive",message:"Đã ghi nhận thành công!"})}catch(u){D.Z.create({type:"negative",message:"Không lưu được thông tin khách hàng!"+err})}},async loadKHL(e){try{const{data:n}=await this.$api.get(`https://app.hotham.vn/api/khls/${e}`);this.khl=n}catch(n){D.Z.create({type:"negative",message:"Lỗi hệ thống!"+err})}},async loadCods(e){try{const{data:n}=await this.$api.get(`https://app.hotham.vn/api/cods?name=${e}`);this.cods=n}catch(n){D.Z.create({type:"negative",message:"Lỗi hệ thống!"+err})}},async loadAllCods(){const{data:e}=await this.$api.get("https://app.hotham.vn/api/cods");this.allCods=e,this.tongCuocDaThanhToan=this.allCods.reduce(((e,{soTienBuTruCongNo:n})=>e+parseInt(n)),0)},async showKHL(e){await this.loadCods(e),await this.loadKHL(e),this.khl.soTienBuTruCongNo=await this.tongSoTienBuTruCongNo(e);const n=this.cods.find((n=>n.soDienThoai===e&&new Date(n.ngayLamViec).toISOString().slice(0,10)===(new Date).toISOString().slice(0,10)));n&&(this.khl.soTienCODvePaypost=parseInt(n.soTienCODvePaypost).toLocaleString(),this.khl.soTienBuTruCongNo=parseInt(n.soTienBuTruCongNo).toLocaleString()),this.showDialog=!0},async showItems(e){await this.loadKHL(e),this.selectItems=this.dsDonHang.filter((n=>n.senderPhone===e)),this.showSelectedItems=!0},copyTextToClipboard(e){navigator.clipboard.writeText(`Để theo dõi định vị bưu gửi https://www.hotham.vn/tra-cuu-hang-buu-dien?q=${e}. (Bạn chỉ cần bấm vào link)`).then((function(){D.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){D.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},copySoDienThoaiToClipboard(){navigator.clipboard.writeText(this.khls.map((e=>e.senderPhone)).join()).then((function(){D.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){D.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},copyTextDienThoaiToClipboard(e){navigator.clipboard.writeText(e).then((function(){D.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){D.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},async copyChiCODToClipboard(){await this.loadAllCods(),navigator.clipboard.writeText(`${this.allCods.filter((e=>new Date(e.ngayLamViec).toISOString().slice(0,10)===(new Date).toISOString().slice(0,10))).map((({hoTen:e,hopDong:n,ngayHopDong:a,soTienCODvePaypost:o,soTienBuTruCongNo:t,tenNguoiHuong:s,soTaiKhoanNganHang:l,tenNganHang:i,maCRM:h})=>[e,n,a,o,t,o-t,s,l,i,,h].join("\t"))).join("\r\n")}\n`).then((function(){D.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){D.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},async khoiTao(){await this.loadAllCods(),this.ngay<3?(await this.loadData(1),this.searchText=[this.thang-1||12,this.nam].join("/")):await this.loadData()}},mounted(){this.khoiTao()}});var f=a(1639),W=a(4455),_=a(7471),v=a(2857),S=a(2765),N=a(7088),H=a(3246),V=a(490),b=a(1233),I=a(3115),L=a(990),O=a(2218),P=a(2074),B=a(4458),Z=a(3190),K=a(1821),U=a(2146),z=a(9984),x=a.n(z);const q=(0,f.Z)(k,[["render",T]]),Q=q;x()(k,"components",{QBtn:W.Z,QInput:_.Z,QIcon:v.Z,QPopupProxy:S.Z,QDate:N.Z,QList:H.Z,QItem:V.Z,QItemSection:b.Z,QItemLabel:I.Z,QBadge:L.Z,QSeparator:O.Z,QDialog:P.Z,QCard:B.Z,QCardSection:Z.Z,QCardActions:K.Z}),x()(k,"directives",{ClosePopup:U.Z})}}]);