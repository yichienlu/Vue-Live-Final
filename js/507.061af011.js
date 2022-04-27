"use strict";(self["webpackChunkeden"]=self["webpackChunkeden"]||[]).push([[507],{9507:function(t,e,a){a.r(e),a.d(e,{default:function(){return tt}});var s=a(6252),l=a(3577),r=a(9963);const c={class:"container py-5"},i=(0,s.uE)('<div class="mb-5 row justify-content-center"><div class="col col-md-10 col-lg-8"><ul class="d-flex justify-content-center list-unstyled"><li class="col text-center position-relative"><div class="text-primary">購物車</div><div class="step-bar bg-primary"></div><div class="step-circle bg-primary"><span>1</span></div></li><li class="col text-center position-relative"><div class="text-primary fw-bold">建立訂單</div><div class="step-bar bg-secondary"></div><div class="step-circle bg-primary mx-auto"><span>2</span></div></li><li class="col text-center position-relative"><div class="text-secondary">付款</div><div class="step-bar bg-secondary"></div><div class="step-circle bg-secondary mx-auto"><span>3</span></div></li><li class="col text-center"><div class="text-secondary">付款完成</div><div class="step-circle bg-secondary mx-auto"><span>4</span></div></li></ul></div></div>',1),o={class:"row row-cols-1 row-cols-lg-2"},d={class:"col-lg-6 p-2 p-md-3"},n={class:"d-sm-none"},u={class:"fw-bold"},m={key:0,class:"text-danger"},p={key:1},_={class:"text-danger ms-2"},g={class:"ms-auto"},v={class:"text-end border-top border-2 border-primary pt-2"},f={class:"text-danger text-end pt-2"},h={class:"text-end"},b={key:0,class:"text-danger"},w={class:"d-none d-sm-table table align-middle"},x=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{style:{width:"100px"}},"品名"),(0,s._)("th"),(0,s._)("th",{class:"text-end"},"數量"),(0,s._)("th",{class:"text-end"},"合計")])],-1),y={class:"fw-bold"},k={key:0},D={key:1},z={class:"ms-2"},U={class:"text-end"},W={class:"text-end"},$=(0,s._)("td",{class:"text-end"},"總計",-1),V={colspan:"3",class:"text-end"},q=(0,s._)("td",{class:"text-end text-success"},"折扣價",-1),C={colspan:"3",class:"text-end text-success"},L=(0,s._)("br",null,null,-1),M={key:0,class:"text-mute"},j=(0,s._)("button",{type:"button",class:"btn btn-outline-primary mt-5"},[(0,s._)("i",{class:"bi bi-arrow-left"}),(0,s.Uk)(" 回購物車 ")],-1),E={class:"col-lg-6 p-3"},S={class:"p-4 shadow"},H={class:"mb-3"},O=(0,s._)("label",{for:"email",class:"form-label"},[(0,s.Uk)("Email"),(0,s._)("span",{class:"text-danger"},"*")],-1),Y={class:"row"},Z={class:"col-lg-6 mb-3"},K=(0,s._)("label",{for:"name",class:"form-label"},[(0,s.Uk)("收件人姓名"),(0,s._)("span",{class:"text-danger"},"*")],-1),P={class:"col-lg-6 mb-3"},B=(0,s._)("label",{for:"tel",class:"form-label"},[(0,s.Uk)("收件人電話"),(0,s._)("span",{class:"text-danger"},"*")],-1),F={class:"mb-3"},I=(0,s._)("label",{for:"address",class:"form-label"},[(0,s.Uk)("收件人地址"),(0,s._)("span",{class:"text-danger"},"*")],-1),A={class:"mb-3"},G=(0,s._)("label",{for:"message",class:"form-label"},"留言",-1),J=["disabled"];function N(t,e,a,N,Q,R){const T=(0,s.up)("Loading-component"),X=(0,s.up)("router-link"),tt=(0,s.up)("field-component"),et=(0,s.up)("ErrorMessage"),at=(0,s.up)("form-component");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(T,{active:Q.isLoading},null,8,["active"]),(0,s._)("div",c,[i,(0,s._)("div",o,[(0,s._)("div",d,[(0,s._)("div",n,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Q.cartData.carts,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id,class:"d-flex py-2 border-top"},[(0,s.Wm)(X,{to:`/product/${t.product.id}`},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"img-cover me-3",style:(0,l.j5)([{width:"80px",height:"80px"},`background-image: url('${t.product.imageUrl}')`])},null,4)])),_:2},1032,["to"]),(0,s._)("div",null,[(0,s._)("div",u,[(0,s.Wm)(X,{to:`/product/${t.product.id}`},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.product.title),1)])),_:2},1032,["to"])]),(0,s._)("small",null,(0,l.zw)(t.product.description),1),(0,s._)("div",null,[t.product.price===t.product.origin_price?((0,s.wg)(),(0,s.iD)("span",m,(0,l.zw)(t.product.price*t.qty)+" 元 ",1)):((0,s.wg)(),(0,s.iD)("span",p,[(0,s._)("small",null,[(0,s._)("del",null,(0,l.zw)(t.product.origin_price*t.qty)+" 元",1)]),(0,s._)("span",_,(0,l.zw)(t.product.price*t.qty)+" 元",1)])),(0,s.Uk)(" x "+(0,l.zw)(t.qty)+" "+(0,l.zw)(t.product.unit),1)])]),(0,s._)("div",g,(0,l.zw)(t.total)+" 元 ",1)])))),128)),(0,s._)("div",v,"總計："+(0,l.zw)(Q.cartData.total)+" 元",1),(0,s._)("div",f,"折扣價："+(0,l.zw)(Math.floor(Q.cartData.final_total))+" 元",1),(0,s._)("div",h,[Q.cartData.carts[0]?.coupon?((0,s.wg)(),(0,s.iD)("small",b,"(已套用「"+(0,l.zw)(Q.cartData.carts[0].coupon.title)+"」優惠券："+(0,l.zw)(Q.cartData.carts[0].coupon.code)+")",1)):(0,s.kq)("",!0)])]),(0,s._)("table",w,[x,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Q.cartData.carts,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,[(0,s.Wm)(X,{to:`/product/${t.product.id}`,class:"link-dark d-flex align-items-center"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"img-cover",style:(0,l.j5)([{width:"100px",height:"100px"},`background-image: url('${t.product.imageUrl}')`])},null,4)])),_:2},1032,["to"])]),(0,s._)("td",null,[(0,s._)("div",null,[(0,s._)("div",y,(0,l.zw)(t.product.title),1),(0,s._)("small",null,(0,l.zw)(t.product.description),1),t.product.price===t.product.origin_price?((0,s.wg)(),(0,s.iD)("div",k,(0,l.zw)(t.product.price)+" 元 ",1)):((0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("small",null,[(0,s._)("del",null,(0,l.zw)(t.product.origin_price)+" 元",1)]),(0,s._)("span",z,(0,l.zw)(t.product.price)+" 元",1)]))])]),(0,s._)("td",U,(0,l.zw)(t.qty)+" "+(0,l.zw)(t.product.unit),1),(0,s._)("td",W,(0,l.zw)(t.total)+" 元 ",1)])))),128))]),(0,s._)("tfoot",null,[(0,s._)("tr",null,[$,(0,s._)("td",V,(0,l.zw)(Q.cartData.total),1)]),(0,s._)("tr",null,[q,(0,s._)("td",C,[(0,s.Uk)((0,l.zw)(Math.floor(Q.cartData.final_total))+" ",1),L,Q.cartData.carts[0]?.coupon?((0,s.wg)(),(0,s.iD)("small",M,"(已套用「"+(0,l.zw)(Q.cartData.carts[0].coupon.title)+"」優惠券："+(0,l.zw)(Q.cartData.carts[0].coupon.code)+")",1)):(0,s.kq)("",!0)])])])]),(0,s.Wm)(X,{to:"/cart"},{default:(0,s.w5)((()=>[j])),_:1})]),(0,s._)("div",E,[(0,s._)("div",S,[(0,s.Wm)(at,{ref:"form",onSubmit:R.createOrder},{default:(0,s.w5)((({errors:t})=>[(0,s._)("div",H,[O,(0,s.Wm)(tt,{id:"email",name:"email",type:"email",class:(0,l.C_)(["form-control",{"is-invalid":t["email"]}]),rules:"email|required",placeholder:"請輸入 Email",modelValue:Q.form.user.email,"onUpdate:modelValue":e[0]||(e[0]=t=>Q.form.user.email=t)},null,8,["class","modelValue"]),(0,s.Wm)(et,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",Y,[(0,s._)("div",Z,[K,(0,s.Wm)(tt,{id:"name",name:"姓名",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":t["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:Q.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=t=>Q.form.user.name=t)},null,8,["class","modelValue"]),(0,s.Wm)(et,{name:"姓名",class:"invalid-feedback"})]),(0,s._)("div",P,[B,(0,s.Wm)(tt,{id:"tel",name:"電話",type:"tel",class:(0,l.C_)(["form-control",{"is-invalid":t["電話"]}]),placeholder:"請輸入電話",rules:R.isPhone,modelValue:Q.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=t=>Q.form.user.tel=t)},null,8,["class","rules","modelValue"]),(0,s.Wm)(et,{name:"電話",class:"invalid-feedback"})])]),(0,s._)("div",F,[I,(0,s.Wm)(tt,{id:"address",name:"地址",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":t["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:Q.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=t=>Q.form.user.address=t)},null,8,["class","modelValue"]),(0,s.Wm)(et,{name:"地址",class:"invalid-feedback"})]),(0,s._)("div",A,[G,(0,s.wy)((0,s._)("textarea",{id:"message",class:"form-control",cols:"30",rows:"3","onUpdate:modelValue":e[4]||(e[4]=t=>Q.form.message=t)},null,512),[[r.nr,Q.form.message]])]),(0,s._)("button",{type:"submit",class:"btn standardBtn w-100",disabled:Object.keys(t).length>0||0===Q.cartData.carts.length}," 送出訂單 ",8,J)])),_:1},8,["onSubmit"])])])])])],64)}var Q=a(4902),R={data(){return{cartData:{carts:[]},products:[],product:{},couponCode:"",isLoading:!1,form:{user:{email:"",name:"",tel:"",address:""},message:""}}},methods:{getCart(){this.isLoading=!0,this.$http.get("https://vue3-course-api.hexschool.io/v2/api/ycl/cart").then((t=>{this.cartData=t.data.data,Q.Z.emit("get-cart"),this.isLoading=!1})).catch((t=>{this.$httpMessageState(t.response,"錯誤訊息"),this.isLoading=!1}))},createOrder(){this.isLoading=!0;const t={data:this.form};this.$http.post("https://vue3-course-api.hexschool.io/v2/api/ycl/order",t).then((t=>{this.$httpMessageState(t,"送出訂單"),this.cartData={carts:[]},Q.Z.emit("get-cart"),this.$refs.form.resetForm(),this.form.message="",this.$router.push(`/checkout/${t.data.orderId}`),this.isLoading=!1})).catch((t=>{this.$httpMessageState(t.response,"送出訂單"),this.isLoading=!1}))},isPhone(t){const e=/^(09)[0-9]{8}$/;return!!e.test(t)||"電話格式錯誤"}},mounted(){document.title="Eden Handmade | 建立訂單",this.getCart()}},T=a(3744);const X=(0,T.Z)(R,[["render",N]]);var tt=X}}]);
//# sourceMappingURL=507.061af011.js.map