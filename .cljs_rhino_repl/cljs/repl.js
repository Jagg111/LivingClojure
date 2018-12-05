// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__3793){
var map__3794 = p__3793;
var map__3794__$1 = (((((!((map__3794 == null))))?(((((map__3794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3794):map__3794);
var m = map__3794__$1;
var n = cljs.core.get.call(null,map__3794__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__3794__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__3796_3818 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3797_3819 = null;
var count__3798_3820 = (0);
var i__3799_3821 = (0);
while(true){
if((i__3799_3821 < count__3798_3820)){
var f_3822 = cljs.core._nth.call(null,chunk__3797_3819,i__3799_3821);
cljs.core.println.call(null,"  ",f_3822);


var G__3823 = seq__3796_3818;
var G__3824 = chunk__3797_3819;
var G__3825 = count__3798_3820;
var G__3826 = (i__3799_3821 + (1));
seq__3796_3818 = G__3823;
chunk__3797_3819 = G__3824;
count__3798_3820 = G__3825;
i__3799_3821 = G__3826;
continue;
} else {
var temp__5457__auto___3827 = cljs.core.seq.call(null,seq__3796_3818);
if(temp__5457__auto___3827){
var seq__3796_3828__$1 = temp__5457__auto___3827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3796_3828__$1)){
var c__4461__auto___3829 = cljs.core.chunk_first.call(null,seq__3796_3828__$1);
var G__3830 = cljs.core.chunk_rest.call(null,seq__3796_3828__$1);
var G__3831 = c__4461__auto___3829;
var G__3832 = cljs.core.count.call(null,c__4461__auto___3829);
var G__3833 = (0);
seq__3796_3818 = G__3830;
chunk__3797_3819 = G__3831;
count__3798_3820 = G__3832;
i__3799_3821 = G__3833;
continue;
} else {
var f_3834 = cljs.core.first.call(null,seq__3796_3828__$1);
cljs.core.println.call(null,"  ",f_3834);


var G__3835 = cljs.core.next.call(null,seq__3796_3828__$1);
var G__3836 = null;
var G__3837 = (0);
var G__3838 = (0);
seq__3796_3818 = G__3835;
chunk__3797_3819 = G__3836;
count__3798_3820 = G__3837;
i__3799_3821 = G__3838;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_3839 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_3839);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_3839)))?cljs.core.second.call(null,arglists_3839):arglists_3839));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__3800_3840 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3801_3841 = null;
var count__3802_3842 = (0);
var i__3803_3843 = (0);
while(true){
if((i__3803_3843 < count__3802_3842)){
var vec__3804_3844 = cljs.core._nth.call(null,chunk__3801_3841,i__3803_3843);
var name_3845 = cljs.core.nth.call(null,vec__3804_3844,(0),null);
var map__3807_3846 = cljs.core.nth.call(null,vec__3804_3844,(1),null);
var map__3807_3847__$1 = (((((!((map__3807_3846 == null))))?(((((map__3807_3846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3807_3846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3807_3846):map__3807_3846);
var doc_3848 = cljs.core.get.call(null,map__3807_3847__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3849 = cljs.core.get.call(null,map__3807_3847__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3845);

cljs.core.println.call(null," ",arglists_3849);

if(cljs.core.truth_(doc_3848)){
cljs.core.println.call(null," ",doc_3848);
} else {
}


var G__3850 = seq__3800_3840;
var G__3851 = chunk__3801_3841;
var G__3852 = count__3802_3842;
var G__3853 = (i__3803_3843 + (1));
seq__3800_3840 = G__3850;
chunk__3801_3841 = G__3851;
count__3802_3842 = G__3852;
i__3803_3843 = G__3853;
continue;
} else {
var temp__5457__auto___3854 = cljs.core.seq.call(null,seq__3800_3840);
if(temp__5457__auto___3854){
var seq__3800_3855__$1 = temp__5457__auto___3854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3800_3855__$1)){
var c__4461__auto___3856 = cljs.core.chunk_first.call(null,seq__3800_3855__$1);
var G__3857 = cljs.core.chunk_rest.call(null,seq__3800_3855__$1);
var G__3858 = c__4461__auto___3856;
var G__3859 = cljs.core.count.call(null,c__4461__auto___3856);
var G__3860 = (0);
seq__3800_3840 = G__3857;
chunk__3801_3841 = G__3858;
count__3802_3842 = G__3859;
i__3803_3843 = G__3860;
continue;
} else {
var vec__3809_3861 = cljs.core.first.call(null,seq__3800_3855__$1);
var name_3862 = cljs.core.nth.call(null,vec__3809_3861,(0),null);
var map__3812_3863 = cljs.core.nth.call(null,vec__3809_3861,(1),null);
var map__3812_3864__$1 = (((((!((map__3812_3863 == null))))?(((((map__3812_3863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3812_3863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3812_3863):map__3812_3863);
var doc_3865 = cljs.core.get.call(null,map__3812_3864__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3866 = cljs.core.get.call(null,map__3812_3864__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3862);

cljs.core.println.call(null," ",arglists_3866);

if(cljs.core.truth_(doc_3865)){
cljs.core.println.call(null," ",doc_3865);
} else {
}


var G__3867 = cljs.core.next.call(null,seq__3800_3855__$1);
var G__3868 = null;
var G__3869 = (0);
var G__3870 = (0);
seq__3800_3840 = G__3867;
chunk__3801_3841 = G__3868;
count__3802_3842 = G__3869;
i__3803_3843 = G__3870;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__3814 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__3815 = null;
var count__3816 = (0);
var i__3817 = (0);
while(true){
if((i__3817 < count__3816)){
var role = cljs.core._nth.call(null,chunk__3815,i__3817);
var temp__5457__auto___3871__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___3871__$1)){
var spec_3872 = temp__5457__auto___3871__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3872));
} else {
}


var G__3873 = seq__3814;
var G__3874 = chunk__3815;
var G__3875 = count__3816;
var G__3876 = (i__3817 + (1));
seq__3814 = G__3873;
chunk__3815 = G__3874;
count__3816 = G__3875;
i__3817 = G__3876;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__3814);
if(temp__5457__auto____$1){
var seq__3814__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3814__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__3814__$1);
var G__3877 = cljs.core.chunk_rest.call(null,seq__3814__$1);
var G__3878 = c__4461__auto__;
var G__3879 = cljs.core.count.call(null,c__4461__auto__);
var G__3880 = (0);
seq__3814 = G__3877;
chunk__3815 = G__3878;
count__3816 = G__3879;
i__3817 = G__3880;
continue;
} else {
var role = cljs.core.first.call(null,seq__3814__$1);
var temp__5457__auto___3881__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___3881__$2)){
var spec_3882 = temp__5457__auto___3881__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3882));
} else {
}


var G__3883 = cljs.core.next.call(null,seq__3814__$1);
var G__3884 = null;
var G__3885 = (0);
var G__3886 = (0);
seq__3814 = G__3883;
chunk__3815 = G__3884;
count__3816 = G__3885;
i__3817 = G__3886;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
