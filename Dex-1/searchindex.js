Search.setIndex({docnames:["callbacks","class-structs","classes","classes/AioContext","classes/AsyncPair","classes/AsyncPairInfo","classes/AsyncResult","classes/AsyncResultClass","classes/Block","classes/Cancellable","classes/Channel","classes/Delayed","classes/Fiber","classes/Future","classes/FutureSet","classes/MainScheduler","classes/Object","classes/Promise","classes/Scheduler","classes/StaticFuture","classes/ThreadPoolScheduler","classes/Timeout","classes/UnixSignal","enums","functions","hierarchy","index","mapping","structs"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["callbacks.rst","class-structs.rst","classes.rst","classes/AioContext.rst","classes/AsyncPair.rst","classes/AsyncPairInfo.rst","classes/AsyncResult.rst","classes/AsyncResultClass.rst","classes/Block.rst","classes/Cancellable.rst","classes/Channel.rst","classes/Delayed.rst","classes/Fiber.rst","classes/Future.rst","classes/FutureSet.rst","classes/MainScheduler.rst","classes/Object.rst","classes/Promise.rst","classes/Scheduler.rst","classes/StaticFuture.rst","classes/ThreadPoolScheduler.rst","classes/Timeout.rst","classes/UnixSignal.rst","enums.rst","functions.rst","hierarchy.rst","index.rst","mapping.rst","structs.rst"],objects:{"Dex.AsyncPair":[[4,1,1,"","get_cancellable"],[4,1,1,"","new"],[4,1,1,"","return_boolean"],[4,1,1,"","return_error"],[4,1,1,"","return_int64"],[4,1,1,"","return_object"],[4,1,1,"","return_string"],[4,1,1,"","return_uint64"],[4,1,1,"","return_variant"],[4,1,1,"","set_cancel_on_discard"]],"Dex.AsyncResult":[[6,1,1,"","await_"],[6,1,1,"","dup_future"],[6,1,1,"","get_name"],[6,1,1,"","new"],[6,1,1,"","propagate_boolean"],[6,1,1,"","propagate_double"],[6,1,1,"","propagate_int"],[6,1,1,"","propagate_pointer"],[6,1,1,"","set_name"],[6,1,1,"","set_priority"],[6,1,1,"","set_static_name"]],"Dex.Block":[[8,1,1,"","get_kind"],[8,1,1,"","get_scheduler"]],"Dex.BlockKind":[[23,2,1,"","CATCH"],[23,2,1,"","FINALLY"],[23,2,1,"","THEN"]],"Dex.Cancellable":[[9,1,1,"","cancel"],[9,1,1,"","new"],[9,1,1,"","new_from_cancellable"]],"Dex.Channel":[[10,1,1,"","can_receive"],[10,1,1,"","can_send"],[10,1,1,"","close_receive"],[10,1,1,"","close_send"],[10,1,1,"","new"],[10,1,1,"","receive"],[10,1,1,"","receive_all"],[10,1,1,"","send"]],"Dex.Delayed":[[11,1,1,"","dup_future"],[11,1,1,"","new"],[11,1,1,"","release"]],"Dex.Error":[[23,2,1,"","CHANNEL_CLOSED"],[23,2,1,"","DEPENDENCY_FAILED"],[23,2,1,"","FIBER_CANCELLED"],[23,2,1,"","FIBER_EXITED"],[23,2,1,"","NO_FIBER"],[23,2,1,"","PENDING"],[23,2,1,"","SEMAPHORE_CLOSED"],[23,2,1,"","TIMED_OUT"],[23,2,1,"","TYPE_MISMATCH"],[23,2,1,"","TYPE_NOT_SUPPORTED"],[23,2,1,"","UNKNOWN"]],"Dex.Future":[[13,1,1,"","all"],[13,1,1,"","all_race"],[13,1,1,"","any"],[13,1,1,"","await_"],[13,1,1,"","await_boolean"],[13,1,1,"","await_boxed"],[13,1,1,"","await_double"],[13,1,1,"","await_enum"],[13,1,1,"","await_flags"],[13,1,1,"","await_float"],[13,1,1,"","await_int"],[13,1,1,"","await_int64"],[13,1,1,"","await_object"],[13,1,1,"","await_pointer"],[13,1,1,"","await_string"],[13,1,1,"","await_uint"],[13,1,1,"","await_uint64"],[13,1,1,"","await_variant"],[13,1,1,"","catch"],[13,1,1,"","catch_loop"],[13,1,1,"","disown"],[13,1,1,"","finally_"],[13,1,1,"","finally_loop"],[13,1,1,"","first"],[13,1,1,"","get_name"],[13,1,1,"","get_status"],[13,1,1,"","get_value"],[13,1,1,"","new_for_boolean"],[13,1,1,"","new_for_double"],[13,1,1,"","new_for_errno"],[13,1,1,"","new_for_error"],[13,1,1,"","new_for_float"],[13,1,1,"","new_for_int"],[13,1,1,"","new_for_int64"],[13,1,1,"","new_for_object"],[13,1,1,"","new_for_pointer"],[13,1,1,"","new_for_string"],[13,1,1,"","new_for_uint"],[13,1,1,"","new_for_uint64"],[13,1,1,"","new_for_value"],[13,1,1,"","new_infinite"],[13,1,1,"","new_take_object"],[13,1,1,"","new_take_string"],[13,1,1,"","then"],[13,1,1,"","then_loop"]],"Dex.FutureSet":[[14,1,1,"","get_future_at"],[14,1,1,"","get_size"],[14,1,1,"","get_value_at"]],"Dex.FutureStatus":[[23,2,1,"","PENDING"],[23,2,1,"","REJECTED"],[23,2,1,"","RESOLVED"]],"Dex.Object":[[16,1,1,"","ref"],[16,1,1,"","unref"]],"Dex.Promise":[[17,1,1,"","get_cancellable"],[17,1,1,"","new"],[17,1,1,"","new_cancellable"],[17,1,1,"","reject"],[17,1,1,"","resolve"],[17,1,1,"","resolve_boolean"],[17,1,1,"","resolve_double"],[17,1,1,"","resolve_float"],[17,1,1,"","resolve_int"],[17,1,1,"","resolve_int64"],[17,1,1,"","resolve_long"],[17,1,1,"","resolve_object"],[17,1,1,"","resolve_string"],[17,1,1,"","resolve_uint"],[17,1,1,"","resolve_uint64"],[17,1,1,"","resolve_ulong"]],"Dex.Scheduler":[[18,1,1,"","get_default"],[18,1,1,"","get_main_context"],[18,1,1,"","get_thread_default"],[18,1,1,"","push"],[18,1,1,"","ref_thread_default"],[18,1,1,"","spawn"]],"Dex.ThreadPoolScheduler":[[20,1,1,"","get_default"],[20,1,1,"","new"]],"Dex.Timeout":[[21,1,1,"","new_deadline"],[21,1,1,"","new_msec"],[21,1,1,"","new_seconds"],[21,1,1,"","new_usec"],[21,1,1,"","postpone_until"]],"Dex.UnixSignal":[[22,1,1,"","get_signum"],[22,1,1,"","new"]],Dex:[[3,0,1,"","AioContext"],[4,0,1,"","AsyncPair"],[5,0,1,"","AsyncPairInfo"],[6,0,1,"","AsyncResult"],[7,0,1,"","AsyncResultClass"],[8,0,1,"","Block"],[23,0,1,"","BlockKind"],[9,0,1,"","Cancellable"],[10,0,1,"","Channel"],[11,0,1,"","Delayed"],[23,0,1,"","Error"],[12,0,1,"","Fiber"],[0,3,1,"","FiberFunc"],[13,0,1,"","Future"],[0,3,1,"","FutureCallback"],[14,0,1,"","FutureSet"],[23,0,1,"","FutureStatus"],[15,0,1,"","MainScheduler"],[16,0,1,"","Object"],[17,0,1,"","Promise"],[18,0,1,"","Scheduler"],[0,3,1,"","SchedulerFunc"],[19,0,1,"","StaticFuture"],[20,0,1,"","ThreadPoolScheduler"],[21,0,1,"","Timeout"],[22,0,1,"","UnixSignal"],[24,3,1,"","aio_read"],[24,3,1,"","aio_write"],[24,3,1,"","bus_get"],[24,3,1,"","dbus_connection_call"],[24,3,1,"","dbus_connection_call_with_unix_fd_list"],[24,3,1,"","dbus_connection_send_message_with_reply"],[24,3,1,"","error_quark"],[24,3,1,"","file_copy"],[24,3,1,"","file_enumerate_children"],[24,3,1,"","file_enumerator_next_files"],[24,3,1,"","file_load_contents_bytes"],[24,3,1,"","file_make_directory"],[24,3,1,"","file_query_info"],[24,3,1,"","file_read"],[24,3,1,"","file_replace"],[24,3,1,"","get_min_stack_size"],[24,3,1,"","get_page_size"],[24,3,1,"","init"],[24,3,1,"","input_stream_close"],[24,3,1,"","input_stream_read"],[24,3,1,"","input_stream_read_bytes"],[24,3,1,"","input_stream_skip"],[24,3,1,"","io_stream_close"],[24,3,1,"","output_stream_close"],[24,3,1,"","output_stream_splice"],[24,3,1,"","output_stream_write"],[24,3,1,"","output_stream_write_bytes"],[24,3,1,"","resolver_lookup_by_name"],[24,3,1,"","socket_client_connect"],[24,3,1,"","socket_listener_accept"],[24,3,1,"","subprocess_wait_check"],[24,3,1,"","value_get_object"],[24,3,1,"","value_set_object"],[24,3,1,"","value_take_object"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:function"},terms:{"0":[4,10,13,18,23,24],"1":[6,23,24],"10":23,"2":[4,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,26],"3":[6,23],"37":6,"4":[4,6,13,23,24],"45":[4,8,9,11,12,14,17,19,21,22],"5":[6,23],"6":[15,20,23],"7":[6,23],"8":23,"9":23,"abstract":[4,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"byte":[18,24],"case":13,"catch":[0,13,23,27],"class":[3,5,7,23,26],"default":[18,20,24],"do":13,"enum":[13,26],"final":[23,27],"float":[6,13,17],"function":[0,4,10,11,13,18,20,26],"int":[4,6,10,13,14,17,18,21,22,24],"new":[4,6,9,10,11,13,17,20,22,24,27],"return":[0,4,6,8,9,10,11,13,14,16,17,18,20,21,22,24],"true":13,A:0,For:[13,18],If:[4,10,13,16,17,18],It:[13,26],No:[4,6,8,9,10,11,12,13,14,15,17,19,20,21,22],THEN:[23,27],The:[0,4,8,10,13,18,24],To:13,Will:10,access:[5,7],acquir:[16,24],addition:26,address:24,after:11,again:0,aio_context:24,aio_read:[24,27],aio_writ:[24,27],aiocontext:[24,27,28],all:[0,10,13,16,27],all_rac:[13,27],allow:[13,20,26],also:13,among:18,an:[10,13,20,24],ani:[13,27],anoth:[0,13],api:[4,17,22],applic:[18,26],ar:[4,10,14,16,26],around:17,arrai:13,associ:[0,14,16],async:4,async_:5,asynchron:[10,13,24,26],asyncpair:[2,13,25,27],asyncpairinfo:[4,27,28],asyncreadycallback:[4,6,17],asyncresult:[2,25,27],asyncresultclass:[1,6,27],attempt:10,attribut:24,automat:4,avail:[6,10],await:[4,13,24],await_:[6,13,27],await_boolean:[13,27],await_box:[13,27],await_doubl:[13,27],await_enum:[13,27],await_flag:[13,27],await_float:[13,27],await_int64:[13,27],await_int:[13,27],await_object:[13,27],await_point:[13,27],await_str:[13,27],await_uint64:[13,27],await_uint:[13,27],await_vari:[13,27],base:[4,6,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,26],basic:16,becom:13,been:[10,17],befor:11,behavior:13,between:17,block:[0,2,13,16,25,27],blockkind:[8,23,27],bool:[4,6,10,13,17,24],both:[8,26],box:13,buffer:[10,24],build:16,bus_get:[24,27],bus_nam:24,bus_typ:24,bustyp:24,c:27,call:[4,6,11,13,18,24,26],call_with_unix_fd_list:24,callback:[6,13,18,26],callback_data:13,caller:4,can:[0,10,11,13,17,24],can_rec:[10,27],can_send:[10,27],cancel:[2,4,6,13,17,25,27],cancel_on_discard:4,capac:10,catch_loop:[13,27],caus:13,chang:13,channel:[2,16,25,27],channel_clos:[10,23,27],classmethod:[4,6,9,10,11,13,17,18,20,21,22],cleanli:24,close:10,close_rec:[10,27],close_send:[10,27],closur:[0,13,18],code:[13,26],complet:[0,4,6,13,18,22,24],connect:24,consum:10,contain:[10,14,17,24],context:18,cooper:[0,18],coordin:20,copi:24,count:[16,18,24],creat:[0,10,13,17,20,22,24],current:13,data:[0,13,18],dbus_connection_cal:[24,27],dbus_connection_call_with_unix_fd_list:[24,27],dbus_connection_send_message_with_repli:[24,27],dbuscallflag:24,dbusconnect:24,dbusmessag:24,dbussendmessageflag:24,deadlin:21,debian:26,decreas:16,defer:26,defin:16,delai:[2,13,25,27],deliv:22,depend:[13,18,26],dependency_fail:[23,27],depth:10,descript:[5,7,26],destin:24,determin:14,dex:[0,1,2,23,24,25,27,28],dex_aio_read:27,dex_aio_writ:27,dex_async_pair_get_cancel:27,dex_async_pair_new:27,dex_async_pair_return_boolean:27,dex_async_pair_return_box:27,dex_async_pair_return_error:27,dex_async_pair_return_int64:27,dex_async_pair_return_object:27,dex_async_pair_return_str:27,dex_async_pair_return_uint64:27,dex_async_pair_return_vari:27,dex_async_pair_set_cancel_on_discard:27,dex_async_result_await:27,dex_async_result_dup_futur:27,dex_async_result_get_nam:27,dex_async_result_new:27,dex_async_result_propagate_boolean:27,dex_async_result_propagate_doubl:27,dex_async_result_propagate_int:27,dex_async_result_propagate_point:27,dex_async_result_set_nam:27,dex_async_result_set_prior:27,dex_async_result_set_static_nam:27,dex_await:[0,27],dex_await_boolean:27,dex_await_box:27,dex_await_doubl:27,dex_await_enum:27,dex_await_flag:27,dex_await_float:27,dex_await_int64:27,dex_await_int:27,dex_await_object:27,dex_await_point:27,dex_await_str:27,dex_await_uint64:27,dex_await_uint:27,dex_await_vari:27,dex_block_get_kind:27,dex_block_get_schedul:27,dex_block_kind_catch:27,dex_block_kind_fin:27,dex_block_kind_then:27,dex_bus_get:27,dex_cancellable_cancel:27,dex_cancellable_new:27,dex_cancellable_new_from_cancel:27,dex_channel_can_rec:27,dex_channel_can_send:27,dex_channel_close_rec:27,dex_channel_close_send:27,dex_channel_new:27,dex_channel_rec:27,dex_channel_receive_al:27,dex_channel_send:27,dex_dbus_connection_cal:27,dex_dbus_connection_call_with_unix_fd_list:27,dex_dbus_connection_send_message_with_repli:27,dex_delayed_dup_futur:27,dex_delayed_new:27,dex_delayed_releas:27,dex_error_channel_clos:27,dex_error_dependency_fail:27,dex_error_fiber_cancel:27,dex_error_fiber_exit:27,dex_error_no_fib:27,dex_error_pend:27,dex_error_quark:27,dex_error_semaphore_clos:27,dex_error_timed_out:27,dex_error_type_mismatch:27,dex_error_type_not_support:27,dex_error_unknown:27,dex_file_copi:27,dex_file_enumerate_children:27,dex_file_enumerator_next_fil:27,dex_file_load_contents_byt:27,dex_file_make_directori:27,dex_file_query_info:27,dex_file_read:27,dex_file_replac:27,dex_future_al:27,dex_future_all_rac:27,dex_future_all_racev:27,dex_future_allv:27,dex_future_ani:27,dex_future_anyv:27,dex_future_catch:27,dex_future_catch_loop:27,dex_future_disown:27,dex_future_fin:27,dex_future_finally_loop:27,dex_future_first:27,dex_future_firstv:27,dex_future_get_nam:27,dex_future_get_statu:27,dex_future_get_valu:27,dex_future_new_for_boolean:27,dex_future_new_for_doubl:27,dex_future_new_for_errno:27,dex_future_new_for_error:27,dex_future_new_for_float:27,dex_future_new_for_int64:27,dex_future_new_for_int:27,dex_future_new_for_object:27,dex_future_new_for_point:27,dex_future_new_for_str:27,dex_future_new_for_uint64:27,dex_future_new_for_uint:27,dex_future_new_for_valu:27,dex_future_new_infinit:27,dex_future_new_reject:27,dex_future_new_take_box:27,dex_future_new_take_object:27,dex_future_new_take_str:27,dex_future_new_take_vari:27,dex_future_set_get_future_at:27,dex_future_set_get_s:27,dex_future_set_get_value_at:27,dex_future_set_static_nam:27,dex_future_status_pend:27,dex_future_status_reject:27,dex_future_status_resolv:27,dex_future_then:27,dex_future_then_loop:27,dex_get_min_stack_s:27,dex_get_page_s:27,dex_init:27,dex_input_stream_clos:27,dex_input_stream_read:27,dex_input_stream_read_byt:27,dex_input_stream_skip:27,dex_io_stream_clos:27,dex_output_stream_clos:27,dex_output_stream_splic:27,dex_output_stream_writ:27,dex_output_stream_write_byt:27,dex_promise_get_cancel:27,dex_promise_new:27,dex_promise_new_cancel:27,dex_promise_reject:27,dex_promise_resolv:27,dex_promise_resolve_boolean:27,dex_promise_resolve_doubl:27,dex_promise_resolve_float:27,dex_promise_resolve_int64:27,dex_promise_resolve_int:27,dex_promise_resolve_long:27,dex_promise_resolve_object:27,dex_promise_resolve_str:27,dex_promise_resolve_uint64:27,dex_promise_resolve_uint:27,dex_promise_resolve_ulong:27,dex_ref:27,dex_resolver_lookup_by_nam:27,dex_scheduler_get_default:27,dex_scheduler_get_main_context:27,dex_scheduler_get_thread_default:27,dex_scheduler_push:27,dex_scheduler_ref_thread_default:27,dex_scheduler_spawn:[0,27],dex_socket_client_connect:27,dex_socket_listener_accept:27,dex_subprocess_wait_check:27,dex_thread_pool_scheduler_get_default:27,dex_thread_pool_scheduler_new:27,dex_timeout_new_deadlin:27,dex_timeout_new_msec:27,dex_timeout_new_second:27,dex_timeout_new_usec:27,dex_timeout_postpone_until:27,dex_type_object:24,dex_unix_signal_get_signum:27,dex_unix_signal_new:27,dex_unref:27,dex_value_get_object:27,dex_value_set_object:27,dex_value_take_object:27,dexaiocontext:27,dexasyncpair:27,dexasyncpairinfo:27,dexasyncresult:27,dexasyncresultclass:27,dexblock:27,dexblockkind:27,dexcancel:27,dexchannel:27,dexdelai:27,dexerror:27,dexfib:27,dexfiberfunc:27,dexfutur:27,dexfuturecallback:27,dexfutureset:27,dexfuturestatu:27,dexmainschedul:27,dexobject:[16,24,27],dexpromis:27,dexresultset:10,dexschedul:27,dexschedulerfunc:27,dexstaticfutur:27,dexthreadpoolschedu:18,dexthreadpoolschedul:27,dextimeout:27,dexunixsign:27,differ:18,directori:24,discard:[4,17],disown:[13,27],doe:10,domain:13,doubl:13,dup_futur:[6,11,27],each:[10,13],either:13,end:10,enough:10,environ:0,errno:13,errno_:13,error:[4,6,10,13,14,17,23,24,27],error_quark:[24,27],etag:24,even:13,eventu:[6,10],exampl:[13,18],except:13,execut:[0,8,13,18,20,26],exist:26,exit:[0,24],expect:0,explicit:26,failur:[13,17,24],fals:13,fd:24,fd_list:24,featur:[0,16],fiber:[0,2,13,18,25,26,27],fiber_cancel:[23,27],fiber_exit:[23,27],fiberfunc:[0,27],file:24,file_copi:[24,27],file_enumer:24,file_enumerate_children:[24,27],file_enumerator_next_fil:[24,27],file_load_contents_byt:[24,27],file_make_directori:[24,27],file_query_info:[24,27],file_read:[24,27],file_replac:[24,27],filecopyflag:24,filecreateflag:24,fileenumer:24,filequeryinfoflag:24,finally_:[0,13,27],finally_loop:[13,27],finish:5,first:[13,27],flag:[13,24],foreach:13,forev:13,freed:16,from:[0,10,13,14,16,18,26],func:18,func_data:18,futur:[0,2,4,6,8,9,10,11,12,14,16,17,18,19,21,22,24,25,26,27],futurecallback:[0,13,27],futureset:[2,10,13,24,25,27],futurestatu:[13,23,27],g_io_error:13,g_maxint:24,genum:23,get:[4,6,8,14,17,18,20],get_cancel:[4,17,27],get_default:[18,20,27],get_future_at:[14,24,27],get_kind:[8,27],get_main_context:[18,27],get_min_stack_s:[24,27],get_nam:[6,13,27],get_page_s:[24,27],get_point:13,get_schedul:[8,27],get_signum:[22,27],get_siz:[14,27],get_statu:[13,27],get_thread_default:[18,27],get_valu:[13,27],get_value_at:[14,27],ginterfac:6,gio:[4,6,9,16,17,24,26],gir1:26,gitlab:26,give:18,given:[0,16,24],glib:[4,6,13,14,17,18,23,24],gnome:26,goal:26,gobject:[4,5,6,7,13,14,17,23,24,25],gtk:26,gtype:5,gvalu:24,ha:[10,13,17],handl:[0,8,13],happen:4,have:[10,13,18,20],hierarchi:26,homepag:26,howev:18,http:26,immedi:13,implement:[17,26],increas:16,increment:18,index:24,indic:17,individu:14,infinit:13,info:4,inherit:[4,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],init:[24,27],initi:24,input:24,input_stream_clos:[24,27],input_stream_read:[24,27],input_stream_read_byt:[24,27],input_stream_skip:[24,27],inputstream:24,insid:24,instanc:[4,16,20],instead:16,int64:13,integr:[16,26],interest:13,interface_nam:24,intermedi:13,invalid:13,io:24,io_prior:24,io_stream:24,io_stream_clos:[24,27],iostream:24,item:[10,20],its:16,kind:8,kwarg:6,last:16,libdex:[16,26],librari:[20,26],lightweight:0,like:[16,22],limit:10,listen:24,local:13,locat:24,longer:17,look:26,loop:13,low:10,mai:[13,14,18],main:[18,20],maincontext:18,mainschedul:[2,18,25,27],make_backup:24,manag:16,manual:[4,17],map:26,mark:17,meant:4,memori:16,messag:24,method_nam:24,millisecond:24,mock:13,more:[4,10],msec:21,multipl:13,multitask:0,must:[13,22],name:[5,6,7],natur:16,nearest:18,necessari:17,never:13,new_cancel:[17,27],new_deadlin:[21,27],new_for_boolean:[13,27],new_for_doubl:[13,27],new_for_errno:[13,27],new_for_error:[13,27],new_for_float:[13,27],new_for_int64:[13,27],new_for_int:[13,27],new_for_object:[13,27],new_for_point:[13,27],new_for_str:[13,27],new_for_uint64:[13,27],new_for_uint:[13,27],new_for_valu:[13,27],new_from_cancel:[9,27],new_infinit:[13,27],new_msec:[21,27],new_second:[21,27],new_take_object:[13,27],new_take_str:[13,27],new_usec:[21,27],next:10,no_fib:[13,23,27],non:[10,24],none:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24],num_fil:24,number:[14,22,24],object:[0,2,4,5,6,8,9,10,11,12,13,14,15,17,18,19,20,21,22,24,25,27],object_path:24,objectclass:[6,7],observ:[13,24],obtain:14,occur:13,off:20,offset:24,onc:0,one:[16,22],onli:[11,13,22,26],onto:0,open:24,oper:[4,16],order:10,org:26,other:[10,18],otherwis:[10,13,14,18],out_seri:24,outpac:10,output:24,output_stream_clos:[24,27],output_stream_splic:[24,27],output_stream_writ:[24,27],output_stream_write_byt:[24,27],outputstream:24,outputstreamspliceflag:24,outsid:18,own:[0,18,20],ownership:[4,24],packag:26,page:18,pair:4,paramet:[0,4,6,9,10,11,13,14,17,18,21,22,24],parent:26,parent_class:7,part:[10,14],pend:[23,27],place:0,plumb:17,point:0,pointer:[13,16],pool:20,posit:14,postpone_until:[21,27],pread:24,prim:26,prioriti:[6,24],priority_default:24,process:[18,22],produc:[10,14],program:20,project:26,promis:[2,13,25,26,27],propag:17,propagate_boolean:[6,27],propagate_doubl:[6,27],propagate_int:[6,27],propagate_point:[6,27],prototyp:0,provid:[11,16,26],push:[18,27],pwrite:24,python:27,queue:[0,10,18],r:[5,7],rais:[6,13,14],reach:0,read:[13,24,26],receiv:[10,27],receive_al:[10,27],ref:[16,27],ref_thread_default:[18,27],refer:[16,18,24],regist:6,reject:[0,4,8,10,13,17,18,23,24,27],relat:8,releas:[11,16,27],remov:10,reply_typ:24,request:18,resolut:8,resolv:[0,4,10,13,17,18,23,24,27],resolve_boolean:[17,27],resolve_doubl:[17,27],resolve_float:[17,27],resolve_int64:[17,27],resolve_int:[17,27],resolve_long:[17,27],resolve_object:[17,27],resolve_str:[17,27],resolve_uint64:[17,27],resolve_uint:[17,27],resolve_ulong:[17,27],resolver_lookup_by_nam:[24,27],resourc:16,respons:0,result:[6,10,13,14,17,18,24],resum:13,retriev:[11,24],return_boolean:[4,27],return_error:[4,27],return_int64:[4,27],return_object:[4,27],return_str:[4,27],return_typ:5,return_uint64:[4,27],return_vari:[4,27],round:18,run:[0,13,18],runnabl:0,s:[0,4,18],safe:16,same:13,schaedul:18,schedul:[0,2,8,15,16,20,25,27],schedulerfunc:[0,18,27],second:21,see:0,self:[4,6,13,14,17,18,24],semaphore_clos:[23,27],send:[10,27],send_message_with_repli:24,sensibl:18,serial:24,set:[4,13,14,17,18],set_cancel_on_discard:[4,27],set_nam:[6,27],set_prior:[6,27],set_static_nam:[6,27],shadow:27,share:[13,18,20],should:4,side:10,sighup:22,sigint:22,signal:[22,24],signum:22,sigterm:22,sigusr1:22,sigusr2:22,sigwinch:22,similar:[0,13,24],situat:[8,10,13],size:[10,18],skip:24,so:10,socket_cli:24,socket_client_connect:[24,27],socket_connect:24,socket_listener_accept:[24,27],socketcli:24,socketconnect:24,socketlisten:24,soon:13,sourc:24,source_object:6,spawn:[0,18,27],specif:18,stack:[0,13,18],stack_siz:18,stall:10,staticfutur:[2,13,25,27],storag:13,store:24,str:[4,6,13,17,24],string:[4,13,17],struct:[6,24],structur:[6,26],style:13,subclass:[4,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],subprocess:24,subprocess_wait_check:[24,27],success:[14,24],support:[22,26],suspend:[0,13],suspent:0,symbol:26,synchron:26,system:22,take:13,taken:4,task:18,thei:10,then_loop:[13,27],therefor:17,thi:[0,4,10,11,13,17,18,20,22,24],though:13,thread:[13,16,18,20],threadpoolschedul:[2,18,25,27],through:26,time:13,timed_out:[23,27],timeout:[2,13,24,25,27],timeout_msec:24,track:6,transfer:24,type:[0,4,5,6,7,8,9,10,11,13,14,16,17,18,20,21,22,24],type_box:13,type_enum:13,type_flag:13,type_int64:13,type_int:13,type_mismatch:[23,27],type_not_support:[23,27],type_point:13,type_str:13,type_vari:13,typic:18,uint64:13,uint:13,unavail:27,undefin:13,underneath:26,unix:22,unixfdlist:24,unixsign:[2,13,25,27],unknown:[23,27],unless:13,unlimit:10,unref:[16,27],until:[0,10,13],up:18,upon:24,us:[0,4,6,8,10,13,14,17,20,24,26],usec:21,user_data:[0,6],v_bool:13,v_doubl:13,v_float:13,v_int64:13,v_int:13,v_uint64:13,v_uint:13,valu:[4,6,13,14,17,18,23,24],value_get_object:[24,27],value_set_object:[24,27],value_take_object:[24,27],variant:[4,13,24],varianttyp:24,varieti:26,variou:[4,17],version:[4,13,24],via:0,view:26,w:5,wa:[0,13,14,16,17],wai:[0,13,26],wait_check_async:24,want:13,weak:16,what:8,whatev:0,when:[0,4,8,10,13,17,18,22,24],where:[0,20],whether:4,which:[10,16,24,26],within:[0,13,14,16,18],without:20,work:20,worker:18,would:[8,13],wrap:4,wrapper:[17,24,26],writabl:26,write:[24,26],ye:[16,18],you:[13,14,18],zero:10},titles:["Callbacks","Class Structures","Classes","Dex.AioContext","Dex.AsyncPair","Dex.AsyncPairInfo","Dex.AsyncResult","Dex.AsyncResultClass","Dex.Block","Dex.Cancellable","Dex.Channel","Dex.Delayed","Dex.Fiber","Dex.Future","Dex.FutureSet","Dex.MainScheduler","Dex.Object","Dex.Promise","Dex.Scheduler","Dex.StaticFuture","Dex.ThreadPoolScheduler","Dex.Timeout","Dex.UnixSignal","Enums","Functions","Hierarchy","Dex 1 (0.3.1)","Symbol Mapping","Structures"],titleterms:{"0":26,"1":26,"3":26,"class":[1,2,4,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"enum":23,"function":24,aiocontext:3,api:26,asyncpair:4,asyncpairinfo:5,asyncresult:6,asyncresultclass:7,block:8,callback:0,cancel:9,channel:10,delai:11,detail:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],dex:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,26],fiber:12,field:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],futur:13,futureset:14,hierarchi:25,mainschedul:15,map:27,method:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],object:16,promis:17,properti:6,schedul:18,signal:6,staticfutur:19,structur:[1,28],symbol:27,threadpoolschedul:20,timeout:21,unixsign:22,virtual:[4,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]}})