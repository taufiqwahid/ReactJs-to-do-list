(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/To do list-bro.0b0a66ea.png"},17:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(3),o=n.n(i),s=(n(22),n(14)),r=n(10),l=n(11),m=n(2),d=n(15),u=n(16),p=(n(23),n(9),n(5)),h=n(12);function I(e){var t=e.items.map((function(t){return c.a.createElement("div",{className:"list",key:t.key},c.a.createElement("p",null,c.a.createElement("span",{className:"spinner".concat(t.key),id:"spinner".concat(t.key)},c.a.createElement(p.a,{className:"spinner",id:"spinner",icon:"spinner",onClick:function(){return e.processItem(t.key)}})),c.a.createElement("span",{className:"check".concat(t.key),id:"check".concat(t.key)},c.a.createElement(p.a,{className:"checkCircle",id:"checkCircle",icon:"check-circle",onClick:function(){return e.doneItem(t.key)}})),c.a.createElement("input",{type:"text",defaultValue:t.text,id:"itemText",className:"itemText",onChange:function(n){e.updateItem(n.target.value,t.key)}}),c.a.createElement("span",{className:"icon3",id:"icon3"},c.a.createElement(p.a,{className:"trash",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return c.a.createElement("div",{className:"content"},c.a.createElement(h.a,{duration:400,easing:"ease-in-out",delay:0},t))}var y=n(13),k=n.n(y),f=n(4),v=n(6);f.b.add(v.c,v.a,v.b);var E=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(m.a)(a)),a.addItem=a.addItem.bind(Object(m.a)(a)),a.deleteItem=a.deleteItem.bind(Object(m.a)(a)),a.updateItem=a.updateItem.bind(Object(m.a)(a)),a.doneItem=a.doneItem.bind(Object(m.a)(a)),a.processItem=a.processItem.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(){var e=document.getElementById("value").value;this.setState({currentItem:{text:e,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var n=[].concat(Object(s.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"updateItem",value:function(e,t){var n=this.state.items;n.forEach((function(a){a.key===t&&(n.text=e)})),this.setState({items:n})}},{key:"processItem",value:function(e){var t=document.getElementById("spinner".concat(e)),n=document.getElementById("check".concat(e));t.style.display="none",n.style.display="inline",window.confirm("COMPLETED")}},{key:"doneItem",value:function(e){var t=document.getElementById("spinner".concat(e)),n=document.getElementById("check".concat(e));t.style.display="inline",n.style.display="none",this.setState({todo:{progres:!1,done:!0}}),window.confirm("BEING DOING")}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},c.a.createElement("img",{src:k.a,alt:"logo",width:"100"}),c.a.createElement("h2",{className:"title"},"to",c.a.createElement("span",{className:"titleDo"},"Do")),c.a.createElement("input",{id:"value",type:"text",placeholder:"Enter To Do . . .",value:this.state.currentItem.text,onChange:this.handleInput}),c.a.createElement("button",{type:"submit"},"Tambah"))),c.a.createElement(I,{items:this.state.items,deleteItem:this.deleteItem,updateItem:this.updateItem,doneItem:this.doneItem,processItem:this.processItem}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.69d3a424.chunk.js.map