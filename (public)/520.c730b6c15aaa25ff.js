"use strict";(self.webpackChunkSalaDeJuegos=self.webpackChunkSalaDeJuegos||[]).push([[520],{9520:(U,l,r)=>{r.r(l),r.d(l,{MayorMenorModule:()=>J});var s=r(4755),p=r(3466),e=r(9523),m=r(6461),g=r(1309),u=r(9837);function f(t,o){if(1&t&&(e.ynx(0),e._UZ(1,"img",3),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("src",n.carta.imagen,e.LSH)}}function d(t,o){1&t&&(e.TgZ(0,"h4",4),e._uU(1,"Para continuar, eleji una carta del mazo"),e.qZA())}let M=(()=>{class t{constructor(){}ngOnChanges(){this.getImagenDeCarta()}getImagenDeCarta(){this.carta.imagen=`assets/cartas-espa\xf1olas/${this.carta.palo}${this.carta.numero}.png`}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-carta"]],inputs:{carta:"carta"},features:[e.TTD],decls:4,vars:2,consts:[[1,"cartaContainer"],[4,"ngIf","ngIfElse"],["elejiCarta",""],["href","#","height","559","alt","Mazo de cartas","loading","lazy",3,"src"],[1,"text-center"]],template:function(n,a){if(1&n&&(e.TgZ(0,"div",0),e.YNc(1,f,2,1,"ng-container",1),e.YNc(2,d,2,0,"ng-template",null,2,e.W1O),e.qZA()),2&n){const i=e.MAs(3);e.xp6(1),e.Q6J("ngIf",a.carta.numero>0)("ngIfElse",i)}},dependencies:[s.O5],styles:[".cartaContainer[_ngcontent-%COMP%]{max-width:390px}"]}),t})(),C=["oros","espadas","bastos","copas"];const _=function(t){return{disabled:t}};let h=(()=>{class t{constructor(){this.pickeoCarta=new e.vpe}elejirCartaDelMazo(){if(1==this.elijioOpcion){let n=Math.floor(9*Math.random()+1),a=Math.floor(3*Math.random()+0);this.pickeoCarta.emit({numero:n,palo:C[a],imagen:void 0})}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-mazo"]],inputs:{elijioOpcion:"elijioOpcion"},outputs:{pickeoCarta:"pickeoCarta"},decls:2,vars:4,consts:[[1,"mazoContainer"],["href","#","height","559","alt","Mazo de cartas","loading","lazy",1,"mazo",3,"ngClass","src","click"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"img",1),e.NdJ("click",function(){return a.elejirCartaDelMazo()}),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("ngClass",e.VKq(2,_,0==a.elijioOpcion))("src","assets/cartas-espa\xf1olas/mazo.png",e.LSH))},dependencies:[s.mk],styles:[".mazo[_ngcontent-%COMP%]{cursor:pointer}.disabled[_ngcontent-%COMP%]{filter:grayscale(.9)}"]}),t})(),y=(()=>{class t{constructor(){this.elijioOpcion=new e.vpe}elejirOpcion(n){this.elijioOpcion.emit(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-controles"]],outputs:{elijioOpcion:"elijioOpcion"},decls:5,vars:0,consts:[[1,"controles","d-flex","justify-content-around","flex-column"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return a.elejirOpcion(!0)}),e._uU(2,"MAYOR"),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return a.elejirOpcion(!1)}),e._uU(4,"MENOR"),e.qZA()())},styles:[".controles[_ngcontent-%COMP%]{height:50%}"]}),t})();function Z(t,o){1&t&&(e.TgZ(0,"ngb-alert",11)(1,"strong"),e._uU(2,"Ganaste!"),e.qZA(),e._uU(3," Ganas un punto, si quieres volver a jugar elije otra opcion y una carta. "),e.qZA()),2&t&&e.Q6J("dismissible",!1)}function j(t,o){1&t&&(e.TgZ(0,"ngb-alert",11)(1,"strong"),e._uU(2,"Perdiste!"),e.qZA(),e._uU(3," Pierdes un punto, si quieres volver a jugar elije otra opcion y una carta. "),e.qZA()),2&t&&e.Q6J("dismissible",!1)}function O(t,o){if(1&t&&(e.ynx(0),e.YNc(1,Z,4,1,"ngb-alert",9),e.YNc(2,j,4,1,"ng-template",null,10,e.W1O),e.BQk()),2&t){const n=e.MAs(3),a=e.oxw();e.xp6(1),e.Q6J("ngIf",a.resultado)("ngIfElse",n)}}function T(t,o){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"app-controles",12),e.NdJ("elijioOpcion",function(i){e.CHM(n);const c=e.oxw();return e.KtG(c.setOpcion(i))}),e.qZA(),e.BQk()}}function v(t,o){1&t&&e._UZ(0,"app-chat")}const A=[{path:"",component:(()=>{class t{constructor(n){this.usuariosService=n,this.seraMayor=!1,this.elijioOpcion=!0,this.carta={numero:0,palo:"?",imagen:void 0},this.cartaAnterior={numero:0,palo:"?",imagen:void 0}}setUltimaCarta(n){this.cartaAnterior=this.carta,this.carta=n,this.resultadoJuego(),this.elijioOpcion=!1}setOpcion(n){this.seraMayor=n,this.elijioOpcion=!0}resultadoJuego(){return this.resultado=!1,this.seraMayor?this.carta.numero>this.cartaAnterior.numero&&(this.resultado=!0):this.carta.numero<this.cartaAnterior.numero&&(this.resultado=!0),this.resultado}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.i))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-mayor-menor"]],decls:21,vars:5,consts:[[1,"container","g-0","mt-5"],[1,"row","g-0","mb-3"],[1,"col-12","align-self-center","text-center"],[1,"colorPrimaryAmarillo"],[1,"row","g-0","mt-2"],[4,"ngIf"],[1,"d-flex","justify-content-around"],[3,"elijioOpcion","pickeoCarta"],[3,"carta"],["class","alertaJuego",3,"dismissible",4,"ngIf","ngIfElse"],["perdio",""],[1,"alertaJuego",3,"dismissible"],[3,"elijioOpcion"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"section",1)(2,"article",2)(3,"h2",3),e._uU(4,"Mayor - Menor"),e._UZ(5,"br"),e.qZA(),e.TgZ(6,"h4"),e._uU(7,"Primero la primer carta del mazo "),e._UZ(8,"br"),e.qZA(),e.TgZ(9,"h4"),e._uU(10,"Despues adivina si la siguiente sera mayor o menor "),e._UZ(11,"br"),e.qZA(),e.TgZ(12,"h5"),e._uU(13,"Gana un punto por cada carta que adivines!"),e.qZA()()(),e.TgZ(14,"section",4),e.YNc(15,O,4,2,"ng-container",5),e.TgZ(16,"div",6)(17,"app-mazo",7),e.NdJ("pickeoCarta",function(c){return a.setUltimaCarta(c)}),e.qZA(),e.YNc(18,T,2,0,"ng-container",5),e._UZ(19,"app-carta",8),e.qZA()()(),e.YNc(20,v,1,0,"app-chat",5)),2&n&&(e.xp6(15),e.Q6J("ngIf",a.carta.numero),e.xp6(2),e.Q6J("elijioOpcion",a.elijioOpcion),e.xp6(1),e.Q6J("ngIf",a.carta.numero>0),e.xp6(1),e.Q6J("carta",a.carta),e.xp6(1),e.Q6J("ngIf",a.usuariosService.usuarioIngresado))},dependencies:[s.O5,g.P,u.xm,h,M,y]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(A),p.Bz]}),t})();var z=r(2480);let J=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,x,z.z,u._A]}),t})()}}]);