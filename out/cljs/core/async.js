// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__4466 = arguments.length;
switch (G__4466) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4467 = (function (f,blockable,meta4468){
this.f = f;
this.blockable = blockable;
this.meta4468 = meta4468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4469,meta4468__$1){
var self__ = this;
var _4469__$1 = this;
return (new cljs.core.async.t_cljs$core$async4467(self__.f,self__.blockable,meta4468__$1));
});

cljs.core.async.t_cljs$core$async4467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4469){
var self__ = this;
var _4469__$1 = this;
return self__.meta4468;
});

cljs.core.async.t_cljs$core$async4467.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async4467.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async4467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async4467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta4468","meta4468",-1201613660,null)], null);
});

cljs.core.async.t_cljs$core$async4467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4467";

cljs.core.async.t_cljs$core$async4467.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async4467");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4467.
 */
cljs.core.async.__GT_t_cljs$core$async4467 = (function cljs$core$async$__GT_t_cljs$core$async4467(f__$1,blockable__$1,meta4468){
return (new cljs.core.async.t_cljs$core$async4467(f__$1,blockable__$1,meta4468));
});

}

return (new cljs.core.async.t_cljs$core$async4467(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__4473 = arguments.length;
switch (G__4473) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__4476 = arguments.length;
switch (G__4476) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__4479 = arguments.length;
switch (G__4479) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_4481 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_4481);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_4481,ret){
return (function (){
return fn1.call(null,val_4481);
});})(val_4481,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__4483 = arguments.length;
switch (G__4483) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___4485 = n;
var x_4486 = (0);
while(true){
if((x_4486 < n__4518__auto___4485)){
(a[x_4486] = (0));

var G__4487 = (x_4486 + (1));
x_4486 = G__4487;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__4488 = (i + (1));
i = G__4488;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4489 = (function (flag,meta4490){
this.flag = flag;
this.meta4490 = meta4490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_4491,meta4490__$1){
var self__ = this;
var _4491__$1 = this;
return (new cljs.core.async.t_cljs$core$async4489(self__.flag,meta4490__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async4489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_4491){
var self__ = this;
var _4491__$1 = this;
return self__.meta4490;
});})(flag))
;

cljs.core.async.t_cljs$core$async4489.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async4489.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async4489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async4489.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta4490","meta4490",-1096562677,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async4489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4489";

cljs.core.async.t_cljs$core$async4489.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async4489");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4489.
 */
cljs.core.async.__GT_t_cljs$core$async4489 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async4489(flag__$1,meta4490){
return (new cljs.core.async.t_cljs$core$async4489(flag__$1,meta4490));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async4489(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4492 = (function (flag,cb,meta4493){
this.flag = flag;
this.cb = cb;
this.meta4493 = meta4493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4494,meta4493__$1){
var self__ = this;
var _4494__$1 = this;
return (new cljs.core.async.t_cljs$core$async4492(self__.flag,self__.cb,meta4493__$1));
});

cljs.core.async.t_cljs$core$async4492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4494){
var self__ = this;
var _4494__$1 = this;
return self__.meta4493;
});

cljs.core.async.t_cljs$core$async4492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async4492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async4492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async4492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta4493","meta4493",-218048283,null)], null);
});

cljs.core.async.t_cljs$core$async4492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4492";

cljs.core.async.t_cljs$core$async4492.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async4492");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4492.
 */
cljs.core.async.__GT_t_cljs$core$async4492 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async4492(flag__$1,cb__$1,meta4493){
return (new cljs.core.async.t_cljs$core$async4492(flag__$1,cb__$1,meta4493));
});

}

