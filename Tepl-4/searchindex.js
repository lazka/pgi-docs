Search.setIndex({docnames:["class-structs","classes","classes/AbstractFactory","classes/AbstractFactoryClass","classes/AbstractFactoryVala","classes/AbstractFactoryValaClass","classes/Application","classes/ApplicationClass","classes/ApplicationWindow","classes/ApplicationWindowClass","classes/Buffer","classes/BufferClass","classes/Encoding","classes/File","classes/FileClass","classes/FileLoader","classes/FileLoaderClass","classes/FileMetadata","classes/FileMetadataClass","classes/FileSaver","classes/FileSaverClass","classes/FoldRegion","classes/FoldRegionClass","classes/GutterRendererFolds","classes/GutterRendererFoldsClass","classes/InfoBar","classes/InfoBarClass","classes/Notebook","classes/NotebookClass","classes/Tab","classes/TabClass","classes/TabGroup","classes/TabGroupInterface","classes/TabLabel","classes/TabLabelClass","classes/View","classes/ViewClass","enums","flags","functions","hierarchy","iface-structs","index","interfaces","mapping","structs"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:55},filenames:["class-structs.rst","classes.rst","classes/AbstractFactory.rst","classes/AbstractFactoryClass.rst","classes/AbstractFactoryVala.rst","classes/AbstractFactoryValaClass.rst","classes/Application.rst","classes/ApplicationClass.rst","classes/ApplicationWindow.rst","classes/ApplicationWindowClass.rst","classes/Buffer.rst","classes/BufferClass.rst","classes/Encoding.rst","classes/File.rst","classes/FileClass.rst","classes/FileLoader.rst","classes/FileLoaderClass.rst","classes/FileMetadata.rst","classes/FileMetadataClass.rst","classes/FileSaver.rst","classes/FileSaverClass.rst","classes/FoldRegion.rst","classes/FoldRegionClass.rst","classes/GutterRendererFolds.rst","classes/GutterRendererFoldsClass.rst","classes/InfoBar.rst","classes/InfoBarClass.rst","classes/Notebook.rst","classes/NotebookClass.rst","classes/Tab.rst","classes/TabClass.rst","classes/TabGroup.rst","classes/TabGroupInterface.rst","classes/TabLabel.rst","classes/TabLabelClass.rst","classes/View.rst","classes/ViewClass.rst","enums.rst","flags.rst","functions.rst","hierarchy.rst","iface-structs.rst","index.rst","interfaces.rst","mapping.rst","structs.rst"],objects:{"Tepl.AbstractFactory":{create_file:[2,1,1,""],create_main_window:[2,1,1,""],create_tab:[2,1,1,""],create_tab_label:[2,1,1,""],do_create_file:[2,1,1,""],do_create_main_window:[2,1,1,""],do_create_tab:[2,1,1,""],do_create_tab_label:[2,1,1,""],get_singleton:[2,2,1,""],set_singleton:[2,1,1,""]},"Tepl.AbstractFactoryVala":{create_main_window_vala:[4,1,1,""],do_create_main_window_vala:[4,1,1,""],set_singleton_vala:[4,1,1,""]},"Tepl.Application":{get_active_main_window:[6,1,1,""],get_app_action_info_store:[6,1,1,""],get_application:[6,1,1,""],get_default:[6,2,1,""],get_from_gtk_application:[6,2,1,""],get_tepl_action_info_store:[6,1,1,""],handle_activate:[6,1,1,""],handle_open:[6,1,1,""],open_simple:[6,1,1,""]},"Tepl.Application.props":{application:[6,3,1,""]},"Tepl.ApplicationWindow":{get_application_window:[8,1,1,""],get_from_gtk_application_window:[8,2,1,""],get_handle_title:[8,1,1,""],get_window_group:[8,1,1,""],is_main_window:[8,2,1,""],open_file:[8,1,1,""],set_handle_title:[8,1,1,""],set_tab_group:[8,1,1,""]},"Tepl.ApplicationWindow.props":{application_window:[8,3,1,""],handle_title:[8,3,1,""]},"Tepl.Buffer":{"new":[10,2,1,""],do_tepl_cursor_moved:[10,1,1,""],get_file:[10,1,1,""],get_full_title:[10,1,1,""],get_selection_type:[10,1,1,""],get_short_title:[10,1,1,""],get_style_scheme_id:[10,1,1,""],is_untouched:[10,1,1,""],set_style_scheme_id:[10,1,1,""]},"Tepl.Buffer.props":{tepl_full_title:[10,3,1,""],tepl_short_title:[10,3,1,""],tepl_style_scheme_id:[10,3,1,""]},"Tepl.Buffer.signals":{tepl_cursor_moved:[10,4,1,""]},"Tepl.CompressionType":{GZIP:[37,5,1,""],NONE:[37,5,1,""]},"Tepl.Encoding":{"new":[12,2,1,""],copy:[12,1,1,""],equals:[12,1,1,""],free:[12,1,1,""],get_all:[12,2,1,""],get_charset:[12,1,1,""],get_default_candidates:[12,2,1,""],get_name:[12,1,1,""],is_utf8:[12,1,1,""],new_from_locale:[12,2,1,""],new_utf8:[12,2,1,""],to_string:[12,1,1,""]},"Tepl.File":{"new":[13,2,1,""],add_uri_to_recent_manager:[13,1,1,""],check_file_on_disk:[13,1,1,""],get_compression_type:[13,1,1,""],get_encoding:[13,1,1,""],get_file_metadata:[13,1,1,""],get_location:[13,1,1,""],get_newline_type:[13,1,1,""],get_short_name:[13,1,1,""],is_deleted:[13,1,1,""],is_externally_modified:[13,1,1,""],is_local:[13,1,1,""],is_readonly:[13,1,1,""],set_location:[13,1,1,""]},"Tepl.File.props":{compression_type:[13,3,1,""],encoding:[13,3,1,""],location:[13,3,1,""],newline_type:[13,3,1,""],read_only:[13,3,1,""],short_name:[13,3,1,""]},"Tepl.FileLoader":{"new":[15,2,1,""],get_buffer:[15,1,1,""],get_chunk_size:[15,1,1,""],get_encoding:[15,1,1,""],get_file:[15,1,1,""],get_location:[15,1,1,""],get_max_size:[15,1,1,""],get_newline_type:[15,1,1,""],load_async:[15,1,1,""],load_finish:[15,1,1,""],set_chunk_size:[15,1,1,""],set_max_size:[15,1,1,""]},"Tepl.FileLoader.props":{buffer:[15,3,1,""],chunk_size:[15,3,1,""],file:[15,3,1,""],location:[15,3,1,""],max_size:[15,3,1,""]},"Tepl.FileLoaderError":{ENCODING_AUTO_DETECTION_FAILED:[37,5,1,""],TOO_BIG:[37,5,1,""],quark:[37,2,1,""]},"Tepl.FileMetadata":{"new":[17,2,1,""],get:[17,1,1,""],get_file:[17,1,1,""],load:[17,1,1,""],load_async:[17,1,1,""],load_finish:[17,1,1,""],save:[17,1,1,""],save_async:[17,1,1,""],save_finish:[17,1,1,""],set:[17,1,1,""]},"Tepl.FileMetadata.props":{file:[17,3,1,""]},"Tepl.FileSaver":{"new":[19,2,1,""],get_buffer:[19,1,1,""],get_compression_type:[19,1,1,""],get_encoding:[19,1,1,""],get_file:[19,1,1,""],get_flags:[19,1,1,""],get_location:[19,1,1,""],get_newline_type:[19,1,1,""],new_with_target:[19,2,1,""],save_async:[19,1,1,""],save_finish:[19,1,1,""],set_compression_type:[19,1,1,""],set_encoding:[19,1,1,""],set_flags:[19,1,1,""],set_newline_type:[19,1,1,""]},"Tepl.FileSaver.props":{buffer:[19,3,1,""],compression_type:[19,3,1,""],encoding:[19,3,1,""],file:[19,3,1,""],flags:[19,3,1,""],location:[19,3,1,""],newline_type:[19,3,1,""]},"Tepl.FileSaverError":{EXTERNALLY_MODIFIED:[37,5,1,""],INVALID_CHARS:[37,5,1,""],quark:[37,2,1,""]},"Tepl.FileSaverFlags":{CREATE_BACKUP:[38,5,1,""],IGNORE_INVALID_CHARS:[38,5,1,""],IGNORE_MODIFICATION_TIME:[38,5,1,""],NONE:[38,5,1,""]},"Tepl.FoldRegion":{"new":[21,2,1,""],get_bounds:[21,1,1,""],get_buffer:[21,1,1,""],get_folded:[21,1,1,""],set_bounds:[21,1,1,""],set_folded:[21,1,1,""]},"Tepl.FoldRegion.props":{buffer:[21,3,1,""],folded:[21,3,1,""]},"Tepl.GutterRendererFolds":{"new":[23,2,1,""],set_state:[23,1,1,""]},"Tepl.GutterRendererFoldsState":{CONTINUE:[38,5,1,""],END:[38,5,1,""],NONE:[38,5,1,""],START_FOLDED:[38,5,1,""],START_OPENED:[38,5,1,""]},"Tepl.InfoBar":{"new":[25,2,1,""],add_close_button:[25,1,1,""],add_content_widget:[25,1,1,""],add_icon:[25,1,1,""],add_primary_message:[25,1,1,""],add_secondary_message:[25,1,1,""],create_label:[25,2,1,""],new_simple:[25,2,1,""]},"Tepl.NewlineType":{CR:[37,5,1,""],CR_LF:[37,5,1,""],LF:[37,5,1,""]},"Tepl.Notebook":{"new":[27,2,1,""]},"Tepl.SelectionType":{MULTIPLE_LINES:[37,5,1,""],NO_SELECTION:[37,5,1,""],ON_SAME_LINE:[37,5,1,""]},"Tepl.Tab":{"new":[29,2,1,""],add_info_bar:[29,1,1,""],do_close_request:[29,1,1,""],do_pack_info_bar:[29,1,1,""],do_pack_view:[29,1,1,""],get_buffer:[29,1,1,""],get_view:[29,1,1,""],load_file:[29,1,1,""],new_with_view:[29,2,1,""],save_as_async:[29,1,1,""],save_as_async_simple:[29,1,1,""],save_as_finish:[29,1,1,""],save_async:[29,1,1,""],save_async_simple:[29,1,1,""],save_finish:[29,1,1,""]},"Tepl.Tab.props":{view:[29,3,1,""]},"Tepl.Tab.signals":{close_request:[29,4,1,""]},"Tepl.TabGroup":{append_tab:[31,1,1,""],do_append_tab_vfunc:[31,1,1,""],do_get_active_tab:[31,1,1,""],do_get_tabs:[31,1,1,""],do_set_active_tab:[31,1,1,""],get_active_buffer:[31,1,1,""],get_active_tab:[31,1,1,""],get_active_view:[31,1,1,""],get_buffers:[31,1,1,""],get_tabs:[31,1,1,""],get_views:[31,1,1,""],set_active_tab:[31,1,1,""]},"Tepl.TabGroup.props":{active_buffer:[31,3,1,""],active_tab:[31,3,1,""],active_view:[31,3,1,""]},"Tepl.TabLabel":{"new":[33,2,1,""],do_get_tooltip_markup:[33,1,1,""],get_tab:[33,1,1,""],update_tooltip:[33,1,1,""]},"Tepl.TabLabel.props":{tab:[33,3,1,""]},"Tepl.View":{"new":[35,2,1,""],copy_clipboard:[35,1,1,""],cut_clipboard:[35,1,1,""],delete_selection:[35,1,1,""],goto_line:[35,1,1,""],goto_line_offset:[35,1,1,""],paste_clipboard:[35,1,1,""],scroll_to_cursor:[35,1,1,""],select_all:[35,1,1,""],select_lines:[35,1,1,""]},Tepl:{AbstractFactory:[2,0,1,""],AbstractFactoryClass:[3,0,1,""],AbstractFactoryVala:[4,0,1,""],AbstractFactoryValaClass:[5,0,1,""],Application:[6,0,1,""],ApplicationClass:[7,0,1,""],ApplicationWindow:[8,0,1,""],ApplicationWindowClass:[9,0,1,""],Buffer:[10,0,1,""],BufferClass:[11,0,1,""],CompressionType:[37,0,1,""],Encoding:[12,0,1,""],File:[13,0,1,""],FileClass:[14,0,1,""],FileLoader:[15,0,1,""],FileLoaderClass:[16,0,1,""],FileLoaderError:[37,0,1,""],FileMetadata:[17,0,1,""],FileMetadataClass:[18,0,1,""],FileSaver:[19,0,1,""],FileSaverClass:[20,0,1,""],FileSaverError:[37,0,1,""],FileSaverFlags:[38,0,1,""],FoldRegion:[21,0,1,""],FoldRegionClass:[22,0,1,""],GutterRendererFolds:[23,0,1,""],GutterRendererFoldsClass:[24,0,1,""],GutterRendererFoldsState:[38,0,1,""],InfoBar:[25,0,1,""],InfoBarClass:[26,0,1,""],NewlineType:[37,0,1,""],Notebook:[27,0,1,""],NotebookClass:[28,0,1,""],SelectionType:[37,0,1,""],Tab:[29,0,1,""],TabClass:[30,0,1,""],TabGroup:[31,0,1,""],TabGroupInterface:[32,0,1,""],TabLabel:[33,0,1,""],TabLabelClass:[34,0,1,""],View:[35,0,1,""],ViewClass:[36,0,1,""],encoding_get_all:[39,4,1,""],encoding_get_default_candidates:[39,4,1,""],file_loader_error_quark:[39,4,1,""],file_saver_error_quark:[39,4,1,""],finalize:[39,4,1,""],init:[39,4,1,""],iter_get_line_indentation:[39,4,1,""],menu_shell_append_edit_actions:[39,4,1,""],metadata_manager_init:[39,4,1,""],metadata_manager_shutdown:[39,4,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","data","Python data"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:data","4":"py:function","5":"py:attribute"},terms:{"abstract":[2,4,6,8,10,13,15,17,19,21,23,25,27,29,33,35],"byte":[15,35],"case":[8,10,12,25,35,39],"class":[3,5,7,9,11,12,14,16,18,20,22,24,26,28,30,32,34,36,37,38,42],"default":[2,6,8,10,12,13,15,17,19,21,29,31,33,39],"enum":42,"final":[39,44],"function":[2,6,8,10,12,13,15,17,19,23,25,29,31,32,33,42],"int":[15,17,19,35,37,39],"new":[2,4,6,8,10,12,13,15,17,19,21,23,25,27,29,31,32,33,35,37,38,39,44],"return":[2,4,6,8,10,12,13,15,17,19,21,23,25,27,29,31,33,35,37,39],"short":[6,8,10,13,15,17,19,21,29,31,33],"true":[8,10,12,21,35],"try":[12,39],And:35,But:12,For:[10,15,39],IDEs:42,The:[3,5,6,8,10,12,13,15,17,19,21,25,29,30,31,32,33,34,37,38,39],There:8,Vfs:17,abl:25,abstractfactori:[1,4,6,10,40,44],abstractfactoryclass:[0,2,5,44],abstractfactoryvala:[1,2,40,44],abstractfactoryvalaclass:[0,4,44],access:[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36],accord:[12,29],acronym:42,action:[6,39],actioninfo:6,actioninfostor:6,activ:[6,8,31],active_buff:31,active_tab:31,active_view:31,add:[6,8,13,19,25],add_close_button:[25,44],add_content_widget:[25,44],add_icon:[25,44],add_info_bar:[29,44],add_item:13,add_primary_messag:[25,44],add_secondary_messag:[25,44],add_uri_to_recent_manag:[13,44],added:25,adding:25,additionn:25,advis:[13,39],after:[2,13,15,31],afterward:[8,29],align:25,all:[6,12,15,17,31,35,39],alloc:[15,39],alreadi:[6,12,15,19,32],also:[25,39],amtk:[6,39,42],ani:39,anoth:25,anywai:15,anywher:39,app:[2,4],appar:4,append:[31,39],append_tab:[31,44],append_tab_vfunc:32,appli:21,applic:[1,2,4,8,13,17,39,40,44],application_window:8,applicationclass:[0,6,44],applicationwindow:[1,2,4,6,31,40,44],applicationwindowclass:[0,8,44],appropri:[8,29],area:[15,25],arg:25,ascii_strcasecmp:12,ask:33,associ:[8,10,13,29,33,35],assum:32,asynchron:[8,15,17,19,29],asyncreadycallback:[15,17,19,29],asyncresult:[15,17,19,29],atk:[25,27,29,33,35],attach:29,automat:[13,37],avail:19,avoid:[8,15],back:[15,19],backup:38,base:[2,4,6,8,10,13,15,17,19,21,23,25,27,29,31,33,35,37,38,42],becaus:[12,15],been:[2,8,10,13,15,19,25,35],befor:[2,15,23,25,29,38,39],begin:[15,39],behavior:38,belong:17,better:[15,25],between:[17,35],big:[15,37],bind:10,bool:[8,10,12,13,15,17,19,21,29,31,35],both:12,bound:37,box:[25,40],buffer:[1,8,15,19,21,29,31,37,40,44],bufferclass:[0,10,44],buildabl:[25,27,29,33,35],button:29,call:[2,4,6,8,13,15,17,19,23,25,29,33,39],callback:[15,17,19,29],can:[8,10,13,15,17,29,32,38,39],cancel:[15,17,19],candid:[12,39],carriag:37,cell:23,certain:38,chain:23,chang:[8,10,25,29],charact:[12,13,35,37,38],charset:12,check:[13,32],check_file_on_disk:[13,44],child:31,children:31,chunk:15,chunk_siz:15,classmethod:[2,6,8,10,12,13,15,17,19,21,23,25,27,29,33,35,37],click:29,clipboard:35,close:[13,25,29],close_request:[29,30],code:[37,38],combin:38,come:35,compat:12,compel:8,compil:35,compress:[13,19,37],compression_typ:[13,19],compressiontyp:[13,19,37,44],condit:32,configur:25,conflict:17,connect:[6,15,29],consid:8,construct:[8,13,15,19],construct_onli:[6,8,15,17,19,21,29,33],constructor:[12,15,19],contain:[6,8,10,12,19,25,27,29,31,33,35,37,39,40],containerclass:[25,27,29,33,35],content:[15,25,29],contigu:15,continu:[38,44],conveni:[6,29,31],copi:[12,25,35,39,44],copy_clipboard:[35,44],correctli:39,count:35,countri:[12,39],cr_lf:[37,44],creat:[2,6,8,10,12,13,15,19,25,29,38,39],create_backup:[38,44],create_fil:[2,3,10,44],create_label:[25,44],create_main_window:[2,3,4,6,44],create_main_window_vala:[4,5,44],create_tab:[2,3,44],create_tab_label:[2,3,44],current:[10,12,31,35,38,39],cursor:[10,35],custom:25,cut:[35,39],cut_clipboard:[35,44],data:[15,17,19,29,39],date:13,debian:42,debug:39,defin:38,deleg:8,delet:[10,13,17,35,39],delete_select:[35,44],depend:[12,25,39,42],descript:[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,42],desir:39,despit:38,detect:[15,37],determin:25,develop:42,dialog:29,didn:35,differ:[12,29,39],directli:[15,25],directori:[10,39],disk:13,displai:[13,15],do_append_tab_vfunc:31,do_close_request:29,do_create_fil:2,do_create_main_window:2,do_create_main_window_vala:4,do_create_tab:2,do_create_tab_label:2,do_get_active_tab:31,do_get_tab:31,do_get_tooltip_markup:33,do_pack_info_bar:29,do_pack_view:29,do_set_active_tab:31,do_tepl_cursor_mov:10,document:[15,17,19,29],doe:29,doesn:[4,12,13,17,39],domain:37,don:[29,39],done:[8,15],doubl:4,draw:23,drawn:23,each:[6,15,39],earli:2,eas:42,edit:8,editor:42,either:29,els:29,emit:[10,29],empti:[6,10,15],enc2:12,encod:[13,15,19,37,39,44,45],encoding_auto_detection_fail:[37,44],encoding_get_al:[39,44],encoding_get_default_candid:[39,44],end:[13,21,35,37,38,39,44],end_lin:35,equal:[12,44],error:[15,17,19,25,35,37],exactli:[12,35],exampl:[2,10,12,25,29,38,39],exist:[6,17,35],explan:25,explicit:10,extern:[13,37,38],externally_modifi:[37,44],factoryflag:39,fals:[8,10,13,17,19,21,35],feed:37,file:[1,2,6,8,10,12,15,17,19,29,37,38,39,40,44],file_attribute_standard_display_nam:13,file_loader_error_quark:[39,44],file_saver_error_quark:[39,44],filechoos:29,fileclass:[0,13,44],fileload:[1,12,39,40,44],fileloaderclass:[0,15,44],fileloadererror:[37,44],filemetadata:[1,13,40,44],filemetadataclass:[0,17,44],filemonitor:13,filenam:39,fileprogresscallback:[15,19],filesav:[1,29,38,40,44],filesaverclass:[0,19,44],filesavererror:[37,44],filesaverflag:[19,38,44],filesystem:17,finish:[8,15,17,19,29],first:[2,13,19],fit:[12,39],fix:17,flag:[6,8,10,13,15,17,19,21,29,31,33,39,42],flat:38,focus:6,fold:[21,23,38],foldregion:[1,40,44],foldregionclass:[0,21,44],follow:[6,19,29,37,39],free:[10,12,17,39,44],friendlier:39,from:[10,12,15,17,19,23,35],full:[4,8,10],futur:[8,17],gaction:[6,39],gener:6,genum:37,get:[2,8,12,13,17,31,39,44],get_active_buff:[31,44],get_active_main_window:[6,44],get_active_tab:[31,32,44],get_active_view:[31,44],get_active_window:6,get_al:[12,44],get_app_action_info_stor:[6,44],get_appl:[6,44],get_application_nam:8,get_application_window:[8,44],get_bound:[21,44],get_buff:[15,19,21,29,31,44],get_charset:[12,44],get_chunk_s:[15,44],get_compression_typ:[13,19,44],get_content_area:25,get_default:[6,10,44],get_default_candid:[12,44],get_encod:[13,15,19,44],get_fil:[10,15,17,19,44],get_file_metadata:[13,44],get_flag:[19,44],get_fold:[21,44],get_from_gtk_appl:[6,44],get_from_gtk_application_window:[8,44],get_full_titl:[10,44],get_handle_titl:[8,44],get_iter_at_lin:35,get_iter_at_line_offset:35,get_loc:[13,15,19,44],get_max_s:[15,44],get_modifi:29,get_nam:[12,44],get_newline_typ:[13,15,19,44],get_selection_typ:[10,44],get_short_nam:[13,44],get_short_titl:[10,44],get_singleton:[2,44],get_style_scheme_id:[10,44],get_tab:[31,32,33,44],get_tepl_action_info_stor:[6,44],get_tooltip_markup:[33,34],get_user_data_dir:39,get_view:[29,31,44],get_window_group:[8,44],gettext:12,gflag:38,ginterfac:[8,25,27,29,31,33,35],gio:[6,8,10,13,15,17,19,29,39],gir1:42,glib:[8,10,12,15,17,19,31,39],gnome:42,gobject:[2,3,4,6,7,8,9,10,13,14,15,16,17,18,19,20,21,22,23,25,27,29,31,32,33,35,37,38,40],good:[15,39],goto_lin:[35,44],goto_line_offset:[35,44],grid:[29,33,40],gridclass:[30,34],gtk:[2,4,6,8,10,13,15,19,21,25,26,27,28,29,30,33,34,35,38,39,40,42],gtk_app:6,gtk_window:8,gtksourc:[10,11,12,19,23,24,35,36,39,40,42],gtksourceview:42,guarante:[6,8,10,12,31,39],gutterrender:[23,40],gutterrendererclass:24,gutterrendererfold:[1,38,40,44],gutterrendererfoldsclass:[0,23,44],gutterrendererfoldsst:[23,38,44],gzip:[37,44],handl:8,handle_activ:[6,44],handle_open:[6,44],handle_titl:8,handler:[6,29],has:[2,8,10,13,15,19,21,25,31,33,35,38],hasn:8,have:[12,13,25,39],headerbar:8,here:38,hierarchi:42,hint:6,histori:10,homepag:42,how:[15,17,19,29],http:42,icon:25,iconv:12,iff:[8,12],ignor:[15,17,19,38],ignore_accels_for_app:39,ignore_invalid_char:[38,44],ignore_modification_tim:[19,38,44],implement:[2,4,8,31,32,39],implementorifac:[25,27,29,33,35],includ:35,incub:42,indent:39,index:31,info_bar:29,infobar:[1,29,40,44],infobarclass:[0,25,44],inform:[15,19],inherit:[2,4,6,8,10,13,15,17,19,21,23,25,27,29,33,35],init:[2,39,44],initi:[6,13,21,39],initiallyunown:[23,25,27,29,33,35,40],insensit:12,insert:[10,39],instanc:2,instead:[10,13,25],intend:23,interfac:[8,32,42],intern:[25,39],internation:39,invalid:[37,38],invalid_char:[37,44],io_prior:[15,17,19],is_delet:[13,44],is_externally_modifi:[13,44],is_loc:[13,44],is_main_window:[2,6,8,44],is_readonli:[13,44],is_untouch:[8,10,44],is_utf8:[12,44],isn:[10,13],iso:12,iter:[21,39],iter_get_line_indent:[39,44],its:[13,23,33],jump_to:[8,31],just:[2,12,15,17,39],keep:[15,39],kei:[10,17],know:[8,10,13,15,17,19,29],known:[12,39],kwarg:[2,4,6,8,10,13,15,17,19,21,23,25,27,29,33,35],label:[2,10,25],languag:[12,39],larger:15,later:13,left:25,level:39,librari:[6,39,42],lifetim:[6,8,10],lift:8,like:[4,6,31],likelihood:[12,39],limit:[12,39],line:[13,35,37,38,39,42],line_offset:35,list:[6,12,31,39],load:[8,10,12,13,15,17,29,39,44],load_async:[15,17,44],load_fil:[8,29,44],load_finish:[15,17,44],local:[12,13,15,39],locat:[8,10,13,15,17,19,29],longer:[10,12],lost:29,lot:13,mac:37,mai:8,main:[2,4,6,8,39],manag:[17,39],mandatori:39,map:42,mark:10,max:15,max_siz:15,maximum:15,meant:[8,39],memori:[15,17,39],menu_shel:39,menu_shell_append_edit_act:[39,44],menuitem:39,menushel:39,messag:[25,29],messagetyp:25,metadata:[17,39],metadata_manager_init:[39,44],metadata_manager_shutdown:[39,44],metadata_path:39,might:17,mind:15,modif:38,modifi:[10,13,29,37],monitor:13,more:15,most:[6,12,39],move:[10,35],msg_type:25,multipl:[37,39],multiple_lin:[37,44],must:[2,6,10,13,17,25,29,31,39],name:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],namespac:17,need:[10,12,13,15,19,25,29,39],new_from_local:[12,44],new_simpl:[25,44],new_utf8:[12,44],new_with_target:[19,44],new_with_view:[29,44],newlin:[13,15,19],newline_typ:[13,19],newlinetyp:[13,15,19,37,44],next:23,no_select:[37,44],non:[10,13,17,19,31],none:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,44],note:[12,39],notebook:[1,2,31,40,44],notebookclass:[0,27,44],nth:13,number:[13,35],object:[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,39,40],objectclass:[2,3,4,6,7,8,9,10,13,14,15,16,17,18,19,20,21,22,23,25,27,29,33,35],obtain:21,occur:[19,35],offset:35,on_same_lin:[37,44],onc:[2,8],one:[6,32],onli:[2,8,12,13,39],open:[6,8,10,38],open_fil:[6,8,44],open_simpl:[6,44],oper:[13,19,29],option:[15,17,19],order:10,org:42,orient:[25,29,33],other:[12,31,39],otherwis:[8,10,13,17,21],output:35,overrid:29,own:6,ownership:2,pack_info_bar:[29,30],pack_view:[29,30],packag:42,pad:[3,5,7,9,11,14,16,18,20,22,24,26,28,30,34,36],page:2,paramet:[2,4,6,8,10,12,13,15,17,19,21,23,25,29,31,32,33,35,39],parent:[2,3,4,5,6,8,23,27,29,30,32,33,34,42],parent_class:[3,5,7,9,11,14,16,18,20,22,24,26,28,30,34,36],parent_inst:[10,13,15,17,21,23,25,35],parent_interfac:32,parenthesi:[10,12],part:31,pass:[12,15,17,19,29],past:[35,39],paste_clipboard:[35,44],path:10,permit:15,place:[35,39],plain:37,point:21,posit:[10,35],possibl:[8,35,37,39],pre:32,prefer:17,present:[6,12,31,39],previou:[15,17,19,29],primari:25,primary_msg:25,prioriti:[15,17,19],priority_default:[15,17,19],priority_high:[15,17,19],priority_low:[15,17,19],probabl:8,process:39,product:42,progress:[15,19],progress_callback:[15,19],progress_callback_data:[15,19],project:42,prop:[6,8,10,13,15,17,19,21,29,31,33],properli:39,propos:29,provid:6,python:44,quark:[37,44],rais:[15,17,19],ran:29,read:[8,13,15],read_onli:13,readabl:[6,8,10,13,15,17,19,21,29,31,33],receiv:[10,25,29],recent:6,recentmanag:13,redo:10,refer:[2,15,19,21,33],regardless:29,region:[21,35,38],releas:13,reli:39,remot:15,report:15,represent:12,request:[8,15,17,19,29],reserv:6,resid:8,resourc:[13,39],respons:25,response_id:25,responsetyp:25,restrict:8,result:[4,15,17,19,29,33],retriev:29,run:29,run_first:10,run_last:29,same:[6,8,10,12,29,31,37,39],satisfi:[15,17,19,29],save:[13,17,19,29,38,39,44],save_as_async:[29,44],save_as_async_simpl:[29,44],save_as_finish:[29,44],save_async:[17,19,29,44],save_async_simpl:[29,44],save_finish:[17,19,29,44],scheme:10,scroll:35,scroll_to_cursor:[35,44],scrollabl:35,search:25,secondari:[8,25],secondary_msg:25,see:[8,10,12,13,15,17,19,29,39],select:[25,35,37,39],select_al:[35,44],select_lin:[35,44],selectiontyp:[10,37,44],self:[2,4,6,8,10,12,13,17,25,29,31,35],sens:[2,6],serv:42,set:[2,8,10,12,13,15,17,19,21,23,25,29,31,33,44],set_active_tab:[31,32,44],set_bound:[21,44],set_candidate_encod:[12,39],set_chunk_s:[15,44],set_compression_typ:[19,44],set_encod:[19,44],set_flag:[19,44],set_fold:[21,44],set_handle_titl:[8,44],set_loc:[13,15,44],set_max_s:[15,44],set_message_typ:25,set_modifi:19,set_newline_typ:[19,44],set_show_close_button:25,set_singleton:[2,4,44],set_singleton_vala:[4,44],set_stat:[23,44],set_style_scheme_id:[10,44],set_tab_group:[8,44],set_tab_label:2,set_tooltip_markup:33,sever:39,share:6,short_nam:13,should:[2,6,8,39],show:29,shown:31,shutdown:39,signal_stop_emission_by_nam:29,simpl:19,simpli:17,sinc:[13,38],singl:6,singleton:[2,39],size:15,slow:15,small:15,some:[38,39],soon:15,span:[37,39],specif:6,start:[13,15,17,19,21,29,35,37,38],start_fold:[38,44],start_lin:35,start_open:[38,44],state:[23,38],statusbar:10,still:19,store:[6,17,39],str:[10,12,13,17,25,33,39],string:[8,10,12,39],struct:[2,4,6,8,10,13,15,17,19,21,23,25,27,29,33,35],structur:[2,4,6,8,10,13,15,17,19,21,23,25,27,29,31,33,35,42],style:10,style_scheme_id:10,styleschem:10,styleschememanag:10,sub:39,subclass:[2,4,6,8,10,13,15,17,19,21,23,25,27,29,33,35],success:[13,21],successfulli:[15,17,19,29],suitabl:[2,10,19,25],support:[4,12],symbol:42,synchron:[13,17,39],tab:[1,2,8,10,31,33,40,44],tab_group:[8,31],tabclass:[0,29,44],tabgroup:[8,27,29,32,43,44],tabgroupinterfac:[31,41,44],tabl:32,tablabel:[1,40,44],tablabelclass:[0,33,44],take:[2,8,13,15],taken:[10,15,19],target:19,target_loc:19,tepl:[0,1,37,38,39,40,41,43,44,45],tepl_abstract_factory_create_fil:44,tepl_abstract_factory_create_main_window:44,tepl_abstract_factory_create_tab:44,tepl_abstract_factory_create_tab_label:44,tepl_abstract_factory_get_singleton:44,tepl_abstract_factory_set_singleton:44,tepl_abstract_factory_vala_create_main_window_vala:44,tepl_abstract_factory_vala_set_singleton_vala:44,tepl_application_get_active_main_window:44,tepl_application_get_app_action_info_stor:44,tepl_application_get_appl:44,tepl_application_get_default:44,tepl_application_get_from_gtk_appl:44,tepl_application_get_tepl_action_info_stor:44,tepl_application_handle_activ:44,tepl_application_handle_open:44,tepl_application_open_simpl:44,tepl_application_window_get_application_window:44,tepl_application_window_get_from_gtk_application_window:44,tepl_application_window_get_handle_titl:44,tepl_application_window_get_window_group:44,tepl_application_window_is_main_window:44,tepl_application_window_open_fil:44,tepl_application_window_set_handle_titl:44,tepl_application_window_set_tab_group:44,tepl_buffer_get_fil:44,tepl_buffer_get_full_titl:44,tepl_buffer_get_selection_typ:44,tepl_buffer_get_short_titl:44,tepl_buffer_get_style_scheme_id:44,tepl_buffer_is_untouch:44,tepl_buffer_new:44,tepl_buffer_set_style_scheme_id:44,tepl_compression_type_gzip:44,tepl_compression_type_non:44,tepl_cursor_mov:[10,11],tepl_encoding_copi:44,tepl_encoding_equ:44,tepl_encoding_fre:44,tepl_encoding_get_al:44,tepl_encoding_get_charset:44,tepl_encoding_get_default_candid:44,tepl_encoding_get_nam:44,tepl_encoding_is_utf8:44,tepl_encoding_new:44,tepl_encoding_new_from_local:44,tepl_encoding_new_utf8:44,tepl_encoding_to_str:44,tepl_file_add_uri_to_recent_manag:44,tepl_file_check_file_on_disk:44,tepl_file_get_compression_typ:44,tepl_file_get_encod:44,tepl_file_get_file_metadata:44,tepl_file_get_loc:44,tepl_file_get_newline_typ:44,tepl_file_get_short_nam:44,tepl_file_is_delet:44,tepl_file_is_externally_modifi:44,tepl_file_is_loc:44,tepl_file_is_readonli:44,tepl_file_loader_error:37,tepl_file_loader_error_encoding_auto_detection_fail:44,tepl_file_loader_error_quark:44,tepl_file_loader_error_too_big:44,tepl_file_loader_get_buff:44,tepl_file_loader_get_chunk_s:44,tepl_file_loader_get_encod:44,tepl_file_loader_get_fil:44,tepl_file_loader_get_loc:44,tepl_file_loader_get_max_s:44,tepl_file_loader_get_newline_typ:44,tepl_file_loader_load_async:44,tepl_file_loader_load_finish:44,tepl_file_loader_new:44,tepl_file_loader_set_chunk_s:44,tepl_file_loader_set_max_s:44,tepl_file_metadata_get:44,tepl_file_metadata_get_fil:44,tepl_file_metadata_load:44,tepl_file_metadata_load_async:44,tepl_file_metadata_load_finish:44,tepl_file_metadata_new:44,tepl_file_metadata_sav:44,tepl_file_metadata_save_async:44,tepl_file_metadata_save_finish:44,tepl_file_metadata_set:44,tepl_file_new:44,tepl_file_saver_error:37,tepl_file_saver_error_externally_modifi:44,tepl_file_saver_error_invalid_char:44,tepl_file_saver_error_quark:44,tepl_file_saver_flags_create_backup:44,tepl_file_saver_flags_ignore_invalid_char:44,tepl_file_saver_flags_ignore_modification_tim:44,tepl_file_saver_flags_non:44,tepl_file_saver_get_buff:44,tepl_file_saver_get_compression_typ:44,tepl_file_saver_get_encod:44,tepl_file_saver_get_fil:44,tepl_file_saver_get_flag:44,tepl_file_saver_get_loc:44,tepl_file_saver_get_newline_typ:44,tepl_file_saver_new:44,tepl_file_saver_new_with_target:44,tepl_file_saver_save_async:44,tepl_file_saver_save_finish:44,tepl_file_saver_set_compression_typ:44,tepl_file_saver_set_encod:44,tepl_file_saver_set_flag:44,tepl_file_saver_set_newline_typ:44,tepl_file_set_loc:44,tepl_file_set_mount_operation_factori:44,tepl_fin:44,tepl_fold_region_get_bound:44,tepl_fold_region_get_buff:44,tepl_fold_region_get_fold:44,tepl_fold_region_new:44,tepl_fold_region_set_bound:44,tepl_fold_region_set_fold:44,tepl_full_titl:10,tepl_gutter_renderer_folds_new:44,tepl_gutter_renderer_folds_set_st:44,tepl_gutter_renderer_folds_state_continu:44,tepl_gutter_renderer_folds_state_end:44,tepl_gutter_renderer_folds_state_non:44,tepl_gutter_renderer_folds_state_start_fold:44,tepl_gutter_renderer_folds_state_start_open:44,tepl_info_bar_add_close_button:44,tepl_info_bar_add_content_widget:44,tepl_info_bar_add_icon:44,tepl_info_bar_add_primary_messag:44,tepl_info_bar_add_secondary_messag:44,tepl_info_bar_create_label:44,tepl_info_bar_new:44,tepl_info_bar_new_simpl:44,tepl_init:44,tepl_iter_get_line_indent:44,tepl_menu_shell_append_edit_act:44,tepl_metadata_manager_init:44,tepl_metadata_manager_shutdown:44,tepl_newline_type_cr:44,tepl_newline_type_cr_lf:44,tepl_newline_type_lf:44,tepl_notebook_new:44,tepl_selection_type_multiple_lin:44,tepl_selection_type_no_select:44,tepl_selection_type_on_same_lin:44,tepl_short_titl:10,tepl_style_scheme_id:10,tepl_tab_add_info_bar:44,tepl_tab_get_buff:44,tepl_tab_get_view:44,tepl_tab_group_append_tab:44,tepl_tab_group_get_active_buff:44,tepl_tab_group_get_active_tab:44,tepl_tab_group_get_active_view:44,tepl_tab_group_get_buff:44,tepl_tab_group_get_tab:44,tepl_tab_group_get_view:44,tepl_tab_group_set_active_tab:44,tepl_tab_label_get_tab:44,tepl_tab_label_new:44,tepl_tab_label_update_tooltip:44,tepl_tab_load_fil:44,tepl_tab_new:44,tepl_tab_new_with_view:44,tepl_tab_save_as_async:44,tepl_tab_save_as_async_simpl:44,tepl_tab_save_as_finish:44,tepl_tab_save_async:44,tepl_tab_save_async_simpl:44,tepl_tab_save_finish:44,tepl_view_copy_clipboard:44,tepl_view_cut_clipboard:44,tepl_view_delete_select:44,tepl_view_goto_lin:44,tepl_view_goto_line_offset:44,tepl_view_new:44,tepl_view_paste_clipboard:44,tepl_view_scroll_to_cursor:44,tepl_view_select_al:44,tepl_view_select_lin:44,teplabstractfactori:44,teplabstractfactoryclass:44,teplabstractfactoryvala:44,teplabstractfactoryvalaclass:44,teplappl:[6,44],teplapplicationclass:44,teplapplicationwindow:[6,39,44],teplapplicationwindowclass:44,teplbuff:44,teplbufferclass:44,teplcompressiontyp:44,teplencod:44,teplfil:44,teplfileclass:44,teplfileload:44,teplfileloaderclass:44,teplfileloadererror:44,teplfilemetadata:44,teplfilemetadataclass:44,teplfilesav:44,teplfilesaverclass:44,teplfilesavererror:44,teplfilesaverflag:44,teplfoldregion:44,teplfoldregionclass:44,teplgutterrendererfold:44,teplgutterrendererfoldsclass:44,teplgutterrendererfoldsst:44,teplinfobar:44,teplinfobarclass:44,teplmountoperationfactori:44,teplnewlinetyp:44,teplnotebook:44,teplnotebookclass:44,teplselectiontyp:44,tepltab:44,tepltabclass:44,tepltabgroup:44,tepltabgroupinterfac:44,tepltablabel:44,tepltablabelclass:44,teplview:44,teplviewclass:44,text:[35,37,39,42],textbuff:[10,15,19,21,29,35,38,39,40],textit:[21,39],textview:[8,29,35,40],than:15,thei:[6,39],thi:[2,6,8,10,12,13,15,17,19,23,25,29,39],those:[13,31],time:[15,19,39],titl:[8,10],to_str:[12,44],too:[15,37],too_big:[37,44],tool:39,tooltip:33,touch:10,track:13,tradit:8,transfer:4,translat:12,tree:38,type:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39],typeinterfac:32,typic:10,unavail:44,uncondition:29,undo:10,unfold:21,unicod:12,uniqu:39,unix:37,unknown:12,unlimit:15,unref:[4,39],unsav:29,unset:17,untitl:13,untouch:[8,10],updat:[10,13,15,19,25,33],update_tooltip:[33,44],uri:13,use:[8,10,15,17,19,25,29,35,39],used:[8,13,37],useful:[10,29],user:[15,17,19,29,39],user_data:[15,17,19,29],uses:39,usual:39,utf8:12,utf:[12,19,39],util:25,vala:4,valid:[19,32],valu:[4,6,8,10,12,13,15,17,19,21,29,31,33,37,38],variant:12,version:[2,4,6,8,10,12,13,15,17,19,21,23,25,27,29,31,32,33,35,37,38,39],vfunc:[2,4,32],view:[1,8,29,31,38,40,44],viewclass:[0,35,44],virtual:32,wai:[8,29],want:6,warn:35,weak:[15,19,21,33],web:25,well:15,western:12,when:[8,10,12,13,15,17,19,25,29,32,39],where:[8,19,21,35,39],whether:[8,10,12,13,15,17,19,21,29,31],which:[8,10,29,39],widget:[2,25,27,29,33,35,40],widgetclass:[25,27,29,33,35],wiki:42,win:39,window:[2,4,6,8,10,37,39],windowgroup:8,without:29,word:31,would:13,wrap:25,writabl:[6,8,10,13,15,17,19,21,29,31,33],you:[8,13,25,29,32,39],your:39,zero:35},titles:["Class Structures","Classes","Tepl.AbstractFactory","Tepl.AbstractFactoryClass","Tepl.AbstractFactoryVala","Tepl.AbstractFactoryValaClass","Tepl.Application","Tepl.ApplicationClass","Tepl.ApplicationWindow","Tepl.ApplicationWindowClass","Tepl.Buffer","Tepl.BufferClass","Tepl.Encoding","Tepl.File","Tepl.FileClass","Tepl.FileLoader","Tepl.FileLoaderClass","Tepl.FileMetadata","Tepl.FileMetadataClass","Tepl.FileSaver","Tepl.FileSaverClass","Tepl.FoldRegion","Tepl.FoldRegionClass","Tepl.GutterRendererFolds","Tepl.GutterRendererFoldsClass","Tepl.InfoBar","Tepl.InfoBarClass","Tepl.Notebook","Tepl.NotebookClass","Tepl.Tab","Tepl.TabClass","Tepl.TabGroup","Tepl.TabGroupInterface","Tepl.TabLabel","Tepl.TabLabelClass","Tepl.View","Tepl.ViewClass","Enums","Flags","Functions","Hierarchy","Interface Structures","Tepl 4 (4.2.0)","Interfaces","Symbol Mapping","Structures"],titleterms:{"class":[0,1,2,4,6,8,10,13,15,17,19,21,23,25,27,29,31,33,35],"enum":37,"function":39,abstractfactori:2,abstractfactoryclass:3,abstractfactoryvala:4,abstractfactoryvalaclass:5,api:42,applic:6,applicationclass:7,applicationwindow:8,applicationwindowclass:9,buffer:10,bufferclass:11,child:[25,27,29,33],detail:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],encod:12,field:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],file:13,fileclass:14,fileload:15,fileloaderclass:16,filemetadata:17,filemetadataclass:18,filesav:19,filesaverclass:20,flag:38,foldregion:21,foldregionclass:22,gutterrendererfold:23,gutterrendererfoldsclass:24,hierarchi:40,infobar:25,infobarclass:26,interfac:[41,43],map:44,method:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],notebook:27,notebookclass:28,properti:[2,4,6,8,10,13,15,17,19,21,23,25,27,29,31,33,35],signal:[2,4,6,8,10,13,15,17,19,21,23,25,27,29,31,33,35],structur:[0,41,45],style:[25,27,29,33,35],symbol:44,tab:29,tabclass:30,tabgroup:31,tabgroupinterfac:32,tablabel:33,tablabelclass:34,tepl:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,42],view:35,viewclass:36,virtual:[2,4,6,8,10,13,15,17,19,21,23,25,27,29,31,33,35]}})