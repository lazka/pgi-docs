Search.setIndex({docnames:["class-structs","classes","classes/Buffer","classes/BufferInterface","classes/BufferIter","classes/Chunk","classes/ChunkIter","classes/DefaultBuffer","classes/DefaultBufferClass","classes/DefaultDeleteOperation","classes/DefaultDeleteOperationClass","classes/DefaultInsertOperation","classes/DefaultInsertOperationClass","classes/DeleteOperation","classes/DeleteOperationInterface","classes/FixlineBuffer","classes/FixlineBufferClass","classes/InsertOperation","classes/InsertOperationInterface","classes/MoveOperation","classes/MoveOperationClass","classes/RemoteDeleteOperation","classes/RemoteDeleteOperationClass","classes/Session","classes/SessionClass","classes/UndoGrouping","classes/UndoGroupingClass","classes/User","classes/UserClass","enums","functions","hierarchy","iface-structs","index","interfaces","mapping","structs"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:55},filenames:["class-structs.rst","classes.rst","classes/Buffer.rst","classes/BufferInterface.rst","classes/BufferIter.rst","classes/Chunk.rst","classes/ChunkIter.rst","classes/DefaultBuffer.rst","classes/DefaultBufferClass.rst","classes/DefaultDeleteOperation.rst","classes/DefaultDeleteOperationClass.rst","classes/DefaultInsertOperation.rst","classes/DefaultInsertOperationClass.rst","classes/DeleteOperation.rst","classes/DeleteOperationInterface.rst","classes/FixlineBuffer.rst","classes/FixlineBufferClass.rst","classes/InsertOperation.rst","classes/InsertOperationInterface.rst","classes/MoveOperation.rst","classes/MoveOperationClass.rst","classes/RemoteDeleteOperation.rst","classes/RemoteDeleteOperationClass.rst","classes/Session.rst","classes/SessionClass.rst","classes/UndoGrouping.rst","classes/UndoGroupingClass.rst","classes/User.rst","classes/UserClass.rst","enums.rst","functions.rst","hierarchy.rst","iface-structs.rst","index.rst","interfaces.rst","mapping.rst","structs.rst"],objects:{"InfText.Buffer":{create_begin_iter:[2,1,1,""],create_end_iter:[2,1,1,""],destroy_iter:[2,1,1,""],do_create_begin_iter:[2,1,1,""],do_create_end_iter:[2,1,1,""],do_destroy_iter:[2,1,1,""],do_erase_text:[2,1,1,""],do_get_encoding:[2,1,1,""],do_get_length:[2,1,1,""],do_get_slice:[2,1,1,""],do_insert_text:[2,1,1,""],do_iter_get_author:[2,1,1,""],do_iter_get_bytes:[2,1,1,""],do_iter_get_length:[2,1,1,""],do_iter_get_offset:[2,1,1,""],do_iter_get_text:[2,1,1,""],do_iter_next:[2,1,1,""],do_iter_prev:[2,1,1,""],do_text_erased:[2,1,1,""],do_text_inserted:[2,1,1,""],erase_text:[2,1,1,""],get_encoding:[2,1,1,""],get_length:[2,1,1,""],get_slice:[2,1,1,""],insert_chunk:[2,1,1,""],insert_text:[2,1,1,""],iter_get_author:[2,1,1,""],iter_get_bytes:[2,1,1,""],iter_get_length:[2,1,1,""],iter_get_offset:[2,1,1,""],iter_get_text:[2,1,1,""],iter_next:[2,1,1,""],iter_prev:[2,1,1,""],text_erased:[2,1,1,""],text_inserted:[2,1,1,""]},"InfText.Buffer.signals":{text_erased:[2,2,1,""],text_inserted:[2,2,1,""]},"InfText.Chunk":{"new":[5,3,1,""],copy:[5,1,1,""],equal:[5,1,1,""],erase:[5,1,1,""],free:[5,1,1,""],get_encoding:[5,1,1,""],get_length:[5,1,1,""],get_text:[5,1,1,""],insert_chunk:[5,1,1,""],insert_text:[5,1,1,""],iter_init_begin:[5,1,1,""],iter_init_end:[5,1,1,""],substring:[5,1,1,""]},"InfText.ChunkIter":{copy:[6,1,1,""],free:[6,1,1,""],get_author:[6,1,1,""],get_bytes:[6,1,1,""],get_length:[6,1,1,""],get_offset:[6,1,1,""],get_text:[6,1,1,""],next:[6,1,1,""],prev:[6,1,1,""]},"InfText.DefaultBuffer":{"new":[7,3,1,""]},"InfText.DefaultBuffer.props":{encoding:[7,4,1,""]},"InfText.DefaultDeleteOperation":{"new":[9,3,1,""],get_chunk:[9,1,1,""]},"InfText.DefaultDeleteOperation.props":{chunk:[9,4,1,""],position:[9,4,1,""]},"InfText.DefaultInsertOperation":{"new":[11,3,1,""],get_chunk:[11,1,1,""]},"InfText.DefaultInsertOperation.props":{chunk:[11,4,1,""],position:[11,4,1,""]},"InfText.DeleteOperation":{do_get_length:[13,1,1,""],do_get_position:[13,1,1,""],get_length:[13,1,1,""],get_position:[13,1,1,""],need_concurrency_id:[13,1,1,""],transform_delete:[13,1,1,""],transform_insert:[13,1,1,""]},"InfText.FilesystemFormatError":{NOT_A_TEXT_SESSION:[29,5,1,""],NO_SUCH_USER:[29,5,1,""],USER_EXISTS:[29,5,1,""]},"InfText.FixlineBuffer":{"new":[15,3,1,""]},"InfText.FixlineBuffer.props":{buffer:[15,4,1,""],io:[15,4,1,""],lines:[15,4,1,""]},"InfText.InsertOperation":{do_get_length:[17,1,1,""],do_get_position:[17,1,1,""],get_length:[17,1,1,""],get_position:[17,1,1,""],need_concurrency_id:[17,1,1,""],transform_delete:[17,1,1,""],transform_insert:[17,1,1,""]},"InfText.MoveOperation":{"new":[19,3,1,""],get_length:[19,1,1,""],get_position:[19,1,1,""],transform_delete:[19,3,1,""],transform_insert:[19,3,1,""]},"InfText.MoveOperation.props":{length:[19,4,1,""],position:[19,4,1,""]},"InfText.OperationError":{FAILED:[29,5,1,""],INVALID_DELETE:[29,5,1,""],INVALID_INSERT:[29,5,1,""],INVALID_MOVE:[29,5,1,""]},"InfText.RemoteDeleteOperation":{"new":[21,3,1,""]},"InfText.RemoteDeleteOperation.props":{length:[21,4,1,""],position:[21,4,1,""]},"InfText.Session":{"new":[23,3,1,""],flush_requests_for_user:[23,1,1,""],join_user:[23,3,1,""],new_with_user_table:[23,3,1,""],set_user_color:[23,1,1,""]},"InfText.Session.props":{caret_update_interval:[23,4,1,""]},"InfText.SessionError":{FAILED:[29,5,1,""],INVALID_HUE:[29,5,1,""]},"InfText.UndoGrouping":{"new":[25,3,1,""]},"InfText.User":{"new":[27,3,1,""],do_selection_changed:[27,1,1,""],get_caret_position:[27,1,1,""],get_hue:[27,1,1,""],get_selection_length:[27,1,1,""],set_selection:[27,1,1,""]},"InfText.User.props":{caret_position:[27,4,1,""],hue:[27,4,1,""],selection_length:[27,4,1,""]},"InfText.User.signals":{selection_changed:[27,2,1,""]},InfText:{Buffer:[2,0,1,""],BufferInterface:[3,0,1,""],BufferIter:[4,0,1,""],Chunk:[5,0,1,""],ChunkIter:[6,0,1,""],DefaultBuffer:[7,0,1,""],DefaultBufferClass:[8,0,1,""],DefaultDeleteOperation:[9,0,1,""],DefaultDeleteOperationClass:[10,0,1,""],DefaultInsertOperation:[11,0,1,""],DefaultInsertOperationClass:[12,0,1,""],DeleteOperation:[13,0,1,""],DeleteOperationInterface:[14,0,1,""],FilesystemFormatError:[29,0,1,""],FixlineBuffer:[15,0,1,""],FixlineBufferClass:[16,0,1,""],InsertOperation:[17,0,1,""],InsertOperationInterface:[18,0,1,""],MoveOperation:[19,0,1,""],MoveOperationClass:[20,0,1,""],OperationError:[29,0,1,""],RemoteDeleteOperation:[21,0,1,""],RemoteDeleteOperationClass:[22,0,1,""],Session:[23,0,1,""],SessionClass:[24,0,1,""],SessionError:[29,0,1,""],UndoGrouping:[25,0,1,""],UndoGroupingClass:[26,0,1,""],User:[27,0,1,""],UserClass:[28,0,1,""],filesystem_format_read:[30,2,1,""],filesystem_format_write:[30,2,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","function","Python function"],"3":["py","classmethod","Python class method"],"4":["py","data","Python data"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:function","3":"py:classmethod","4":"py:data","5":"py:attribute"},terms:{"abstract":[7,9,11,15,19,21,23,25,27],"byte":[2,5,6],"case":23,"class":[3,4,5,6,8,10,12,14,16,18,20,22,24,26,28,29,33],"const":5,"default":[7,9,11,15,19,21,23,27],"enum":33,"float":[23,27],"function":[2,3,4,5,6,13,15,17,23,25,33],"int":[2,5,6,9,11,13,15,17,19,21,23,27],"long":[2,5,6],"new":[2,5,7,9,11,13,15,17,19,21,23,25,27,30,35],"public":[2,4,5,6,13,15,16,17,25],"return":[2,5,6,7,9,11,13,15,17,19,21,23,25,27,30],"short":[2,7,9,11,15,19,21,23,27],"true":[19,27,30],The:[2,5,6,7,9,11,13,15,17,19,21,23,27,29,30],There:6,Use:6,_not_:5,access:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],activ:[23,27],actual:27,add:27,addit:23,adoptedconcurrencyid:17,adoptedoper:[9,11,13,17,19,21],adoptedsess:[23,31],adoptedsessionclass:24,adoptedstatevector:27,adoptedundogroup:[25,31],adoptedundogroupingclass:26,adoptedus:[27,31],adopteduserclass:28,after:[23,29],ag_lc:17,against:[13,17],all:[2,6,23,27,33],alloc:[5,6],allow:5,alreadi:[2,6],amount:2,ani:[16,23],anoth:[2,5,13,17,23,27],api:[2,4,5,6,13,15,17,25],appli:[9,11,19,21,29,33],apply_transform:21,arrai:[2,5],attempt:29,author:[2,5,6],automat:23,avail:23,back:30,bandwidth:[21,23],base:[2,7,9,11,13,15,17,19,21,23,25,27,29,33],becaus:[6,21,27],becom:23,been:30,befor:[2,23,27,30],begin:[2,5,19,27],behind:29,belong:23,below:23,between:23,binari:5,bind:6,bool:[2,5,6,13,17,19,27,30],bound:19,broadcast:23,buffer:[3,5,7,9,15,19,23,27,29,30,33,34,35],bufferinterfac:[2,32,35],bufferit:[2,35,36],build:33,by_request:27,call:[2,23],can:[6,21,29,30],cannot:[9,23],caret:[19,23,27],caret_posit:[23,27],caret_update_interv:23,central:33,chang:[6,19,23,27,33],charact:[2,5,6,7,9,13,19,21,27],chosen:27,chunk:[2,6,9,11,35,36],chunkit:[5,35,36],cid:17,classmethod:[5,7,9,11,15,19,21,23,25,27],client:[27,33],code:29,collabor:33,color:[23,27],commun:23,communicationgroup:23,communicationmanag:23,communicationobject:23,complet:23,compon:27,concurr:[13,17],connect:23,consist:2,construct:[23,27],construct_onli:[7,9,11,15,19,21],contain:[2,3,5,14,16,23,29],content:[2,5,23],copi:[5,6,35],count:15,creat:[2,5,7,9,11,15,19,21,23,25,27,30],create_begin_it:[2,3,35],create_end_it:[2,3,35],current:19,cursor:[19,23,27,29],data:[2,4,5,6,13,15,17,23,25],debian:33,defaultbuff:[1,2,31,35],defaultbufferclass:[0,7,35],defaultdeleteoper:[1,13,21,31,35],defaultdeleteoperationclass:[0,9,35],defaultinsertoper:[1,17,31,35],defaultinsertoperationclass:[0,11,35],deiniti:6,delai:23,delet:[2,9,13,19,21,29],delete_length:19,delete_posit:19,deleteoper:[9,14,17,21,29,34,35],deleteoperationinterfac:[13,32,35],depend:[19,33],descript:[2,3,6,7,8,9,10,11,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,33],destroi:2,destroy_it:[2,3,35],detect:23,dext:13,differ:23,displai:27,do_create_begin_it:2,do_create_end_it:2,do_destroy_it:2,do_erase_text:2,do_get_encod:2,do_get_length:[2,13,17],do_get_posit:[13,17],do_get_slic:2,do_insert_text:2,do_iter_get_author:2,do_iter_get_byt:2,do_iter_get_length:2,do_iter_get_offset:2,do_iter_get_text:2,do_iter_next:2,do_iter_prev:2,do_selection_chang:27,do_text_eras:2,do_text_insert:2,document:[29,30],doe:[16,21,29],done:[2,33],doubl:27,duplic:[27,29],dure:23,dynam:6,each:[2,27],easier:21,edit:33,editor:33,effect:[13,17,27],emit:2,empti:[2,5,7,23,30],encod:[2,5,6,7],end:29,enlarg:19,equal:[5,35],eras:[2,5,35],erase_text:[2,3,35],error:[29,30],even:[2,33],exampl:27,exist:29,expect:[2,5,30],explicitli:27,extract:[2,5],fail:[29,30,35],fals:[2,5,6,27,30],file:[29,30],filesystem:30,filesystem_format_read:[30,35],filesystem_format_writ:[30,35],filesystemformaterror:[29,35],filesystemstorag:[29,30],first:[2,5,6],fix:15,fixlinebuff:[1,2,31,35],fixlinebufferclass:[0,15,35],flag:[2,7,9,11,15,19,21,23,27],flush:23,flush_requests_for_us:[23,35],free:[2,5,6,27,35],freed:[2,25],frequent:23,from:[2,5,19,21,23,27,29,30],func:23,further:[13,17,29],get_author:[6,35],get_byt:[6,35],get_caret_posit:[27,35],get_chunk:[9,11,35],get_encod:[2,3,5,35],get_hu:[27,35],get_length:[2,3,5,6,13,14,17,18,19,35],get_offset:[6,35],get_posit:[13,14,17,18,19,35],get_selection_length:[27,35],get_slic:[2,3,35],get_text:[5,6,35],ginterfac:[2,7,9,11,13,15,17,19,21,23],gir1:33,github:33,given:[5,15,17,30],glib:[2,5,6,29,30],gobbi:33,gobject:[2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,27,31],graviti:19,group:23,gtk:33,guint8:[2,5],handler:3,happen:2,has:[2,6,27],have:[5,19,23,30],hierarchi:33,his:33,hold:5,homepag:33,howev:[6,21],http:33,hue:[23,27],ignor:23,immedi:23,implement:[2,13,17],inact:23,includ:[13,17],individu:[27,33],indivudu:27,inf_text_buffer_create_begin_it:35,inf_text_buffer_create_end_it:35,inf_text_buffer_destroy_it:35,inf_text_buffer_erase_text:35,inf_text_buffer_get_encod:35,inf_text_buffer_get_length:35,inf_text_buffer_get_slic:35,inf_text_buffer_insert_chunk:35,inf_text_buffer_insert_text:35,inf_text_buffer_iter_get_author:35,inf_text_buffer_iter_get_byt:35,inf_text_buffer_iter_get_length:35,inf_text_buffer_iter_get_offset:35,inf_text_buffer_iter_get_text:35,inf_text_buffer_iter_next:35,inf_text_buffer_iter_prev:35,inf_text_buffer_text_eras:35,inf_text_buffer_text_insert:35,inf_text_chunk_copi:35,inf_text_chunk_equ:35,inf_text_chunk_eras:35,inf_text_chunk_fre:35,inf_text_chunk_get_encod:35,inf_text_chunk_get_length:35,inf_text_chunk_get_text:35,inf_text_chunk_insert_chunk:35,inf_text_chunk_insert_text:35,inf_text_chunk_iter_copi:35,inf_text_chunk_iter_fre:35,inf_text_chunk_iter_get_author:35,inf_text_chunk_iter_get_byt:35,inf_text_chunk_iter_get_length:35,inf_text_chunk_iter_get_offset:35,inf_text_chunk_iter_get_text:35,inf_text_chunk_iter_init_begin:35,inf_text_chunk_iter_init_end:35,inf_text_chunk_iter_next:35,inf_text_chunk_iter_prev:35,inf_text_chunk_new:35,inf_text_chunk_substr:35,inf_text_default_buffer_new:35,inf_text_default_delete_operation_get_chunk:35,inf_text_default_delete_operation_new:35,inf_text_default_insert_operation_get_chunk:35,inf_text_default_insert_operation_new:35,inf_text_delete_operation_get_length:35,inf_text_delete_operation_get_posit:35,inf_text_delete_operation_need_concurrency_id:35,inf_text_delete_operation_transform_delet:35,inf_text_delete_operation_transform_insert:35,inf_text_filesystem_format_error_no_such_us:35,inf_text_filesystem_format_error_not_a_text_sess:35,inf_text_filesystem_format_error_user_exist:35,inf_text_filesystem_format_read:35,inf_text_filesystem_format_writ:35,inf_text_fixline_buffer_new:35,inf_text_insert_operation_get_length:35,inf_text_insert_operation_get_posit:35,inf_text_insert_operation_need_concurrency_id:35,inf_text_insert_operation_transform_delet:35,inf_text_insert_operation_transform_insert:35,inf_text_move_operation_get_length:35,inf_text_move_operation_get_posit:35,inf_text_move_operation_new:35,inf_text_move_operation_transform_delet:35,inf_text_move_operation_transform_insert:35,inf_text_operation_error_fail:35,inf_text_operation_error_invalid_delet:35,inf_text_operation_error_invalid_insert:35,inf_text_operation_error_invalid_mov:35,inf_text_remote_delete_operation_new:35,inf_text_session_error_fail:35,inf_text_session_error_invalid_hu:35,inf_text_session_flush_requests_for_us:35,inf_text_session_join_us:35,inf_text_session_new:35,inf_text_session_new_with_user_t:35,inf_text_session_set_user_color:35,inf_text_undo_grouping_new:35,inf_text_user_get_caret_posit:35,inf_text_user_get_hu:35,inf_text_user_get_selection_length:35,inf_text_user_new:35,inf_text_user_set_select:35,infin:[2,7,9,11,13,15,17,19,21,23,24,25,26,27,28,30,31,33],infinityd:[29,30,33],infinot:33,inform:[13,17],inftext:[0,1,29,30,31,32,34,35,36],inftextbuff:35,inftextbufferinterfac:35,inftextbufferit:35,inftextchunk:35,inftextchunkit:35,inftextdefaultbuff:35,inftextdefaultbufferclass:35,inftextdefaultdeleteoper:35,inftextdefaultdeleteoperationclass:35,inftextdefaultinsertoper:35,inftextdefaultinsertoperationclass:35,inftextdeleteoper:35,inftextdeleteoperationinterfac:35,inftextfilesystemformaterror:35,inftextfixlinebuff:35,inftextfixlinebufferclass:35,inftextinsertoper:35,inftextinsertoperationinterfac:35,inftextmoveoper:35,inftextmoveoperationclass:35,inftextoperationerror:35,inftextremotedeleteoper:35,inftextremotedeleteoperationclass:35,inftextsess:35,inftextsessionclass:35,inftextsessionerror:35,inftextundogroup:35,inftextundogroupingclass:35,inftextus:35,inftextuserclass:35,inherit:[7,9,11,15,19,21,23,25,27],initi:[5,6,23],insert:[2,5,11,17,19,27,29],insert_chunk:[2,5,35],insert_length:19,insert_posit:19,insert_text:[2,3,5,35],insertoper:[11,13,29,34,35],insertoperationinterfac:[17,32,35],instantli:33,interfac:[2,3,14,33],interv:23,invalid_delet:[29,35],invalid_hu:[29,35],invalid_insert:[29,35],invalid_mov:[29,35],involv:33,issu:23,iter:[2,5],iter_get_author:[2,3,35],iter_get_byt:[2,3,35],iter_get_length:[2,3,35],iter_get_offset:[2,3,35],iter_get_text:[2,3,35],iter_init_begin:[5,6,35],iter_init_end:[5,6,35],iter_next:[2,3,35],iter_prev:[2,3,35],join:23,join_us:[23,35],just:[21,23,27],keep:15,kept:[15,19],keyboard:27,know:21,kwarg:[7,9,11,15,19,21,23,25,27],languag:6,last:[2,5,6],latin1:5,left:[2,5,19],left_grav:19,len:2,length:[2,5,13,17,19,21,23,27],libinfin:33,librari:33,light:27,line:15,local:[23,33],longer:[5,27],mai:[2,23,27],main:23,make:6,manag:23,map:33,mean:[2,19,23,27],meant:2,merg:33,messag:23,might:6,millisecond:23,minimum:23,modifi:[6,23],mous:27,move:[2,19,27,29],move_length:19,move_posit:19,movement:23,moveoper:[1,29,31,35],moveoperationclass:[0,19,35],multipl:2,must:[2,5,6,23],n_line:15,name:[2,3,6,7,8,9,10,11,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29],necessarili:2,need:[6,27],need_concurrency_id:[13,17,35],neg:[19,27],network:21,never:19,new_with_user_t:[23,30,35],next:[2,6,35],no_such_us:[29,35],non:5,none:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],nonzero:19,normal:23,not_a_text_sess:[29,35],note:21,number:[2,5,6,13,15,19,21,23,27],object:[2,3,5,6,7,9,11,14,15,18,19,21,23,25,27,28,31],objectclass:[7,8,9,10,11,12,15,16,19,20,21,22,23,25,27],occur:29,offset:[2,5,6,9,19],onli:[2,4,5,6,13,15,17,21,23,25,27],op_lc:17,opaqu:[2,4,5,6,13,15,17,25],oper:[2,9,11,13,17,19,21,27],operationerror:[29,35],optim:27,other:[2,5,9,27,33],otherwis:19,over:33,own:[9,11],packag:33,paramet:[2,5,7,9,11,13,15,17,19,21,23,27,30],parent:[3,7,9,11,14,15,18,19,21,23,25,27,33],parent_class:[8,10,12,16,20,22,24,26,28],part:21,pass:23,path:30,pend:23,peopl:23,place:19,point:[2,5,6,19],pointer:2,pos:[2,11],posit:[2,5,9,11,13,17,19,21,23,27],presync:23,prev:[6,35],previou:[2,6,17],probabl:23,project:33,prop:[7,9,11,15,19,21,23,27],proxi:23,purpos:23,python:35,queu:23,rais:30,rang:[23,27],read:[2,29,30],readabl:[7,9,11,15,19,21,23,27],receiv:[2,23,27],reconstruct:21,red:23,reduc:21,refus:27,region:19,rejoin:23,remain:2,remot:21,remotedeleteoper:[1,13,31,35],remotedeleteoperationclass:[0,21,35],remov:5,request:[23,27],requestfunc:23,requir:[6,13,17,23],resourc:6,result:[5,27],retriev:[23,30],revers:21,right:19,run:23,run_first:2,run_last:27,safe:6,same:[2,5,19,23],satur:27,save:[23,30],schedul:15,second:6,see:[2,13,17,23,33],segment:[2,5,6,29],select:[19,23,27],selection_chang:[27,28],selection_length:[23,27],self:[2,5,6,9,11,13,17,19,23,27],send:23,sequenceit:6,serial:29,server:33,session:[1,29,30,31,35],sessionclass:[0,23,35],sessionerror:[29,35],sessionproxi:23,sessionstatu:23,set:[5,6,19,23,27,30],set_select:[27,35],set_subscription_group:23,set_user_color:[23,35],share:23,shift:19,shortcut:23,should:[2,4,5,6,13,15,17,23,25,27,30],signal:3,sinc:23,some:9,soon:23,specif:27,specifi:29,stack:6,stai:2,start:[2,5,9,13,19,21,27],state:[17,27],statu:23,step:2,storag:30,str:[2,5,7,23,27,30],struct:[7,9,11,15,19,21,23,25,27],structur:[2,3,7,9,11,13,14,15,16,17,19,21,23,25,27,33],subclass:[7,9,11,15,19,21,23,25,27],subscrib:23,subscript:23,substr:[5,35],succe:30,success:30,sychron:23,symbol:33,sync:33,sync_connect:23,sync_group:23,synchron:23,tabl:[23,29,30],termin:5,text:[2,5,6,7,9,11,17,19,21,27,29,30,33],text_eras:[2,3,35],text_insert:[2,3,35],thei:[19,23],them:2,therefor:21,thi:[2,3,6,14,16,21,23,27,30],though:33,through:21,timeout:[15,23],todo:[5,23],togeth:27,toward:[19,27],trail:15,transfer:[2,5],transform:[13,17],transform_delet:[13,17,19,35],transform_insert:[13,17,19,35],transform_overlap:14,transform_posit:[14,18],transform_split:14,transmit:21,travers:2,trigger:23,two:5,type:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30],typeinterfac:[3,14,18],typic:6,unavail:23,underlai:6,underli:15,undo:2,undogroup:[1,31,35],undogroupingclass:[0,25,35],uniqu:27,unmodifi:2,unref:[25,27],untouch:5,updat:23,usag:21,use:[5,7,21,30],used:[2,6,15,21,23,27,30],useful:6,user:[1,2,5,6,19,23,29,30,31,33,35],user_data:23,user_exist:[29,35],user_t:[23,30],userclass:[0,27,35],userflag:23,userstatu:23,usert:[23,27,30],uses:2,using:[2,21,27],utf:5,valid:[2,6],valu:[2,6,7,9,11,15,19,21,23,27,29],vector:27,via:[2,4,5,6,13,15,17,23,25],virtual:[3,14],visual:27,want:21,were:5,when:[2,9,11,19,21,27,29],where:[2,9,19,21,30],whether:[2,5,6,13,17,19],which:[2,5,9,11,13,15,17,19,21,23,27,29],widget:33,without:23,work:27,would:23,writabl:[7,9,11,15,19,21,23,27],write:30,written:[2,5,29,30],wrote:[2,5],xmlconnect:23,you:[2,4,5,6,13,15,17,21,23,25],zero:[5,27]},titles:["Class Structures","Classes","InfText.Buffer","InfText.BufferInterface","InfText.BufferIter","InfText.Chunk","InfText.ChunkIter","InfText.DefaultBuffer","InfText.DefaultBufferClass","InfText.DefaultDeleteOperation","InfText.DefaultDeleteOperationClass","InfText.DefaultInsertOperation","InfText.DefaultInsertOperationClass","InfText.DeleteOperation","InfText.DeleteOperationInterface","InfText.FixlineBuffer","InfText.FixlineBufferClass","InfText.InsertOperation","InfText.InsertOperationInterface","InfText.MoveOperation","InfText.MoveOperationClass","InfText.RemoteDeleteOperation","InfText.RemoteDeleteOperationClass","InfText.Session","InfText.SessionClass","InfText.UndoGrouping","InfText.UndoGroupingClass","InfText.User","InfText.UserClass","Enums","Functions","Hierarchy","Interface Structures","InfText 0.7 (0.7.1)","Interfaces","Symbol Mapping","Structures"],titleterms:{"class":[0,1,2,7,9,11,13,15,17,19,21,23,25,27],"enum":29,"function":30,api:33,buffer:2,bufferinterfac:3,bufferit:4,chunk:5,chunkit:6,defaultbuff:7,defaultbufferclass:8,defaultdeleteoper:9,defaultdeleteoperationclass:10,defaultinsertoper:11,defaultinsertoperationclass:12,deleteoper:13,deleteoperationinterfac:14,detail:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],field:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],fixlinebuff:15,fixlinebufferclass:16,hierarchi:31,inftext:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,33],insertoper:17,insertoperationinterfac:18,interfac:[32,34],map:35,method:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],moveoper:19,moveoperationclass:20,properti:[2,7,9,11,13,15,17,19,21,23,25,27],remotedeleteoper:21,remotedeleteoperationclass:22,session:23,sessionclass:24,signal:[2,7,9,11,13,15,17,19,21,23,25,27],structur:[0,32,36],symbol:35,undogroup:25,undogroupingclass:26,user:27,userclass:28,virtual:[2,7,9,11,13,15,17,19,21,23,25,27]}})