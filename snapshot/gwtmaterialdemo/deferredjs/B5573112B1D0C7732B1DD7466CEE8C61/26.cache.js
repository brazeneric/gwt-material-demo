$wnd.gwtmaterialdemo.runAsyncCallback26("function TemplatesPresenter(eventBus, view, proxy){\n  $clinit_TemplatesPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(544, 51, $intern_41, TemplatesPresenter);\n_.onReveal = function onReveal_33(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Templates', 'Inspiring templates before starting designing / developing your GWT Apps with Material Design look and feel.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_templates_TemplatesPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.templates', 'TemplatesPresenter', 544);\nfunction TemplatesView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialRow1_0(new TemplatesView_BinderImpl$Widgets));\n}\n\ndefineClass(689, 55, $intern_42, TemplatesView);\nvar Lgwt_material_design_demo_client_application_templates_TemplatesView_2_classLit = createForClass('gwt.material.design.demo.client.application.templates', 'TemplatesView', 689);\nfunction TemplatesView_BinderImpl(){\n}\n\ndefineClass(902, 1, {}, TemplatesView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_templates_TemplatesView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.templates', 'TemplatesView_BinderImpl', 902);\nfunction $build_f_MaterialRow1_0(){\n  var f_MaterialRow1, f_MaterialColumn2, f_MaterialCard3, f_MaterialCardImage4, f_MaterialCardContent6, f_MaterialCardAction8, f_MaterialColumn10, f_MaterialCard11, f_MaterialCardImage12, f_MaterialCardContent14, f_MaterialCardAction16, f_MaterialImage5, f_MaterialCardTitle7, f_MaterialLink9, f_MaterialImage13, f_MaterialCardTitle15, f_MaterialLink17;\n  f_MaterialRow1 = new MaterialRow;\n  $add_13(f_MaterialRow1, (f_MaterialColumn2 = new MaterialColumn , $add_13(f_MaterialColumn2, (f_MaterialCard3 = new MaterialCard , $add_13(f_MaterialCard3, (f_MaterialCardImage4 = new MaterialCardImage , $add_15(f_MaterialCardImage4, (f_MaterialImage5 = new MaterialImage , $setResource(f_MaterialImage5, ($clinit_MaterialResources_default_InlineClientBundleGenerator$template_starterInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator_0() , template_starter)) , f_MaterialImage5)) , $setWaves(f_MaterialCardImage4, ($clinit_WavesType() , LIGHT)) , f_MaterialCardImage4)) , $add_13(f_MaterialCard3, (f_MaterialCardContent6 = new MaterialCardContent , $add_13(f_MaterialCardContent6, (f_MaterialCardTitle7 = new MaterialCardTitle , f_MaterialCardTitle7.span_0.setText('Starter Template') , $add_13(f_MaterialCardTitle7, f_MaterialCardTitle7.span_0) , $setTextColor(f_MaterialCardTitle7.colorsMixin, 'black') , f_MaterialCardTitle7)) , f_MaterialCardContent6)) , $add_13(f_MaterialCard3, (f_MaterialCardAction8 = new MaterialCardAction , $add_13(f_MaterialCardAction8, (f_MaterialLink9 = new MaterialLink , f_MaterialLink9.span_0.setText('Demo') , $add_13(f_MaterialLink9, f_MaterialLink9.span_0) , $setAttribute(($clinit_DOM() , f_MaterialLink9.element), 'target', '_blank') , $setAttribute(f_MaterialLink9.element, 'href', 'http://gwt-material-starter.appspot.com/') , f_MaterialLink9)) , f_MaterialCardAction8)) , $setBackgroundColor(f_MaterialCard3.colorsMixin, 'white') , f_MaterialCard3)) , $setGrid(f_MaterialColumn2.gridMixin, 'l4') , f_MaterialColumn2));\n  $add_13(f_MaterialRow1, (f_MaterialColumn10 = new MaterialColumn , $add_13(f_MaterialColumn10, (f_MaterialCard11 = new MaterialCard , $add_13(f_MaterialCard11, (f_MaterialCardImage12 = new MaterialCardImage , $add_15(f_MaterialCardImage12, (f_MaterialImage13 = new MaterialImage , $setResource(f_MaterialImage13, ($clinit_MaterialResources_default_InlineClientBundleGenerator$template_wrenxInitializer() , template_wrenx)) , f_MaterialImage13)) , $setWaves(f_MaterialCardImage12, LIGHT) , f_MaterialCardImage12)) , $add_13(f_MaterialCard11, (f_MaterialCardContent14 = new MaterialCardContent , $add_13(f_MaterialCardContent14, (f_MaterialCardTitle15 = new MaterialCardTitle , f_MaterialCardTitle15.span_0.setText('Map Template') , $add_13(f_MaterialCardTitle15, f_MaterialCardTitle15.span_0) , $setTextColor(f_MaterialCardTitle15.colorsMixin, 'black') , f_MaterialCardTitle15)) , f_MaterialCardContent14)) , $add_13(f_MaterialCard11, (f_MaterialCardAction16 = new MaterialCardAction , $add_13(f_MaterialCardAction16, (f_MaterialLink17 = new MaterialLink , f_MaterialLink17.span_0.setText('Demo') , $add_13(f_MaterialLink17, f_MaterialLink17.span_0) , $setAttribute(f_MaterialLink17.element, 'target', '_blank') , $setAttribute(f_MaterialLink17.element, 'href', 'http://wrenx2015.appspot.com/') , f_MaterialLink17)) , f_MaterialCardAction16)) , $setBackgroundColor(f_MaterialCard11.colorsMixin, 'white') , f_MaterialCard11)) , $setGrid(f_MaterialColumn10.gridMixin, 'l4') , f_MaterialColumn10));\n  return f_MaterialRow1;\n}\n\nfunction TemplatesView_BinderImpl$Widgets(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n}\n\ndefineClass(903, 1, {}, TemplatesView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_templates_TemplatesView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.templates', 'TemplatesView_BinderImpl/Widgets', 903);\nfunction $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$) {\n    result = new TemplatesPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$) {\n    result = new TemplatesView(new TemplatesView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$;\n}\n\ndefineClass(503, 1, $intern_56);\n_.onSuccess_0 = function onSuccess_25(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nvar template_starter, template_wrenx;\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$template_starterInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$template_starterInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n  template_starter = new ImageResourcePrototype('template_starter', ($clinit_UriUtils() , new SafeUriString(externalImage14)), 427, 693);\n}\n\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$template_wrenxInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$template_wrenxInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n  template_wrenx = new ImageResourcePrototype('template_wrenx', ($clinit_UriUtils() , new SafeUriString(externalImage15)), 469, 681);\n}\n\n$entry(onLoad_0)(26);\n\n//# sourceURL=gwtmaterialdemo-26.js\n")
