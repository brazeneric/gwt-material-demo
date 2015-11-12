$wnd.gwtmaterialdemo.runAsyncCallback11("function $clinit_LoaderSize(){\n  $clinit_LoaderSize = emptyMethod;\n  MEDIUM_1 = new LoaderSize('MEDIUM', 0, '');\n  SMALL_0 = new LoaderSize('SMALL', 1, 'small');\n  BIG = new LoaderSize('BIG', 2, 'big');\n}\n\nfunction LoaderSize(enum$name, enum$ordinal, cssClass){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.cssClass = cssClass;\n}\n\nfunction values_36(){\n  $clinit_LoaderSize();\n  return initValues(getClassLiteralForArray(Lgwt_material_design_client_constants_LoaderSize_2_classLit, 1), $intern_4, 210, 0, [MEDIUM_1, SMALL_0, BIG]);\n}\n\ndefineClass(210, 17, {28:1, 210:1, 113:1, 6:1, 23:1, 17:1}, LoaderSize);\n_.getCssName = function getCssName_74(){\n  return this.cssClass;\n}\n;\nvar BIG, MEDIUM_1, SMALL_0;\nvar Lgwt_material_design_client_constants_LoaderSize_2_classLit = createForEnum('gwt.material.design.client.constants', 'LoaderSize', 210, values_36);\nfunction $clinit_MaterialLoader(){\n  $clinit_MaterialLoader = emptyMethod;\n  div_0 = new Div;\n  preLoader = new MaterialPreLoader;\n  progress_0 = new MaterialProgress;\n}\n\nfunction showLoading(isShow){\n  $clinit_MaterialLoader();\n  if (isShow) {\n    $setStyleName(div_0, 'valign-wrapper loader-wrapper');\n    $setPropertyImpl($getElement(preLoader).style, 'margin', 'auto');\n    $add_13(preLoader, new MaterialSpinner_0('blue'));\n    $add_13(preLoader, new MaterialSpinner_0('red'));\n    $add_13(preLoader, new MaterialSpinner_0('yellow'));\n    $add_13(preLoader, new MaterialSpinner_0('green'));\n    $add_13(div_0, preLoader);\n    $add_2(($clinit_RootPanel() , get_1(null)), div_0);\n  }\n   else {\n    $removeFromParent_0(div_0);\n    $removeFromParent_0(preLoader);\n  }\n}\n\nfunction showProgress(isShow){\n  $clinit_MaterialLoader();\n  if (isShow) {\n    $setStyleName(div_0, 'valign-wrapper  progress-wrapper');\n    $setPropertyImpl($getElement(progress_0).style, 'margin', 'auto');\n    $add_13(div_0, progress_0);\n    $add_2(($clinit_RootPanel() , get_1(null)), div_0);\n  }\n   else {\n    $removeFromParent_0(div_0);\n    $removeFromParent_0(progress_0);\n  }\n}\n\nvar div_0, preLoader, progress_0;\nfunction $showLoader(this$static){\n  $add_13(this$static, this$static.progress);\n}\n\nfunction $setSize_0(this$static, size_0){\n  $setStyle(this$static.sizeMixin, size_0.cssClass);\n}\n\nfunction MaterialPreLoader(){\n  ComplexWidget_0.call(this, $doc.createElement('div'));\n  this.sizeMixin = new CssNameMixin(this);\n  $setClassName(($clinit_DOM() , this.element), 'preloader-wrapper active');\n}\n\ndefineClass(237, 43, $intern_47, MaterialPreLoader);\nvar Lgwt_material_design_client_ui_MaterialPreLoader_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialPreLoader', 237);\nfunction MaterialSpinner(){\n  ComplexWidget_0.call(this, $doc.createElement('div'));\n  this.circleClipperLeft = new Div;\n  this.circleClipperRight = new Div;\n  this.circle1 = new Div;\n  this.circle2 = new Div;\n  this.circle3 = new Div;\n  this.gapPatch = new Div;\n  $setClassName(($clinit_DOM() , this.element), 'spinner-layer');\n  $add_13(this, this.circleClipperLeft);\n  $add_13(this.circleClipperLeft, this.circle1);\n  $add_13(this, this.gapPatch);\n  $add_13(this.gapPatch, this.circle2);\n  $add_13(this, this.circleClipperRight);\n  $add_13(this.circleClipperRight, this.circle3);\n  $setStyleName(this.circleClipperLeft, 'circle-clipper left');\n  $setStyleName(this.gapPatch, 'gap-patch');\n  $setStyleName(this.circleClipperRight, 'circle-clipper right');\n  $setStyleName(this.circle1, 'circle');\n  $setStyleName(this.circle2, 'circle');\n  $setStyleName(this.circle3, 'circle');\n}\n\nfunction MaterialSpinner_0(color_0){\n  MaterialSpinner.call(this);\n  setStyleName(($clinit_DOM() , this.element), 'spinner-' + color_0, true);\n}\n\ndefineClass(152, 43, $intern_47, MaterialSpinner, MaterialSpinner_0);\nvar Lgwt_material_design_client_ui_MaterialSpinner_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialSpinner', 152);\nfunction LoaderPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(527, 51, $intern_40, LoaderPresenter);\n_.onReveal = function onReveal_16(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Loaders', 'If you have content that will take a long time to load, you should give the user feedback. For this reason we provide a number activity + progress indicators.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderPresenter', 527);\nfunction $onShowNavBarProgress(this$static){\n  var t;\n  $showLoader(this$static.navBar);\n  t = new LoaderView$3(this$static);\n  $schedule(t, 3000);\n}\n\nfunction LoaderView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_11(new LoaderView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(667, 55, $intern_41, LoaderView);\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView', 667);\nfunction LoaderView$1(){\n  Timer.call(this);\n}\n\ndefineClass(668, 139, {}, LoaderView$1);\n_.run = function run_3(){\n  showLoading(false);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/1', 668);\nfunction LoaderView$2(){\n  Timer.call(this);\n}\n\ndefineClass(669, 139, {}, LoaderView$2);\n_.run = function run_4(){\n  showProgress(false);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/2', 669);\nfunction LoaderView$3(this$0){\n  this.this$01 = this$0;\n  Timer.call(this);\n}\n\ndefineClass(670, 139, {}, LoaderView$3);\n_.run = function run_5(){\n  $removeFromParent_0(this.this$01.navBar.progress);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/3', 670);\nfunction LoaderView_BinderImpl(){\n}\n\ndefineClass(860, 1, {}, LoaderView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl', 860);\nfunction $build_f_HTMLPanel1_11(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, btnShowLoader, f_PrettyPre3, f_MaterialTitle4, btnShowProgress, f_PrettyPre5, f_MaterialTitle6, btnShowNavBarProgress, navBar, f_PrettyPre15, f_MaterialTitle16, f_MaterialRow17, f_PrettyPre27, sb, sb_0, f_MaterialNavBrand7, f_MaterialNavSection8, f_MaterialLink9, f_MaterialLink10, f_MaterialTooltip11, f_MaterialTooltip13, sb_1, f_MaterialColumn18, f_MaterialPreLoader19, f_MaterialColumn21, f_MaterialPreLoader22, f_MaterialColumn24, f_MaterialPreLoader25, sb_2, f_MaterialLink12, f_MaterialLink14, f_MaterialSpinner20, f_MaterialSpinner23, f_MaterialSpinner26;\n  f_HTMLPanel1 = new HTMLPanel($html5_1(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Circular') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnShowLoader = new MaterialButton , setStyleName(btnShowLoader.element, 'C6OS1DC-j-a', true) , btnShowLoader.span_0.setText('Show Loader') , $add_13(btnShowLoader, btnShowLoader.span_0) , $setBackgroundColor(btnShowLoader.colorsMixin, 'blue') , $addDomHandler(btnShowLoader, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , btnShowLoader), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML(f_PrettyPre3, (sb = new StringBuilder , sb.string += '// Show Loader<br> MaterialLoader.showLoading(true);<br><br> // Hide Loader<br> MaterialLoader.showLoading(false);<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre3.element, 'lang-java', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle4.header), 'Linear') , f_MaterialTitle4), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnShowProgress = new MaterialButton , setStyleName(btnShowProgress.element, 'C6OS1DC-j-a', true) , btnShowProgress.span_0.setText('Show Progress') , $add_13(btnShowProgress, btnShowProgress.span_0) , $setBackgroundColor(btnShowProgress.colorsMixin, 'blue') , $addDomHandler(btnShowProgress, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnShowProgress), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre5 = new PrettyPre , $setHTML(f_PrettyPre5, (sb_0 = new StringBuilder , sb_0.string += '// Show Progress<br> MaterialLoader.showProgress(true);<br><br> // Hide Progress<br> MaterialLoader.showProgress(false);<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre5.element, 'lang-java', true) , setStyleName(f_PrettyPre5.element, 'z-depth-1', true) , f_PrettyPre5), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle6 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle6.header), 'NavBar Integration') , $setText_4(f_MaterialTitle6.paragraph, 'Using the progress we can attach it below the nav for better UI / UX when displaying important content on your app.') , f_MaterialTitle6), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnShowNavBarProgress = new MaterialButton , setStyleName(btnShowNavBarProgress.element, 'C6OS1DC-j-a', true) , btnShowNavBarProgress.span_0.setText('Show Progress') , $add_13(btnShowNavBarProgress, btnShowNavBarProgress.span_0) , $setBackgroundColor(btnShowNavBarProgress.colorsMixin, 'blue') , $addDomHandler(btnShowNavBarProgress, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_1)) , btnShowNavBarProgress), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (navBar = new MaterialNavBar , $add_23(navBar, (f_MaterialNavBrand7 = new MaterialNavBrand , $add_13(f_MaterialNavBrand7, f_MaterialNavBrand7.div) , $setInnerText($getElement(f_MaterialNavBrand7.div), 'Title') , $setFloat(f_MaterialNavBrand7, ($clinit_Style$Float() , LEFT)) , $setAttribute(f_MaterialNavBrand7.element, 'href', '#Test') , f_MaterialNavBrand7)) , $add_23(navBar, (f_MaterialNavSection8 = new MaterialNavSection , $add_19(f_MaterialNavSection8, new ListItem_0((f_MaterialLink9 = new MaterialLink , $setIconPosition(f_MaterialLink9, ($clinit_IconPosition() , LEFT_4)) , f_MaterialLink9.span_0.setText('Account') , $add_13(f_MaterialLink9, f_MaterialLink9.span_0) , $setTextColor(f_MaterialLink9.colorsMixin, 'white') , $setWaves(f_MaterialLink9, ($clinit_WavesType() , LIGHT)) , $setIconType(f_MaterialLink9, ($clinit_IconType() , ACCOUNT_CIRCLE)) , f_MaterialLink9))) , $add_19(f_MaterialNavSection8, new ListItem_0((f_MaterialLink10 = new MaterialLink , $setIconPosition(f_MaterialLink10, LEFT_4) , f_MaterialLink10.span_0.setText('Refresh') , $add_13(f_MaterialLink10, f_MaterialLink10.span_0) , $setTextColor(f_MaterialLink10.colorsMixin, 'white') , $setWaves(f_MaterialLink10, LIGHT) , $setIconType(f_MaterialLink10, AUTORENEW) , f_MaterialLink10))) , $add_19(f_MaterialNavSection8, new ListItem_0((f_MaterialTooltip11 = new MaterialTooltip , $add_28(f_MaterialTooltip11, (f_MaterialLink12 = new MaterialLink , $setTextColor(f_MaterialLink12.colorsMixin, 'white') , $setWaves(f_MaterialLink12, LIGHT) , $setIconType(f_MaterialLink12, SEARCH_0) , f_MaterialLink12)) , f_MaterialTooltip11.text_0 = 'Menu' , $setAttribute($getElement(f_MaterialTooltip11.widget), 'data-tooltip', 'Menu') , f_MaterialTooltip11).widget)) , $add_19(f_MaterialNavSection8, new ListItem_0((f_MaterialTooltip13 = new MaterialTooltip , $add_28(f_MaterialTooltip13, (f_MaterialLink14 = new MaterialLink , $setTextColor(f_MaterialLink14.colorsMixin, 'white') , $setWaves(f_MaterialLink14, LIGHT) , $setIconType(f_MaterialLink14, MORE_VERT) , f_MaterialLink14)) , f_MaterialTooltip13.text_0 = 'Starter' , $setAttribute($getElement(f_MaterialTooltip13.widget), 'data-tooltip', 'Starter') , f_MaterialTooltip13).widget)) , $setFloat(f_MaterialNavSection8, RIGHT) , f_MaterialNavSection8)) , setStyleName(navBar.element, 'C6OS1DC-j-b', true) , $setBackgroundColor(navBar.colorsMixin, 'blue') , this$static.owner.navBar = navBar , navBar), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre15 = new PrettyPre , $setHTML(f_PrettyPre15, (sb_1 = new StringBuilder , sb_1.string += '// Show NavBar Loader<br> navBar.showLoader();<br><br> // Hide NavBar Loader<br> navBar.hideLoader();<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre15.element, 'lang-java', true) , setStyleName(f_PrettyPre15.element, 'z-depth-1', true) , f_PrettyPre15), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle16 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle16.header), 'Stand alone Loaders') , $setText_4(f_MaterialTitle16.paragraph, 'Standalone loaders can be added to any place of your app using UiBinder(inside a dialog, a page or everywhere depends on your UI UX).') , f_MaterialTitle16), $get_0(this$static.domId10Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow17 = new MaterialRow , $add_13(f_MaterialRow17, (f_MaterialColumn18 = new MaterialColumn , $add_13(f_MaterialColumn18, (f_MaterialPreLoader19 = new MaterialPreLoader , $add_13(f_MaterialPreLoader19, (f_MaterialSpinner20 = new MaterialSpinner , setStyleName(f_MaterialSpinner20.element, 'spinner-blue-only', true) , f_MaterialSpinner20)) , $setSize_0(f_MaterialPreLoader19, ($clinit_LoaderSize() , BIG)) , f_MaterialPreLoader19)) , $setGrid(f_MaterialColumn18.gridMixin, 'l4') , f_MaterialColumn18)) , $add_13(f_MaterialRow17, (f_MaterialColumn21 = new MaterialColumn , $add_13(f_MaterialColumn21, (f_MaterialPreLoader22 = new MaterialPreLoader , $add_13(f_MaterialPreLoader22, (f_MaterialSpinner23 = new MaterialSpinner , setStyleName(f_MaterialSpinner23.element, 'spinner-red-only', true) , f_MaterialSpinner23)) , f_MaterialPreLoader22)) , $setGrid(f_MaterialColumn21.gridMixin, 'l4') , f_MaterialColumn21)) , $add_13(f_MaterialRow17, (f_MaterialColumn24 = new MaterialColumn , $add_13(f_MaterialColumn24, (f_MaterialPreLoader25 = new MaterialPreLoader , $add_13(f_MaterialPreLoader25, (f_MaterialSpinner26 = new MaterialSpinner , setStyleName(f_MaterialSpinner26.element, 'spinner-yellow-only', true) , f_MaterialSpinner26)) , $setSize_0(f_MaterialPreLoader25, SMALL_0) , f_MaterialPreLoader25)) , $setGrid(f_MaterialColumn24.gridMixin, 'l4') , f_MaterialColumn24)) , f_MaterialRow17), $get_0(this$static.domId11Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre27 = new PrettyPre , $setHTML(f_PrettyPre27, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialPreLoader size=\"BIG\"&gt;<br> \\u2003&lt;m:MaterialSpinner color=\"blue-only\" /&gt;<br> &lt;/m:MaterialPreLoader&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(f_PrettyPre27.element, 'lang-java', true) , setStyleName(f_PrettyPre27.element, 'z-depth-1', true) , f_PrettyPre27), $get_0(this$static.domId12Element));\n  return f_HTMLPanel1;\n}\n\nfunction LoaderView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new LoaderView_BinderImpl$Widgets$1;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new LoaderView_BinderImpl$Widgets$2;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new LoaderView_BinderImpl$Widgets$3(this);\n  this.owner = owner;\n  this.style_0 = (new LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_9);\n  $ensureInjected_14(this.style_0);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n}\n\ndefineClass(861, 1, {}, LoaderView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets', 861);\nfunction LoaderView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(862, 1, $intern_51, LoaderView_BinderImpl$Widgets$1);\n_.onClick = function onClick_52(event_0){\n  var t;\n  showLoading(true);\n  t = new LoaderView$1;\n  $schedule(t, 3000);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/1', 862);\nfunction LoaderView_BinderImpl$Widgets$2(){\n}\n\ndefineClass(863, 1, $intern_51, LoaderView_BinderImpl$Widgets$2);\n_.onClick = function onClick_53(event_0){\n  var t;\n  showProgress(true);\n  t = new LoaderView$2;\n  $schedule(t, 3000);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/2', 863);\nfunction LoaderView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(864, 1, $intern_51, LoaderView_BinderImpl$Widgets$3);\n_.onClick = function onClick_54(event_0){\n  $onShowNavBarProgress(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/3', 864);\nfunction LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1132, 1, {}, LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_9;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1132);\nfunction $ensureInjected_14(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    inject_0(($clinit_LocaleInfo() , '.C6OS1DC-j-a{width:200px;margin-bottom:10px}.C6OS1DC-j-b{padding-left:0!important}'));\n    return true;\n  }\n  return false;\n}\n\nfunction LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1133, 1, {}, LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_20(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1133);\nfunction $clinit_LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_9 = new LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html5_1(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$) {\n    result = new LoaderPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$) {\n    result = new LoaderView(new LoaderView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$;\n}\n\ndefineClass(471, 1, $intern_55);\n_.onSuccess_0 = function onSuccess_10(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(11);\n\n//# sourceURL=gwtmaterialdemo-11.js\n")
