(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{L6id:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=function(){return function(){}}(),e=u("pMnS"),c=u("oBZk"),r=u("ZZ/e"),i=u("Ip0R"),s=u("zA0m"),a=u("peYo"),b=u("67Y/"),d=u("t/Na"),p=function(){function n(n){this.http=n}return n.prototype.getListDetails=function(){return this.http.get("../assets/data/products.json").pipe(Object(b.a)(function(n){return n.json()}))},n.ngInjectableDef=t.R({factory:function(){return new n(t.V(d.c))},token:n,providedIn:"root"}),n}(),f=function(){function n(n,l,u,t){var o=this;this.navCtrl=n,this.barcodeScanner=l,this.toast=u,this.dataService=t,this.products=[],this.productFound=!1,this.dataService.getListDetails().subscribe(function(n){o.products=n,console.log(o.products)})}return n.prototype.scan=function(){var n=this;this.selectedProduct={},this.barcodeScanner.scan().then(function(l){n.selectedProduct=n.products.find(function(n){return n.plu===l.text}),void 0!==n.selectedProduct?n.productFound=!0:(n.productFound=!1,n.toast.show("Product not found","5000","center").subscribe(function(n){console.log(n)}))},function(l){n.toast.show(l,"5000","center").subscribe(function(n){console.log(n)})})},n}(),h=t.mb({encapsulation:0,styles:[[""]],data:{}});function v(n){return t.Bb(0,[(n()(),t.ob(0,0,null,null,14,"ion-card",[],null,null,null,c.h,c.b)),t.nb(1,49152,null,0,r.j,[t.h,t.k,t.z],null,null),(n()(),t.ob(2,0,null,0,3,"ion-card-header",[],null,null,null,c.g,c.d)),t.nb(3,49152,null,0,r.l,[t.h,t.k,t.z],null,null),(n()(),t.ob(4,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),t.Ab(5,null,["Price: $ ",""])),(n()(),t.ob(6,0,null,0,8,"ion-card-content",[],null,null,null,c.f,c.c)),t.nb(7,49152,null,0,r.k,[t.h,t.k,t.z],null,null),(n()(),t.ob(8,0,null,0,6,"ul",[],null,null,null,null,null)),(n()(),t.ob(9,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Ab(10,null,["",""])),(n()(),t.ob(11,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Ab(12,null,["",""])),(n()(),t.ob(13,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Ab(14,null,["",""]))],null,function(n,l){var u=l.component;n(l,5,0,u.selectedProduct.price),n(l,10,0,u.selectedProduct.plu),n(l,12,0,u.selectedProduct.name),n(l,14,0,u.selectedProduct.desc)})}function g(n){return t.Bb(0,[(n()(),t.ob(0,0,null,null,2,"h1",[],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,1,"button",[["color","dark"],["full",""],["ion-button",""],["round",""]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.scan()&&t),t},null,null)),(n()(),t.Ab(-1,null,["Start Scan"])),(n()(),t.fb(16777216,null,null,1,null,v)),t.nb(4,16384,null,0,i.h,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,4,0,l.component.productFound)},null)}function m(n){return t.Bb(0,[(n()(),t.ob(0,0,null,null,1,"app-home",[],null,null,null,g,h)),t.nb(1,49152,null,0,f,[r.Db,s.a,a.a,p],null,null)],null,null)}var k=t.kb("app-home",f,m,{},{},[]),S=u("gIcY"),w=u("ZYCi");u.d(l,"HomePageModuleNgFactory",function(){return j});var j=t.lb(o,[],function(n){return t.ub([t.vb(512,t.j,t.ab,[[8,[e.a,k]],[3,t.j],t.x]),t.vb(4608,i.j,i.i,[t.u,[2,i.p]]),t.vb(4608,S.c,S.c,[]),t.vb(4608,r.a,r.a,[t.z,t.g]),t.vb(4608,r.Cb,r.Cb,[r.a,t.j,t.q]),t.vb(4608,r.Fb,r.Fb,[r.a,t.j,t.q]),t.vb(1073742336,i.b,i.b,[]),t.vb(1073742336,S.b,S.b,[]),t.vb(1073742336,S.a,S.a,[]),t.vb(1073742336,r.Ab,r.Ab,[]),t.vb(1073742336,w.n,w.n,[[2,w.t],[2,w.m]]),t.vb(1073742336,o,o,[]),t.vb(1024,w.k,function(){return[[{path:"",component:f}]]},[])])})},gIcY:function(n,l,u){"use strict";u("mrSG");var t=u("CcnG");u("6blF"),u("isby"),u("67Y/"),u("McSo"),u("0/uQ"),u("ZYjt"),u.d(l,"b",function(){return c}),u.d(l,"c",function(){return o}),u.d(l,"a",function(){return r});var o=function(){function n(){this._accessors=[]}return n.prototype.add=function(n,l){this._accessors.push([n,l])},n.prototype.remove=function(n){for(var l=this._accessors.length-1;l>=0;--l)if(this._accessors[l][1]===n)return void this._accessors.splice(l,1)},n.prototype.select=function(n){var l=this;this._accessors.forEach(function(u){l._isSameGroup(u,n)&&u[1]!==n&&u[1].fireUncheck(n.value)})},n.prototype._isSameGroup=function(n,l){return!!n[0].control&&n[0]._parent===l._control._parent&&n[1].name===l.name},n}(),e=new t.p("NgFormSelectorWarning"),c=function(){return function(){}}(),r=function(){function n(){}var l;return l=n,n.withConfig=function(n){return{ngModule:l,providers:[{provide:e,useValue:n.warnOnDeprecatedNgFormSelector}]}},n}()}}]);