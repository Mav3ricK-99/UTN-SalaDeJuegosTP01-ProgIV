"use strict";(self.webpackChunkSalaDeJuegos=self.webpackChunkSalaDeJuegos||[]).push([[184],{3184:(U,l,a)=>{a.r(l),a.d(l,{MayorMenorModule:()=>O});var s=a(4755),u=a(3236),m=a(1923),o=a(9523),g=a(6461),d=a(1309),f=a(5404),M=a(2915),p=a(9837);let h=(()=>{class t{constructor(){this.elijioOpcion=new o.vpe}elejirOpcion(e){this.elijioOpcion.emit(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-controles"]],outputs:{elijioOpcion:"elijioOpcion"},decls:5,vars:0,consts:[[1,"controles","d-flex","justify-content-around","flex-column"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"button",1),o.NdJ("click",function(){return r.elejirOpcion(!0)}),o._uU(2,"MAYOR"),o.qZA(),o.TgZ(3,"button",2),o.NdJ("click",function(){return r.elejirOpcion(!1)}),o._uU(4,"MENOR"),o.qZA()())},styles:[".controles[_ngcontent-%COMP%]{height:50%}"]}),t})();function y(t,n){if(1&t&&(o.TgZ(0,"ngb-alert",11)(1,"strong"),o._uU(2,"Ganaste!"),o.qZA(),o._uU(3),o.qZA()),2&t){const e=o.oxw(2);o.Q6J("dismissible",!1),o.xp6(3),o.hij(" Ganas ",e.cartaAnterior.numero," punto, si quieres volver a jugar elije otra opcion y una carta. ")}}function C(t,n){if(1&t&&(o.TgZ(0,"ngb-alert",11)(1,"strong"),o._uU(2,"Perdiste!"),o.qZA(),o._uU(3),o.qZA()),2&t){const e=o.oxw(2);o.Q6J("dismissible",!1),o.xp6(3),o.hij(" Pierdes ",e.cartaAnterior.numero,", si quieres volver a jugar elije otra opcion y una carta. ")}}function Z(t,n){if(1&t&&(o.ynx(0),o.YNc(1,y,4,2,"ngb-alert",9),o.YNc(2,C,4,2,"ng-template",null,10,o.W1O),o.BQk()),2&t){const e=o.MAs(3),r=o.oxw();o.xp6(1),o.Q6J("ngIf",r.resultado)("ngIfElse",e)}}function _(t,n){if(1&t){const e=o.EpF();o.ynx(0),o.TgZ(1,"app-controles",12),o.NdJ("elijioOpcion",function(i){o.CHM(e);const c=o.oxw();return o.KtG(c.setOpcion(i))}),o.qZA(),o.BQk()}}function A(t,n){1&t&&o._UZ(0,"app-chat")}const v=function(){return{"background-image":"url(./assets/bg-wallpaper.png)"}},j=[{path:"",component:(()=>{class t{constructor(e){this.usuariosService=e,this.mazo=new m.f,this.puntosTotales=0,this.seraMayor=!1,this.elijioOpcion=!0,this.primerCarta=!0,this.carta={numero:0,palo:"?",imagen:void 0},this.cartaAnterior={numero:0,palo:"?",imagen:void 0}}setUltimaCarta(e){this.cartaAnterior=this.carta,this.carta=e,0!==this.cartaAnterior.numero&&(this.primerCarta=!1),this.resultadoJuego(),this.elijioOpcion=!1}setOpcion(e){this.seraMayor=e,this.elijioOpcion=!0}resultadoJuego(){return this.resultado=!1,this.seraMayor?this.carta.numero>this.cartaAnterior.numero&&(this.resultado=!0,this.puntosTotales+=this.carta.numero):this.carta.numero<this.cartaAnterior.numero&&(this.resultado=!0,this.puntosTotales-=this.carta.numero),this.resultado}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(g.i))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-mayor-menor"]],decls:21,vars:11,consts:[[1,"bg-image","container-fluid","g-0","pt-5",3,"ngStyle"],[1,"row","g-0","mb-3"],[1,"col-12","align-self-center","text-center"],[1,"colorPrimaryAmarillo"],[1,"row","g-0","mt-2"],[4,"ngIf"],[1,"d-flex","justify-content-around"],[3,"width","mazo","habilitarMazo","pickeoCarta"],[3,"width","mostrarCarta","carta"],["class","alertaJuego text-center",3,"dismissible",4,"ngIf","ngIfElse"],["perdio",""],[1,"alertaJuego","text-center",3,"dismissible"],[3,"elijioOpcion"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"section",1)(2,"article",2)(3,"h2",3),o._uU(4,"Mayor - Menor"),o._UZ(5,"br"),o.qZA(),o.TgZ(6,"h4"),o._uU(7,"Primero la primer carta del mazo "),o._UZ(8,"br"),o.qZA(),o.TgZ(9,"h4"),o._uU(10,"Despues adivina si la siguiente sera mayor o menor "),o._UZ(11,"br"),o.qZA(),o.TgZ(12,"h5"),o._uU(13,"Gana un punto por cada carta que adivines!"),o.qZA()()(),o.TgZ(14,"section",4),o.YNc(15,Z,4,2,"ng-container",5),o.TgZ(16,"div",6)(17,"app-mazo",7),o.NdJ("pickeoCarta",function(c){return r.setUltimaCarta(c)}),o.qZA(),o.YNc(18,_,2,0,"ng-container",5),o._UZ(19,"app-carta",8),o.qZA()(),o.YNc(20,A,1,0,"app-chat",5),o.qZA()),2&e&&(o.Q6J("ngStyle",o.DdM(10,v)),o.xp6(15),o.Q6J("ngIf",r.carta.numero&&!r.primerCarta),o.xp6(2),o.Q6J("width",300)("mazo",r.mazo)("habilitarMazo",r.elijioOpcion),o.xp6(1),o.Q6J("ngIf",r.carta.numero>0),o.xp6(1),o.Q6J("width",300)("mostrarCarta",!0)("carta",r.carta),o.xp6(1),o.Q6J("ngIf",r.usuariosService.usuarioIngresado))},dependencies:[s.O5,s.PC,d.P,f.s,M.D,p.xm,h]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.Bz.forChild(j),u.Bz]}),t})();var x=a(2480),J=a(2095);let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.ez,T,x.z,J.C,p._A]}),t})()}}]);