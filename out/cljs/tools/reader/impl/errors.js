// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.tools.reader.impl.errors');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('clojure.string');
goog.require('cljs.tools.reader.impl.inspect');
cljs.tools.reader.impl.errors.ex_details = (function cljs$tools$reader$impl$errors$ex_details(rdr,ex_type){
var details = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"ex-kind","ex-kind",1581199296),ex_type], null);
if(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr)){
return cljs.core.assoc.call(null,details,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name.call(null,rdr),new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number.call(null,rdr),new cljs.core.Keyword(null,"col","col",-1959363084),cljs.tools.reader.reader_types.get_column_number.call(null,rdr));
} else {
return details;
}
});
/**
 * Throw an ex-info error.
 */
cljs.tools.reader.impl.errors.throw_ex = (function cljs$tools$reader$impl$errors$throw_ex(var_args){
var args__4647__auto__ = [];
var len__4641__auto___6384 = arguments.length;
var i__4642__auto___6385 = (0);
while(true){
if((i__4642__auto___6385 < len__4641__auto___6384)){
args__4647__auto__.push((arguments[i__4642__auto___6385]));

var G__6386 = (i__4642__auto___6385 + (1));
i__4642__auto___6385 = G__6386;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,ex_type,msg){
var details = cljs.tools.reader.impl.errors.ex_details.call(null,rdr,ex_type);
var file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(details);
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(details);
var col = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(details);
var msg1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)," "].join(''):null);
var msg2 = (cljs.core.truth_(line)?["[line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", col ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''):null);
var msg3 = (cljs.core.truth_((function (){var or__4047__auto__ = msg1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return msg2;
}
})())?" ":null);
var full_msg = cljs.core.apply.call(null,cljs.core.str,msg1,msg2,msg3,msg);
throw cljs.core.ex_info.call(null,full_msg,details);
});

cljs.tools.reader.impl.errors.throw_ex.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.tools.reader.impl.errors.throw_ex.cljs$lang$applyTo = (function (seq6381){
var G__6382 = cljs.core.first.call(null,seq6381);
var seq6381__$1 = cljs.core.next.call(null,seq6381);
var G__6383 = cljs.core.first.call(null,seq6381__$1);
var seq6381__$2 = cljs.core.next.call(null,seq6381__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6382,G__6383,seq6381__$2);
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.reader_error = (function cljs$tools$reader$impl$errors$reader_error(var_args){
var args__4647__auto__ = [];
var len__4641__auto___6389 = arguments.length;
var i__4642__auto___6390 = (0);
while(true){
if((i__4642__auto___6390 < len__4641__auto___6389)){
args__4647__auto__.push((arguments[i__4642__auto___6390]));

var G__6391 = (i__4642__auto___6390 + (1));
i__4642__auto___6390 = G__6391;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.call(null,rdr,new cljs.core.Keyword(null,"reader-error","reader-error",1610253121),cljs.core.apply.call(null,cljs.core.str,msgs));
});

cljs.tools.reader.impl.errors.reader_error.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.tools.reader.impl.errors.reader_error.cljs$lang$applyTo = (function (seq6387){
var G__6388 = cljs.core.first.call(null,seq6387);
var seq6387__$1 = cljs.core.next.call(null,seq6387);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6388,seq6387__$1);
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.illegal_arg_error = (function cljs$tools$reader$impl$errors$illegal_arg_error(var_args){
var args__4647__auto__ = [];
var len__4641__auto___6394 = arguments.length;
var i__4642__auto___6395 = (0);
while(true){
if((i__4642__auto___6395 < len__4641__auto___6394)){
args__4647__auto__.push((arguments[i__4642__auto___6395]));

var G__6396 = (i__4642__auto___6395 + (1));
i__4642__auto___6395 = G__6396;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.call(null,rdr,new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170),cljs.core.apply.call(null,cljs.core.str,msgs));
});

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$applyTo = (function (seq6392){
var G__6393 = cljs.core.first.call(null,seq6392);
var seq6392__$1 = cljs.core.next.call(null,seq6392);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6393,seq6392__$1);
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.eof_error = (function cljs$tools$reader$impl$errors$eof_error(var_args){
var args__4647__auto__ = [];
var len__4641__auto___6399 = arguments.length;
var i__4642__auto___6400 = (0);
while(true){
if((i__4642__auto___6400 < len__4641__auto___6399)){
args__4647__auto__.push((arguments[i__4642__auto___6400]));

var G__6401 = (i__4642__auto___6400 + (1));
i__4642__auto___6400 = G__6401;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.call(null,rdr,new cljs.core.Keyword(null,"eof","eof",-489063237),cljs.core.apply.call(null,cljs.core.str,msgs));
});

cljs.tools.reader.impl.errors.eof_error.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.tools.reader.impl.errors.eof_error.cljs$lang$applyTo = (function (seq6397){
var G__6398 = cljs.core.first.call(null,seq6397);
var seq6397__$1 = cljs.core.next.call(null,seq6397);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6398,seq6397__$1);
});

cljs.too