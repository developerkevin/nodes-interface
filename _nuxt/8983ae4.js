(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{309:function(t,e,r){"use strict";r.r(e);var n={props:{side:{type:String,default:function(){return"right"}},id:{type:String,default:function(){return"navigation"}},dark:{type:Boolean,default:function(){return!0}}},data:function(){return{shown:!1,width:610,borderSize:2}},computed:{show:{get:function(){return this.$store.state.drawers[this.id]||!1},set:function(t){this.$store.dispatch("drawers/set_"+this.id,t)}}},mounted:function(){this.setBorderWidth(),this.setEvents()},methods:{setBorderWidth:function(){var t="drawer-"+this.id,i=this.$refs[t].$el.querySelector(".v-navigation-drawer__border");i.style.width=this.borderSize+"px",i.style.cursor="ew-resize"},setEvents:function(){var t="drawer-"+this.id,e=this.borderSize,r=this.$refs[t].$el,n=r.querySelector(".v-navigation-drawer__border"),o=this,d=r.classList.contains("v-navigation-drawer--right")?"right":"left";function c(t){document.body.style.cursor="ew-resize";var e="right"===d?document.body.scrollWidth-t.clientX:t.clientX;r.style.width=e+"px"}n.addEventListener("mousedown",(function(t){t.offsetX<e&&(r.style.transition="initial",document.addEventListener("mousemove",c,!1))}),!1),document.addEventListener("mouseup",(function(){r.style.transition="",o.width=r.style.width,document.body.style.cursor="",document.removeEventListener("mousemove",c,!1)}),!1)}}},o=r(58),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{ref:"drawer-"+t.id,attrs:{app:"",left:"left"===t.side,right:"left"!=t.side,width:t.width,clipped:"right"===t.side,fixed:"",flat:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports}}]);