import{_ as I,b as C,e as B,P as D,S as F,f as J}from"./Cp_sTJnd.js";import{_ as q}from"./D0oYrVhk.js";import{c as G}from"./rutnGYQ1.js";import{u as U}from"./BjQMh5p_.js";import{k as M,b as _,I as i,Q as c,V as e,a1 as g,a2 as k,a3 as Z,$ as x,Y as P,Z as V,_ as z,W as m,u as n,M as u,G as R,a0 as Y,L as O,X as Q}from"./BteeLc4r.js";import"./C1TIUwpU.js";const p=t=>(P("data-v-c34970a7"),t=t(),V(),t),W={class:"ask-jelly-form"},X=p(()=>e("input",{type:"hidden",name:"form-name",value:"ask-jelly"},null,-1)),H={class:"form-group"},K=p(()=>e("label",{for:"name"},"Name",-1)),ee={class:"form-group"},ae=p(()=>e("label",{for:"email"},"Email",-1)),se={class:"form-group"},te=p(()=>e("label",{for:"message"},"Message",-1)),oe=p(()=>e("button",{type:"submit",class:"link"}," send ",-1)),le={key:0,class:"alert"},ne=M({__name:"AskJellyForm",setup(t){const a=_({name:"",email:"",message:""}),r=_(!1),h=()=>{r.value=!0,a.value.name="",a.value.email="",a.value.message="",setTimeout(()=>{r.value=!1},3e3)};return(v,o)=>(i(),c("div",W,[e("form",{name:"ask-jelly",method:"POST","data-netlify":"true",onSubmit:Z(h,["prevent"])},[X,e("div",H,[K,g(e("input",{id:"name","onUpdate:modelValue":o[0]||(o[0]=s=>a.value.name=s),type:"text",name:"name",autocomplete:"name",placeholder:"NAME",required:""},null,512),[[k,a.value.name]])]),e("div",ee,[ae,g(e("input",{id:"email","onUpdate:modelValue":o[1]||(o[1]=s=>a.value.email=s),type:"email",name:"email",autocomplete:"email",placeholder:"EMAIL",required:""},null,512),[[k,a.value.email]])]),e("div",se,[te,g(e("textarea",{id:"message","onUpdate:modelValue":o[2]||(o[2]=s=>a.value.message=s),name:"message",placeholder:"MESSAGE",required:""},null,512),[[k,a.value.message]])]),oe],32),r.value?(i(),c("div",le," Got it, thanks! ")):x("",!0)]))}}),ie=I(ne,[["__scopeId","data-v-c34970a7"]]),ce=t=>(P("data-v-edd26a29"),t=t(),V(),t),re={id:"main",class:"page--ask-jelly"},de={class:"ask-jelly__intro wrapper wrapper--page-width"},_e={class:"content"},me={class:"headline"},ue={class:"form"},pe={key:0,class:"ask-jelly__articles wrapper wrapper--wide"},he=ce(()=>e("h2",{class:"headline"}," Jelly answers: ",-1)),ve={class:"articles__container"},fe={class:"headline h4"},ye={class:"asked-by"},ge={key:1,class:"articles__no-more"},ke=M({__name:"index",async setup(t){let a,r;const h=C(),v=_([]),o=_(1),s=_(!0),f=_(!1),{data:l}=B("askJellyPage",()=>h.client.getSingle("ask_jelly")),w=async()=>{if(f.value||!s.value)return;f.value=!0;const y=await h.client.getByType("ask_jelly_article",{pageSize:6,page:o.value,orderings:{field:"my.ask_jelly_article.publication_date",direction:"desc"}});v.value.push(...y.results),y.results_size<6&&(s.value=!1),o.value++,f.value=!1};return[a,r]=z(()=>w()),await a,r(),U(l),(y,xe)=>{var S,b,$,A,j;const L=D,N=F,T=q,E=J;return i(),c("main",re,[e("section",de,[e("div",_e,[e("h1",me,m((S=n(l))==null?void 0:S.data.headline),1),u(L,{field:(b=n(l))==null?void 0:b.data.copy,class:"copy"},null,8,["field"])]),e("div",ue,[u(ie)])]),u(N,{slices:(($=n(l))==null?void 0:$.data.slices)??[],components:n(G)},null,8,["slices","components"]),v.value.length?(i(),c("section",pe,[he,e("div",ve,[(i(!0),c(R,null,Y(v.value,d=>(i(),c("div",{key:d.id,class:"article"},[u(T,{src:d.data.featured_image.url??"",alt:d.data.featured_image.alt??"",class:"image"},null,8,["src","alt"]),e("p",fe,m(d.data.title),1),e("span",ye," From "+m(d.data.asked_by),1),u(E,{field:d,class:"link"},{default:O(()=>[Q(" read more ")]),_:2},1032,["field"])]))),128))]),s.value&&!f.value?(i(),c("span",{key:0,class:"articles__load-more link","aria-label":"Load more articles",onClick:w},m((A=n(l))!=null&&A.data.load_more_button_text?n(l).data.load_more_button_text:"Load More"),1)):s.value?x("",!0):(i(),c("p",ge,m((j=n(l))!=null&&j.data.no_more_articles_message?n(l).data.no_more_articles_message:"You made it to the end!"),1))])):x("",!0)])}}}),Ie=I(ke,[["__scopeId","data-v-edd26a29"]]);export{Ie as default};