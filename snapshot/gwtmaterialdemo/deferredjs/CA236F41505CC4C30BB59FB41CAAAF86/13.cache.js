$wnd.gwtmaterialdemo.runAsyncCallback13("function NavBarPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(529, 51, $intern_40, NavBarPresenter);\n_.onReveal = function onReveal_18(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('NavBar', 'The navbar is fully contained by an HTML5 Nav tag. Inside a recommended container div, there are 2 main parts of the navbar. A logo or brand link, and the navigations links. You can align these links to the left or right.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_navbar_NavBarPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.navbar', 'NavBarPresenter', 529);\nfunction NavBarView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_13(new NavBarView_BinderImpl$Widgets));\n}\n\ndefineClass(672, 55, $intern_41, NavBarView);\nvar Lgwt_material_design_demo_client_application_components_navbar_NavBarView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.navbar', 'NavBarView', 672);\nfunction NavBarView_BinderImpl(){\n}\n\ndefineClass(868, 1, {}, NavBarView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_navbar_NavBarView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.navbar', 'NavBarView_BinderImpl', 868);\nfunction $build_f_HTMLPanel1_13(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialNavBar3, f_PrettyPre12, f_MaterialTitle13, f_MaterialNavBar14, f_PrettyPre21, f_MaterialTitle22, f_MaterialRow23, f_MaterialTitle28, f_MaterialRow29, f_MaterialNavBrand4, f_MaterialNavSection5, f_MaterialLink6, f_MaterialLink7, f_MaterialTooltip8, f_MaterialTooltip10, sb, f_MaterialNavBrand15, f_MaterialNavSection16, f_MaterialTooltip17, f_MaterialTooltip19, sb_0, f_MaterialImage24, f_MaterialColumn25, f_HTMLPanel26, __attachRecord___0, f_PrettyPre27, f_MaterialImage30, f_MaterialColumn31, f_HTMLPanel32, __attachRecord___1, f_PrettyPre33, f_MaterialLink9, f_MaterialLink11, f_MaterialLink18, f_MaterialLink20, sb_1, sb_2;\n  f_HTMLPanel1 = new HTMLPanel($html7(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId9, this$static.domId10).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Links ,Icons, and Waves') , $setText_4(f_MaterialTitle2.paragraph, 'Based on material links you can add icons, link with icons or link only and apply ripple effect by adding waves attribute.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialNavBar3 = new MaterialNavBar , $add_23(f_MaterialNavBar3, (f_MaterialNavBrand4 = new MaterialNavBrand , $add_13(f_MaterialNavBrand4, f_MaterialNavBrand4.div) , $setInnerText($getElement(f_MaterialNavBrand4.div), 'Title') , $setFloat(f_MaterialNavBrand4, ($clinit_Style$Float() , LEFT)) , $setAttribute(f_MaterialNavBrand4.element, 'href', '#Test') , f_MaterialNavBrand4)) , $add_23(f_MaterialNavBar3, (f_MaterialNavSection5 = new MaterialNavSection , $add_19(f_MaterialNavSection5, new ListItem_0((f_MaterialLink6 = new MaterialLink , $setIconPosition(f_MaterialLink6, ($clinit_IconPosition() , LEFT_4)) , f_MaterialLink6.span_0.setText('Account') , $add_13(f_MaterialLink6, f_MaterialLink6.span_0) , $setTextColor(f_MaterialLink6.colorsMixin, 'white') , $setWaves(f_MaterialLink6, ($clinit_WavesType() , LIGHT)) , $setIconType(f_MaterialLink6, ($clinit_IconType() , ACCOUNT_CIRCLE)) , f_MaterialLink6))) , $add_19(f_MaterialNavSection5, new ListItem_0((f_MaterialLink7 = new MaterialLink , $setIconPosition(f_MaterialLink7, LEFT_4) , f_MaterialLink7.span_0.setText('Refresh') , $add_13(f_MaterialLink7, f_MaterialLink7.span_0) , $setTextColor(f_MaterialLink7.colorsMixin, 'white') , $setWaves(f_MaterialLink7, LIGHT) , $setIconType(f_MaterialLink7, AUTORENEW) , f_MaterialLink7))) , $add_19(f_MaterialNavSection5, new ListItem_0((f_MaterialTooltip8 = new MaterialTooltip , $add_28(f_MaterialTooltip8, (f_MaterialLink9 = new MaterialLink , $setTextColor(f_MaterialLink9.colorsMixin, 'white') , $setWaves(f_MaterialLink9, LIGHT) , $setIconType(f_MaterialLink9, SEARCH_0) , f_MaterialLink9)) , f_MaterialTooltip8.text_0 = 'Menu' , $setAttribute($getElement(f_MaterialTooltip8.widget), 'data-tooltip', 'Menu') , f_MaterialTooltip8).widget)) , $add_19(f_MaterialNavSection5, new ListItem_0((f_MaterialTooltip10 = new MaterialTooltip , $add_28(f_MaterialTooltip10, (f_MaterialLink11 = new MaterialLink , $setTextColor(f_MaterialLink11.colorsMixin, 'white') , $setWaves(f_MaterialLink11, LIGHT) , $setIconType(f_MaterialLink11, MORE_VERT) , f_MaterialLink11)) , f_MaterialTooltip10.text_0 = 'Starter' , $setAttribute($getElement(f_MaterialTooltip10.widget), 'data-tooltip', 'Starter') , f_MaterialTooltip10).widget)) , $setFloat(f_MaterialNavSection5, RIGHT) , f_MaterialNavSection5)) , $setBackgroundColor(f_MaterialNavBar3.colorsMixin, 'blue') , f_MaterialNavBar3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre12 = new PrettyPre , $setHTML(f_PrettyPre12, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialNavBar backgroundColor=\"blue\" &gt;<br><br> \\u2003&lt;m:MaterialNavBrand href=\"#Test\" float=\"LEFT\"&gt;App Title&lt;/m:MaterialNavBrand&gt;<br><br> \\u2003&lt;m:MaterialNavSection float=\"RIGHT\"&gt;<br> \\u2003\\u2003&lt;m:MaterialLink iconType=\"ACCOUNT_CIRCLE\" iconPosition=\"LEFT\" text=\"Account\" textColor=\"white\" waves=\"LIGHT\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialLink iconType=\"AUTORENEW\" iconPosition=\"LEFT\" text=\"Refresh\" textColor=\"white\" waves=\"LIGHT\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialTooltip text=\"Menu\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLink iconType=\"SEARCH\" textColor=\"white\" waves=\"LIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialTooltip&gt;<br> \\u2003\\u2003&lt;m:MaterialTooltip text=\"Starter\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLink iconType=\"MORE_VERT\" textColor=\"white\" waves=\"LIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialTooltip&gt;<br> \\u2003&lt;/m:MaterialNavSection&gt;<br><br> &lt;/m:MaterialNavBar&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre12.element, 'lang-xml', true) , setStyleName(f_PrettyPre12.element, 'z-depth-1', true) , f_PrettyPre12), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle13 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle13.header), 'Alignment') , $setText_4(f_MaterialTitle13.paragraph, \"Add align='right' to your nav brand and align='left' to your nav section\") , f_MaterialTitle13), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialNavBar14 = new MaterialNavBar , $add_23(f_MaterialNavBar14, (f_MaterialNavBrand15 = new MaterialNavBrand , $add_13(f_MaterialNavBrand15, f_MaterialNavBrand15.div) , $setInnerText($getElement(f_MaterialNavBrand15.div), 'App Title') , $setFloat(f_MaterialNavBrand15, RIGHT) , $setAttribute(f_MaterialNavBrand15.element, 'href', '#Test') , f_MaterialNavBrand15)) , $add_23(f_MaterialNavBar14, (f_MaterialNavSection16 = new MaterialNavSection , $add_19(f_MaterialNavSection16, new ListItem_0((f_MaterialTooltip17 = new MaterialTooltip , $add_28(f_MaterialTooltip17, (f_MaterialLink18 = new MaterialLink , $setTextColor(f_MaterialLink18.colorsMixin, 'white') , $setIconType(f_MaterialLink18, SEARCH_0) , f_MaterialLink18)) , f_MaterialTooltip17.text_0 = 'Menu' , $setAttribute($getElement(f_MaterialTooltip17.widget), 'data-tooltip', 'Menu') , f_MaterialTooltip17).widget)) , $add_19(f_MaterialNavSection16, new ListItem_0((f_MaterialTooltip19 = new MaterialTooltip , $add_28(f_MaterialTooltip19, (f_MaterialLink20 = new MaterialLink , $setTextColor(f_MaterialLink20.colorsMixin, 'white') , $setIconType(f_MaterialLink20, MORE_VERT) , f_MaterialLink20)) , f_MaterialTooltip19.text_0 = 'Starter' , $setAttribute($getElement(f_MaterialTooltip19.widget), 'data-tooltip', 'Starter') , f_MaterialTooltip19).widget)) , $setFloat(f_MaterialNavSection16, LEFT) , f_MaterialNavSection16)) , $setBackgroundColor(f_MaterialNavBar14.colorsMixin, 'blue') , f_MaterialNavBar14), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre21 = new PrettyPre , $setHTML(f_PrettyPre21, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m:MaterialNavBar backgroundColor=\"blue\" &gt;<br><br> \\u2003&lt;m:MaterialNavBrand href=\"#Test\" float=\"RIGHT\"&gt;App Title&lt;/m:MaterialNavBrand&gt;<br><br> \\u2003&lt;m:MaterialNavSection float=\"LEFT\"&gt;<br> \\u2003\\u2003&lt;m:MaterialTooltip text=\"Menu\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLink iconType=\"SEARCH\" textColor=\"white\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialTooltip&gt;<br> \\u2003\\u2003&lt;m:MaterialTooltip text=\"Starter\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLink iconType=\"MORE_VERT\" textColor=\"white\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialTooltip&gt;<br> \\u2003&lt;/m:MaterialNavSection&gt;<br><br> &lt;/m:MaterialNavBar&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre21.element, 'lang-xml', true) , setStyleName(f_PrettyPre21.element, 'z-depth-1', true) , f_PrettyPre21), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle22 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle22.header), 'Fixed Type') , $setText_4(f_MaterialTitle22.paragraph, \"You can make your navbar fixed by adding: type='FIXED'\") , f_MaterialTitle22), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow23 = new MaterialRow , $add_13(f_MaterialRow23, (f_MaterialImage24 = new MaterialImage , $setGrid(f_MaterialImage24.gridMixin, 's12 m12 l4') , $setUrl_2(f_MaterialImage24, ($clinit_UriUtils() , new SafeUriString('https://cloud.githubusercontent.com/assets/3138071/10072886/d4bb530e-6279-11e5-93ae-e3d8622a1236.gif'))) , f_MaterialImage24)) , $add_13(f_MaterialRow23, (f_MaterialColumn25 = new MaterialColumn , $add_13(f_MaterialColumn25, (f_HTMLPanel26 = new HTMLPanel($html4_0(this$static.domId8).html) , __attachRecord___0 = attachToDom(f_HTMLPanel26.element) , $get_0(this$static.domId8Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement_1(f_HTMLPanel26, (f_PrettyPre27 = new PrettyPre , $setHTML(f_PrettyPre27, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialNavBar backgroundColor=\"blue\" type=\"FIXED\"&gt;<br> \\u2003\\u2003&lt;-- NavBar Contents here --&gt;<br> &lt;/m:MaterialNavBar&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre27.element, 'lang-xml', true) , setStyleName(f_PrettyPre27.element, 'z-depth-1', true) , f_PrettyPre27), $get_0(this$static.domId8Element)) , f_HTMLPanel26)) , $setGrid(f_MaterialColumn25.gridMixin, 's12 m12 l8') , f_MaterialColumn25)) , f_MaterialRow23), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle28 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle28.header), 'Tall Type') , $setText_4(f_MaterialTitle28.paragraph, \"You can make your navbar fixed by adding: type='TALL'\") , f_MaterialTitle28), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow29 = new MaterialRow , $add_13(f_MaterialRow29, (f_MaterialImage30 = new MaterialImage , $setGrid(f_MaterialImage30.gridMixin, 's12 m12 l4') , $setUrl_2(f_MaterialImage30, new SafeUriString('https://cloud.githubusercontent.com/assets/3138071/10072883/d2121638-6279-11e5-8e84-5fbcec8148f5.PNG')) , f_MaterialImage30)) , $add_13(f_MaterialRow29, (f_MaterialColumn31 = new MaterialColumn , $add_13(f_MaterialColumn31, (f_HTMLPanel32 = new HTMLPanel($html6_2(this$static.domId11).html) , __attachRecord___1 = attachToDom(f_HTMLPanel32.element) , $get_0(this$static.domId11Element) , __attachRecord___1.origParent?$insertBefore(__attachRecord___1.origParent, __attachRecord___1.element, __attachRecord___1.origSibling):orphan(__attachRecord___1.element) , $addAndReplaceElement_1(f_HTMLPanel32, (f_PrettyPre33 = new PrettyPre , $setHTML(f_PrettyPre33, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialNavBar backgroundColor=\"blue\" type=\"TALL\"&gt;<br> \\u2003\\u2003&lt;-- NavBar Contents here --&gt;<br> &lt;/m:MaterialNavBar&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(f_PrettyPre33.element, 'lang-xml', true) , setStyleName(f_PrettyPre33.element, 'z-depth-1', true) , f_PrettyPre33), $get_0(this$static.domId11Element)) , f_HTMLPanel32)) , $setGrid(f_MaterialColumn31.gridMixin, 's12 m12 l8') , f_MaterialColumn31)) , f_MaterialRow29), $get_0(this$static.domId10Element));\n  return f_HTMLPanel1;\n}\n\nfunction NavBarView_BinderImpl$Widgets(){\n  this.domId8 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n}\n\ndefineClass(869, 1, {}, NavBarView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_navbar_NavBarView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.navbar', 'NavBarView_BinderImpl/Widgets', 869);\nfunction $html4_0(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html6_2(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html7(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$) {\n    result = new NavBarPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$) {\n    result = new NavBarView(new NavBarView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$;\n}\n\ndefineClass(475, 1, $intern_55);\n_.onSuccess_0 = function onSuccess_12(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(13);\n\n//# sourceURL=gwtmaterialdemo-13.js\n")
