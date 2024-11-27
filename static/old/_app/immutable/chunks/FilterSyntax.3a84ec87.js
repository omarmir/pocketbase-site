import{S as ha,i as Ea,s as ua,k as l,q as o,a as n,l as s,m as a,r,h as t,c,n as i,b as G,G as e,H as $l}from"./index.a7566c1a.js";function pa(fa){let p,st,v,M,at,ot,F,rt,nt,U,ct,it,ze,L,B,H,dt,ft,ht,_,j,Et,ut,pt,vt,d,R,z,es="=",_t,At,J,mt,Ot,S,K,ts="!=",wt,xt,Q,Nt,Pt,q,V,ls=">",Dt,Lt,W,Ct,yt,I,X,ss=">=",Rt,St,Y,qt,It,b,Z,as="<",bt,gt,$,Tt,kt,g,ee,os="<=",Gt,Mt,te,Ft,Ut,T,le,rs="~",Bt,Ht,se,jt,zt,k,ae,ns="!~",Jt,Kt,oe,Qt,Vt,A,re,cs="?=",Wt,Xt,ne,Yt,Zt,ce,$t,el,m,ie,is="?!=",tl,ll,de,sl,al,fe,ol,rl,O,he,ds="?>",nl,cl,Ee,il,dl,ue,fl,hl,w,pe,fs="?>=",El,ul,ve,pl,vl,_e,_l,Al,x,Ae,hs="?<",ml,Ol,me,wl,xl,Oe,Nl,Pl,N,we,Es="?<=",Dl,Ll,xe,Cl,yl,Ne,Rl,Sl,P,Pe,us="?~",ql,Il,De,bl,gl,Le,Tl,kl,D,Ce,ps="?!~",Gl,Ml,ye,Fl,Ul,Re,Bl,Je,E,Hl,Ue,jl,zl,Be,Jl,Kl,He,Ql,Vl,Ke,C,Wl,je,Xl,Yl;return{c(){p=l("p"),st=o(`The syntax basically follows the format
    `),v=l("code"),M=l("span"),at=o("OPERAND"),ot=n(),F=l("span"),rt=o("OPERATOR"),nt=n(),U=l("span"),ct=o("OPERAND"),it=o(", where:"),ze=n(),L=l("ul"),B=l("li"),H=l("code"),dt=o("OPERAND"),ft=o(` - could be any of the above field literal, string (single or double
        quoted), number, null, true, false`),ht=n(),_=l("li"),j=l("code"),Et=o("OPERATOR"),ut=o(` - is one of:
        `),pt=l("br"),vt=n(),d=l("ul"),R=l("li"),z=l("code"),_t=o(es),At=n(),J=l("span"),mt=o("Equal"),Ot=n(),S=l("li"),K=l("code"),wt=o(ts),xt=n(),Q=l("span"),Nt=o("NOT equal"),Pt=n(),q=l("li"),V=l("code"),Dt=o(ls),Lt=n(),W=l("span"),Ct=o("Greater than"),yt=n(),I=l("li"),X=l("code"),Rt=o(ss),St=n(),Y=l("span"),qt=o("Greater than or equal"),It=n(),b=l("li"),Z=l("code"),bt=o(as),gt=n(),$=l("span"),Tt=o("Less than"),kt=n(),g=l("li"),ee=l("code"),Gt=o(os),Mt=n(),te=l("span"),Ft=o("Less than or equal"),Ut=n(),T=l("li"),le=l("code"),Bt=o(rs),Ht=n(),se=l("span"),jt=o(`Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for wildcard
                    match)`),zt=n(),k=l("li"),ae=l("code"),Jt=o(ns),Kt=n(),oe=l("span"),Qt=o(`NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                    wildcard match)`),Vt=n(),A=l("li"),re=l("code"),Wt=o(cs),Xt=n(),ne=l("em"),Yt=o("Any/At least one of"),Zt=n(),ce=l("span"),$t=o("Equal"),el=n(),m=l("li"),ie=l("code"),tl=o(is),ll=n(),de=l("em"),sl=o("Any/At least one of"),al=n(),fe=l("span"),ol=o("NOT equal"),rl=n(),O=l("li"),he=l("code"),nl=o(ds),cl=n(),Ee=l("em"),il=o("Any/At least one of"),dl=n(),ue=l("span"),fl=o("Greater than"),hl=n(),w=l("li"),pe=l("code"),El=o(fs),ul=n(),ve=l("em"),pl=o("Any/At least one of"),vl=n(),_e=l("span"),_l=o("Greater than or equal"),Al=n(),x=l("li"),Ae=l("code"),ml=o(hs),Ol=n(),me=l("em"),wl=o("Any/At least one of"),xl=n(),Oe=l("span"),Nl=o("Less than"),Pl=n(),N=l("li"),we=l("code"),Dl=o(Es),Ll=n(),xe=l("em"),Cl=o("Any/At least one of"),yl=n(),Ne=l("span"),Rl=o("Less than or equal"),Sl=n(),P=l("li"),Pe=l("code"),ql=o(us),Il=n(),De=l("em"),bl=o("Any/At least one of"),gl=n(),Le=l("span"),Tl=o(`Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for wildcard
                    match)`),kl=n(),D=l("li"),Ce=l("code"),Gl=o(ps),Ml=n(),ye=l("em"),Fl=o("Any/At least one of"),Ul=n(),Re=l("span"),Bl=o(`NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                    wildcard match)`),Je=n(),E=l("p"),Hl=o(`To group and combine several expressions you could use parenthesis
    `),Ue=l("code"),jl=o("(...)"),zl=o(", "),Be=l("code"),Jl=o("&&"),Kl=o(" (AND) and "),He=l("code"),Ql=o("||"),Vl=o(" (OR) tokens."),Ke=n(),C=l("p"),Wl=o("Single line comments are also supported: "),je=l("code"),Xl=o("// Example comment"),Yl=o("."),this.h()},l(h){p=s(h,"P",{});var u=a(p);st=r(u,`The syntax basically follows the format
    `),v=s(u,"CODE",{});var Se=a(v);M=s(Se,"SPAN",{class:!0});var vs=a(M);at=r(vs,"OPERAND"),vs.forEach(t),ot=c(Se),F=s(Se,"SPAN",{class:!0});var _s=a(F);rt=r(_s,"OPERATOR"),_s.forEach(t),nt=c(Se),U=s(Se,"SPAN",{class:!0});var As=a(U);ct=r(As,"OPERAND"),As.forEach(t),Se.forEach(t),it=r(u,", where:"),u.forEach(t),ze=c(h),L=s(h,"UL",{});var Qe=a(L);B=s(Qe,"LI",{});var Zl=a(B);H=s(Zl,"CODE",{class:!0});var ms=a(H);dt=r(ms,"OPERAND"),ms.forEach(t),ft=r(Zl,` - could be any of the above field literal, string (single or double
        quoted), number, null, true, false`),Zl.forEach(t),ht=c(Qe),_=s(Qe,"LI",{});var qe=a(_);j=s(qe,"CODE",{class:!0});var Os=a(j);Et=r(Os,"OPERATOR"),Os.forEach(t),ut=r(qe,` - is one of:
        `),pt=s(qe,"BR",{}),vt=c(qe),d=s(qe,"UL",{});var f=a(d);R=s(f,"LI",{});var Ve=a(R);z=s(Ve,"CODE",{class:!0});var ws=a(z);_t=r(ws,es),ws.forEach(t),At=c(Ve),J=s(Ve,"SPAN",{class:!0});var xs=a(J);mt=r(xs,"Equal"),xs.forEach(t),Ve.forEach(t),Ot=c(f),S=s(f,"LI",{});var We=a(S);K=s(We,"CODE",{class:!0});var Ns=a(K);wt=r(Ns,ts),Ns.forEach(t),xt=c(We),Q=s(We,"SPAN",{class:!0});var Ps=a(Q);Nt=r(Ps,"NOT equal"),Ps.forEach(t),We.forEach(t),Pt=c(f),q=s(f,"LI",{});var Xe=a(q);V=s(Xe,"CODE",{class:!0});var Ds=a(V);Dt=r(Ds,ls),Ds.forEach(t),Lt=c(Xe),W=s(Xe,"SPAN",{class:!0});var Ls=a(W);Ct=r(Ls,"Greater than"),Ls.forEach(t),Xe.forEach(t),yt=c(f),I=s(f,"LI",{});var Ye=a(I);X=s(Ye,"CODE",{class:!0});var Cs=a(X);Rt=r(Cs,ss),Cs.forEach(t),St=c(Ye),Y=s(Ye,"SPAN",{class:!0});var ys=a(Y);qt=r(ys,"Greater than or equal"),ys.forEach(t),Ye.forEach(t),It=c(f),b=s(f,"LI",{});var Ze=a(b);Z=s(Ze,"CODE",{class:!0});var Rs=a(Z);bt=r(Rs,as),Rs.forEach(t),gt=c(Ze),$=s(Ze,"SPAN",{class:!0});var Ss=a($);Tt=r(Ss,"Less than"),Ss.forEach(t),Ze.forEach(t),kt=c(f),g=s(f,"LI",{});var $e=a(g);ee=s($e,"CODE",{class:!0});var qs=a(ee);Gt=r(qs,os),qs.forEach(t),Mt=c($e),te=s($e,"SPAN",{class:!0});var Is=a(te);Ft=r(Is,"Less than or equal"),Is.forEach(t),$e.forEach(t),Ut=c(f),T=s(f,"LI",{});var et=a(T);le=s(et,"CODE",{class:!0});var bs=a(le);Bt=r(bs,rs),bs.forEach(t),Ht=c(et),se=s(et,"SPAN",{class:!0});var gs=a(se);jt=r(gs,`Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for wildcard
                    match)`),gs.forEach(t),et.forEach(t),zt=c(f),k=s(f,"LI",{});var tt=a(k);ae=s(tt,"CODE",{class:!0});var Ts=a(ae);Jt=r(Ts,ns),Ts.forEach(t),Kt=c(tt),oe=s(tt,"SPAN",{class:!0});var ks=a(oe);Qt=r(ks,`NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                    wildcard match)`),ks.forEach(t),tt.forEach(t),Vt=c(f),A=s(f,"LI",{});var Ie=a(A);re=s(Ie,"CODE",{class:!0});var Gs=a(re);Wt=r(Gs,cs),Gs.forEach(t),Xt=c(Ie),ne=s(Ie,"EM",{class:!0});var Ms=a(ne);Yt=r(Ms,"Any/At least one of"),Ms.forEach(t),Zt=c(Ie),ce=s(Ie,"SPAN",{class:!0});var Fs=a(ce);$t=r(Fs,"Equal"),Fs.forEach(t),Ie.forEach(t),el=c(f),m=s(f,"LI",{});var be=a(m);ie=s(be,"CODE",{class:!0});var Us=a(ie);tl=r(Us,is),Us.forEach(t),ll=c(be),de=s(be,"EM",{class:!0});var Bs=a(de);sl=r(Bs,"Any/At least one of"),Bs.forEach(t),al=c(be),fe=s(be,"SPAN",{class:!0});var Hs=a(fe);ol=r(Hs,"NOT equal"),Hs.forEach(t),be.forEach(t),rl=c(f),O=s(f,"LI",{});var ge=a(O);he=s(ge,"CODE",{class:!0});var js=a(he);nl=r(js,ds),js.forEach(t),cl=c(ge),Ee=s(ge,"EM",{class:!0});var zs=a(Ee);il=r(zs,"Any/At least one of"),zs.forEach(t),dl=c(ge),ue=s(ge,"SPAN",{class:!0});var Js=a(ue);fl=r(Js,"Greater than"),Js.forEach(t),ge.forEach(t),hl=c(f),w=s(f,"LI",{});var Te=a(w);pe=s(Te,"CODE",{class:!0});var Ks=a(pe);El=r(Ks,fs),Ks.forEach(t),ul=c(Te),ve=s(Te,"EM",{class:!0});var Qs=a(ve);pl=r(Qs,"Any/At least one of"),Qs.forEach(t),vl=c(Te),_e=s(Te,"SPAN",{class:!0});var Vs=a(_e);_l=r(Vs,"Greater than or equal"),Vs.forEach(t),Te.forEach(t),Al=c(f),x=s(f,"LI",{});var ke=a(x);Ae=s(ke,"CODE",{class:!0});var Ws=a(Ae);ml=r(Ws,hs),Ws.forEach(t),Ol=c(ke),me=s(ke,"EM",{class:!0});var Xs=a(me);wl=r(Xs,"Any/At least one of"),Xs.forEach(t),xl=c(ke),Oe=s(ke,"SPAN",{class:!0});var Ys=a(Oe);Nl=r(Ys,"Less than"),Ys.forEach(t),ke.forEach(t),Pl=c(f),N=s(f,"LI",{});var Ge=a(N);we=s(Ge,"CODE",{class:!0});var Zs=a(we);Dl=r(Zs,Es),Zs.forEach(t),Ll=c(Ge),xe=s(Ge,"EM",{class:!0});var $s=a(xe);Cl=r($s,"Any/At least one of"),$s.forEach(t),yl=c(Ge),Ne=s(Ge,"SPAN",{class:!0});var ea=a(Ne);Rl=r(ea,"Less than or equal"),ea.forEach(t),Ge.forEach(t),Sl=c(f),P=s(f,"LI",{});var Me=a(P);Pe=s(Me,"CODE",{class:!0});var ta=a(Pe);ql=r(ta,us),ta.forEach(t),Il=c(Me),De=s(Me,"EM",{class:!0});var la=a(De);bl=r(la,"Any/At least one of"),la.forEach(t),gl=c(Me),Le=s(Me,"SPAN",{class:!0});var sa=a(Le);Tl=r(sa,`Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for wildcard
                    match)`),sa.forEach(t),Me.forEach(t),kl=c(f),D=s(f,"LI",{});var Fe=a(D);Ce=s(Fe,"CODE",{class:!0});var aa=a(Ce);Gl=r(aa,ps),aa.forEach(t),Ml=c(Fe),ye=s(Fe,"EM",{class:!0});var oa=a(ye);Fl=r(oa,"Any/At least one of"),oa.forEach(t),Ul=c(Fe),Re=s(Fe,"SPAN",{class:!0});var ra=a(Re);Bl=r(ra,`NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                    wildcard match)`),ra.forEach(t),Fe.forEach(t),f.forEach(t),qe.forEach(t),Qe.forEach(t),Je=c(h),E=s(h,"P",{class:!0});var y=a(E);Hl=r(y,`To group and combine several expressions you could use parenthesis
    `),Ue=s(y,"CODE",{});var na=a(Ue);jl=r(na,"(...)"),na.forEach(t),zl=r(y,", "),Be=s(y,"CODE",{});var ca=a(Be);Jl=r(ca,"&&"),ca.forEach(t),Kl=r(y," (AND) and "),He=s(y,"CODE",{});var ia=a(He);Ql=r(ia,"||"),ia.forEach(t),Vl=r(y," (OR) tokens."),y.forEach(t),Ke=c(h),C=s(h,"P",{});var lt=a(C);Wl=r(lt,"Single line comments are also supported: "),je=s(lt,"CODE",{});var da=a(je);Xl=r(da,"// Example comment"),da.forEach(t),Yl=r(lt,"."),lt.forEach(t),this.h()},h(){i(M,"class","txt-success"),i(F,"class","txt-danger"),i(U,"class","txt-success"),i(H,"class","txt-success"),i(j,"class","txt-danger"),i(z,"class","filter-op svelte-1w7s5nw"),i(J,"class","txt"),i(K,"class","filter-op svelte-1w7s5nw"),i(Q,"class","txt"),i(V,"class","filter-op svelte-1w7s5nw"),i(W,"class","txt"),i(X,"class","filter-op svelte-1w7s5nw"),i(Y,"class","txt"),i(Z,"class","filter-op svelte-1w7s5nw"),i($,"class","txt"),i(ee,"class","filter-op svelte-1w7s5nw"),i(te,"class","txt"),i(le,"class","filter-op svelte-1w7s5nw"),i(se,"class","txt"),i(ae,"class","filter-op svelte-1w7s5nw"),i(oe,"class","txt"),i(re,"class","filter-op svelte-1w7s5nw"),i(ne,"class","txt-hint"),i(ce,"class","txt"),i(ie,"class","filter-op svelte-1w7s5nw"),i(de,"class","txt-hint"),i(fe,"class","txt"),i(he,"class","filter-op svelte-1w7s5nw"),i(Ee,"class","txt-hint"),i(ue,"class","txt"),i(pe,"class","filter-op svelte-1w7s5nw"),i(ve,"class","txt-hint"),i(_e,"class","txt"),i(Ae,"class","filter-op svelte-1w7s5nw"),i(me,"class","txt-hint"),i(Oe,"class","txt"),i(we,"class","filter-op svelte-1w7s5nw"),i(xe,"class","txt-hint"),i(Ne,"class","txt"),i(Pe,"class","filter-op svelte-1w7s5nw"),i(De,"class","txt-hint"),i(Le,"class","txt"),i(Ce,"class","filter-op svelte-1w7s5nw"),i(ye,"class","txt-hint"),i(Re,"class","txt"),i(E,"class","txt-bold")},m(h,u){G(h,p,u),e(p,st),e(p,v),e(v,M),e(M,at),e(v,ot),e(v,F),e(F,rt),e(v,nt),e(v,U),e(U,ct),e(p,it),G(h,ze,u),G(h,L,u),e(L,B),e(B,H),e(H,dt),e(B,ft),e(L,ht),e(L,_),e(_,j),e(j,Et),e(_,ut),e(_,pt),e(_,vt),e(_,d),e(d,R),e(R,z),e(z,_t),e(R,At),e(R,J),e(J,mt),e(d,Ot),e(d,S),e(S,K),e(K,wt),e(S,xt),e(S,Q),e(Q,Nt),e(d,Pt),e(d,q),e(q,V),e(V,Dt),e(q,Lt),e(q,W),e(W,Ct),e(d,yt),e(d,I),e(I,X),e(X,Rt),e(I,St),e(I,Y),e(Y,qt),e(d,It),e(d,b),e(b,Z),e(Z,bt),e(b,gt),e(b,$),e($,Tt),e(d,kt),e(d,g),e(g,ee),e(ee,Gt),e(g,Mt),e(g,te),e(te,Ft),e(d,Ut),e(d,T),e(T,le),e(le,Bt),e(T,Ht),e(T,se),e(se,jt),e(d,zt),e(d,k),e(k,ae),e(ae,Jt),e(k,Kt),e(k,oe),e(oe,Qt),e(d,Vt),e(d,A),e(A,re),e(re,Wt),e(A,Xt),e(A,ne),e(ne,Yt),e(A,Zt),e(A,ce),e(ce,$t),e(d,el),e(d,m),e(m,ie),e(ie,tl),e(m,ll),e(m,de),e(de,sl),e(m,al),e(m,fe),e(fe,ol),e(d,rl),e(d,O),e(O,he),e(he,nl),e(O,cl),e(O,Ee),e(Ee,il),e(O,dl),e(O,ue),e(ue,fl),e(d,hl),e(d,w),e(w,pe),e(pe,El),e(w,ul),e(w,ve),e(ve,pl),e(w,vl),e(w,_e),e(_e,_l),e(d,Al),e(d,x),e(x,Ae),e(Ae,ml),e(x,Ol),e(x,me),e(me,wl),e(x,xl),e(x,Oe),e(Oe,Nl),e(d,Pl),e(d,N),e(N,we),e(we,Dl),e(N,Ll),e(N,xe),e(xe,Cl),e(N,yl),e(N,Ne),e(Ne,Rl),e(d,Sl),e(d,P),e(P,Pe),e(Pe,ql),e(P,Il),e(P,De),e(De,bl),e(P,gl),e(P,Le),e(Le,Tl),e(d,kl),e(d,D),e(D,Ce),e(Ce,Gl),e(D,Ml),e(D,ye),e(ye,Fl),e(D,Ul),e(D,Re),e(Re,Bl),G(h,Je,u),G(h,E,u),e(E,Hl),e(E,Ue),e(Ue,jl),e(E,zl),e(E,Be),e(Be,Jl),e(E,Kl),e(E,He),e(He,Ql),e(E,Vl),G(h,Ke,u),G(h,C,u),e(C,Wl),e(C,je),e(je,Xl),e(C,Yl)},p:$l,i:$l,o:$l,d(h){h&&t(p),h&&t(ze),h&&t(L),h&&t(Je),h&&t(E),h&&t(Ke),h&&t(C)}}}class _a extends ha{constructor(p){super(),Ea(this,p,null,pa,ua,{})}}export{_a as F};