return (new cljs.core.async.t_cljs$core$async4492(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4495_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4495_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4496_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4496_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__4497 = (i + (1));
i = G__4497;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___4503 = arguments.length;
var i__4642__auto___4504 = (0);
while(true){
if((i__4642__auto___4504 < len__4641__auto___4503)){
args__4647__auto__.push((arguments[i__4642__auto___4504]));

var G__4505 = (i__4642__auto___4504 + (1));
i__4642__auto___4504 = G__4505;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__4500){
var map__4501 = p__4500;
var map__4501__$1 = (((((!((map__4501 == null))))?(((((map__4501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4501):map__4501);
var opts = map__4501__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq4498){
var G__4499 = cljs.core.first.call(null,seq4498);
var seq4498__$1 = cljs.core.next.call(null,seq4498);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4499,seq4498__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__4507 = arguments.length;
switch (G__4507) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__2216__auto___4553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___4553){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___4553){
return (function (state_4531){
var state_val_4532 = (state_4531[(1)]);
if((state_val_4532 === (7))){
var inst_4527 = (state_4531[(2)]);
var state_4531__$1 = state_4531;
var statearr_4533_4554 = state_4531__$1;
(statearr_4533_4554[(2)] = inst_4527);

(statearr_4533_4554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4532 === (1))){
var state_4531__$1 = state_4531;
var statearr_4534_4555 = state_4531__$1;
(statearr_4534_4555[(2)] = null);

(statearr_4534_4555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4532 === (4))){
var inst_4510 = (state_4531[(7)]);
var inst_4510__$1 = (state_4531[(2)]);
var inst_4511 = (inst_4510__$1 == null);
var state_4531__$1 = (function (){var statearr_4535 = state_4531;
(statearr_4535[(7)] = inst_4510__$1);

return statearr_4535;
})();
if(cljs.core.truth_(inst_4511)){
var statearr_4536_4556 = state_4531__$1;
(statearr_4536_4556[(1)] = (5));

} else {
var statearr_4537_4557 = state_4531__$1;
(statearr_4537_4557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4532 === (13))){
var state_4531__$1 = state_4531;
var statearr_4538_4558 = state_4531__$1;
(statearr_4538_4558[(2)] = null);

(statearr_4538_4558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4532 === (6))){
var inst_4510 = (state_4531[(7)]);
var state_4531__$1 = state_4531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4531__$1,(11),to,inst_4510);
} else {
if((state_val_4532 === (3))){
var inst_4529 = (state_4531[(2)]);
var state_4531__$1 = state_4531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4531__$1,inst_4529);
} else {
if((state_val_4532 === (12))){
var state_4531__$1 = state_4531;
var statearr_4539_4559 = state_4531__$1;
(statearr_4539_4559[(2)] = null);

(statearr_4539_4559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4532 === (2))){
var state_4531__$1 = state_4531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4531__$1,(4),from);
} else {
if((state_val_4532 === (11))){
var inst_4520 = (state_4531[(2)]);
var state_4531__$1 = state_4531;
if(cljs.core.truth_(inst_4520)){
var statearr_4540_4560 = state_4531__$1;
(statearr_4540_4560[(1)] = (12));

} else {
var statearr_4541_4561 = state_4531__$1;
(statearr_4541_4561[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4532 === (9))){
var state_4531__$1 = state_4531;
var statearr_4542_4562 = state_4531__$1;
(statearr_4542_4562[(2)] = null);

(statearr_4542_4562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4532 === (5))){
var state_4531__$1 = state_4531;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4543_4563 = state_4531__$1;
(statearr_4543_4563[(1)] = (8));

} else {
var statearr_4544_4564 = state_4531__$1;
(statearr_4544_4564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4532 === (14))){
var inst_4525 = (state_4531[(2)]);
var state_4531__$1 = state_4531;
var statearr_4545_4565 = state_4531__$1;
(statearr_4545_4565[(2)] = inst_4525);

(statearr_4545_4565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4532 === (10))){
var inst_4517 = (state_4531[(2)]);
var state_4531__$1 = state_4531;
var statearr_4546_4566 = state_4531__$1;
(statearr_4546_4566[(2)] = inst_4517);

(statearr_4546_4566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4532 === (8))){
var inst_4514 = cljs.core.async.close_BANG_.call(null,to);
var state_4531__$1 = state_4531;
var statearr_4547_4567 = state_4531__$1;
(statearr_4547_4567[(2)] = inst_4514);

(statearr_4547_4567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___4553))
;
return ((function (switch__2199__auto__,c__2216__auto___4553){
return (function() {
var cljs$core$async$state_machine__2200__auto__ = null;
var cljs$core$async$state_machine__2200__auto____0 = (function (){
var statearr_4548 = [null,null,null,null,null,null,null,null];
(statearr_4548[(0)] = cljs$core$async$state_machine__2200__auto__);

(statearr_4548[(1)] = (1));

return statearr_4548;
});
var cljs$core$async$state_machine__2200__auto____1 = (function (state_4531){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_4531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e4549){if((e4549 instanceof Object)){
var ex__2203__auto__ = e4549;
var statearr_4550_4568 = state_4531;
(statearr_4550_4568[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4569 = state_4531;
state_4531 = G__4569;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$state_machine__2200__auto__ = function(state_4531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2200__auto____1.call(this,state_4531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2200__auto____0;
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2200__auto____1;
return cljs$core$async$state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___4553))
})();
var state__2218__auto__ = (function (){var statearr_4551 = f__2217__auto__.call(null);
(statearr_4551[(6)] = c__2216__auto___4553);

return statearr_4551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___4553))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__4570){
var vec__4571 = p__4570;
var v = cljs.core.nth.call(null,vec__4571,(0),null);
var p = cljs.core.nth.call(null,vec__4571,(1),null);
var job = vec__4571;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2216__auto___4742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___4742,res,vec__4571,v,p,job,jobs,results){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___4742,res,vec__4571,v,p,job,jobs,results){
return (function (state_4578){
var state_val_4579 = (state_4578[(1)]);
if((state_val_4579 === (1))){
var state_4578__$1 = state_4578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4578__$1,(2),res,v);
} else {
if((state_val_4579 === (2))){
var inst_4575 = (state_4578[(2)]);
var inst_4576 = cljs.core.async.close_BANG_.call(null,res);
var state_4578__$1 = (function (){var statearr_4580 = state_4578;
(statearr_4580[(7)] = inst_4575);

return statearr_4580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4578__$1,inst_4576);
} else {
return null;
}
}
});})(c__2216__auto___4742,res,vec__4571,v,p,job,jobs,results))
;
return ((function (switch__2199__auto__,c__2216__auto___4742,res,vec__4571,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0 = (function (){
var statearr_4581 = [null,null,null,null,null,null,null,null];
(statearr_4581[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__);

(statearr_4581[(1)] = (1));

return statearr_4581;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1 = (function (state_4578){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_4578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e4582){if((e4582 instanceof Object)){
var ex__2203__auto__ = e4582;
var statearr_4583_4743 = state_4578;
(statearr_4583_4743[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4744 = state_4578;
state_4578 = G__4744;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__ = function(state_4578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1.call(this,state_4578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___4742,res,vec__4571,v,p,job,jobs,results))
})();
var state__2218__auto__ = (function (){var statearr_4584 = f__2217__auto__.call(null);
(statearr_4584[(6)] = c__2216__auto___4742);

return statearr_4584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___4742,res,vec__4571,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4585){
var vec__4586 = p__4585;
var v = cljs.core.nth.call(null,vec__4586,(0),null);
var p = cljs.core.nth.call(null,vec__4586,(1),null);
var job = vec__4586;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___4745 = n;
var __4746 = (0);
while(true){
if((__4746 < n__4518__auto___4745)){
var G__4589_4747 = type;
var G__4589_4748__$1 = (((G__4589_4747 instanceof cljs.core.Keyword))?G__4589_4747.fqn:null);
switch (G__4589_4748__$1) {
case "compute":
var c__2216__auto___4750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4746,c__2216__auto___4750,G__4589_4747,G__4589_4748__$1,n__4518__auto___4745,jobs,results,process,async){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (__4746,c__2216__auto___4750,G__4589_4747,G__4589_4748__$1,n__4518__auto___4745,jobs,results,process,async){
return (function (state_4602){
var state_val_4603 = (state_4602[(1)]);
if((state_val_4603 === (1))){
var state_4602__$1 = state_4602;
var statearr_4604_4751 = state_4602__$1;
(statearr_4604_4751[(2)] = null);

(statearr_4604_4751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4603 === (2))){
var state_4602__$1 = state_4602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4602__$1,(4),jobs);
} else {
if((state_val_4603 === (3))){
var inst_4600 = (state_4602[(2)]);
var state_4602__$1 = state_4602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4602__$1,inst_4600);
} else {
if((state_val_4603 === (4))){
var inst_4592 = (state_4602[(2)]);
var inst_4593 = process.call(null,inst_4592);
var state_4602__$1 = state_4602;
if(cljs.core.truth_(inst_4593)){
var statearr_4605_4752 = state_4602__$1;
(statearr_4605_4752[(1)] = (5));

} else {
var statearr_4606_4753 = state_4602__$1;
(statearr_4606_4753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4603 === (5))){
var state_4602__$1 = state_4602;
var statearr_4607_4754 = state_4602__$1;
(statearr_4607_4754[(2)] = null);

(statearr_4607_4754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4603 === (6))){
var state_4602__$1 = state_4602;
var statearr_4608_4755 = state_4602__$1;
(statearr_4608_4755[(2)] = null);

(statearr_4608_4755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4603 === (7))){
var inst_4598 = (state_4602[(2)]);
var state_4602__$1 = state_4602;
var statearr_4609_4756 = state_4602__$1;
(statearr_4609_4756[(2)] = inst_4598);

(statearr_4609_4756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__4746,c__2216__auto___4750,G__4589_4747,G__4589_4748__$1,n__4518__auto___4745,jobs,results,process,async))
;
return ((function (__4746,switch__2199__auto__,c__2216__auto___4750,G__4589_4747,G__4589_4748__$1,n__4518__auto___4745,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0 = (function (){
var statearr_4610 = [null,null,null,null,null,null,null];
(statearr_4610[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__);

(statearr_4610[(1)] = (1));

return statearr_4610;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1 = (function (state_4602){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_4602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e4611){if((e4611 instanceof Object)){
var ex__2203__auto__ = e4611;
var statearr_4612_4757 = state_4602;
(statearr_4612_4757[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4758 = state_4602;
state_4602 = G__4758;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__ = function(state_4602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1.call(this,state_4602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__;
})()
;})(__4746,switch__2199__auto__,c__2216__auto___4750,G__4589_4747,G__4589_4748__$1,n__4518__auto___4745,jobs,results,process,async))
})();
var state__2218__auto__ = (function (){var statearr_4613 = f__2217__auto__.call(null);
(statearr_4613[(6)] = c__2216__auto___4750);

return statearr_4613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(__4746,c__2216__auto___4750,G__4589_4747,G__4589_4748__$1,n__4518__auto___4745,jobs,results,process,async))
);


break;
case "async":
var c__2216__auto___4759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4746,c__2216__auto___4759,G__4589_4747,G__4589_4748__$1,n__4518__auto___4745,jobs,results,process,async){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (__4746,c__2216__auto___4759,G__4589_4747,G__4589_4748__$1,n__4518__auto___4745,jobs,results,process,async){
return (function (state_4626){
var state_val_4627 = (state_4626[(1)]);
if((state_val_4627 === (1))){
var state_4626__$1 = state_4626;
var statearr_4628_4760 = state_4626__$1;
(statearr_4628_4760[(2)] = null);

(statearr_4628_4760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4627 === (2))){
var state_4626__$1 = state_4626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4626__$1,(4),jobs);
} else {
if((state_val_4627 === (3))){
var inst_4624 = (state_4626[(2)]);
var state_4626__$1 = state_4626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4626__$1,inst_4624);
} else {
if((state_val_4627 === (4))){
var inst_4616 = (state_4626[(2)]);
var inst_4617 = async.call(null,inst_4616);
var state_4626__$1 = state_4626;
if(cljs.core.truth_(inst_4617)){
var statearr_4629_4761 = state_4626__$1;
(statearr_4629_4761[(1)] = (5));

} else {
var statearr_4630_4762 = state_4626__$1;
(statearr_4630_4762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4627 === (5))){
var state_4626__$1 = state_4626;
var statearr_4631_4763 = state_4626__$1;
(statearr_4631_4763[(2)] = null);

(statearr_4631_4763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4627 === (6))){
var state_4626__$1 = state_4626;
var statearr_4632_4764 = state_4626__$1;
(statearr_4632_4764[(2)] = null);

(statearr_4632_4764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4627 === (7))){
var inst_4622 = (state_4626[(2)]);
var state_4626__$1 = state_4626;
var statearr_4633_4765 = state_4626__$1;
(statearr_4633_4765[(2)] = inst_4622);

(statearr_4633_4765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__4746,c__2216__auto___4759,G__4589_4747,G__4589_4748__$1,n__4518__auto___4745,jobs,results,process,async))
;
return ((function (__4746,switch__2199__auto__,c__2216__auto___4759,G__4589_4747,G__4589_4748__$1,n__4518__auto___4745,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0 = (function (){
var statearr_4634 = [null,null,null,null,null,null,null];
(statearr_4634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__);

(statearr_4634[(1)] = (1));

return statearr_4634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1 = (function (state_4626){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_4626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e4635){if((e4635 instanceof Object)){
var ex__2203__auto__ = e4635;
var statearr_4636_4766 = state_4626;
(statearr_4636_4766[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4767 = state_4626;
state_4626 = G__4767;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__ = function(state_4626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1.call(this,state_4626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__;
})()
;})(__4746,switch__2199__auto__,c__2216__auto___4759,G__4589_4747,G__4589_4748__$1,n__4518__auto___4745,jobs,results,process,async))
})();
var state__2218__auto__ = (function (){var statearr_4637 = f__2217__auto__.call(null);
(statearr_4637[(6)] = c__2216__auto___4759);

return statearr_4637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(__4746,c__2216__auto___4759,G__4589_4747,G__4589_4748__$1,n__4518__auto___4745,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4589_4748__$1)].join('')));

}

var G__4768 = (__4746 + (1));
__4746 = G__4768;
continue;
} else {
}
break;
}

var c__2216__auto___4769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___4769,jobs,results,process,async){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___4769,jobs,results,process,async){
return (function (state_4659){
var state_val_4660 = (state_4659[(1)]);
if((state_val_4660 === (1))){
var state_4659__$1 = state_4659;
var statearr_4661_4770 = state_4659__$1;
(statearr_4661_4770[(2)] = null);

(statearr_4661_4770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4660 === (2))){
var state_4659__$1 = state_4659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4659__$1,(4),from);
} else {
if((state_val_4660 === (3))){
var inst_4657 = (state_4659[(2)]);
var state_4659__$1 = state_4659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4659__$1,inst_4657);
} else {
if((state_val_4660 === (4))){
var inst_4640 = (state_4659[(7)]);
var inst_4640__$1 = (state_4659[(2)]);
var inst_4641 = (inst_4640__$1 == null);
var state_4659__$1 = (function (){var statearr_4662 = state_4659;
(statearr_4662[(7)] = inst_4640__$1);

return statearr_4662;
})();
if(cljs.core.truth_(inst_4641)){
var statearr_4663_4771 = state_4659__$1;
(statearr_4663_4771[(1)] = (5));

} else {
var statearr_4664_4772 = state_4659__$1;
(statearr_4664_4772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4660 === (5))){
var inst_4643 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4659__$1 = state_4659;
var statearr_4665_4773 = state_4659__$1;
(statearr_4665_4773[(2)] = inst_4643);

(statearr_4665_4773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4660 === (6))){
var inst_4640 = (state_4659[(7)]);
var inst_4645 = (state_4659[(8)]);
var inst_4645__$1 = cljs.core.async.chan.call(null,(1));
var inst_4646 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4647 = [inst_4640,inst_4645__$1];
var inst_4648 = (new cljs.core.PersistentVector(null,2,(5),inst_4646,inst_4647,null));
var state_4659__$1 = (function (){var statearr_4666 = state_4659;
(statearr_4666[(8)] = inst_4645__$1);

return statearr_4666;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4659__$1,(8),jobs,inst_4648);
} else {
if((state_val_4660 === (7))){
var inst_4655 = (state_4659[(2)]);
var state_4659__$1 = state_4659;
var statearr_4667_4774 = state_4659__$1;
(statearr_4667_4774[(2)] = inst_4655);

(statearr_4667_4774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4660 === (8))){
var inst_4645 = (state_4659[(8)]);
var inst_4650 = (state_4659[(2)]);
var state_4659__$1 = (function (){var statearr_4668 = state_4659;
(statearr_4668[(9)] = inst_4650);

return statearr_4668;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4659__$1,(9),results,inst_4645);
} else {
if((state_val_4660 === (9))){
var inst_4652 = (state_4659[(2)]);
var state_4659__$1 = (function (){var statearr_4669 = state_4659;
(statearr_4669[(10)] = inst_4652);

return statearr_4669;
})();
var statearr_4670_4775 = state_4659__$1;
(statearr_4670_4775[(2)] = null);

(statearr_4670_4775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___4769,jobs,results,process,async))
;
return ((function (switch__2199__auto__,c__2216__auto___4769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0 = (function (){
var statearr_4671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__);

(statearr_4671[(1)] = (1));

return statearr_4671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1 = (function (state_4659){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_4659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e4672){if((e4672 instanceof Object)){
var ex__2203__auto__ = e4672;
var statearr_4673_4776 = state_4659;
(statearr_4673_4776[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4777 = state_4659;
state_4659 = G__4777;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__ = function(state_4659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1.call(this,state_4659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___4769,jobs,results,process,async))
})();
var state__2218__auto__ = (function (){var statearr_4674 = f__2217__auto__.call(null);
(statearr_4674[(6)] = c__2216__auto___4769);

return statearr_4674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___4769,jobs,results,process,async))
);


var c__2216__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto__,jobs,results,process,async){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto__,jobs,results,process,async){
return (function (state_4712){
var state_val_4713 = (state_4712[(1)]);
if((state_val_4713 === (7))){
var inst_4708 = (state_4712[(2)]);
var state_4712__$1 = state_4712;
var statearr_4714_4778 = state_4712__$1;
(statearr_4714_4778[(2)] = inst_4708);

(statearr_4714_4778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (20))){
var state_4712__$1 = state_4712;
var statearr_4715_4779 = state_4712__$1;
(statearr_4715_4779[(2)] = null);

(statearr_4715_4779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (1))){
var state_4712__$1 = state_4712;
var statearr_4716_4780 = state_4712__$1;
(statearr_4716_4780[(2)] = null);

(statearr_4716_4780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (4))){
var inst_4677 = (state_4712[(7)]);
var inst_4677__$1 = (state_4712[(2)]);
var inst_4678 = (inst_4677__$1 == null);
var state_4712__$1 = (function (){var statearr_4717 = state_4712;
(statearr_4717[(7)] = inst_4677__$1);

return statearr_4717;
})();
if(cljs.core.truth_(inst_4678)){
var statearr_4718_4781 = state_4712__$1;
(statearr_4718_4781[(1)] = (5));

} else {
var statearr_4719_4782 = state_4712__$1;
(statearr_4719_4782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (15))){
var inst_4690 = (state_4712[(8)]);
var state_4712__$1 = state_4712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4712__$1,(18),to,inst_4690);
} else {
if((state_val_4713 === (21))){
var inst_4703 = (state_4712[(2)]);
var state_4712__$1 = state_4712;
var statearr_4720_4783 = state_4712__$1;
(statearr_4720_4783[(2)] = inst_4703);

(statearr_4720_4783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (13))){
var inst_4705 = (state_4712[(2)]);
var state_4712__$1 = (function (){var statearr_4721 = state_4712;
(statearr_4721[(9)] = inst_4705);

return statearr_4721;
})();
var statearr_4722_4784 = state_4712__$1;
(statearr_4722_4784[(2)] = null);

(statearr_4722_4784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (6))){
var inst_4677 = (state_4712[(7)]);
var state_4712__$1 = state_4712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4712__$1,(11),inst_4677);
} else {
if((state_val_4713 === (17))){
var inst_4698 = (state_4712[(2)]);
var state_4712__$1 = state_4712;
if(cljs.core.truth_(inst_4698)){
var statearr_4723_4785 = state_4712__$1;
(statearr_4723_4785[(1)] = (19));

} else {
var statearr_4724_4786 = state_4712__$1;
(statearr_4724_4786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (3))){
var inst_4710 = (state_4712[(2)]);
var state_4712__$1 = state_4712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4712__$1,inst_4710);
} else {
if((state_val_4713 === (12))){
var inst_4687 = (state_4712[(10)]);
var state_4712__$1 = state_4712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4712__$1,(14),inst_4687);
} else {
if((state_val_4713 === (2))){
var state_4712__$1 = state_4712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4712__$1,(4),results);
} else {
if((state_val_4713 === (19))){
var state_4712__$1 = state_4712;
var statearr_4725_4787 = state_4712__$1;
(statearr_4725_4787[(2)] = null);

(statearr_4725_4787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (11))){
var inst_4687 = (state_4712[(2)]);
var state_4712__$1 = (function (){var statearr_4726 = state_4712;
(statearr_4726[(10)] = inst_4687);

return statearr_4726;
})();
var statearr_4727_4788 = state_4712__$1;
(statearr_4727_4788[(2)] = null);

(statearr_4727_4788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (9))){
var state_4712__$1 = state_4712;
var statearr_4728_4789 = state_4712__$1;
(statearr_4728_4789[(2)] = null);

(statearr_4728_4789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (5))){
var state_4712__$1 = state_4712;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4729_4790 = state_4712__$1;
(statearr_4729_4790[(1)] = (8));

} else {
var statearr_4730_4791 = state_4712__$1;
(statearr_4730_4791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (14))){
var inst_4690 = (state_4712[(8)]);
var inst_4692 = (state_4712[(11)]);
var inst_4690__$1 = (state_4712[(2)]);
var inst_4691 = (inst_4690__$1 == null);
var inst_4692__$1 = cljs.core.not.call(null,inst_4691);
var state_4712__$1 = (function (){var statearr_4731 = state_4712;
(statearr_4731[(8)] = inst_4690__$1);

(statearr_4731[(11)] = inst_4692__$1);

return statearr_4731;
})();
if(inst_4692__$1){
var statearr_4732_4792 = state_4712__$1;
(statearr_4732_4792[(1)] = (15));

} else {
var statearr_4733_4793 = state_4712__$1;
(statearr_4733_4793[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (16))){
var inst_4692 = (state_4712[(11)]);
var state_4712__$1 = state_4712;
var statearr_4734_4794 = state_4712__$1;
(statearr_4734_4794[(2)] = inst_4692);

(statearr_4734_4794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (10))){
var inst_4684 = (state_4712[(2)]);
var state_4712__$1 = state_4712;
var statearr_4735_4795 = state_4712__$1;
(statearr_4735_4795[(2)] = inst_4684);

(statearr_4735_4795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (18))){
var inst_4695 = (state_4712[(2)]);
var state_4712__$1 = state_4712;
var statearr_4736_4796 = state_4712__$1;
(statearr_4736_4796[(2)] = inst_4695);

(statearr_4736_4796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (8))){
var inst_4681 = cljs.core.async.close_BANG_.call(null,to);
var state_4712__$1 = state_4712;
var statearr_4737_4797 = state_4712__$1;
(statearr_4737_4797[(2)] = inst_4681);

(statearr_4737_4797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto__,jobs,results,process,async))
;
return ((function (switch__2199__auto__,c__2216__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0 = (function (){
var statearr_4738 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__);

(statearr_4738[(1)] = (1));

return statearr_4738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1 = (function (state_4712){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_4712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e4739){if((e4739 instanceof Object)){
var ex__2203__auto__ = e4739;
var statearr_4740_4798 = state_4712;
(statearr_4740_4798[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4799 = state_4712;
state_4712 = G__4799;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__ = function(state_4712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1.call(this,state_4712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto__,jobs,results,process,async))
})();
var state__2218__auto__ = (function (){var statearr_4741 = f__2217__auto__.call(null);
(statearr_4741[(6)] = c__2216__auto__);

return statearr_4741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto__,jobs,results,process,async))
);

return c__2216__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__4801 = arguments.length;
switch (G__4801) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__4804 = arguments.length;
switch (G__4804) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__4807 = arguments.length;
switch (G__4807) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__2216__auto___4856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___4856,tc,fc){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___4856,tc,fc){
return (function (state_4833){
var state_val_4834 = (state_4833[(1)]);
if((state_val_4834 === (7))){
var inst_4829 = (state_4833[(2)]);
var state_4833__$1 = state_4833;
var statearr_4835_4857 = state_4833__$1;
(statearr_4835_4857[(2)] = inst_4829);

(statearr_4835_4857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4834 === (1))){
var state_4833__$1 = state_4833;
var statearr_4836_4858 = state_4833__$1;
(statearr_4836_4858[(2)] = null);

(statearr_4836_4858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4834 === (4))){
var inst_4810 = (state_4833[(7)]);
var inst_4810__$1 = (state_4833[(2)]);
var inst_4811 = (inst_4810__$1 == null);
var state_4833__$1 = (function (){var statearr_4837 = state_4833;
(statearr_4837[(7)] = inst_4810__$1);

return statearr_4837;
})();
if(cljs.core.truth_(inst_4811)){
var statearr_4838_4859 = state_4833__$1;
(statearr_4838_4859[(1)] = (5));

} else {
var statearr_4839_4860 = state_4833__$1;
(statearr_4839_4860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4834 === (13))){
var state_4833__$1 = state_4833;
var statearr_4840_4861 = state_4833__$1;
(statearr_4840_4861[(2)] = null);

(statearr_4840_4861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4834 === (6))){
var inst_4810 = (state_4833[(7)]);
var inst_4816 = p.call(null,inst_4810);
var state_4833__$1 = state_4833;
if(cljs.core.truth_(inst_4816)){
var statearr_4841_4862 = state_4833__$1;
(statearr_4841_4862[(1)] = (9));

} else {
var statearr_4842_4863 = state_4833__$1;
(statearr_4842_4863[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4834 === (3))){
var inst_4831 = (state_4833[(2)]);
var state_4833__$1 = state_4833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4833__$1,inst_4831);
} else {
if((state_val_4834 === (12))){
var state_4833__$1 = state_4833;
var statearr_4843_4864 = state_4833__$1;
(statearr_4843_4864[(2)] = null);

(statearr_4843_4864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4834 === (2))){
var state_4833__$1 = state_4833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4833__$1,(4),ch);
} else {
if((state_val_4834 === (11))){
var inst_4810 = (state_4833[(7)]);
var inst_4820 = (state_4833[(2)]);
var state_4833__$1 = state_4833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4833__$1,(8),inst_4820,inst_4810);
} else {
if((state_val_4834 === (9))){
var state_4833__$1 = state_4833;
var statearr_4844_4865 = state_4833__$1;
(statearr_4844_4865[(2)] = tc);

(statearr_4844_4865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4834 === (5))){
var inst_4813 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4814 = cljs.core.async.close_BANG_.call(null,fc);
var state_4833__$1 = (function (){var statearr_4845 = state_4833;
(statearr_4845[(8)] = inst_4813);

return statearr_4845;
})();
var statearr_4846_4866 = state_4833__$1;
(statearr_4846_4866[(2)] = inst_4814);

(statearr_4846_4866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4834 === (14))){
var inst_4827 = (state_4833[(2)]);
var state_4833__$1 = state_4833;
var statearr_4847_4867 = state_4833__$1;
(statearr_4847_4867[(2)] = inst_4827);

(statearr_4847_4867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4834 === (10))){
var state_4833__$1 = state_4833;
var statearr_4848_4868 = state_4833__$1;
(statearr_4848_4868[(2)] = fc);

(statearr_4848_4868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4834 === (8))){
var inst_4822 = (state_4833[(2)]);
var state_4833__$1 = state_4833;
if(cljs.core.truth_(inst_4822)){
var statearr_4849_4869 = state_4833__$1;
(statearr_4849_4869[(1)] = (12));

} else {
var statearr_4850_4870 = state_4833__$1;
(statearr_4850_4870[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___4856,tc,fc))
;
return ((function (switch__2199__auto__,c__2216__auto___4856,tc,fc){
return (function() {
var cljs$core$async$state_machine__2200__auto__ = null;
var cljs$core$async$state_machine__2200__auto____0 = (function (){
var statearr_4851 = [null,null,null,null,null,null,null,null,null];
(statearr_4851[(0)] = cljs$core$async$state_machine__2200__auto__);

(statearr_4851[(1)] = (1));

return statearr_4851;
});
var cljs$core$async$state_machine__2200__auto____1 = (function (state_4833){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_4833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e4852){if((e4852 instanceof Object)){
var ex__2203__auto__ = e4852;
var statearr_4853_4871 = state_4833;
(statearr_4853_4871[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4872 = state_4833;
state_4833 = G__4872;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$state_machine__2200__auto__ = function(state_4833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2200__auto____1.call(this,state_4833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2200__auto____0;
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2200__auto____1;
return cljs$core$async$state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___4856,tc,fc))
})();
var state__2218__auto__ = (function (){var statearr_4854 = f__2217__auto__.call(null);
(statearr_4854[(6)] = c__2216__auto___4856);

return statearr_4854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___4856,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__2216__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto__){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto__){
return (function (state_4893){
var state_val_4894 = (state_4893[(1)]);
if((state_val_4894 === (7))){
var inst_4889 = (state_4893[(2)]);
var state_4893__$1 = state_4893;
var statearr_4895_4913 = state_4893__$1;
(statearr_4895_4913[(2)] = inst_4889);

(statearr_4895_4913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4894 === (1))){
var inst_4873 = init;
var state_4893__$1 = (function (){var statearr_4896 = state_4893;
(statearr_4896[(7)] = inst_4873);

return statearr_4896;
})();
var statearr_4897_4914 = state_4893__$1;
(statearr_4897_4914[(2)] = null);

(statearr_4897_4914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4894 === (4))){
var inst_4876 = (state_4893[(8)]);
var inst_4876__$1 = (state_4893[(2)]);
var inst_4877 = (inst_4876__$1 == null);
var state_4893__$1 = (function (){var statearr_4898 = state_4893;
(statearr_4898[(8)] = inst_4876__$1);

return statearr_4898;
})();
if(cljs.core.truth_(inst_4877)){
var statearr_4899_4915 = state_4893__$1;
(statearr_4899_4915[(1)] = (5));

} else {
var statearr_4900_4916 = state_4893__$1;
(statearr_4900_4916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4894 === (6))){
var inst_4876 = (state_4893[(8)]);
var inst_4873 = (state_4893[(7)]);
var inst_4880 = (state_4893[(9)]);
var inst_4880__$1 = f.call(null,inst_4873,inst_4876);
var inst_4881 = cljs.core.reduced_QMARK_.call(null,inst_4880__$1);
var state_4893__$1 = (function (){var statearr_4901 = state_4893;
(statearr_4901[(9)] = inst_4880__$1);

return statearr_4901;
})();
if(inst_4881){
var statearr_4902_4917 = state_4893__$1;
(statearr_4902_4917[(1)] = (8));

} else {
var statearr_4903_4918 = state_4893__$1;
(statearr_4903_4918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4894 === (3))){
var inst_4891 = (state_4893[(2)]);
var state_4893__$1 = state_4893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4893__$1,inst_4891);
} else {
if((state_val_4894 === (2))){
var state_4893__$1 = state_4893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4893__$1,(4),ch);
} else {
if((state_val_4894 === (9))){
var inst_4880 = (state_4893[(9)]);
var inst_4873 = inst_4880;
var state_4893__$1 = (function (){var statearr_4904 = state_4893;
(statearr_4904[(7)] = inst_4873);

return statearr_4904;
})();
var statearr_4905_4919 = state_4893__$1;
(statearr_4905_4919[(2)] = null);

(statearr_4905_4919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4894 === (5))){
var inst_4873 = (state_4893[(7)]);
var state_4893__$1 = state_4893;
var statearr_4906_4920 = state_4893__$1;
(statearr_4906_4920[(2)] = inst_4873);

(statearr_4906_4920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4894 === (10))){
var inst_4887 = (state_4893[(2)]);
var state_4893__$1 = state_4893;
var statearr_4907_4921 = state_4893__$1;
(statearr_4907_4921[(2)] = inst_4887);

(statearr_4907_4921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4894 === (8))){
var inst_4880 = (state_4893[(9)]);
var inst_4883 = cljs.core.deref.call(null,inst_4880);
var state_4893__$1 = state_4893;
var statearr_4908_4922 = state_4893__$1;
(statearr_4908_4922[(2)] = inst_4883);

(statearr_4908_4922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto__))
;
return ((function (switch__2199__auto__,c__2216__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__2200__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2200__auto____0 = (function (){
var statearr_4909 = [null,null,null,null,null,null,null,null,null,null];
(statearr_4909[(0)] = cljs$core$async$reduce_$_state_machine__2200__auto__);

(statearr_4909[(1)] = (1));

return statearr_4909;
});
var cljs$core$async$reduce_$_state_machine__2200__auto____1 = (function (state_4893){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_4893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e4910){if((e4910 instanceof Object)){
var ex__2203__auto__ = e4910;
var statearr_4911_4923 = state_4893;
(statearr_4911_4923[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4924 = state_4893;
state_4893 = G__4924;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2200__auto__ = function(state_4893){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2200__auto____1.call(this,state_4893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2200__auto____0;
cljs$core$async$reduce_$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2200__auto____1;
return cljs$core$async$reduce_$_state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto__))
})();
var state__2218__auto__ = (function (){var statearr_4912 = f__2217__auto__.call(null);
(statearr_4912[(6)] = c__2216__auto__);

return statearr_4912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto__))
);

return c__2216__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__2216__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto__,f__$1){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto__,f__$1){
return (function (state_4930){
var state_val_4931 = (state_4930[(1)]);
if((state_val_4931 === (1))){
var inst_4925 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_4930__$1 = state_4930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4930__$1,(2),inst_4925);
} else {
if((state_val_4931 === (2))){
var inst_4927 = (state_4930[(2)]);
var inst_4928 = f__$1.call(null,inst_4927);
var state_4930__$1 = state_4930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4930__$1,inst_4928);
} else {
return null;
}
}
});})(c__2216__auto__,f__$1))
;
return ((function (switch__2199__auto__,c__2216__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__2200__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2200__auto____0 = (function (){
var statearr_4932 = [null,null,null,null,null,null,null];
(statearr_4932[(0)] = cljs$core$async$transduce_$_state_machine__2200__auto__);

(statearr_4932[(1)] = (1));

return statearr_4932;
});
var cljs$core$async$transduce_$_state_machine__2200__auto____1 = (function (state_4930){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_4930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e4933){if((e4933 instanceof Object)){
var ex__2203__auto__ = e4933;
var statearr_4934_4936 = state_4930;
(statearr_4934_4936[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4937 = state_4930;
state_4930 = G__4937;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2200__auto__ = function(state_4930){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2200__auto____1.call(this,state_4930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2200__auto____0;
cljs$core$async$transduce_$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2200__auto____1;
return cljs$core$async$transduce_$_state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto__,f__$1))
})();
var state__2218__auto__ = (function (){var statearr_4935 = f__2217__auto__.call(null);
(statearr_4935[(6)] = c__2216__auto__);

return statearr_4935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto__,f__$1))
);

return c__2216__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__4939 = arguments.length;
switch (G__4939) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__2216__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto__){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto__){
return (function (state_4964){
var state_val_4965 = (state_4964[(1)]);
if((state_val_4965 === (7))){
var inst_4946 = (state_4964[(2)]);
var state_4964__$1 = state_4964;
var statearr_4966_4987 = state_4964__$1;
(statearr_4966_4987[(2)] = inst_4946);

(statearr_4966_4987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4965 === (1))){
var inst_4940 = cljs.core.seq.call(null,coll);
var inst_4941 = inst_4940;
var state_4964__$1 = (function (){var statearr_4967 = state_4964;
(statearr_4967[(7)] = inst_4941);

return statearr_4967;
})();
var statearr_4968_4988 = state_4964__$1;
(statearr_4968_4988[(2)] = null);

(statearr_4968_4988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4965 === (4))){
var inst_4941 = (state_4964[(7)]);
var inst_4944 = cljs.core.first.call(null,inst_4941);
var state_4964__$1 = state_4964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4964__$1,(7),ch,inst_4944);
} else {
if((state_val_4965 === (13))){
var inst_4958 = (state_4964[(2)]);
var state_4964__$1 = state_4964;
var statearr_4969_4989 = state_4964__$1;
(statearr_4969_4989[(2)] = inst_4958);

(statearr_4969_4989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4965 === (6))){
var inst_4949 = (state_4964[(2)]);
var state_4964__$1 = state_4964;
if(cljs.core.truth_(inst_4949)){
var statearr_4970_4990 = state_4964__$1;
(statearr_4970_4990[(1)] = (8));

} else {
var statearr_4971_4991 = state_4964__$1;
(statearr_4971_4991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4965 === (3))){
var inst_4962 = (state_4964[(2)]);
var state_4964__$1 = state_4964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4964__$1,inst_4962);
} else {
if((state_val_4965 === (12))){
var state_4964__$1 = state_4964;
var statearr_4972_4992 = state_4964__$1;
(statearr_4972_4992[(2)] = null);

(statearr_4972_4992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4965 === (2))){
var inst_4941 = (state_4964[(7)]);
var state_4964__$1 = state_4964;
if(cljs.core.truth_(inst_4941)){
var statearr_4973_4993 = state_4964__$1;
(statearr_4973_4993[(1)] = (4));

} else {
var statearr_4974_4994 = state_4964__$1;
(statearr_4974_4994[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4965 === (11))){
var inst_4955 = cljs.core.async.close_BANG_.call(null,ch);
var state_4964__$1 = state_4964;
var statearr_4975_4995 = state_4964__$1;
(statearr_4975_4995[(2)] = inst_4955);

(statearr_4975_4995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4965 === (9))){
var state_4964__$1 = state_4964;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4976_4996 = state_4964__$1;
(statearr_4976_4996[(1)] = (11));

} else {
var statearr_4977_4997 = state_4964__$1;
(statearr_4977_4997[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4965 === (5))){
var inst_4941 = (state_4964[(7)]);
var state_4964__$1 = state_4964;
var statearr_4978_4998 = state_4964__$1;
(statearr_4978_4998[(2)] = inst_4941);

(statearr_4978_4998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4965 === (10))){
var inst_4960 = (state_4964[(2)]);
var state_4964__$1 = state_4964;
var statearr_4979_4999 = state_4964__$1;
(statearr_4979_4999[(2)] = inst_4960);

(statearr_4979_4999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4965 === (8))){
var inst_4941 = (state_4964[(7)]);
var inst_4951 = cljs.core.next.call(null,inst_4941);
var inst_4941__$1 = inst_4951;
var state_4964__$1 = (function (){var statearr_4980 = state_4964;
(statearr_4980[(7)] = inst_4941__$1);

return statearr_4980;
})();
var statearr_4981_5000 = state_4964__$1;
(statearr_4981_5000[(2)] = null);

(statearr_4981_5000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto__))
;
return ((function (switch__2199__auto__,c__2216__auto__){
return (function() {
var cljs$core$async$state_machine__2200__auto__ = null;
var cljs$core$async$state_machine__2200__auto____0 = (function (){
var statearr_4982 = [null,null,null,null,null,null,null,null];
(statearr_4982[(0)] = cljs$core$async$state_machine__2200__auto__);

(statearr_4982[(1)] = (1));

return statearr_4982;
});
var cljs$core$async$state_machine__2200__auto____1 = (function (state_4964){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_4964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e4983){if((e4983 instanceof Object)){
var ex__2203__auto__ = e4983;
var statearr_4984_5001 = state_4964;
(statearr_4984_5001[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5002 = state_4964;
state_4964 = G__5002;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$state_machine__2200__auto__ = function(state_4964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2200__auto____1.call(this,state_4964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2200__auto____0;
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2200__auto____1;
return cljs$core$async$state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto__))
})();
var state__2218__auto__ = (function (){var statearr_4985 = f__2217__auto__.call(null);
(statearr_4985[(6)] = c__2216__auto__);

return statearr_4985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto__))
);

return c__2216__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5003 = (function (ch,cs,meta5004){
this.ch = ch;
this.cs = cs;
this.meta5004 = meta5004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_5005,meta5004__$1){
var self__ = this;
var _5005__$1 = this;
return (new cljs.core.async.t_cljs$core$async5003(self__.ch,self__.cs,meta5004__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async5003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_5005){
var self__ = this;
var _5005__$1 = this;
return self__.meta5004;
});})(cs))
;

cljs.core.async.t_cljs$core$async5003.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async5003.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5003.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async5003.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async5003.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async5003.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta5004","meta5004",1517305228,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async5003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5003";

cljs.core.async.t_cljs$core$async5003.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async5003");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5003.
 */
cljs.core.async.__GT_t_cljs$core$async5003 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async5003(ch__$1,cs__$1,meta5004){
return (new cljs.core.async.t_cljs$core$async5003(ch__$1,cs__$1,meta5004));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async5003(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__2216__auto___5225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___5225,cs,m,dchan,dctr,done){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___5225,cs,m,dchan,dctr,done){
return (function (state_5140){
var state_val_5141 = (state_5140[(1)]);
if((state_val_5141 === (7))){
var inst_5136 = (state_5140[(2)]);
var state_5140__$1 = state_5140;
var statearr_5142_5226 = state_5140__$1;
(statearr_5142_5226[(2)] = inst_5136);

(statearr_5142_5226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (20))){
var inst_5039 = (state_5140[(7)]);
var inst_5051 = cljs.core.first.call(null,inst_5039);
var inst_5052 = cljs.core.nth.call(null,inst_5051,(0),null);
var inst_5053 = cljs.core.nth.call(null,inst_5051,(1),null);
var state_5140__$1 = (function (){var statearr_5143 = state_5140;
(statearr_5143[(8)] = inst_5052);

return statearr_5143;
})();
if(cljs.core.truth_(inst_5053)){
var statearr_5144_5227 = state_5140__$1;
(statearr_5144_5227[(1)] = (22));

} else {
var statearr_5145_5228 = state_5140__$1;
(statearr_5145_5228[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (27))){
var inst_5083 = (state_5140[(9)]);
var inst_5008 = (state_5140[(10)]);
var inst_5088 = (state_5140[(11)]);
var inst_5081 = (state_5140[(12)]);
var inst_5088__$1 = cljs.core._nth.call(null,inst_5081,inst_5083);
var inst_5089 = cljs.core.async.put_BANG_.call(null,inst_5088__$1,inst_5008,done);
var state_5140__$1 = (function (){var statearr_5146 = state_5140;
(statearr_5146[(11)] = inst_5088__$1);

return statearr_5146;
})();
if(cljs.core.truth_(inst_5089)){
var statearr_5147_5229 = state_5140__$1;
(statearr_5147_5229[(1)] = (30));

} else {
var statearr_5148_5230 = state_5140__$1;
(statearr_5148_5230[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (1))){
var state_5140__$1 = state_5140;
var statearr_5149_5231 = state_5140__$1;
(statearr_5149_5231[(2)] = null);

(statearr_5149_5231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (24))){
var inst_5039 = (state_5140[(7)]);
var inst_5058 = (state_5140[(2)]);
var inst_5059 = cljs.core.next.call(null,inst_5039);
var inst_5017 = inst_5059;
var inst_5018 = null;
var inst_5019 = (0);
var inst_5020 = (0);
var state_5140__$1 = (function (){var statearr_5150 = state_5140;
(statearr_5150[(13)] = inst_5020);

(statearr_5150[(14)] = inst_5018);

(statearr_5150[(15)] = inst_5019);

(statearr_5150[(16)] = inst_5058);

(statearr_5150[(17)] = inst_5017);

return statearr_5150;
})();
var statearr_5151_5232 = state_5140__$1;
(statearr_5151_5232[(2)] = null);

(statearr_5151_5232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (39))){
var state_5140__$1 = state_5140;
var statearr_5155_5233 = state_5140__$1;
(statearr_5155_5233[(2)] = null);

(statearr_5155_5233[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (4))){
var inst_5008 = (state_5140[(10)]);
var inst_5008__$1 = (state_5140[(2)]);
var inst_5009 = (inst_5008__$1 == null);
var state_5140__$1 = (function (){var statearr_5156 = state_5140;
(statearr_5156[(10)] = inst_5008__$1);

return statearr_5156;
})();
if(cljs.core.truth_(inst_5009)){
var statearr_5157_5234 = state_5140__$1;
(statearr_5157_5234[(1)] = (5));

} else {
var statearr_5158_5235 = state_5140__$1;
(statearr_5158_5235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (15))){
var inst_5020 = (state_5140[(13)]);
var inst_5018 = (state_5140[(14)]);
var inst_5019 = (state_5140[(15)]);
var inst_5017 = (state_5140[(17)]);
var inst_5035 = (state_5140[(2)]);
var inst_5036 = (inst_5020 + (1));
var tmp5152 = inst_5018;
var tmp5153 = inst_5019;
var tmp5154 = inst_5017;
var inst_5017__$1 = tmp5154;
var inst_5018__$1 = tmp5152;
var inst_5019__$1 = tmp5153;
var inst_5020__$1 = inst_5036;
var state_5140__$1 = (function (){var statearr_5159 = state_5140;
(statearr_5159[(13)] = inst_5020__$1);

(statearr_5159[(14)] = inst_5018__$1);

(statearr_5159[(15)] = inst_5019__$1);

(statearr_5159[(17)] = inst_5017__$1);

(statearr_5159[(18)] = inst_5035);

return statearr_5159;
})();
var statearr_5160_5236 = state_5140__$1;
(statearr_5160_5236[(2)] = null);

(statearr_5160_5236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (21))){
var inst_5062 = (state_5140[(2)]);
var state_5140__$1 = state_5140;
var statearr_5164_5237 = state_5140__$1;
(statearr_5164_5237[(2)] = inst_5062);

(statearr_5164_5237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (31))){
var inst_5088 = (state_5140[(11)]);
var inst_5092 = done.call(null,null);
var inst_5093 = cljs.core.async.untap_STAR_.call(null,m,inst_5088);
var state_5140__$1 = (function (){var statearr_5165 = state_5140;
(statearr_5165[(19)] = inst_5092);

return statearr_5165;
})();
var statearr_5166_5238 = state_5140__$1;
(statearr_5166_5238[(2)] = inst_5093);

(statearr_5166_5238[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (32))){
var inst_5080 = (state_5140[(20)]);
var inst_5083 = (state_5140[(9)]);
var inst_5082 = (state_5140[(21)]);
var inst_5081 = (state_5140[(12)]);
var inst_5095 = (state_5140[(2)]);
var inst_5096 = (inst_5083 + (1));
var tmp5161 = inst_5080;
var tmp5162 = inst_5082;
var tmp5163 = inst_5081;
var inst_5080__$1 = tmp5161;
var inst_5081__$1 = tmp5163;
var inst_5082__$1 = tmp5162;
var inst_5083__$1 = inst_5096;
var state_5140__$1 = (function (){var statearr_5167 = state_5140;
(statearr_5167[(20)] = inst_5080__$1);

(statearr_5167[(9)] = inst_5083__$1);

(statearr_5167[(21)] = inst_5082__$1);

(statearr_5167[(22)] = inst_5095);

(statearr_5167[(12)] = inst_5081__$1);

return statearr_5167;
})();
var statearr_5168_5239 = state_5140__$1;
(statearr_5168_5239[(2)] = null);

(statearr_5168_5239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (40))){
var inst_5108 = (state_5140[(23)]);
var inst_5112 = done.call(null,null);
var inst_5113 = cljs.core.async.untap_STAR_.call(null,m,inst_5108);
var state_5140__$1 = (function (){var statearr_5169 = state_5140;
(statearr_5169[(24)] = inst_5112);

return statearr_5169;
})();
var statearr_5170_5240 = state_5140__$1;
(statearr_5170_5240[(2)] = inst_5113);

(statearr_5170_5240[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (33))){
var inst_5099 = (state_5140[(25)]);
var inst_5101 = cljs.core.chunked_seq_QMARK_.call(null,inst_5099);
var state_5140__$1 = state_5140;
if(inst_5101){
var statearr_5171_5241 = state_5140__$1;
(statearr_5171_5241[(1)] = (36));

} else {
var statearr_5172_5242 = state_5140__$1;
(statearr_5172_5242[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (13))){
var inst_5029 = (state_5140[(26)]);
var inst_5032 = cljs.core.async.close_BANG_.call(null,inst_5029);
var state_5140__$1 = state_5140;
var statearr_5173_5243 = state_5140__$1;
(statearr_5173_5243[(2)] = inst_5032);

(statearr_5173_5243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (22))){
var inst_5052 = (state_5140[(8)]);
var inst_5055 = cljs.core.async.close_BANG_.call(null,inst_5052);
var state_5140__$1 = state_5140;
var statearr_5174_5244 = state_5140__$1;
(statearr_5174_5244[(2)] = inst_5055);

(statearr_5174_5244[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (36))){
var inst_5099 = (state_5140[(25)]);
var inst_5103 = cljs.core.chunk_first.call(null,inst_5099);
var inst_5104 = cljs.core.chunk_rest.call(null,inst_5099);
var inst_5105 = cljs.core.count.call(null,inst_5103);
var inst_5080 = inst_5104;
var inst_5081 = inst_5103;
var inst_5082 = inst_5105;
var inst_5083 = (0);
var state_5140__$1 = (function (){var statearr_5175 = state_5140;
(statearr_5175[(20)] = inst_5080);

(statearr_5175[(9)] = inst_5083);

(statearr_5175[(21)] = inst_5082);

(statearr_5175[(12)] = inst_5081);

return statearr_5175;
})();
var statearr_5176_5245 = state_5140__$1;
(statearr_5176_5245[(2)] = null);

(statearr_5176_5245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (41))){
var inst_5099 = (state_5140[(25)]);
var inst_5115 = (state_5140[(2)]);
var inst_5116 = cljs.core.next.call(null,inst_5099);
var inst_5080 = inst_5116;
var inst_5081 = null;
var inst_5082 = (0);
var inst_5083 = (0);
var state_5140__$1 = (function (){var statearr_5177 = state_5140;
(statearr_5177[(20)] = inst_5080);

(statearr_5177[(9)] = inst_5083);

(statearr_5177[(21)] = inst_5082);

(statearr_5177[(27)] = inst_5115);

(statearr_5177[(12)] = inst_5081);

return statearr_5177;
})();
var statearr_5178_5246 = state_5140__$1;
(statearr_5178_5246[(2)] = null);

(statearr_5178_5246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (43))){
var state_5140__$1 = state_5140;
var statearr_5179_5247 = state_5140__$1;
(statearr_5179_5247[(2)] = null);

(statearr_5179_5247[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (29))){
var inst_5124 = (state_5140[(2)]);
var state_5140__$1 = state_5140;
var statearr_5180_5248 = state_5140__$1;
(statearr_5180_5248[(2)] = inst_5124);

(statearr_5180_5248[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (44))){
var inst_5133 = (state_5140[(2)]);
var state_5140__$1 = (function (){var statearr_5181 = state_5140;
(statearr_5181[(28)] = inst_5133);

return statearr_5181;
})();
var statearr_5182_5249 = state_5140__$1;
(statearr_5182_5249[(2)] = null);

(statearr_5182_5249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (6))){
var inst_5072 = (state_5140[(29)]);
var inst_5071 = cljs.core.deref.call(null,cs);
var inst_5072__$1 = cljs.core.keys.call(null,inst_5071);
var inst_5073 = cljs.core.count.call(null,inst_5072__$1);
var inst_5074 = cljs.core.reset_BANG_.call(null,dctr,inst_5073);
var inst_5079 = cljs.core.seq.call(null,inst_5072__$1);
var inst_5080 = inst_5079;
var inst_5081 = null;
var inst_5082 = (0);
var inst_5083 = (0);
var state_5140__$1 = (function (){var statearr_5183 = state_5140;
(statearr_5183[(30)] = inst_5074);

(statearr_5183[(20)] = inst_5080);

(statearr_5183[(9)] = inst_5083);

(statearr_5183[(21)] = inst_5082);

(statearr_5183[(29)] = inst_5072__$1);

(statearr_5183[(12)] = inst_5081);

return statearr_5183;
})();
var statearr_5184_5250 = state_5140__$1;
(statearr_5184_5250[(2)] = null);

(statearr_5184_5250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (28))){
var inst_5099 = (state_5140[(25)]);
var inst_5080 = (state_5140[(20)]);
var inst_5099__$1 = cljs.core.seq.call(null,inst_5080);
var state_5140__$1 = (function (){var statearr_5185 = state_5140;
(statearr_5185[(25)] = inst_5099__$1);

return statearr_5185;
})();
if(inst_5099__$1){
var statearr_5186_5251 = state_5140__$1;
(statearr_5186_5251[(1)] = (33));

} else {
var statearr_5187_5252 = state_5140__$1;
(statearr_5187_5252[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (25))){
var inst_5083 = (state_5140[(9)]);
var inst_5082 = (state_5140[(21)]);
var inst_5085 = (inst_5083 < inst_5082);
var inst_5086 = inst_5085;
var state_5140__$1 = state_5140;
if(cljs.core.truth_(inst_5086)){
var statearr_5188_5253 = state_5140__$1;
(statearr_5188_5253[(1)] = (27));

} else {
var statearr_5189_5254 = state_5140__$1;
(statearr_5189_5254[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (34))){
var state_5140__$1 = state_5140;
var statearr_5190_5255 = state_5140__$1;
(statearr_5190_5255[(2)] = null);

(statearr_5190_5255[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (17))){
var state_5140__$1 = state_5140;
var statearr_5191_5256 = state_5140__$1;
(statearr_5191_5256[(2)] = null);

(statearr_5191_5256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (3))){
var inst_5138 = (state_5140[(2)]);
var state_5140__$1 = state_5140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5140__$1,inst_5138);
} else {
if((state_val_5141 === (12))){
var inst_5067 = (state_5140[(2)]);
var state_5140__$1 = state_5140;
var statearr_5192_5257 = state_5140__$1;
(statearr_5192_5257[(2)] = inst_5067);

(statearr_5192_5257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (2))){
var state_5140__$1 = state_5140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5140__$1,(4),ch);
} else {
if((state_val_5141 === (23))){
var state_5140__$1 = state_5140;
var statearr_5193_5258 = state_5140__$1;
(statearr_5193_5258[(2)] = null);

(statearr_5193_5258[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (35))){
var inst_5122 = (state_5140[(2)]);
var state_5140__$1 = state_5140;
var statearr_5194_5259 = state_5140__$1;
(statearr_5194_5259[(2)] = inst_5122);

(statearr_5194_5259[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (19))){
var inst_5039 = (state_5140[(7)]);
var inst_5043 = cljs.core.chunk_first.call(null,inst_5039);
var inst_5044 = cljs.core.chunk_rest.call(null,inst_5039);
var inst_5045 = cljs.core.count.call(null,inst_5043);
var inst_5017 = inst_5044;
var inst_5018 = inst_5043;
var inst_5019 = inst_5045;
var inst_5020 = (0);
var state_5140__$1 = (function (){var statearr_5195 = state_5140;
(statearr_5195[(13)] = inst_5020);

(statearr_5195[(14)] = inst_5018);

(statearr_5195[(15)] = inst_5019);

(statearr_5195[(17)] = inst_5017);

return statearr_5195;
})();
var statearr_5196_5260 = state_5140__$1;
(statearr_5196_5260[(2)] = null);

(statearr_5196_5260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (11))){
var inst_5039 = (state_5140[(7)]);
var inst_5017 = (state_5140[(17)]);
var inst_5039__$1 = cljs.core.seq.call(null,inst_5017);
var state_5140__$1 = (function (){var statearr_5197 = state_5140;
(statearr_5197[(7)] = inst_5039__$1);

return statearr_5197;
})();
if(inst_5039__$1){
var statearr_5198_5261 = state_5140__$1;
(statearr_5198_5261[(1)] = (16));

} else {
var statearr_5199_5262 = state_5140__$1;
(statearr_5199_5262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (9))){
var inst_5069 = (state_5140[(2)]);
var state_5140__$1 = state_5140;
var statearr_5200_5263 = state_5140__$1;
(statearr_5200_5263[(2)] = inst_5069);

(statearr_5200_5263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (5))){
var inst_5015 = cljs.core.deref.call(null,cs);
var inst_5016 = cljs.core.seq.call(null,inst_5015);
var inst_5017 = inst_5016;
var inst_5018 = null;
var inst_5019 = (0);
var inst_5020 = (0);
var state_5140__$1 = (function (){var statearr_5201 = state_5140;
(statearr_5201[(13)] = inst_5020);

(statearr_5201[(14)] = inst_5018);

(statearr_5201[(15)] = inst_5019);

(statearr_5201[(17)] = inst_5017);

return statearr_5201;
})();
var statearr_5202_5264 = state_5140__$1;
(statearr_5202_5264[(2)] = null);

(statearr_5202_5264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (14))){
var state_5140__$1 = state_5140;
var statearr_5203_5265 = state_5140__$1;
(statearr_5203_5265[(2)] = null);

(statearr_5203_5265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (45))){
var inst_5130 = (state_5140[(2)]);
var state_5140__$1 = state_5140;
var statearr_5204_5266 = state_5140__$1;
(statearr_5204_5266[(2)] = inst_5130);

(statearr_5204_5266[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (26))){
var inst_5072 = (state_5140[(29)]);
var inst_5126 = (state_5140[(2)]);
var inst_5127 = cljs.core.seq.call(null,inst_5072);
var state_5140__$1 = (function (){var statearr_5205 = state_5140;
(statearr_5205[(31)] = inst_5126);

return statearr_5205;
})();
if(inst_5127){
var statearr_5206_5267 = state_5140__$1;
(statearr_5206_5267[(1)] = (42));

} else {
var statearr_5207_5268 = state_5140__$1;
(statearr_5207_5268[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (16))){
var inst_5039 = (state_5140[(7)]);
var inst_5041 = cljs.core.chunked_seq_QMARK_.call(null,inst_5039);
var state_5140__$1 = state_5140;
if(inst_5041){
var statearr_5208_5269 = state_5140__$1;
(statearr_5208_5269[(1)] = (19));

} else {
var statearr_5209_5270 = state_5140__$1;
(statearr_5209_5270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (38))){
var inst_5119 = (state_5140[(2)]);
var state_5140__$1 = state_5140;
var statearr_5210_5271 = state_5140__$1;
(statearr_5210_5271[(2)] = inst_5119);

(statearr_5210_5271[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (30))){
var state_5140__$1 = state_5140;
var statearr_5211_5272 = state_5140__$1;
(statearr_5211_5272[(2)] = null);

(statearr_5211_5272[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (10))){
var inst_5020 = (state_5140[(13)]);
var inst_5018 = (state_5140[(14)]);
var inst_5028 = cljs.core._nth.call(null,inst_5018,inst_5020);
var inst_5029 = cljs.core.nth.call(null,inst_5028,(0),null);
var inst_5030 = cljs.core.nth.call(null,inst_5028,(1),null);
var state_5140__$1 = (function (){var statearr_5212 = state_5140;
(statearr_5212[(26)] = inst_5029);

return statearr_5212;
})();
if(cljs.core.truth_(inst_5030)){
var statearr_5213_5273 = state_5140__$1;
(statearr_5213_5273[(1)] = (13));

} else {
var statearr_5214_5274 = state_5140__$1;
(statearr_5214_5274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (18))){
var inst_5065 = (state_5140[(2)]);
var state_5140__$1 = state_5140;
var statearr_5215_5275 = state_5140__$1;
(statearr_5215_5275[(2)] = inst_5065);

(statearr_5215_5275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (42))){
var state_5140__$1 = state_5140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5140__$1,(45),dchan);
} else {
if((state_val_5141 === (37))){
var inst_5099 = (state_5140[(25)]);
var inst_5108 = (state_5140[(23)]);
var inst_5008 = (state_5140[(10)]);
var inst_5108__$1 = cljs.core.first.call(null,inst_5099);
var inst_5109 = cljs.core.async.put_BANG_.call(null,inst_5108__$1,inst_5008,done);
var state_5140__$1 = (function (){var statearr_5216 = state_5140;
(statearr_5216[(23)] = inst_5108__$1);

return statearr_5216;
})();
if(cljs.core.truth_(inst_5109)){
var statearr_5217_5276 = state_5140__$1;
(statearr_5217_5276[(1)] = (39));

} else {
var statearr_5218_5277 = state_5140__$1;
(statearr_5218_5277[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5141 === (8))){
var inst_5020 = (state_5140[(13)]);
var inst_5019 = (state_5140[(15)]);
var inst_5022 = (inst_5020 < inst_5019);
var inst_5023 = inst_5022;
var state_5140__$1 = state_5140;
if(cljs.core.truth_(inst_5023)){
var statearr_5219_5278 = state_5140__$1;
(statearr_5219_5278[(1)] = (10));

} else {
var statearr_5220_5279 = state_5140__$1;
(statearr_5220_5279[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___5225,cs,m,dchan,dctr,done))
;
return ((function (switch__2199__auto__,c__2216__auto___5225,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__2200__auto__ = null;
var cljs$core$async$mult_$_state_machine__2200__auto____0 = (function (){
var statearr_5221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5221[(0)] = cljs$core$async$mult_$_state_machine__2200__auto__);

(statearr_5221[(1)] = (1));

return statearr_5221;
});
var cljs$core$async$mult_$_state_machine__2200__auto____1 = (function (state_5140){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_5140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e5222){if((e5222 instanceof Object)){
var ex__2203__auto__ = e5222;
var statearr_5223_5280 = state_5140;
(statearr_5223_5280[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5281 = state_5140;
state_5140 = G__5281;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2200__auto__ = function(state_5140){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2200__auto____1.call(this,state_5140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2200__auto____0;
cljs$core$async$mult_$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2200__auto____1;
return cljs$core$async$mult_$_state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___5225,cs,m,dchan,dctr,done))
})();
var state__2218__auto__ = (function (){var statearr_5224 = f__2217__auto__.call(null);
(statearr_5224[(6)] = c__2216__auto___5225);

return statearr_5224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___5225,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__5283 = arguments.length;
switch (G__5283) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5295 = arguments.length;
var i__4642__auto___5296 = (0);
while(true){
if((i__4642__auto___5296 < len__4641__auto___5295)){
args__4647__auto__.push((arguments[i__4642__auto___5296]));

var G__5297 = (i__4642__auto___5296 + (1));
i__4642__auto___5296 = G__5297;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__5289){
var map__5290 = p__5289;
var map__5290__$1 = (((((!((map__5290 == null))))?(((((map__5290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5290):map__5290);
var opts = map__5290__$1;
var statearr_5292_5298 = state;
(statearr_5292_5298[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__5290,map__5290__$1,opts){
return (function (val){
var statearr_5293_5299 = state;
(statearr_5293_5299[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__5290,map__5290__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_5294_5300 = state;
(statearr_5294_5300[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq5285){
var G__5286 = cljs.core.first.call(null,seq5285);
var seq5285__$1 = cljs.core.next.call(null,seq5285);
var G__5287 = cljs.core.first.call(null,seq5285__$1);
var seq5285__$2 = cljs.core.next.call(null,seq5285__$1);
var G__5288 = cljs.core.first.call(null,seq5285__$2);
var seq5285__$3 = cljs.core.next.call(null,seq5285__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5286,G__5287,G__5288,seq5285__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5301 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta5302){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta5302 = meta5302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5303,meta5302__$1){
var self__ = this;
var _5303__$1 = this;
return (new cljs.core.async.t_cljs$core$async5301(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta5302__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5303){
var self__ = this;
var _5303__$1 = this;
return self__.meta5302;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5301.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5301.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5301.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5301.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5301.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5301.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5301.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5301.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta5302","meta5302",538552696,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5301";

cljs.core.async.t_cljs$core$async5301.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async5301");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5301.
 */
cljs.core.async.__GT_t_cljs$core$async5301 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async5301(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta5302){
return (new cljs.core.async.t_cljs$core$async5301(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta5302));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async5301(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2216__auto___5465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___5465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___5465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_5405){
var state_val_5406 = (state_5405[(1)]);
if((state_val_5406 === (7))){
var inst_5320 = (state_5405[(2)]);
var state_5405__$1 = state_5405;
var statearr_5407_5466 = state_5405__$1;
(statearr_5407_5466[(2)] = inst_5320);

(statearr_5407_5466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (20))){
var inst_5332 = (state_5405[(7)]);
var state_5405__$1 = state_5405;
var statearr_5408_5467 = state_5405__$1;
(statearr_5408_5467[(2)] = inst_5332);

(statearr_5408_5467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (27))){
var state_5405__$1 = state_5405;
var statearr_5409_5468 = state_5405__$1;
(statearr_5409_5468[(2)] = null);

(statearr_5409_5468[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (1))){
var inst_5307 = (state_5405[(8)]);
var inst_5307__$1 = calc_state.call(null);
var inst_5309 = (inst_5307__$1 == null);
var inst_5310 = cljs.core.not.call(null,inst_5309);
var state_5405__$1 = (function (){var statearr_5410 = state_5405;
(statearr_5410[(8)] = inst_5307__$1);

return statearr_5410;
})();
if(inst_5310){
var statearr_5411_5469 = state_5405__$1;
(statearr_5411_5469[(1)] = (2));

} else {
var statearr_5412_5470 = state_5405__$1;
(statearr_5412_5470[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (24))){
var inst_5356 = (state_5405[(9)]);
var inst_5365 = (state_5405[(10)]);
var inst_5379 = (state_5405[(11)]);
var inst_5379__$1 = inst_5356.call(null,inst_5365);
var state_5405__$1 = (function (){var statearr_5413 = state_5405;
(statearr_5413[(11)] = inst_5379__$1);

return statearr_5413;
})();
if(cljs.core.truth_(inst_5379__$1)){
var statearr_5414_5471 = state_5405__$1;
(statearr_5414_5471[(1)] = (29));

} else {
var statearr_5415_5472 = state_5405__$1;
(statearr_5415_5472[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (4))){
var inst_5323 = (state_5405[(2)]);
var state_5405__$1 = state_5405;
if(cljs.core.truth_(inst_5323)){
var statearr_5416_5473 = state_5405__$1;
(statearr_5416_5473[(1)] = (8));

} else {
var statearr_5417_5474 = state_5405__$1;
(statearr_5417_5474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (15))){
var inst_5350 = (state_5405[(2)]);
var state_5405__$1 = state_5405;
if(cljs.core.truth_(inst_5350)){
var statearr_5418_5475 = state_5405__$1;
(statearr_5418_5475[(1)] = (19));

} else {
var statearr_5419_5476 = state_5405__$1;
(statearr_5419_5476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (21))){
var inst_5355 = (state_5405[(12)]);
var inst_5355__$1 = (state_5405[(2)]);
var inst_5356 = cljs.core.get.call(null,inst_5355__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5357 = cljs.core.get.call(null,inst_5355__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5358 = cljs.core.get.call(null,inst_5355__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_5405__$1 = (function (){var statearr_5420 = state_5405;
(statearr_5420[(9)] = inst_5356);

(statearr_5420[(13)] = inst_5357);

(statearr_5420[(12)] = inst_5355__$1);

return statearr_5420;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_5405__$1,(22),inst_5358);
} else {
if((state_val_5406 === (31))){
var inst_5387 = (state_5405[(2)]);
var state_5405__$1 = state_5405;
if(cljs.core.truth_(inst_5387)){
var statearr_5421_5477 = state_5405__$1;
(statearr_5421_5477[(1)] = (32));

} else {
var statearr_5422_5478 = state_5405__$1;
(statearr_5422_5478[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (32))){
var inst_5364 = (state_5405[(14)]);
var state_5405__$1 = state_5405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5405__$1,(35),out,inst_5364);
} else {
if((state_val_5406 === (33))){
var inst_5355 = (state_5405[(12)]);
var inst_5332 = inst_5355;
var state_5405__$1 = (function (){var statearr_5423 = state_5405;
(statearr_5423[(7)] = inst_5332);

return statearr_5423;
})();
var statearr_5424_5479 = state_5405__$1;
(statearr_5424_5479[(2)] = null);

(statearr_5424_5479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (13))){
var inst_5332 = (state_5405[(7)]);
var inst_5339 = inst_5332.cljs$lang$protocol_mask$partition0$;
var inst_5340 = (inst_5339 & (64));
var inst_5341 = inst_5332.cljs$core$ISeq$;
var inst_5342 = (cljs.core.PROTOCOL_SENTINEL === inst_5341);
var inst_5343 = ((inst_5340) || (inst_5342));
var state_5405__$1 = state_5405;
if(cljs.core.truth_(inst_5343)){
var statearr_5425_5480 = state_5405__$1;
(statearr_5425_5480[(1)] = (16));

} else {
var statearr_5426_5481 = state_5405__$1;
(statearr_5426_5481[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (22))){
var inst_5365 = (state_5405[(10)]);
var inst_5364 = (state_5405[(14)]);
var inst_5363 = (state_5405[(2)]);
var inst_5364__$1 = cljs.core.nth.call(null,inst_5363,(0),null);
var inst_5365__$1 = cljs.core.nth.call(null,inst_5363,(1),null);
var inst_5366 = (inst_5364__$1 == null);
var inst_5367 = cljs.core._EQ_.call(null,inst_5365__$1,change);
var inst_5368 = ((inst_5366) || (inst_5367));
var state_5405__$1 = (function (){var statearr_5427 = state_5405;
(statearr_5427[(10)] = inst_5365__$1);

(statearr_5427[(14)] = inst_5364__$1);

return statearr_5427;
})();
if(cljs.core.truth_(inst_5368)){
var statearr_5428_5482 = state_5405__$1;
(statearr_5428_5482[(1)] = (23));

} else {
var statearr_5429_5483 = state_5405__$1;
(statearr_5429_5483[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (36))){
var inst_5355 = (state_5405[(12)]);
var inst_5332 = inst_5355;
var state_5405__$1 = (function (){var statearr_5430 = state_5405;
(statearr_5430[(7)] = inst_5332);

return statearr_5430;
})();
var statearr_5431_5484 = state_5405__$1;
(statearr_5431_5484[(2)] = null);

(statearr_5431_5484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (29))){
var inst_5379 = (state_5405[(11)]);
var state_5405__$1 = state_5405;
var statearr_5432_5485 = state_5405__$1;
(statearr_5432_5485[(2)] = inst_5379);

(statearr_5432_5485[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (6))){
var state_5405__$1 = state_5405;
var statearr_5433_5486 = state_5405__$1;
(statearr_5433_5486[(2)] = false);

(statearr_5433_5486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (28))){
var inst_5375 = (state_5405[(2)]);
var inst_5376 = calc_state.call(null);
var inst_5332 = inst_5376;
var state_5405__$1 = (function (){var statearr_5434 = state_5405;
(statearr_5434[(7)] = inst_5332);

(statearr_5434[(15)] = inst_5375);

return statearr_5434;
})();
var statearr_5435_5487 = state_5405__$1;
(statearr_5435_5487[(2)] = null);

(statearr_5435_5487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (25))){
var inst_5401 = (state_5405[(2)]);
var state_5405__$1 = state_5405;
var statearr_5436_5488 = state_5405__$1;
(statearr_5436_5488[(2)] = inst_5401);

(statearr_5436_5488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (34))){
var inst_5399 = (state_5405[(2)]);
var state_5405__$1 = state_5405;
var statearr_5437_5489 = state_5405__$1;
(statearr_5437_5489[(2)] = inst_5399);

(statearr_5437_5489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (17))){
var state_5405__$1 = state_5405;
var statearr_5438_5490 = state_5405__$1;
(statearr_5438_5490[(2)] = false);

(statearr_5438_5490[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (3))){
var state_5405__$1 = state_5405;
var statearr_5439_5491 = state_5405__$1;
(statearr_5439_5491[(2)] = false);

(statearr_5439_5491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (12))){
var inst_5403 = (state_5405[(2)]);
var state_5405__$1 = state_5405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5405__$1,inst_5403);
} else {
if((state_val_5406 === (2))){
var inst_5307 = (state_5405[(8)]);
var inst_5312 = inst_5307.cljs$lang$protocol_mask$partition0$;
var inst_5313 = (inst_5312 & (64));
var inst_5314 = inst_5307.cljs$core$ISeq$;
var inst_5315 = (cljs.core.PROTOCOL_SENTINEL === inst_5314);
var inst_5316 = ((inst_5313) || (inst_5315));
var state_5405__$1 = state_5405;
if(cljs.core.truth_(inst_5316)){
var statearr_5440_5492 = state_5405__$1;
(statearr_5440_5492[(1)] = (5));

} else {
var statearr_5441_5493 = state_5405__$1;
(statearr_5441_5493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (23))){
var inst_5364 = (state_5405[(14)]);
var inst_5370 = (inst_5364 == null);
var state_5405__$1 = state_5405;
if(cljs.core.truth_(inst_5370)){
var statearr_5442_5494 = state_5405__$1;
(statearr_5442_5494[(1)] = (26));

} else {
var statearr_5443_5495 = state_5405__$1;
(statearr_5443_5495[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (35))){
var inst_5390 = (state_5405[(2)]);
var state_5405__$1 = state_5405;
if(cljs.core.truth_(inst_5390)){
var statearr_5444_5496 = state_5405__$1;
(statearr_5444_5496[(1)] = (36));

} else {
var statearr_5445_5497 = state_5405__$1;
(statearr_5445_5497[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (19))){
var inst_5332 = (state_5405[(7)]);
var inst_5352 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5332);
var state_5405__$1 = state_5405;
var statearr_5446_5498 = state_5405__$1;
(statearr_5446_5498[(2)] = inst_5352);

(statearr_5446_5498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (11))){
var inst_5332 = (state_5405[(7)]);
var inst_5336 = (inst_5332 == null);
var inst_5337 = cljs.core.not.call(null,inst_5336);
var state_5405__$1 = state_5405;
if(inst_5337){
var statearr_5447_5499 = state_5405__$1;
(statearr_5447_5499[(1)] = (13));

} else {
var statearr_5448_5500 = state_5405__$1;
(statearr_5448_5500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (9))){
var inst_5307 = (state_5405[(8)]);
var state_5405__$1 = state_5405;
var statearr_5449_5501 = state_5405__$1;
(statearr_5449_5501[(2)] = inst_5307);

(statearr_5449_5501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (5))){
var state_5405__$1 = state_5405;
var statearr_5450_5502 = state_5405__$1;
(statearr_5450_5502[(2)] = true);

(statearr_5450_5502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (14))){
var state_5405__$1 = state_5405;
var statearr_5451_5503 = state_5405__$1;
(statearr_5451_5503[(2)] = false);

(statearr_5451_5503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (26))){
var inst_5365 = (state_5405[(10)]);
var inst_5372 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_5365);
var state_5405__$1 = state_5405;
var statearr_5452_5504 = state_5405__$1;
(statearr_5452_5504[(2)] = inst_5372);

(statearr_5452_5504[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (16))){
var state_5405__$1 = state_5405;
var statearr_5453_5505 = state_5405__$1;
(statearr_5453_5505[(2)] = true);

(statearr_5453_5505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (38))){
var inst_5395 = (state_5405[(2)]);
var state_5405__$1 = state_5405;
var statearr_5454_5506 = state_5405__$1;
(statearr_5454_5506[(2)] = inst_5395);

(statearr_5454_5506[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (30))){
var inst_5356 = (state_5405[(9)]);
var inst_5365 = (state_5405[(10)]);
var inst_5357 = (state_5405[(13)]);
var inst_5382 = cljs.core.empty_QMARK_.call(null,inst_5356);
var inst_5383 = inst_5357.call(null,inst_5365);
var inst_5384 = cljs.core.not.call(null,inst_5383);
var inst_5385 = ((inst_5382) && (inst_5384));
var state_5405__$1 = state_5405;
var statearr_5455_5507 = state_5405__$1;
(statearr_5455_5507[(2)] = inst_5385);

(statearr_5455_5507[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (10))){
var inst_5307 = (state_5405[(8)]);
var inst_5328 = (state_5405[(2)]);
var inst_5329 = cljs.core.get.call(null,inst_5328,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5330 = cljs.core.get.call(null,inst_5328,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5331 = cljs.core.get.call(null,inst_5328,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5332 = inst_5307;
var state_5405__$1 = (function (){var statearr_5456 = state_5405;
(statearr_5456[(16)] = inst_5329);

(statearr_5456[(7)] = inst_5332);

(statearr_5456[(17)] = inst_5330);

(statearr_5456[(18)] = inst_5331);

return statearr_5456;
})();
var statearr_5457_5508 = state_5405__$1;
(statearr_5457_5508[(2)] = null);

(statearr_5457_5508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (18))){
var inst_5347 = (state_5405[(2)]);
var state_5405__$1 = state_5405;
var statearr_5458_5509 = state_5405__$1;
(statearr_5458_5509[(2)] = inst_5347);

(statearr_5458_5509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (37))){
var state_5405__$1 = state_5405;
var statearr_5459_5510 = state_5405__$1;
(statearr_5459_5510[(2)] = null);

(statearr_5459_5510[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5406 === (8))){
var inst_5307 = (state_5405[(8)]);
var inst_5325 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5307);
var state_5405__$1 = state_5405;
var statearr_5460_5511 = state_5405__$1;
(statearr_5460_5511[(2)] = inst_5325);

(statearr_5460_5511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___5465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__2199__auto__,c__2216__auto___5465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__2200__auto__ = null;
var cljs$core$async$mix_$_state_machine__2200__auto____0 = (function (){
var statearr_5461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5461[(0)] = cljs$core$async$mix_$_state_machine__2200__auto__);

(statearr_5461[(1)] = (1));

return statearr_5461;
});
var cljs$core$async$mix_$_state_machine__2200__auto____1 = (function (state_5405){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_5405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e5462){if((e5462 instanceof Object)){
var ex__2203__auto__ = e5462;
var statearr_5463_5512 = state_5405;
(statearr_5463_5512[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5513 = state_5405;
state_5405 = G__5513;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2200__auto__ = function(state_5405){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2200__auto____1.call(this,state_5405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2200__auto____0;
cljs$core$async$mix_$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2200__auto____1;
return cljs$core$async$mix_$_state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___5465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__2218__auto__ = (function (){var statearr_5464 = f__2217__auto__.call(null);
(statearr_5464[(6)] = c__2216__auto___5465);

return statearr_5464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___5465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__5515 = arguments.length;
switch (G__5515) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__5519 = arguments.length;
switch (G__5519) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__5517_SHARP_){
if(cljs.core.truth_(p1__5517_SHARP_.call(null,topic))){
return p1__5517_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5517_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5520 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta5521){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta5521 = meta5521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_5522,meta5521__$1){
var self__ = this;
var _5522__$1 = this;
return (new cljs.core.async.t_cljs$core$async5520(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta5521__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_5522){
var self__ = this;
var _5522__$1 = this;
return self__.meta5521;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5520.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5520.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5520.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5520.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5520.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5520.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5520.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5520.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta5521","meta5521",579962848,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5520";

cljs.core.async.t_cljs$core$async5520.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async5520");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5520.
 */
cljs.core.async.__GT_t_cljs$core$async5520 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async5520(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5521){
return (new cljs.core.async.t_cljs$core$async5520(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5521));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async5520(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2216__auto___5640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___5640,mults,ensure_mult,p){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___5640,mults,ensure_mult,p){
return (function (state_5594){
var state_val_5595 = (state_5594[(1)]);
if((state_val_5595 === (7))){
var inst_5590 = (state_5594[(2)]);
var state_5594__$1 = state_5594;
var statearr_5596_5641 = state_5594__$1;
(statearr_5596_5641[(2)] = inst_5590);

(statearr_5596_5641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (20))){
var state_5594__$1 = state_5594;
var statearr_5597_5642 = state_5594__$1;
(statearr_5597_5642[(2)] = null);

(statearr_5597_5642[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (1))){
var state_5594__$1 = state_5594;
var statearr_5598_5643 = state_5594__$1;
(statearr_5598_5643[(2)] = null);

(statearr_5598_5643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (24))){
var inst_5573 = (state_5594[(7)]);
var inst_5582 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5573);
var state_5594__$1 = state_5594;
var statearr_5599_5644 = state_5594__$1;
(statearr_5599_5644[(2)] = inst_5582);

(statearr_5599_5644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (4))){
var inst_5525 = (state_5594[(8)]);
var inst_5525__$1 = (state_5594[(2)]);
var inst_5526 = (inst_5525__$1 == null);
var state_5594__$1 = (function (){var statearr_5600 = state_5594;
(statearr_5600[(8)] = inst_5525__$1);

return statearr_5600;
})();
if(cljs.core.truth_(inst_5526)){
var statearr_5601_5645 = state_5594__$1;
(statearr_5601_5645[(1)] = (5));

} else {
var statearr_5602_5646 = state_5594__$1;
(statearr_5602_5646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (15))){
var inst_5567 = (state_5594[(2)]);
var state_5594__$1 = state_5594;
var statearr_5603_5647 = state_5594__$1;
(statearr_5603_5647[(2)] = inst_5567);

(statearr_5603_5647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (21))){
var inst_5587 = (state_5594[(2)]);
var state_5594__$1 = (function (){var statearr_5604 = state_5594;
(statearr_5604[(9)] = inst_5587);

return statearr_5604;
})();
var statearr_5605_5648 = state_5594__$1;
(statearr_5605_5648[(2)] = null);

(statearr_5605_5648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (13))){
var inst_5549 = (state_5594[(10)]);
var inst_5551 = cljs.core.chunked_seq_QMARK_.call(null,inst_5549);
var state_5594__$1 = state_5594;
if(inst_5551){
var statearr_5606_5649 = state_5594__$1;
(statearr_5606_5649[(1)] = (16));

} else {
var statearr_5607_5650 = state_5594__$1;
(statearr_5607_5650[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (22))){
var inst_5579 = (state_5594[(2)]);
var state_5594__$1 = state_5594;
if(cljs.core.truth_(inst_5579)){
var statearr_5608_5651 = state_5594__$1;
(statearr_5608_5651[(1)] = (23));

} else {
var statearr_5609_5652 = state_5594__$1;
(statearr_5609_5652[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (6))){
var inst_5575 = (state_5594[(11)]);
var inst_5573 = (state_5594[(7)]);
var inst_5525 = (state_5594[(8)]);
var inst_5573__$1 = topic_fn.call(null,inst_5525);
var inst_5574 = cljs.core.deref.call(null,mults);
var inst_5575__$1 = cljs.core.get.call(null,inst_5574,inst_5573__$1);
var state_5594__$1 = (function (){var statearr_5610 = state_5594;
(statearr_5610[(11)] = inst_5575__$1);

(statearr_5610[(7)] = inst_5573__$1);

return statearr_5610;
})();
if(cljs.core.truth_(inst_5575__$1)){
var statearr_5611_5653 = state_5594__$1;
(statearr_5611_5653[(1)] = (19));

} else {
var statearr_5612_5654 = state_5594__$1;
(statearr_5612_5654[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (25))){
var inst_5584 = (state_5594[(2)]);
var state_5594__$1 = state_5594;
var statearr_5613_5655 = state_5594__$1;
(statearr_5613_5655[(2)] = inst_5584);

(statearr_5613_5655[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (17))){
var inst_5549 = (state_5594[(10)]);
var inst_5558 = cljs.core.first.call(null,inst_5549);
var inst_5559 = cljs.core.async.muxch_STAR_.call(null,inst_5558);
var inst_5560 = cljs.core.async.close_BANG_.call(null,inst_5559);
var inst_5561 = cljs.core.next.call(null,inst_5549);
var inst_5535 = inst_5561;
var inst_5536 = null;
var inst_5537 = (0);
var inst_5538 = (0);
var state_5594__$1 = (function (){var statearr_5614 = state_5594;
(statearr_5614[(12)] = inst_5536);

(statearr_5614[(13)] = inst_5537);

(statearr_5614[(14)] = inst_5560);

(statearr_5614[(15)] = inst_5535);

(statearr_5614[(16)] = inst_5538);

return statearr_5614;
})();
var statearr_5615_5656 = state_5594__$1;
(statearr_5615_5656[(2)] = null);

(statearr_5615_5656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (3))){
var inst_5592 = (state_5594[(2)]);
var state_5594__$1 = state_5594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5594__$1,inst_5592);
} else {
if((state_val_5595 === (12))){
var inst_5569 = (state_5594[(2)]);
var state_5594__$1 = state_5594;
var statearr_5616_5657 = state_5594__$1;
(statearr_5616_5657[(2)] = inst_5569);

(statearr_5616_5657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (2))){
var state_5594__$1 = state_5594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5594__$1,(4),ch);
} else {
if((state_val_5595 === (23))){
var state_5594__$1 = state_5594;
var statearr_5617_5658 = state_5594__$1;
(statearr_5617_5658[(2)] = null);

(statearr_5617_5658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (19))){
var inst_5575 = (state_5594[(11)]);
var inst_5525 = (state_5594[(8)]);
var inst_5577 = cljs.core.async.muxch_STAR_.call(null,inst_5575);
var state_5594__$1 = state_5594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5594__$1,(22),inst_5577,inst_5525);
} else {
if((state_val_5595 === (11))){
var inst_5549 = (state_5594[(10)]);
var inst_5535 = (state_5594[(15)]);
var inst_5549__$1 = cljs.core.seq.call(null,inst_5535);
var state_5594__$1 = (function (){var statearr_5618 = state_5594;
(statearr_5618[(10)] = inst_5549__$1);

return statearr_5618;
})();
if(inst_5549__$1){
var statearr_5619_5659 = state_5594__$1;
(statearr_5619_5659[(1)] = (13));

} else {
var statearr_5620_5660 = state_5594__$1;
(statearr_5620_5660[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (9))){
var inst_5571 = (state_5594[(2)]);
var state_5594__$1 = state_5594;
var statearr_5621_5661 = state_5594__$1;
(statearr_5621_5661[(2)] = inst_5571);

(statearr_5621_5661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (5))){
var inst_5532 = cljs.core.deref.call(null,mults);
var inst_5533 = cljs.core.vals.call(null,inst_5532);
var inst_5534 = cljs.core.seq.call(null,inst_5533);
var inst_5535 = inst_5534;
var inst_5536 = null;
var inst_5537 = (0);
var inst_5538 = (0);
var state_5594__$1 = (function (){var statearr_5622 = state_5594;
(statearr_5622[(12)] = inst_5536);

(statearr_5622[(13)] = inst_5537);

(statearr_5622[(15)] = inst_5535);

(statearr_5622[(16)] = inst_5538);

return statearr_5622;
})();
var statearr_5623_5662 = state_5594__$1;
(statearr_5623_5662[(2)] = null);

(statearr_5623_5662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (14))){
var state_5594__$1 = state_5594;
var statearr_5627_5663 = state_5594__$1;
(statearr_5627_5663[(2)] = null);

(statearr_5627_5663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (16))){
var inst_5549 = (state_5594[(10)]);
var inst_5553 = cljs.core.chunk_first.call(null,inst_5549);
var inst_5554 = cljs.core.chunk_rest.call(null,inst_5549);
var inst_5555 = cljs.core.count.call(null,inst_5553);
var inst_5535 = inst_5554;
var inst_5536 = inst_5553;
var inst_5537 = inst_5555;
var inst_5538 = (0);
var state_5594__$1 = (function (){var statearr_5628 = state_5594;
(statearr_5628[(12)] = inst_5536);

(statearr_5628[(13)] = inst_5537);

(statearr_5628[(15)] = inst_5535);

(statearr_5628[(16)] = inst_5538);

return statearr_5628;
})();
var statearr_5629_5664 = state_5594__$1;
(statearr_5629_5664[(2)] = null);

(statearr_5629_5664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (10))){
var inst_5536 = (state_5594[(12)]);
var inst_5537 = (state_5594[(13)]);
var inst_5535 = (state_5594[(15)]);
var inst_5538 = (state_5594[(16)]);
var inst_5543 = cljs.core._nth.call(null,inst_5536,inst_5538);
var inst_5544 = cljs.core.async.muxch_STAR_.call(null,inst_5543);
var inst_5545 = cljs.core.async.close_BANG_.call(null,inst_5544);
var inst_5546 = (inst_5538 + (1));
var tmp5624 = inst_5536;
var tmp5625 = inst_5537;
var tmp5626 = inst_5535;
var inst_5535__$1 = tmp5626;
var inst_5536__$1 = tmp5624;
var inst_5537__$1 = tmp5625;
var inst_5538__$1 = inst_5546;
var state_5594__$1 = (function (){var statearr_5630 = state_5594;
(statearr_5630[(12)] = inst_5536__$1);

(statearr_5630[(13)] = inst_5537__$1);

(statearr_5630[(15)] = inst_5535__$1);

(statearr_5630[(16)] = inst_5538__$1);

(statearr_5630[(17)] = inst_5545);

return statearr_5630;
})();
var statearr_5631_5665 = state_5594__$1;
(statearr_5631_5665[(2)] = null);

(statearr_5631_5665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (18))){
var inst_5564 = (state_5594[(2)]);
var state_5594__$1 = state_5594;
var statearr_5632_5666 = state_5594__$1;
(statearr_5632_5666[(2)] = inst_5564);

(statearr_5632_5666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (8))){
var inst_5537 = (state_5594[(13)]);
var inst_5538 = (state_5594[(16)]);
var inst_5540 = (inst_5538 < inst_5537);
var inst_5541 = inst_5540;
var state_5594__$1 = state_5594;
if(cljs.core.truth_(inst_5541)){
var statearr_5633_5667 = state_5594__$1;
(statearr_5633_5667[(1)] = (10));

} else {
var statearr_5634_5668 = state_5594__$1;
(statearr_5634_5668[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___5640,mults,ensure_mult,p))
;
return ((function (switch__2199__auto__,c__2216__auto___5640,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__2200__auto__ = null;
var cljs$core$async$state_machine__2200__auto____0 = (function (){
var statearr_5635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5635[(0)] = cljs$core$async$state_machine__2200__auto__);

(statearr_5635[(1)] = (1));

return statearr_5635;
});
var cljs$core$async$state_machine__2200__auto____1 = (function (state_5594){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_5594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e5636){if((e5636 instanceof Object)){
var ex__2203__auto__ = e5636;
var statearr_5637_5669 = state_5594;
(statearr_5637_5669[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5670 = state_5594;
state_5594 = G__5670;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$state_machine__2200__auto__ = function(state_5594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2200__auto____1.call(this,state_5594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2200__auto____0;
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2200__auto____1;
return cljs$core$async$state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___5640,mults,ensure_mult,p))
})();
var state__2218__auto__ = (function (){var statearr_5638 = f__2217__auto__.call(null);
(statearr_5638[(6)] = c__2216__auto___5640);

return statearr_5638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___5640,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__5672 = arguments.length;
switch (G__5672) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__5675 = arguments.length;
switch (G__5675) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__5678 = arguments.length;
switch (G__5678) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__2216__auto___5745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___5745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___5745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5717){
var state_val_5718 = (state_5717[(1)]);
if((state_val_5718 === (7))){
var state_5717__$1 = state_5717;
var statearr_5719_5746 = state_5717__$1;
(statearr_5719_5746[(2)] = null);

(statearr_5719_5746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5718 === (1))){
var state_5717__$1 = state_5717;
var statearr_5720_5747 = state_5717__$1;
(statearr_5720_5747[(2)] = null);

(statearr_5720_5747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5718 === (4))){
var inst_5681 = (state_5717[(7)]);
var inst_5683 = (inst_5681 < cnt);
var state_5717__$1 = state_5717;
if(cljs.core.truth_(inst_5683)){
var statearr_5721_5748 = state_5717__$1;
(statearr_5721_5748[(1)] = (6));

} else {
var statearr_5722_5749 = state_5717__$1;
(statearr_5722_5749[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5718 === (15))){
var inst_5713 = (state_5717[(2)]);
var state_5717__$1 = state_5717;
var statearr_5723_5750 = state_5717__$1;
(statearr_5723_5750[(2)] = inst_5713);

(statearr_5723_5750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5718 === (13))){
var inst_5706 = cljs.core.async.close_BANG_.call(null,out);
var state_5717__$1 = state_5717;
var statearr_5724_5751 = state_5717__$1;
(statearr_5724_5751[(2)] = inst_5706);

(statearr_5724_5751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5718 === (6))){
var state_5717__$1 = state_5717;
var statearr_5725_5752 = state_5717__$1;
(statearr_5725_5752[(2)] = null);

(statearr_5725_5752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5718 === (3))){
var inst_5715 = (state_5717[(2)]);
var state_5717__$1 = state_5717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5717__$1,inst_5715);
} else {
if((state_val_5718 === (12))){
var inst_5703 = (state_5717[(8)]);
var inst_5703__$1 = (state_5717[(2)]);
var inst_5704 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5703__$1);
var state_5717__$1 = (function (){var statearr_5726 = state_5717;
(statearr_5726[(8)] = inst_5703__$1);

return statearr_5726;
})();
if(cljs.core.truth_(inst_5704)){
var statearr_5727_5753 = state_5717__$1;
(statearr_5727_5753[(1)] = (13));

} else {
var statearr_5728_5754 = state_5717__$1;
(statearr_5728_5754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5718 === (2))){
var inst_5680 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_5681 = (0);
var state_5717__$1 = (function (){var statearr_5729 = state_5717;
(statearr_5729[(7)] = inst_5681);

(statearr_5729[(9)] = inst_5680);

return statearr_5729;
})();
var statearr_5730_5755 = state_5717__$1;
(statearr_5730_5755[(2)] = null);

(statearr_5730_5755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5718 === (11))){
var inst_5681 = (state_5717[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5717,(10),Object,null,(9));
var inst_5690 = chs__$1.call(null,inst_5681);
var inst_5691 = done.call(null,inst_5681);
var inst_5692 = cljs.core.async.take_BANG_.call(null,inst_5690,inst_5691);
var state_5717__$1 = state_5717;
var statearr_5731_5756 = state_5717__$1;
(statearr_5731_5756[(2)] = inst_5692);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5717__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5718 === (9))){
var inst_5681 = (state_5717[(7)]);
var inst_5694 = (state_5717[(2)]);
var inst_5695 = (inst_5681 + (1));
var inst_5681__$1 = inst_5695;
var state_5717__$1 = (function (){var statearr_5732 = state_5717;
(statearr_5732[(10)] = inst_5694);

(statearr_5732[(7)] = inst_5681__$1);

return statearr_5732;
})();
var statearr_5733_5757 = state_5717__$1;
(statearr_5733_5757[(2)] = null);

(statearr_5733_5757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5718 === (5))){
var inst_5701 = (state_5717[(2)]);
var state_5717__$1 = (function (){var statearr_5734 = state_5717;
(statearr_5734[(11)] = inst_5701);

return statearr_5734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5717__$1,(12),dchan);
} else {
if((state_val_5718 === (14))){
var inst_5703 = (state_5717[(8)]);
var inst_5708 = cljs.core.apply.call(null,f,inst_5703);
var state_5717__$1 = state_5717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5717__$1,(16),out,inst_5708);
} else {
if((state_val_5718 === (16))){
var inst_5710 = (state_5717[(2)]);
var state_5717__$1 = (function (){var statearr_5735 = state_5717;
(statearr_5735[(12)] = inst_5710);

return statearr_5735;
})();
var statearr_5736_5758 = state_5717__$1;
(statearr_5736_5758[(2)] = null);

(statearr_5736_5758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5718 === (10))){
var inst_5685 = (state_5717[(2)]);
var inst_5686 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5717__$1 = (function (){var statearr_5737 = state_5717;
(statearr_5737[(13)] = inst_5685);

return statearr_5737;
})();
var statearr_5738_5759 = state_5717__$1;
(statearr_5738_5759[(2)] = inst_5686);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5717__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5718 === (8))){
var inst_5699 = (state_5717[(2)]);
var state_5717__$1 = state_5717;
var statearr_5739_5760 = state_5717__$1;
(statearr_5739_5760[(2)] = inst_5699);

(statearr_5739_5760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___5745,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__2199__auto__,c__2216__auto___5745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__2200__auto__ = null;
var cljs$core$async$state_machine__2200__auto____0 = (function (){
var statearr_5740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5740[(0)] = cljs$core$async$state_machine__2200__auto__);

(statearr_5740[(1)] = (1));

return statearr_5740;
});
var cljs$core$async$state_machine__2200__auto____1 = (function (state_5717){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_5717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e5741){if((e5741 instanceof Object)){
var ex__2203__auto__ = e5741;
var statearr_5742_5761 = state_5717;
(statearr_5742_5761[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5762 = state_5717;
state_5717 = G__5762;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$state_machine__2200__auto__ = function(state_5717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2200__auto____1.call(this,state_5717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2200__auto____0;
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2200__auto____1;
return cljs$core$async$state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___5745,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__2218__auto__ = (function (){var statearr_5743 = f__2217__auto__.call(null);
(statearr_5743[(6)] = c__2216__auto___5745);

return statearr_5743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___5745,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__5765 = arguments.length;
switch (G__5765) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2216__auto___5819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___5819,out){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___5819,out){
return (function (state_5797){
var state_val_5798 = (state_5797[(1)]);
if((state_val_5798 === (7))){
var inst_5776 = (state_5797[(7)]);
var inst_5777 = (state_5797[(8)]);
var inst_5776__$1 = (state_5797[(2)]);
var inst_5777__$1 = cljs.core.nth.call(null,inst_5776__$1,(0),null);
var inst_5778 = cljs.core.nth.call(null,inst_5776__$1,(1),null);
var inst_5779 = (inst_5777__$1 == null);
var state_5797__$1 = (function (){var statearr_5799 = state_5797;
(statearr_5799[(9)] = inst_5778);

(statearr_5799[(7)] = inst_5776__$1);

(statearr_5799[(8)] = inst_5777__$1);

return statearr_5799;
})();
if(cljs.core.truth_(inst_5779)){
var statearr_5800_5820 = state_5797__$1;
(statearr_5800_5820[(1)] = (8));

} else {
var statearr_5801_5821 = state_5797__$1;
(statearr_5801_5821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5798 === (1))){
var inst_5766 = cljs.core.vec.call(null,chs);
var inst_5767 = inst_5766;
var state_5797__$1 = (function (){var statearr_5802 = state_5797;
(statearr_5802[(10)] = inst_5767);

return statearr_5802;
})();
var statearr_5803_5822 = state_5797__$1;
(statearr_5803_5822[(2)] = null);

(statearr_5803_5822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5798 === (4))){
var inst_5767 = (state_5797[(10)]);
var state_5797__$1 = state_5797;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5797__$1,(7),inst_5767);
} else {
if((state_val_5798 === (6))){
var inst_5793 = (state_5797[(2)]);
var state_5797__$1 = state_5797;
var statearr_5804_5823 = state_5797__$1;
(statearr_5804_5823[(2)] = inst_5793);

(statearr_5804_5823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5798 === (3))){
var inst_5795 = (state_5797[(2)]);
var state_5797__$1 = state_5797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5797__$1,inst_5795);
} else {
if((state_val_5798 === (2))){
var inst_5767 = (state_5797[(10)]);
var inst_5769 = cljs.core.count.call(null,inst_5767);
var inst_5770 = (inst_5769 > (0));
var state_5797__$1 = state_5797;
if(cljs.core.truth_(inst_5770)){
var statearr_5806_5824 = state_5797__$1;
(statearr_5806_5824[(1)] = (4));

} else {
var statearr_5807_5825 = state_5797__$1;
(statearr_5807_5825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5798 === (11))){
var inst_5767 = (state_5797[(10)]);
var inst_5786 = (state_5797[(2)]);
var tmp5805 = inst_5767;
var inst_5767__$1 = tmp5805;
var state_5797__$1 = (function (){var statearr_5808 = state_5797;
(statearr_5808[(10)] = inst_5767__$1);

(statearr_5808[(11)] = inst_5786);

return statearr_5808;
})();
var statearr_5809_5826 = state_5797__$1;
(statearr_5809_5826[(2)] = null);

(statearr_5809_5826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5798 === (9))){
var inst_5777 = (state_5797[(8)]);
var state_5797__$1 = state_5797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5797__$1,(11),out,inst_5777);
} else {
if((state_val_5798 === (5))){
var inst_5791 = cljs.core.async.close_BANG_.call(null,out);
var state_5797__$1 = state_5797;
var statearr_5810_5827 = state_5797__$1;
(statearr_5810_5827[(2)] = inst_5791);

(statearr_5810_5827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5798 === (10))){
var inst_5789 = (state_5797[(2)]);
var state_5797__$1 = state_5797;
var statearr_5811_5828 = state_5797__$1;
(statearr_5811_5828[(2)] = inst_5789);

(statearr_5811_5828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5798 === (8))){
var inst_5778 = (state_5797[(9)]);
var inst_5767 = (state_5797[(10)]);
var inst_5776 = (state_5797[(7)]);
var inst_5777 = (state_5797[(8)]);
var inst_5781 = (function (){var cs = inst_5767;
var vec__5772 = inst_5776;
var v = inst_5777;
var c = inst_5778;
return ((function (cs,vec__5772,v,c,inst_5778,inst_5767,inst_5776,inst_5777,state_val_5798,c__2216__auto___5819,out){
return (function (p1__5763_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5763_SHARP_);
});
;})(cs,vec__5772,v,c,inst_5778,inst_5767,inst_5776,inst_5777,state_val_5798,c__2216__auto___5819,out))
})();
var inst_5782 = cljs.core.filterv.call(null,inst_5781,inst_5767);
var inst_5767__$1 = inst_5782;
var state_5797__$1 = (function (){var statearr_5812 = state_5797;
(statearr_5812[(10)] = inst_5767__$1);

return statearr_5812;
})();
var statearr_5813_5829 = state_5797__$1;
(statearr_5813_5829[(2)] = null);

(statearr_5813_5829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___5819,out))
;
return ((function (switch__2199__auto__,c__2216__auto___5819,out){
return (function() {
var cljs$core$async$state_machine__2200__auto__ = null;
var cljs$core$async$state_machine__2200__auto____0 = (function (){
var statearr_5814 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5814[(0)] = cljs$core$async$state_machine__2200__auto__);

(statearr_5814[(1)] = (1));

return statearr_5814;
});
var cljs$core$async$state_machine__2200__auto____1 = (function (state_5797){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_5797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e5815){if((e5815 instanceof Object)){
var ex__2203__auto__ = e5815;
var statearr_5816_5830 = state_5797;
(statearr_5816_5830[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5831 = state_5797;
state_5797 = G__5831;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$state_machine__2200__auto__ = function(state_5797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2200__auto____1.call(this,state_5797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2200__auto____0;
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2200__auto____1;
return cljs$core$async$state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___5819,out))
})();
var state__2218__auto__ = (function (){var statearr_5817 = f__2217__auto__.call(null);
(statearr_5817[(6)] = c__2216__auto___5819);

return statearr_5817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___5819,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__5833 = arguments.length;
switch (G__5833) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2216__auto___5878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___5878,out){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___5878,out){
return (function (state_5857){
var state_val_5858 = (state_5857[(1)]);
if((state_val_5858 === (7))){
var inst_5839 = (state_5857[(7)]);
var inst_5839__$1 = (state_5857[(2)]);
var inst_5840 = (inst_5839__$1 == null);
var inst_5841 = cljs.core.not.call(null,inst_5840);
var state_5857__$1 = (function (){var statearr_5859 = state_5857;
(statearr_5859[(7)] = inst_5839__$1);

return statearr_5859;
})();
if(inst_5841){
var statearr_5860_5879 = state_5857__$1;
(statearr_5860_5879[(1)] = (8));

} else {
var statearr_5861_5880 = state_5857__$1;
(statearr_5861_5880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5858 === (1))){
var inst_5834 = (0);
var state_5857__$1 = (function (){var statearr_5862 = state_5857;
(statearr_5862[(8)] = inst_5834);

return statearr_5862;
})();
var statearr_5863_5881 = state_5857__$1;
(statearr_5863_5881[(2)] = null);

(statearr_5863_5881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5858 === (4))){
var state_5857__$1 = state_5857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5857__$1,(7),ch);
} else {
if((state_val_5858 === (6))){
var inst_5852 = (state_5857[(2)]);
var state_5857__$1 = state_5857;
var statearr_5864_5882 = state_5857__$1;
(statearr_5864_5882[(2)] = inst_5852);

(statearr_5864_5882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5858 === (3))){
var inst_5854 = (state_5857[(2)]);
var inst_5855 = cljs.core.async.close_BANG_.call(null,out);
var state_5857__$1 = (function (){var statearr_5865 = state_5857;
(statearr_5865[(9)] = inst_5854);

return statearr_5865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5857__$1,inst_5855);
} else {
if((state_val_5858 === (2))){
var inst_5834 = (state_5857[(8)]);
var inst_5836 = (inst_5834 < n);
var state_5857__$1 = state_5857;
if(cljs.core.truth_(inst_5836)){
var statearr_5866_5883 = state_5857__$1;
(statearr_5866_5883[(1)] = (4));

} else {
var statearr_5867_5884 = state_5857__$1;
(statearr_5867_5884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5858 === (11))){
var inst_5834 = (state_5857[(8)]);
var inst_5844 = (state_5857[(2)]);
var inst_5845 = (inst_5834 + (1));
var inst_5834__$1 = inst_5845;
var state_5857__$1 = (function (){var statearr_5868 = state_5857;
(statearr_5868[(10)] = inst_5844);

(statearr_5868[(8)] = inst_5834__$1);

return statearr_5868;
})();
var statearr_5869_5885 = state_5857__$1;
(statearr_5869_5885[(2)] = null);

(statearr_5869_5885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5858 === (9))){
var state_5857__$1 = state_5857;
var statearr_5870_5886 = state_5857__$1;
(statearr_5870_5886[(2)] = null);

(statearr_5870_5886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5858 === (5))){
var state_5857__$1 = state_5857;
var statearr_5871_5887 = state_5857__$1;
(statearr_5871_5887[(2)] = null);

(statearr_5871_5887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5858 === (10))){
var inst_5849 = (state_5857[(2)]);
var state_5857__$1 = state_5857;
var statearr_5872_5888 = state_5857__$1;
(statearr_5872_5888[(2)] = inst_5849);

(statearr_5872_5888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5858 === (8))){
var inst_5839 = (state_5857[(7)]);
var state_5857__$1 = state_5857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5857__$1,(11),out,inst_5839);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___5878,out))
;
return ((function (switch__2199__auto__,c__2216__auto___5878,out){
return (function() {
var cljs$core$async$state_machine__2200__auto__ = null;
var cljs$core$async$state_machine__2200__auto____0 = (function (){
var statearr_5873 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5873[(0)] = cljs$core$async$state_machine__2200__auto__);

(statearr_5873[(1)] = (1));

return statearr_5873;
});
var cljs$core$async$state_machine__2200__auto____1 = (function (state_5857){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_5857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e5874){if((e5874 instanceof Object)){
var ex__2203__auto__ = e5874;
var statearr_5875_5889 = state_5857;
(statearr_5875_5889[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5890 = state_5857;
state_5857 = G__5890;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$state_machine__2200__auto__ = function(state_5857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2200__auto____1.call(this,state_5857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2200__auto____0;
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2200__auto____1;
return cljs$core$async$state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___5878,out))
})();
var state__2218__auto__ = (function (){var statearr_5876 = f__2217__auto__.call(null);
(statearr_5876[(6)] = c__2216__auto___5878);

return statearr_5876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___5878,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5892 = (function (f,ch,meta5893){
this.f = f;
this.ch = ch;
this.meta5893 = meta5893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5894,meta5893__$1){
var self__ = this;
var _5894__$1 = this;
return (new cljs.core.async.t_cljs$core$async5892(self__.f,self__.ch,meta5893__$1));
});

cljs.core.async.t_cljs$core$async5892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5894){
var self__ = this;
var _5894__$1 = this;
return self__.meta5893;
});

cljs.core.async.t_cljs$core$async5892.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5892.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5892.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5892.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5892.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5895 = (function (f,ch,meta5893,_,fn1,meta5896){
this.f = f;
this.ch = ch;
this.meta5893 = meta5893;
this._ = _;
this.fn1 = fn1;
this.meta5896 = meta5896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_5897,meta5896__$1){
var self__ = this;
var _5897__$1 = this;
return (new cljs.core.async.t_cljs$core$async5895(self__.f,self__.ch,self__.meta5893,self__._,self__.fn1,meta5896__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async5895.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_5897){
var self__ = this;
var _5897__$1 = this;
return self__.meta5896;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5895.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5895.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5891_SHARP_){
return f1.call(null,(((p1__5891_SHARP_ == null))?null:self__.f.call(null,p1__5891_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async5895.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5893","meta5893",-1548982375,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async5892","cljs.core.async/t_cljs$core$async5892",-810998385,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5896","meta5896",2095738007,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5895.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5895";

cljs.core.async.t_cljs$core$async5895.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async5895");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5895.
 */
cljs.core.async.__GT_t_cljs$core$async5895 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5895(f__$1,ch__$1,meta5893__$1,___$2,fn1__$1,meta5896){
return (new cljs.core.async.t_cljs$core$async5895(f__$1,ch__$1,meta5893__$1,___$2,fn1__$1,meta5896));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async5895(self__.f,self__.ch,self__.meta5893,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async5892.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5892.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async5892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5893","meta5893",-1548982375,null)], null);
});

cljs.core.async.t_cljs$core$async5892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5892";

cljs.core.async.t_cljs$core$async5892.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async5892");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5892.
 */
cljs.core.async.__GT_t_cljs$core$async5892 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5892(f__$1,ch__$1,meta5893){
return (new cljs.core.async.t_cljs$core$async5892(f__$1,ch__$1,meta5893));
});

}

return (new cljs.core.async.t_cljs$core$async5892(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5898 = (function (f,ch,meta5899){
this.f = f;
this.ch = ch;
this.meta5899 = meta5899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5900,meta5899__$1){
var self__ = this;
var _5900__$1 = this;
return (new cljs.core.async.t_cljs$core$async5898(self__.f,self__.ch,meta5899__$1));
});

cljs.core.async.t_cljs$core$async5898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5900){
var self__ = this;
var _5900__$1 = this;
return self__.meta5899;
});

cljs.core.async.t_cljs$core$async5898.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5898.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5898.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async5898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5899","meta5899",-738556896,null)], null);
});

cljs.core.async.t_cljs$core$async5898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5898";

cljs.core.async.t_cljs$core$async5898.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async5898");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5898.
 */
cljs.core.async.__GT_t_cljs$core$async5898 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async5898(f__$1,ch__$1,meta5899){
return (new cljs.core.async.t_cljs$core$async5898(f__$1,ch__$1,meta5899));
});

}

return (new cljs.core.async.t_cljs$core$async5898(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5901 = (function (p,ch,meta5902){
this.p = p;
this.ch = ch;
this.meta5902 = meta5902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5903,meta5902__$1){
var self__ = this;
var _5903__$1 = this;
return (new cljs.core.async.t_cljs$core$async5901(self__.p,self__.ch,meta5902__$1));
});

cljs.core.async.t_cljs$core$async5901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5903){
var self__ = this;
var _5903__$1 = this;
return self__.meta5902;
});

cljs.core.async.t_cljs$core$async5901.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5901.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5901.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5901.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5901.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5901.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5901.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async5901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5902","meta5902",-1603483866,null)], null);
});

cljs.core.async.t_cljs$core$async5901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5901";

cljs.core.async.t_cljs$core$async5901.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async5901");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5901.
 */
cljs.core.async.__GT_t_cljs$core$async5901 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async5901(p__$1,ch__$1,meta5902){
return (new cljs.core.async.t_cljs$core$async5901(p__$1,ch__$1,meta5902));
});

}

return (new cljs.core.async.t_cljs$core$async5901(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__5905 = arguments.length;
switch (G__5905) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2216__auto___5945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___5945,out){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___5945,out){
return (function (state_5926){
var state_val_5927 = (state_5926[(1)]);
if((state_val_5927 === (7))){
var inst_5922 = (state_5926[(2)]);
var state_5926__$1 = state_5926;
var statearr_5928_5946 = state_5926__$1;
(statearr_5928_5946[(2)] = inst_5922);

(statearr_5928_5946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5927 === (1))){
var state_5926__$1 = state_5926;
var statearr_5929_5947 = state_5926__$1;
(statearr_5929_5947[(2)] = null);

(statearr_5929_5947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5927 === (4))){
var inst_5908 = (state_5926[(7)]);
var inst_5908__$1 = (state_5926[(2)]);
var inst_5909 = (inst_5908__$1 == null);
var state_5926__$1 = (function (){var statearr_5930 = state_5926;
(statearr_5930[(7)] = inst_5908__$1);

return statearr_5930;
})();
if(cljs.core.truth_(inst_5909)){
var statearr_5931_5948 = state_5926__$1;
(statearr_5931_5948[(1)] = (5));

} else {
var statearr_5932_5949 = state_5926__$1;
(statearr_5932_5949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5927 === (6))){
var inst_5908 = (state_5926[(7)]);
var inst_5913 = p.call(null,inst_5908);
var state_5926__$1 = state_5926;
if(cljs.core.truth_(inst_5913)){
var statearr_5933_5950 = state_5926__$1;
(statearr_5933_5950[(1)] = (8));

} else {
var statearr_5934_5951 = state_5926__$1;
(statearr_5934_5951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5927 === (3))){
var inst_5924 = (state_5926[(2)]);
var state_5926__$1 = state_5926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5926__$1,inst_5924);
} else {
if((state_val_5927 === (2))){
var state_5926__$1 = state_5926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5926__$1,(4),ch);
} else {
if((state_val_5927 === (11))){
var inst_5916 = (state_5926[(2)]);
var state_5926__$1 = state_5926;
var statearr_5935_5952 = state_5926__$1;
(statearr_5935_5952[(2)] = inst_5916);

(statearr_5935_5952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5927 === (9))){
var state_5926__$1 = state_5926;
var statearr_5936_5953 = state_5926__$1;
(statearr_5936_5953[(2)] = null);

(statearr_5936_5953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5927 === (5))){
var inst_5911 = cljs.core.async.close_BANG_.call(null,out);
var state_5926__$1 = state_5926;
var statearr_5937_5954 = state_5926__$1;
(statearr_5937_5954[(2)] = inst_5911);

(statearr_5937_5954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5927 === (10))){
var inst_5919 = (state_5926[(2)]);
var state_5926__$1 = (function (){var statearr_5938 = state_5926;
(statearr_5938[(8)] = inst_5919);

return statearr_5938;
})();
var statearr_5939_5955 = state_5926__$1;
(statearr_5939_5955[(2)] = null);

(statearr_5939_5955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5927 === (8))){
var inst_5908 = (state_5926[(7)]);
var state_5926__$1 = state_5926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5926__$1,(11),out,inst_5908);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___5945,out))
;
return ((function (switch__2199__auto__,c__2216__auto___5945,out){
return (function() {
var cljs$core$async$state_machine__2200__auto__ = null;
var cljs$core$async$state_machine__2200__auto____0 = (function (){
var statearr_5940 = [null,null,null,null,null,null,null,null,null];
(statearr_5940[(0)] = cljs$core$async$state_machine__2200__auto__);

(statearr_5940[(1)] = (1));

return statearr_5940;
});
var cljs$core$async$state_machine__2200__auto____1 = (function (state_5926){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_5926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e5941){if((e5941 instanceof Object)){
var ex__2203__auto__ = e5941;
var statearr_5942_5956 = state_5926;
(statearr_5942_5956[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5957 = state_5926;
state_5926 = G__5957;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$state_machine__2200__auto__ = function(state_5926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2200__auto____1.call(this,state_5926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2200__auto____0;
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2200__auto____1;
return cljs$core$async$state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___5945,out))
})();
var state__2218__auto__ = (function (){var statearr_5943 = f__2217__auto__.call(null);
(statearr_5943[(6)] = c__2216__auto___5945);

return statearr_5943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___5945,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__5959 = arguments.length;
switch (G__5959) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__2216__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto__){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto__){
return (function (state_6022){
var state_val_6023 = (state_6022[(1)]);
if((state_val_6023 === (7))){
var inst_6018 = (state_6022[(2)]);
var state_6022__$1 = state_6022;
var statearr_6024_6062 = state_6022__$1;
(statearr_6024_6062[(2)] = inst_6018);

(statearr_6024_6062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (20))){
var inst_5988 = (state_6022[(7)]);
var inst_5999 = (state_6022[(2)]);
var inst_6000 = cljs.core.next.call(null,inst_5988);
var inst_5974 = inst_6000;
var inst_5975 = null;
var inst_5976 = (0);
var inst_5977 = (0);
var state_6022__$1 = (function (){var statearr_6025 = state_6022;
(statearr_6025[(8)] = inst_5977);

(statearr_6025[(9)] = inst_5999);

(statearr_6025[(10)] = inst_5976);

(statearr_6025[(11)] = inst_5975);

(statearr_6025[(12)] = inst_5974);

return statearr_6025;
})();
var statearr_6026_6063 = state_6022__$1;
(statearr_6026_6063[(2)] = null);

(statearr_6026_6063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (1))){
var state_6022__$1 = state_6022;
var statearr_6027_6064 = state_6022__$1;
(statearr_6027_6064[(2)] = null);

(statearr_6027_6064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (4))){
var inst_5963 = (state_6022[(13)]);
var inst_5963__$1 = (state_6022[(2)]);
var inst_5964 = (inst_5963__$1 == null);
var state_6022__$1 = (function (){var statearr_6028 = state_6022;
(statearr_6028[(13)] = inst_5963__$1);

return statearr_6028;
})();
if(cljs.core.truth_(inst_5964)){
var statearr_6029_6065 = state_6022__$1;
(statearr_6029_6065[(1)] = (5));

} else {
var statearr_6030_6066 = state_6022__$1;
(statearr_6030_6066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (15))){
var state_6022__$1 = state_6022;
var statearr_6034_6067 = state_6022__$1;
(statearr_6034_6067[(2)] = null);

(statearr_6034_6067[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (21))){
var state_6022__$1 = state_6022;
var statearr_6035_6068 = state_6022__$1;
(statearr_6035_6068[(2)] = null);

(statearr_6035_6068[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (13))){
var inst_5977 = (state_6022[(8)]);
var inst_5976 = (state_6022[(10)]);
var inst_5975 = (state_6022[(11)]);
var inst_5974 = (state_6022[(12)]);
var inst_5984 = (state_6022[(2)]);
var inst_5985 = (inst_5977 + (1));
var tmp6031 = inst_5976;
var tmp6032 = inst_5975;
var tmp6033 = inst_5974;
var inst_5974__$1 = tmp6033;
var inst_5975__$1 = tmp6032;
var inst_5976__$1 = tmp6031;
var inst_5977__$1 = inst_5985;
var state_6022__$1 = (function (){var statearr_6036 = state_6022;
(statearr_6036[(8)] = inst_5977__$1);

(statearr_6036[(14)] = inst_5984);

(statearr_6036[(10)] = inst_5976__$1);

(statearr_6036[(11)] = inst_5975__$1);

(statearr_6036[(12)] = inst_5974__$1);

return statearr_6036;
})();
var statearr_6037_6069 = state_6022__$1;
(statearr_6037_6069[(2)] = null);

(statearr_6037_6069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (22))){
var state_6022__$1 = state_6022;
var statearr_6038_6070 = state_6022__$1;
(statearr_6038_6070[(2)] = null);

(statearr_6038_6070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (6))){
var inst_5963 = (state_6022[(13)]);
var inst_5972 = f.call(null,inst_5963);
var inst_5973 = cljs.core.seq.call(null,inst_5972);
var inst_5974 = inst_5973;
var inst_5975 = null;
var inst_5976 = (0);
var inst_5977 = (0);
var state_6022__$1 = (function (){var statearr_6039 = state_6022;
(statearr_6039[(8)] = inst_5977);

(statearr_6039[(10)] = inst_5976);

(statearr_6039[(11)] = inst_5975);

(statearr_6039[(12)] = inst_5974);

return statearr_6039;
})();
var statearr_6040_6071 = state_6022__$1;
(statearr_6040_6071[(2)] = null);

(statearr_6040_6071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (17))){
var inst_5988 = (state_6022[(7)]);
var inst_5992 = cljs.core.chunk_first.call(null,inst_5988);
var inst_5993 = cljs.core.chunk_rest.call(null,inst_5988);
var inst_5994 = cljs.core.count.call(null,inst_5992);
var inst_5974 = inst_5993;
var inst_5975 = inst_5992;
var inst_5976 = inst_5994;
var inst_5977 = (0);
var state_6022__$1 = (function (){var statearr_6041 = state_6022;
(statearr_6041[(8)] = inst_5977);

(statearr_6041[(10)] = inst_5976);

(statearr_6041[(11)] = inst_5975);

(statearr_6041[(12)] = inst_5974);

return statearr_6041;
})();
var statearr_6042_6072 = state_6022__$1;
(statearr_6042_6072[(2)] = null);

(statearr_6042_6072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (3))){
var inst_6020 = (state_6022[(2)]);
var state_6022__$1 = state_6022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6022__$1,inst_6020);
} else {
if((state_val_6023 === (12))){
var inst_6008 = (state_6022[(2)]);
var state_6022__$1 = state_6022;
var statearr_6043_6073 = state_6022__$1;
(statearr_6043_6073[(2)] = inst_6008);

(statearr_6043_6073[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (2))){
var state_6022__$1 = state_6022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6022__$1,(4),in$);
} else {
if((state_val_6023 === (23))){
var inst_6016 = (state_6022[(2)]);
var state_6022__$1 = state_6022;
var statearr_6044_6074 = state_6022__$1;
(statearr_6044_6074[(2)] = inst_6016);

(statearr_6044_6074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (19))){
var inst_6003 = (state_6022[(2)]);
var state_6022__$1 = state_6022;
var statearr_6045_6075 = state_6022__$1;
(statearr_6045_6075[(2)] = inst_6003);

(statearr_6045_6075[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (11))){
var inst_5988 = (state_6022[(7)]);
var inst_5974 = (state_6022[(12)]);
var inst_5988__$1 = cljs.core.seq.call(null,inst_5974);
var state_6022__$1 = (function (){var statearr_6046 = state_6022;
(statearr_6046[(7)] = inst_5988__$1);

return statearr_6046;
})();
if(inst_5988__$1){
var statearr_6047_6076 = state_6022__$1;
(statearr_6047_6076[(1)] = (14));

} else {
var statearr_6048_6077 = state_6022__$1;
(statearr_6048_6077[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (9))){
var inst_6010 = (state_6022[(2)]);
var inst_6011 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_6022__$1 = (function (){var statearr_6049 = state_6022;
(statearr_6049[(15)] = inst_6010);

return statearr_6049;
})();
if(cljs.core.truth_(inst_6011)){
var statearr_6050_6078 = state_6022__$1;
(statearr_6050_6078[(1)] = (21));

} else {
var statearr_6051_6079 = state_6022__$1;
(statearr_6051_6079[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (5))){
var inst_5966 = cljs.core.async.close_BANG_.call(null,out);
var state_6022__$1 = state_6022;
var statearr_6052_6080 = state_6022__$1;
(statearr_6052_6080[(2)] = inst_5966);

(statearr_6052_6080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (14))){
var inst_5988 = (state_6022[(7)]);
var inst_5990 = cljs.core.chunked_seq_QMARK_.call(null,inst_5988);
var state_6022__$1 = state_6022;
if(inst_5990){
var statearr_6053_6081 = state_6022__$1;
(statearr_6053_6081[(1)] = (17));

} else {
var statearr_6054_6082 = state_6022__$1;
(statearr_6054_6082[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (16))){
var inst_6006 = (state_6022[(2)]);
var state_6022__$1 = state_6022;
var statearr_6055_6083 = state_6022__$1;
(statearr_6055_6083[(2)] = inst_6006);

(statearr_6055_6083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6023 === (10))){
var inst_5977 = (state_6022[(8)]);
var inst_5975 = (state_6022[(11)]);
var inst_5982 = cljs.core._nth.call(null,inst_5975,inst_5977);
var state_6022__$1 = state_6022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6022__$1,(13),out,inst_5982);
} else {
if((state_val_6023 === (18))){
var inst_5988 = (state_6022[(7)]);
var inst_5997 = cljs.core.first.call(null,inst_5988);
var state_6022__$1 = state_6022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6022__$1,(20),out,inst_5997);
} else {
if((state_val_6023 === (8))){
var inst_5977 = (state_6022[(8)]);
var inst_5976 = (state_6022[(10)]);
var inst_5979 = (inst_5977 < inst_5976);
var inst_5980 = inst_5979;
var state_6022__$1 = state_6022;
if(cljs.core.truth_(inst_5980)){
var statearr_6056_6084 = state_6022__$1;
(statearr_6056_6084[(1)] = (10));

} else {
var statearr_6057_6085 = state_6022__$1;
(statearr_6057_6085[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto__))
;
return ((function (switch__2199__auto__,c__2216__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__2200__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2200__auto____0 = (function (){
var statearr_6058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6058[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2200__auto__);

(statearr_6058[(1)] = (1));

return statearr_6058;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2200__auto____1 = (function (state_6022){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_6022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e6059){if((e6059 instanceof Object)){
var ex__2203__auto__ = e6059;
var statearr_6060_6086 = state_6022;
(statearr_6060_6086[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6087 = state_6022;
state_6022 = G__6087;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2200__auto__ = function(state_6022){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2200__auto____1.call(this,state_6022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2200__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2200__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto__))
})();
var state__2218__auto__ = (function (){var statearr_6061 = f__2217__auto__.call(null);
(statearr_6061[(6)] = c__2216__auto__);

return statearr_6061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto__))
);

return c__2216__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__6089 = arguments.length;
switch (G__6089) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__6092 = arguments.length;
switch (G__6092) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__6095 = arguments.length;
switch (G__6095) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2216__auto___6142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___6142,out){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___6142,out){
return (function (state_6119){
var state_val_6120 = (state_6119[(1)]);
if((state_val_6120 === (7))){
var inst_6114 = (state_6119[(2)]);
var state_6119__$1 = state_6119;
var statearr_6121_6143 = state_6119__$1;
(statearr_6121_6143[(2)] = inst_6114);

(statearr_6121_6143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6120 === (1))){
var inst_6096 = null;
var state_6119__$1 = (function (){var statearr_6122 = state_6119;
(statearr_6122[(7)] = inst_6096);

return statearr_6122;
})();
var statearr_6123_6144 = state_6119__$1;
(statearr_6123_6144[(2)] = null);

(statearr_6123_6144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6120 === (4))){
var inst_6099 = (state_6119[(8)]);
var inst_6099__$1 = (state_6119[(2)]);
var inst_6100 = (inst_6099__$1 == null);
var inst_6101 = cljs.core.not.call(null,inst_6100);
var state_6119__$1 = (function (){var statearr_6124 = state_6119;
(statearr_6124[(8)] = inst_6099__$1);

return statearr_6124;
})();
if(inst_6101){
var statearr_6125_6145 = state_6119__$1;
(statearr_6125_6145[(1)] = (5));

} else {
var statearr_6126_6146 = state_6119__$1;
(statearr_6126_6146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6120 === (6))){
var state_6119__$1 = state_6119;
var statearr_6127_6147 = state_6119__$1;
(statearr_6127_6147[(2)] = null);

(statearr_6127_6147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6120 === (3))){
var inst_6116 = (state_6119[(2)]);
var inst_6117 = cljs.core.async.close_BANG_.call(null,out);
var state_6119__$1 = (function (){var statearr_6128 = state_6119;
(statearr_6128[(9)] = inst_6116);

return statearr_6128;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6119__$1,inst_6117);
} else {
if((state_val_6120 === (2))){
var state_6119__$1 = state_6119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6119__$1,(4),ch);
} else {
if((state_val_6120 === (11))){
var inst_6099 = (state_6119[(8)]);
var inst_6108 = (state_6119[(2)]);
var inst_6096 = inst_6099;
var state_6119__$1 = (function (){var statearr_6129 = state_6119;
(statearr_6129[(10)] = inst_6108);

(statearr_6129[(7)] = inst_6096);

return statearr_6129;
})();
var statearr_6130_6148 = state_6119__$1;
(statearr_6130_6148[(2)] = null);

(statearr_6130_6148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6120 === (9))){
var inst_6099 = (state_6119[(8)]);
var state_6119__$1 = state_6119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6119__$1,(11),out,inst_6099);
} else {
if((state_val_6120 === (5))){
var inst_6096 = (state_6119[(7)]);
var inst_6099 = (state_6119[(8)]);
var inst_6103 = cljs.core._EQ_.call(null,inst_6099,inst_6096);
var state_6119__$1 = state_6119;
if(inst_6103){
var statearr_6132_6149 = state_6119__$1;
(statearr_6132_6149[(1)] = (8));

} else {
var statearr_6133_6150 = state_6119__$1;
(statearr_6133_6150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6120 === (10))){
var inst_6111 = (state_6119[(2)]);
var state_6119__$1 = state_6119;
var statearr_6134_6151 = state_6119__$1;
(statearr_6134_6151[(2)] = inst_6111);

(statearr_6134_6151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6120 === (8))){
var inst_6096 = (state_6119[(7)]);
var tmp6131 = inst_6096;
var inst_6096__$1 = tmp6131;
var state_6119__$1 = (function (){var statearr_6135 = state_6119;
(statearr_6135[(7)] = inst_6096__$1);

return statearr_6135;
})();
var statearr_6136_6152 = state_6119__$1;
(statearr_6136_6152[(2)] = null);

(statearr_6136_6152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___6142,out))
;
return ((function (switch__2199__auto__,c__2216__auto___6142,out){
return (function() {
var cljs$core$async$state_machine__2200__auto__ = null;
var cljs$core$async$state_machine__2200__auto____0 = (function (){
var statearr_6137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6137[(0)] = cljs$core$async$state_machine__2200__auto__);

(statearr_6137[(1)] = (1));

return statearr_6137;
});
var cljs$core$async$state_machine__2200__auto____1 = (function (state_6119){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_6119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e6138){if((e6138 instanceof Object)){
var ex__2203__auto__ = e6138;
var statearr_6139_6153 = state_6119;
(statearr_6139_6153[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6154 = state_6119;
state_6119 = G__6154;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$state_machine__2200__auto__ = function(state_6119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2200__auto____1.call(this,state_6119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2200__auto____0;
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2200__auto____1;
return cljs$core$async$state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___6142,out))
})();
var state__2218__auto__ = (function (){var statearr_6140 = f__2217__auto__.call(null);
(statearr_6140[(6)] = c__2216__auto___6142);

return statearr_6140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___6142,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__6156 = arguments.length;
switch (G__6156) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2216__auto___6222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___6222,out){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___6222,out){
return (function (state_6194){
var state_val_6195 = (state_6194[(1)]);
if((state_val_6195 === (7))){
var inst_6190 = (state_6194[(2)]);
var state_6194__$1 = state_6194;
var statearr_6196_6223 = state_6194__$1;
(statearr_6196_6223[(2)] = inst_6190);

(statearr_6196_6223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6195 === (1))){
var inst_6157 = (new Array(n));
var inst_6158 = inst_6157;
var inst_6159 = (0);
var state_6194__$1 = (function (){var statearr_6197 = state_6194;
(statearr_6197[(7)] = inst_6159);

(statearr_6197[(8)] = inst_6158);

return statearr_6197;
})();
var statearr_6198_6224 = state_6194__$1;
(statearr_6198_6224[(2)] = null);

(statearr_6198_6224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6195 === (4))){
var inst_6162 = (state_6194[(9)]);
var inst_6162__$1 = (state_6194[(2)]);
var inst_6163 = (inst_6162__$1 == null);
var inst_6164 = cljs.core.not.call(null,inst_6163);
var state_6194__$1 = (function (){var statearr_6199 = state_6194;
(statearr_6199[(9)] = inst_6162__$1);

return statearr_6199;
})();
if(inst_6164){
var statearr_6200_6225 = state_6194__$1;
(statearr_6200_6225[(1)] = (5));

} else {
var statearr_6201_6226 = state_6194__$1;
(statearr_6201_6226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6195 === (15))){
var inst_6184 = (state_6194[(2)]);
var state_6194__$1 = state_6194;
var statearr_6202_6227 = state_6194__$1;
(statearr_6202_6227[(2)] = inst_6184);

(statearr_6202_6227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6195 === (13))){
var state_6194__$1 = state_6194;
var statearr_6203_6228 = state_6194__$1;
(statearr_6203_6228[(2)] = null);

(statearr_6203_6228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6195 === (6))){
var inst_6159 = (state_6194[(7)]);
var inst_6180 = (inst_6159 > (0));
var state_6194__$1 = state_6194;
if(cljs.core.truth_(inst_6180)){
var statearr_6204_6229 = state_6194__$1;
(statearr_6204_6229[(1)] = (12));

} else {
var statearr_6205_6230 = state_6194__$1;
(statearr_6205_6230[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6195 === (3))){
var inst_6192 = (state_6194[(2)]);
var state_6194__$1 = state_6194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6194__$1,inst_6192);
} else {
if((state_val_6195 === (12))){
var inst_6158 = (state_6194[(8)]);
var inst_6182 = cljs.core.vec.call(null,inst_6158);
var state_6194__$1 = state_6194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6194__$1,(15),out,inst_6182);
} else {
if((state_val_6195 === (2))){
var state_6194__$1 = state_6194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6194__$1,(4),ch);
} else {
if((state_val_6195 === (11))){
var inst_6174 = (state_6194[(2)]);
var inst_6175 = (new Array(n));
var inst_6158 = inst_6175;
var inst_6159 = (0);
var state_6194__$1 = (function (){var statearr_6206 = state_6194;
(statearr_6206[(7)] = inst_6159);

(statearr_6206[(8)] = inst_6158);

(statearr_6206[(10)] = inst_6174);

return statearr_6206;
})();
var statearr_6207_6231 = state_6194__$1;
(statearr_6207_6231[(2)] = null);

(statearr_6207_6231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6195 === (9))){
var inst_6158 = (state_6194[(8)]);
var inst_6172 = cljs.core.vec.call(null,inst_6158);
var state_6194__$1 = state_6194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6194__$1,(11),out,inst_6172);
} else {
if((state_val_6195 === (5))){
var inst_6159 = (state_6194[(7)]);
var inst_6167 = (state_6194[(11)]);
var inst_6158 = (state_6194[(8)]);
var inst_6162 = (state_6194[(9)]);
var inst_6166 = (inst_6158[inst_6159] = inst_6162);
var inst_6167__$1 = (inst_6159 + (1));
var inst_6168 = (inst_6167__$1 < n);
var state_6194__$1 = (function (){var statearr_6208 = state_6194;
(statearr_6208[(11)] = inst_6167__$1);

(statearr_6208[(12)] = inst_6166);

return statearr_6208;
})();
if(cljs.core.truth_(inst_6168)){
var statearr_6209_6232 = state_6194__$1;
(statearr_6209_6232[(1)] = (8));

} else {
var statearr_6210_6233 = state_6194__$1;
(statearr_6210_6233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6195 === (14))){
var inst_6187 = (state_6194[(2)]);
var inst_6188 = cljs.core.async.close_BANG_.call(null,out);
var state_6194__$1 = (function (){var statearr_6212 = state_6194;
(statearr_6212[(13)] = inst_6187);

return statearr_6212;
})();
var statearr_6213_6234 = state_6194__$1;
(statearr_6213_6234[(2)] = inst_6188);

(statearr_6213_6234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6195 === (10))){
var inst_6178 = (state_6194[(2)]);
var state_6194__$1 = state_6194;
var statearr_6214_6235 = state_6194__$1;
(statearr_6214_6235[(2)] = inst_6178);

(statearr_6214_6235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6195 === (8))){
var inst_6167 = (state_6194[(11)]);
var inst_6158 = (state_6194[(8)]);
var tmp6211 = inst_6158;
var inst_6158__$1 = tmp6211;
var inst_6159 = inst_6167;
var state_6194__$1 = (function (){var statearr_6215 = state_6194;
(statearr_6215[(7)] = inst_6159);

(statearr_6215[(8)] = inst_6158__$1);

return statearr_6215;
})();
var statearr_6216_6236 = state_6194__$1;
(statearr_6216_6236[(2)] = null);

(statearr_6216_6236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___6222,out))
;
return ((function (switch__2199__auto__,c__2216__auto___6222,out){
return (function() {
var cljs$core$async$state_machine__2200__auto__ = null;
var cljs$core$async$state_machine__2200__auto____0 = (function (){
var statearr_6217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6217[(0)] = cljs$core$async$state_machine__2200__auto__);

(statearr_6217[(1)] = (1));

return statearr_6217;
});
var cljs$core$async$state_machine__2200__auto____1 = (function (state_6194){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_6194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e6218){if((e6218 instanceof Object)){
var ex__2203__auto__ = e6218;
var statearr_6219_6237 = state_6194;
(statearr_6219_6237[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6238 = state_6194;
state_6194 = G__6238;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$state_machine__2200__auto__ = function(state_6194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2200__auto____1.call(this,state_6194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2200__auto____0;
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2200__auto____1;
return cljs$core$async$state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___6222,out))
})();
var state__2218__auto__ = (function (){var statearr_6220 = f__2217__auto__.call(null);
(statearr_6220[(6)] = c__2216__auto___6222);

return statearr_6220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___6222,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__6240 = arguments.length;
switch (G__6240) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2216__auto___6310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2216__auto___6310,out){
return (function (){
var f__2217__auto__ = (function (){var switch__2199__auto__ = ((function (c__2216__auto___6310,out){
return (function (state_6282){
var state_val_6283 = (state_6282[(1)]);
if((state_val_6283 === (7))){
var inst_6278 = (state_6282[(2)]);
var state_6282__$1 = state_6282;
var statearr_6284_6311 = state_6282__$1;
(statearr_6284_6311[(2)] = inst_6278);

(statearr_6284_6311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6283 === (1))){
var inst_6241 = [];
var inst_6242 = inst_6241;
var inst_6243 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_6282__$1 = (function (){var statearr_6285 = state_6282;
(statearr_6285[(7)] = inst_6243);

(statearr_6285[(8)] = inst_6242);

return statearr_6285;
})();
var statearr_6286_6312 = state_6282__$1;
(statearr_6286_6312[(2)] = null);

(statearr_6286_6312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6283 === (4))){
var inst_6246 = (state_6282[(9)]);
var inst_6246__$1 = (state_6282[(2)]);
var inst_6247 = (inst_6246__$1 == null);
var inst_6248 = cljs.core.not.call(null,inst_6247);
var state_6282__$1 = (function (){var statearr_6287 = state_6282;
(statearr_6287[(9)] = inst_6246__$1);

return statearr_6287;
})();
if(inst_6248){
var statearr_6288_6313 = state_6282__$1;
(statearr_6288_6313[(1)] = (5));

} else {
var statearr_6289_6314 = state_6282__$1;
(statearr_6289_6314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6283 === (15))){
var inst_6272 = (state_6282[(2)]);
var state_6282__$1 = state_6282;
var statearr_6290_6315 = state_6282__$1;
(statearr_6290_6315[(2)] = inst_6272);

(statearr_6290_6315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6283 === (13))){
var state_6282__$1 = state_6282;
var statearr_6291_6316 = state_6282__$1;
(statearr_6291_6316[(2)] = null);

(statearr_6291_6316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6283 === (6))){
var inst_6242 = (state_6282[(8)]);
var inst_6267 = inst_6242.length;
var inst_6268 = (inst_6267 > (0));
var state_6282__$1 = state_6282;
if(cljs.core.truth_(inst_6268)){
var statearr_6292_6317 = state_6282__$1;
(statearr_6292_6317[(1)] = (12));

} else {
var statearr_6293_6318 = state_6282__$1;
(statearr_6293_6318[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6283 === (3))){
var inst_6280 = (state_6282[(2)]);
var state_6282__$1 = state_6282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6282__$1,inst_6280);
} else {
if((state_val_6283 === (12))){
var inst_6242 = (state_6282[(8)]);
var inst_6270 = cljs.core.vec.call(null,inst_6242);
var state_6282__$1 = state_6282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6282__$1,(15),out,inst_6270);
} else {
if((state_val_6283 === (2))){
var state_6282__$1 = state_6282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6282__$1,(4),ch);
} else {
if((state_val_6283 === (11))){
var inst_6246 = (state_6282[(9)]);
var inst_6250 = (state_6282[(10)]);
var inst_6260 = (state_6282[(2)]);
var inst_6261 = [];
var inst_6262 = inst_6261.push(inst_6246);
var inst_6242 = inst_6261;
var inst_6243 = inst_6250;
var state_6282__$1 = (function (){var statearr_6294 = state_6282;
(statearr_6294[(7)] = inst_6243);

(statearr_6294[(11)] = inst_6260);

(statearr_6294[(8)] = inst_6242);

(statearr_6294[(12)] = inst_6262);

return statearr_6294;
})();
var statearr_6295_6319 = state_6282__$1;
(statearr_6295_6319[(2)] = null);

(statearr_6295_6319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6283 === (9))){
var inst_6242 = (state_6282[(8)]);
var inst_6258 = cljs.core.vec.call(null,inst_6242);
var state_6282__$1 = state_6282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6282__$1,(11),out,inst_6258);
} else {
if((state_val_6283 === (5))){
var inst_6243 = (state_6282[(7)]);
var inst_6246 = (state_6282[(9)]);
var inst_6250 = (state_6282[(10)]);
var inst_6250__$1 = f.call(null,inst_6246);
var inst_6251 = cljs.core._EQ_.call(null,inst_6250__$1,inst_6243);
var inst_6252 = cljs.core.keyword_identical_QMARK_.call(null,inst_6243,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_6253 = ((inst_6251) || (inst_6252));
var state_6282__$1 = (function (){var statearr_6296 = state_6282;
(statearr_6296[(10)] = inst_6250__$1);

return statearr_6296;
})();
if(cljs.core.truth_(inst_6253)){
var statearr_6297_6320 = state_6282__$1;
(statearr_6297_6320[(1)] = (8));

} else {
var statearr_6298_6321 = state_6282__$1;
(statearr_6298_6321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6283 === (14))){
var inst_6275 = (state_6282[(2)]);
var inst_6276 = cljs.core.async.close_BANG_.call(null,out);
var state_6282__$1 = (function (){var statearr_6300 = state_6282;
(statearr_6300[(13)] = inst_6275);

return statearr_6300;
})();
var statearr_6301_6322 = state_6282__$1;
(statearr_6301_6322[(2)] = inst_6276);

(statearr_6301_6322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6283 === (10))){
var inst_6265 = (state_6282[(2)]);
var state_6282__$1 = state_6282;
var statearr_6302_6323 = state_6282__$1;
(statearr_6302_6323[(2)] = inst_6265);

(statearr_6302_6323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6283 === (8))){
var inst_6242 = (state_6282[(8)]);
var inst_6246 = (state_6282[(9)]);
var inst_6250 = (state_6282[(10)]);
var inst_6255 = inst_6242.push(inst_6246);
var tmp6299 = inst_6242;
var inst_6242__$1 = tmp6299;
var inst_6243 = inst_6250;
var state_6282__$1 = (function (){var statearr_6303 = state_6282;
(statearr_6303[(7)] = inst_6243);

(statearr_6303[(8)] = inst_6242__$1);

(statearr_6303[(14)] = inst_6255);

return statearr_6303;
})();
var statearr_6304_6324 = state_6282__$1;
(statearr_6304_6324[(2)] = null);

(statearr_6304_6324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2216__auto___6310,out))
;
return ((function (switch__2199__auto__,c__2216__auto___6310,out){
return (function() {
var cljs$core$async$state_machine__2200__auto__ = null;
var cljs$core$async$state_machine__2200__auto____0 = (function (){
var statearr_6305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6305[(0)] = cljs$core$async$state_machine__2200__auto__);

(statearr_6305[(1)] = (1));

return statearr_6305;
});
var cljs$core$async$state_machine__2200__auto____1 = (function (state_6282){
while(true){
var ret_value__2201__auto__ = (function (){try{while(true){
var result__2202__auto__ = switch__2199__auto__.call(null,state_6282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2202__auto__;
}
break;
}
}catch (e6306){if((e6306 instanceof Object)){
var ex__2203__auto__ = e6306;
var statearr_6307_6325 = state_6282;
(statearr_6307_6325[(5)] = ex__2203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6326 = state_6282;
state_6282 = G__6326;
continue;
} else {
return ret_value__2201__auto__;
}
break;
}
});
cljs$core$async$state_machine__2200__auto__ = function(state_6282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2200__auto____1.call(this,state_6282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2200__auto____0;
cljs$core$async$state_machine__2200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2200__auto____1;
return cljs$core$async$state_machine__2200__auto__;
})()
;})(switch__2199__auto__,c__2216__auto___6310,out))
})();
var state__2218__auto__ = (function (){var statearr_6308 = f__2217__auto__.call(null);
(statearr_6308[(6)] = c__2216__auto___6310);

return statearr_6308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2218__auto__);
});})(c__2216__auto___6310,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
