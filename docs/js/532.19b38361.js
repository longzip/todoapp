"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[532],{2960:(e,n,a)=>{a.r(n),a.d(n,{default:()=>F});var o=a(9835),t=a(6970),s=a(1957);const i={class:"q-pa-md"},l={class:"q-gutter-y-md column"},h=["href"],d=(0,o.Uk)(),u=(0,o.Uk)(),r={class:"text-strike"},c={class:"text-bold"},g=(0,o.Uk)(),p={class:"text-strike"},m={class:"text-h6"},w=["href"],T={class:"text-h6"},C={class:"row items-center justify-end"};function D(e,n,a,D,y,k){const f=(0,o.up)("q-btn"),W=(0,o.up)("ListHeader"),_=(0,o.up)("q-icon"),S=(0,o.up)("q-input"),v=(0,o.up)("q-item-label"),N=(0,o.up)("q-item-section"),H=(0,o.up)("q-badge"),V=(0,o.up)("q-item"),b=(0,o.up)("q-separator"),I=(0,o.up)("q-list"),L=(0,o.up)("q-card-section"),Z=(0,o.up)("q-card-actions"),O=(0,o.up)("q-card"),P=(0,o.up)("q-dialog"),B=(0,o.up)("q-date"),U=(0,o.up)("q-popup-proxy"),z=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(W,{bgcolor:"bg-orange-4"},{default:(0,o.w5)((()=>[(0,o.Uk)("KHL "+(0,t.zw)(e.doanhThu.toLocaleString())+"đ / "+(0,t.zw)(e.tongSoBuuGui)+" bưu gửi ",1),(0,o.Wm)(f,{rounded:"",color:"primary",onClick:n[0]||(n[0]=n=>e.copySoDienThoaiToClipboard()),icon:"content_copy"}),(0,o.Wm)(f,{rounded:"",color:"primary",onClick:n[1]||(n[1]=n=>e.copyChiCODToClipboard()),icon:"done_all"})])),_:1}),(0,o._)("div",l,[(0,o.Wm)(S,{outlined:"",modelValue:e.searchText,"onUpdate:modelValue":n[3]||(n[3]=n=>e.searchText=n),placeholder:"Từ khóa",hint:`Cước còn: ${(e.doanhThu-e.tongCuocDaThanhToan).toLocaleString()}đ / đã trừ: ${e.tongCuocDaThanhToan.toLocaleString()}đ / `,onKeyup:n[4]||(n[4]=(0,s.D2)((n=>e.traCuu()),["enter"])),dense:""},{append:(0,o.w5)((()=>[""!==e.searchText?((0,o.wg)(),(0,o.j4)(_,{key:0,name:"close",onClick:n[2]||(n[2]=n=>e.searchText=""),class:"cursor-pointer"})):(0,o.kq)("",!0),(0,o.Wm)(_,{name:"search"})])),_:1},8,["modelValue","hint"])]),(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.khls.sort((function(e,n){return n.soLuong-e.soLuong})),(n=>((0,o.wg)(),(0,o.iD)("div",{key:n.senderPhone},[(0,o.Wm)(V,null,{default:(0,o.w5)((()=>[(0,o.Wm)(N,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(n.senderName),1)])),_:2},1024),(0,o.Wm)(v,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o._)("a",{href:`tel:${n.senderPhone}`},(0,t.zw)(n.senderPhone),9,h)])),_:2},1024),(0,o.Wm)(v,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(n.senderAdd),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(N,{side:"",top:""},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{caption:""},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"info",onClick:a=>e.showItems(n.senderPhone),class:"cursor-pointer"},null,8,["onClick"]),d,(0,o.Wm)(H,{color:"teal",label:n.soLuong},null,8,["label"])])),_:2},1024),(0,o.Wm)(_,{name:"access_time",onClick:a=>e.showKHL(n.senderPhone)},null,8,["onClick"]),(0,o.Wm)(v,{caption:""},{default:(0,o.w5)((()=>[(0,o._)("strong",null,"COD: "+(0,t.zw)(parseInt(n.tongCOD-n.soTienDaChiCOD).toLocaleString()),1),u,(0,o._)("span",r,(0,t.zw)(parseInt(n.tongCOD).toLocaleString()),1)])),_:2},1024),(0,o.Wm)(v,{caption:""},{default:(0,o.w5)((()=>[(0,o._)("strong",c,"Còn nợ: "+(0,t.zw)(parseInt(n.tongCuoc-n.soTienDaTruCongNo).toLocaleString()),1),g,(0,o._)("span",p,(0,t.zw)(parseInt(n.soTienDaTruCongNo).toLocaleString()),1)])),_:2},1024),(0,o.Wm)(v,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Tổng cước: "+(0,t.zw)(parseInt(n.tongCuoc).toLocaleString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,o.Wm)(b,{spaced:"",inset:""})])))),128))])),_:1}),(0,o.Wm)(P,{modelValue:e.showSelectedItems,"onUpdate:modelValue":n[5]||(n[5]=n=>e.showSelectedItems=n),"full-height":""},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{class:"column full-height"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o.Uk)((0,t.zw)(e.khl.hoTen)+" ",1),(0,o.Wm)(H,{label:e.selectItems.length},null,8,["label"])])])),_:1}),(0,o.Wm)(L,{class:"col q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{bordered:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.allCods.filter((n=>n.soDienThoai==e.khl.soDienThoai)),(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o.Wm)(V,null,{default:(0,o.w5)((()=>[(0,o.Wm)(N,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{color:"primary",name:"paid"})])),_:1}),(0,o.Wm)(N,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,{overline:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(e.tenNguoiHuong),1)])),_:2},1024),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(e.soTaiKhoanNganHang)+"-"+(0,t.zw)(e.tenNganHang),1)])),_:2},1024),(0,o.Wm)(v,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Đã chi: "+(0,t.zw)(parseInt(e.soTienCODvePaypost-e.soTienBuTruCongNo).toLocaleString()),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(N,{side:"",top:""},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(e.ngayLamViec),1)])),_:2},1024),(0,o.Wm)(v,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("COD: "+(0,t.zw)(parseInt(e.soTienCODvePaypost).toLocaleString()),1)])),_:2},1024),(0,o.Wm)(v,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Cước:"+(0,t.zw)(parseInt(e.soTienBuTruCongNo).toLocaleString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128)),(0,o.Wm)(b,{spaced:"",inset:"item"}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.selectItems,(n=>((0,o.wg)(),(0,o.iD)("div",{key:n.id},[(0,o.Wm)(V,null,{default:(0,o.w5)((()=>[(0,o.Wm)(N,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(n.senderName),1)])),_:2},1024),(0,o.Wm)(v,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o._)("a",{href:`tel:${n.senderPhone}`},(0,t.zw)(n.senderPhone),9,w)])),_:2},1024),(0,o.Wm)(v,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(n.contentNote),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(N,{side:"",top:""},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(n.ttNumber),1)])),_:2},1024),(0,o.Wm)(_,{name:"content_copy",onClick:a=>e.copyTextToClipboard(n.ttNumber)},null,8,["onClick"]),(0,o.Wm)(v,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Số tiền: "+(0,t.zw)(parseInt(n.totalFeeSpecial).toLocaleString()),1)])),_:2},1024),(0,o.Wm)(v,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(new Date(n.updatedDate).toLocaleString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,o.Wm)(b,{spaced:"",inset:""})])))),128))])),_:1})])),_:1}),(0,o.Wm)(Z,{align:"right",class:"bg-white text-teal"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(f,{flat:"",label:"OK"},null,512),[[z]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(P,{modelValue:e.showDialog,"onUpdate:modelValue":n[18]||(n[18]=n=>e.showDialog=n),"full-height":""},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{class:"column full-height"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o._)("div",T,(0,t.zw)(e.khl.hoTen)+" - "+(0,t.zw)(e.khl.soDienThoai),1)])),_:1}),(0,o.Wm)(L,{class:"col q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{modelValue:e.khl.hoTen,"onUpdate:modelValue":n[6]||(n[6]=n=>e.khl.hoTen=n),label:"Họ và tên"},null,8,["modelValue"]),(0,o.Wm)(S,{modelValue:e.khl.maCRM,"onUpdate:modelValue":n[8]||(n[8]=n=>e.khl.maCRM=n),label:"Mã CRM"},{append:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"content_copy",onClick:n[7]||(n[7]=n=>e.copyTextDienThoaiToClipboard(e.khl.maCRM))})])),_:1},8,["modelValue"]),(0,o.Wm)(S,{modelValue:e.khl.hopDong,"onUpdate:modelValue":n[9]||(n[9]=n=>e.khl.hopDong=n),label:"Hợp đồng DVBC"},null,8,["modelValue"]),(0,o.Wm)(S,{modelValue:e.khl.ngayHopDong,"onUpdate:modelValue":n[11]||(n[11]=n=>e.khl.ngayHopDong=n),label:"Ngày hợp đồng",mask:"date",rules:["date"],dense:e.dense},{append:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{modelValue:e.khl.ngayHopDong,"onUpdate:modelValue":n[10]||(n[10]=n=>e.khl.ngayHopDong=n)},{default:(0,o.w5)((()=>[(0,o._)("div",C,[(0,o.wy)((0,o.Wm)(f,{label:"Đóng",color:"primary",flat:"",dense:e.dense},null,8,["dense"]),[[z]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","dense"]),(0,o.Wm)(S,{modelValue:e.khl.tenNguoiHuong,"onUpdate:modelValue":n[12]||(n[12]=n=>e.khl.tenNguoiHuong=n),label:"Tên người hưởng",dense:e.dense},null,8,["modelValue","dense"]),(0,o.Wm)(S,{modelValue:e.khl.soTaiKhoanNganHang,"onUpdate:modelValue":n[13]||(n[13]=n=>e.khl.soTaiKhoanNganHang=n),label:"Số tài khoản ngân hàng",dense:e.dense},null,8,["modelValue","dense"]),(0,o.Wm)(S,{modelValue:e.khl.tenNganHang,"onUpdate:modelValue":n[14]||(n[14]=n=>e.khl.tenNganHang=n),label:"Tên ngân hàng",dense:e.dense},null,8,["modelValue","dense"]),(0,o.Wm)(S,{modelValue:e.khl.soTienBuTruCongNo,"onUpdate:modelValue":n[15]||(n[15]=n=>e.khl.soTienBuTruCongNo=n),label:"Số tiền trừ công nợ",dense:e.dense},null,8,["modelValue","dense"]),(0,o.Wm)(S,{modelValue:e.khl.soTienCODvePaypost,"onUpdate:modelValue":n[17]||(n[17]=n=>e.khl.soTienCODvePaypost=n),label:"Số tiền COD về Paypost",dense:e.dense},{after:(0,o.w5)((()=>[(0,o.Wm)(f,{round:"",dense:"",flat:"",icon:"send",onClick:n[16]||(n[16]=n=>e.updateKHL(e.khl))})])),_:1},8,["modelValue","dense"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}a(702),a(8964),a(2809);var y=a(9981),k=a.n(y),f=a(6827),W=a(6950),_=a(8359),S=a(4026);const v=(0,o.aZ)({components:{ListHeader:S.Z},name:"KHLPage",data(){const[e,n,a]=(new Date).toISOString().slice(0,10).split("-");return{ngayLamViec:[e,n,a].join("/"),showDialog:!1,showSelectedItems:!1,ngay:a,thang:n,nam:e,searchText:[n,e].join("/"),tokenFe:"",dsDonHang:[],khls:[],tongSoBuuGui:0,doanhThu:0,tongCuocDaThanhToan:0,khl:{hoTen:"Nguyễn Văn Thìn",soDienThoai:"0978333963",hopDong:"Mlinh-191022-622000",ngayHopDong:"2022/10/19",soTienCODvePaypost:4e6,soTienBuTruCongNo:77500,soTienDaTruCongNo:0,tenNguoiHuong:"Nguyễn Văn Thìn",soTaiKhoanNganHang:"1618081988",tenNganHang:"MB",maCRM:"14200A04000622000"},selectItems:[],cods:[],allCods:[]}},methods:{sleep(){return new Promise((e=>setTimeout(e,1500)))},async login(){var e=JSON.stringify({username:"142010_THAMHT",password:"Abc@123456789",ip:"",random:.8677049060452371}),n={method:"post",maxBodyLength:1/0,url:"https://api-portalkhl.vnpost.vn/api/auth/signinKhl",headers:{capikey:"19001235","Content-Type":"application/json"},data:e};const{data:{tokenFe:a}}=await k().post("https://api-portalkhl.vnpost.vn/api/auth/signinKhl",e,n);this.tokenFe=a},async loadData(e=0){this.dsDonHang=[],this.tokenFe||await this.login();var n=JSON.stringify({orgCode:"142010",tuNgay:[1,parseInt(this.thang-e||12),this.nam].join("/"),denNgay:new Date(this.nam,parseInt(this.thang-e),1).toISOString().slice(0,10).split("-").reverse().join("/"),pageNum:0,pageSize:5e3,sourceSystem:"KHL"}),a={method:"post",maxBodyLength:1/0,url:"https://api-portalkhl.vnpost.vn/khl/getItemDtl",headers:{Authorization:`Bearer ${this.tokenFe}`,"Content-Type":"application/json"},data:n};W.Z.show({spinner:_.Z,spinnerSize:"100px"});const{data:[o,t]}=await k()(a);this.tongSoBuuGui=o,this.doanhThu=t.reduce(((e,{totalFeeSpecial:n})=>e+parseInt(n)),0),W.Z.hide(),this.dsDonHang=t;const s=new Map,i=t.map((({senderPhone:e,senderName:n,senderAdd:a})=>({senderPhone:e,senderName:n,senderAdd:a})));for(let l=0;l<i.length;l++){const e=i[l];if(!s.has(e.senderPhone)){const n=t.filter((n=>n.senderPhone===e.senderPhone));s.set(e.senderPhone,{...e,soLuong:n.length,tongCuoc:n.reduce(((e,{totalFeeSpecial:n})=>e+parseInt(n)),0),tongCOD:n.filter((e=>e.codAmount)).reduce(((e,{codAmount:n})=>e+parseInt(n)),0),soTienDaTruCongNo:this.tongSoTienBuTruCongNoDaTru(e.senderPhone),soTienDaChiCOD:this.tongSoTienDaChiCOD(e.senderPhone)})}}this.khls=[...s.values()]},async traCuu(){const[e,n]=this.searchText.split("/");this.thang=e,this.nam=n,this.loadData()},async findItems(e){return this.dsDonHang.filter((n=>n.senderPhone===e))},async tongCuoc(e){return e.reduce(((e,{totalFeeSpecial:n})=>e+parseInt(n)),0)},async tongSoTienBuTruCongNo(e){const n=await this.tongCuoc(await this.findItems(e))-this.cods.reduce(((e,{soTienBuTruCongNo:n})=>e+parseInt(n)),0);return parseInt(n).toLocaleString()},tongSoTienBuTruCongNoDaTru(e){const n=this.allCods.filter((n=>n.soDienThoai==e)).reduce(((e,{soTienBuTruCongNo:n})=>e+parseInt(n)),0);return n},tongSoTienDaChiCOD(e){const n=this.allCods.filter((n=>n.soDienThoai==e)).reduce(((e,{soTienCODvePaypost:n})=>e+parseInt(n)),0);return n},async updateKHL({soDienThoai:e,hoTen:n,hopDong:a,ngayHopDong:o,tenNguoiHuong:t,soTaiKhoanNganHang:s,tenNganHang:i,maCRM:l,soTienCODvePaypost:h,soTienBuTruCongNo:d}){try{const{data:u}=await this.$api.post("https://app.hotham.vn/api/cods",{soDienThoai:e,hoTen:n,hopDong:a,ngayHopDong:o,tenNguoiHuong:t,soTaiKhoanNganHang:s,tenNganHang:i,maCRM:l,soTienCODvePaypost:h.replaceAll(".",""),soTienBuTruCongNo:d.replaceAll(".",""),ngayLamViec:this.ngayLamViec}),r=this.cods.find((n=>n.soDienThoai===e&&new Date(n.ngayLamViec).toISOString().slice(0,10)===(new Date).toISOString().slice(0,10)));r?Object.assign(r,u):this.allCods.push(u),await this.$api.put(`https://app.hotham.vn/api/khls/${e}`,{hoTen:n,hopDong:a,ngayHopDong:o,tenNguoiHuong:t,soTaiKhoanNganHang:s,tenNganHang:i,maCRM:l}),this.showDialog=!1,f.Z.create({type:"positive",message:"Đã ghi nhận thành công!"})}catch(u){f.Z.create({type:"negative",message:"Không lưu được thông tin khách hàng!"+err})}},async loadKHL(e){try{const{data:n}=await this.$api.get(`https://app.hotham.vn/api/khls/${e}`);this.khl=n}catch(n){f.Z.create({type:"negative",message:"Lỗi hệ thống!"+err})}},async loadCods(e){try{W.Z.show({spinner:_.Z,spinnerSize:"100px"});const{data:n}=await this.$api.get(`https://app.hotham.vn/api/cods?name=${e}`);this.cods=n,W.Z.hide()}catch(n){f.Z.create({type:"negative",message:"Lỗi hệ thống!"+err})}},async loadAllCods(){const{data:e}=await this.$api.get("https://app.hotham.vn/api/cods");this.allCods=e,this.tongCuocDaThanhToan=this.allCods.reduce(((e,{soTienBuTruCongNo:n})=>e+parseInt(n)),0)},async showKHL(e){await this.loadCods(e),await this.loadKHL(e),this.khl.soTienBuTruCongNo=await this.tongSoTienBuTruCongNo(e);const n=this.cods.find((n=>n.soDienThoai===e&&new Date(n.ngayLamViec).toISOString().slice(0,10)===(new Date).toISOString().slice(0,10)));n&&(this.khl.soTienCODvePaypost=parseInt(n.soTienCODvePaypost).toLocaleString(),this.khl.soTienBuTruCongNo=parseInt(n.soTienBuTruCongNo).toLocaleString()),this.showDialog=!0},async showItems(e){await this.loadKHL(e),this.selectItems=this.dsDonHang.filter((n=>n.senderPhone===e)),this.showSelectedItems=!0},copyTextToClipboard(e){navigator.clipboard.writeText(`Để theo dõi định vị bưu gửi https://www.hotham.vn/tra-cuu-hang-buu-dien?q=${e}. (Bạn chỉ cần bấm vào link)`).then((function(){f.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){f.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},copySoDienThoaiToClipboard(){navigator.clipboard.writeText(this.khls.map((e=>e.senderPhone)).join()).then((function(){f.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){f.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},copyTextDienThoaiToClipboard(e){navigator.clipboard.writeText(e).then((function(){f.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){f.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},async copyChiCODToClipboard(){await this.loadAllCods(),navigator.clipboard.writeText(`${this.allCods.filter((e=>new Date(e.ngayLamViec).toISOString().slice(0,10)===(new Date).toISOString().slice(0,10))).map((({hoTen:e,hopDong:n,ngayHopDong:a,soTienCODvePaypost:o,soTienBuTruCongNo:t,tenNguoiHuong:s,soTaiKhoanNganHang:i,tenNganHang:l,maCRM:h})=>[e,n,a,o,t,o-t,s,i,l,,h].join("\t"))).join("\r\n")}\n`).then((function(){f.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){f.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},async khoiTao(){await this.loadAllCods(),this.ngay<3?(await this.loadData(1),this.searchText=[this.thang-1||12,this.nam].join("/")):await this.loadData()}},mounted(){this.khoiTao()}});var N=a(1639),H=a(4455),V=a(361),b=a(2857),I=a(2765),L=a(7088),Z=a(3246),O=a(490),P=a(1233),B=a(3115),U=a(990),z=a(2218),K=a(2074),x=a(4458),q=a(3190),Q=a(1821),A=a(2146),$=a(9984),M=a.n($);const j=(0,N.Z)(v,[["render",D]]),F=j;M()(v,"components",{QBtn:H.Z,QInput:V.Z,QIcon:b.Z,QPopupProxy:I.Z,QDate:L.Z,QList:Z.Z,QItem:O.Z,QItemSection:P.Z,QItemLabel:B.Z,QBadge:U.Z,QSeparator:z.Z,QDialog:K.Z,QCard:x.Z,QCardSection:q.Z,QCardActions:Q.Z}),M()(v,"directives",{ClosePopup:A.Z})}}]);