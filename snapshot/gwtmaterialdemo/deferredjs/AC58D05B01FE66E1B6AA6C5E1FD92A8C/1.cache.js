$wnd.gwtmaterialdemo.runAsyncCallback1("function $clinit_MaterialBubble(){\n  $clinit_MaterialBubble = emptyMethod;\n  if (debug) {\n    injectJs(($clinit_MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$bubbleJsDebugInitializer() , bubbleJsDebug), false, true, true);\n    injectCss(($clinit_MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$bubbleCssDebugInitializer() , bubbleCssDebug));\n  }\n   else {\n    injectJs(($clinit_MaterialBubbleClientBundle_default_InlineClientBundleGenerator$bubbleJsInitializer() , bubbleJs), true, false, true);\n    injectCss(($clinit_MaterialBubbleClientBundle_default_InlineClientBundleGenerator$bubbleCssInitializer() , bubbleCss));\n  }\n}\n\nfunction $initBubble(element, color_0, type_0){\n  $wnd.jQuery(document).ready(function(){\n    $wnd.jQuery(element).bubble({position:type_0, color:color_0});\n  }\n  );\n}\n\nfunction $setPosition_2(this$static, position){\n  $setCssName(this$static.positionMixin, position);\n}\n\nfunction MaterialBubble(){\n  $clinit_MaterialBubble();\n  MaterialWidget_0.call(this, $doc.createElement('span'));\n  $setClassName(($clinit_DOM() , this.element), 'bubble');\n  this.triangle = new MaterialWidget_0($doc.createElement('div'));\n  $setStyleName(this.triangle, 'triangle');\n  this.positionMixin = new CssNameMixin(this.triangle);\n  $add_12(this, this.triangle);\n  $setShadow_0((!this.shadowMixin && (this.shadowMixin = new ShadowMixin(this)) , this.shadowMixin), 1);\n}\n\ndefineClass(231, 23, $intern_62, MaterialBubble);\n_.onLoad = function onLoad_8(){\n  $initBubble(($clinit_DOM() , this.element), setupComputedBackgroundColor((!this.colorsMixin_0 && (this.colorsMixin_0 = new ColorsMixin(this)) , this.colorsMixin_0).bgColor), dynamicCast(this.positionMixin.style_0, 211).cssClass);\n}\n;\nvar Lgwt_material_design_addins_client_bubble_MaterialBubble_2_classLit = createForClass('gwt.material.design.addins.client.bubble', 'MaterialBubble', 231);\nvar bubbleCss, bubbleJs;\nfunction MaterialBubbleClientBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1797, 1, {}, MaterialBubbleClientBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_10(){\n  return 'bubbleCss';\n}\n;\n_.getText = function getText_1(){\n  return '.bubble{margin-left: 60px; float: left; background: red; color: #263238; position: relative; margin: 8px 0 15px 0; height: auto; padding: 8px 10px; max-width: 40%; display: block; word-wrap: break-word; border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; z-index: 1; font-size: 0.9rem; } .triangle{position: absolute; z-index: 998; border: 6px solid transparent; opacity: 0.8; } .triangle.right{top: 15px; right: -12px; } .triangle.left{top: 15px; left: -12px; } .triangle.top, .triangle.bottom{left: calc(50% - 4px); } .triangle.top{top: -12px; } .triangle.bottom{bottom: -12px; }';\n}\n;\nvar Lgwt_material_design_addins_client_bubble_MaterialBubbleClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.addins.client.bubble', 'MaterialBubbleClientBundle_default_InlineClientBundleGenerator/1', 1797);\nfunction MaterialBubbleClientBundle_default_InlineClientBundleGenerator$2(){\n}\n\ndefineClass(1798, 1, {}, MaterialBubbleClientBundle_default_InlineClientBundleGenerator$2);\n_.getName = function getName_11(){\n  return 'bubbleJs';\n}\n;\n_.getText = function getText_2(){\n  return \"$.fn.bubble = function (options){var position = options.position, color = options.color; triangle = $(this).find('.triangle'); if(position === 'left'){triangle.css('borderRightColor', color); }else if(position === 'right'){triangle.css('borderLeftColor', color); }else if(position === 'top'){triangle.css('borderBottomColor', color); }else if(position === 'bottom'){triangle.css('borderTopColor', color); } };\";\n}\n;\nvar Lgwt_material_design_addins_client_bubble_MaterialBubbleClientBundle_1default_1InlineClientBundleGenerator$2_2_classLit = createForClass('gwt.material.design.addins.client.bubble', 'MaterialBubbleClientBundle_default_InlineClientBundleGenerator/2', 1798);\nfunction $clinit_MaterialBubbleClientBundle_default_InlineClientBundleGenerator$bubbleCssInitializer(){\n  $clinit_MaterialBubbleClientBundle_default_InlineClientBundleGenerator$bubbleCssInitializer = emptyMethod;\n  bubbleCss = new MaterialBubbleClientBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $clinit_MaterialBubbleClientBundle_default_InlineClientBundleGenerator$bubbleJsInitializer(){\n  $clinit_MaterialBubbleClientBundle_default_InlineClientBundleGenerator$bubbleJsInitializer = emptyMethod;\n  bubbleJs = new MaterialBubbleClientBundle_default_InlineClientBundleGenerator$2;\n}\n\nvar bubbleCssDebug, bubbleJsDebug;\nfunction MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1795, 1, {}, MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_12(){\n  return 'bubbleCssDebug';\n}\n;\n_.getText = function getText_3(){\n  return '.bubble{\\n    margin-left: 60px;\\n    float: left;\\n    background: red;\\n    color: #263238;\\n    position: relative;\\n    margin: 8px 0 15px 0;\\n    height: auto;\\n    padding: 8px 10px;\\n    max-width: 40%;\\n    display: block;\\n    word-wrap: break-word;\\n    border-radius: 3px;\\n    -moz-border-radius: 3px;\\n    -webkit-border-radius: 3px;\\n    z-index: 1;\\n    font-size: 0.9rem;\\n}\\n.triangle{\\n    position: absolute;\\n    z-index: 998;\\n    border: 6px solid transparent;\\n    opacity: 0.8;\\n}\\n.triangle.right{\\n    top: 15px;\\n    right: -12px;\\n}\\n.triangle.left{\\n    top: 15px;\\n    left: -12px;\\n}\\n.triangle.top, .triangle.bottom{\\n    left: calc(50% - 4px);\\n}\\n.triangle.top{\\n    top: -12px;\\n}\\n.triangle.bottom{\\n    bottom: -12px;\\n}';\n}\n;\nvar Lgwt_material_design_addins_client_bubble_MaterialBubbleDebugClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.addins.client.bubble', 'MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator/1', 1795);\nfunction MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$2(){\n}\n\ndefineClass(1796, 1, {}, MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$2);\n_.getName = function getName_13(){\n  return 'bubbleJsDebug';\n}\n;\n_.getText = function getText_4(){\n  return \"$.fn.bubble = function (options){\\n\\n    var position = options.position,\\n        color = options.color;\\n    triangle = $(this).find('.triangle');\\n\\n    if(position === 'left'){\\n        triangle.css('borderRightColor', color);\\n    }else if(position === 'right'){\\n        triangle.css('borderLeftColor', color);\\n    }else if(position === 'top'){\\n        triangle.css('borderBottomColor', color);\\n    }else if(position === 'bottom'){\\n        triangle.css('borderTopColor', color);\\n    }\\n};\";\n}\n;\nvar Lgwt_material_design_addins_client_bubble_MaterialBubbleDebugClientBundle_1default_1InlineClientBundleGenerator$2_2_classLit = createForClass('gwt.material.design.addins.client.bubble', 'MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator/2', 1796);\nfunction $clinit_MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$bubbleCssDebugInitializer(){\n  $clinit_MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$bubbleCssDebugInitializer = emptyMethod;\n  bubbleCssDebug = new MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $clinit_MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$bubbleJsDebugInitializer(){\n  $clinit_MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$bubbleJsDebugInitializer = emptyMethod;\n  bubbleJsDebug = new MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$2;\n}\n\nfunction BubblePresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(660, 53, $intern_55, BubblePresenter);\n_.onReveal = function onReveal_3(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Bubble', 'Addin component for chat module, it display a good bubble view of messages withing the chat module.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_bubble_BubblePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.bubble', 'BubblePresenter', 660);\nfunction BubbleView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_2(new BubbleView_BinderImpl$Widgets));\n}\n\ndefineClass(865, 56, $intern_56, BubbleView);\nvar Lgwt_material_design_demo_client_application_addins_bubble_BubbleView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.bubble', 'BubbleView', 865);\nfunction BubbleView_BinderImpl(){\n}\n\ndefineClass(1151, 1, {}, BubbleView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_bubble_BubbleView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.bubble', 'BubbleView_BinderImpl', 1151);\nfunction $build_f_HTMLPanel1_2(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_PrettyPre3, f_MaterialTitle4, f_MaterialRow5, f_PrettyPre10, f_MaterialTitle11, f_MaterialRow12, f_PrettyPre43, sb, f_MaterialImage6, f_bubble$MaterialBubble7, f_MaterialLabel8, f_MaterialLabel9, sb_0, f_MaterialCard13, f_MaterialPanel14, f_MaterialCardContent17, sb_1, f_MaterialIcon15, f_MaterialIcon16, f_MaterialRow18, f_MaterialImage19, f_bubble$MaterialBubble20, f_MaterialLabel21, f_MaterialLabel22, f_MaterialRow23, f_MaterialImage24, f_bubble$MaterialBubble25, f_MaterialLabel26, f_MaterialLabel27, f_MaterialRow28, f_MaterialImage29, f_bubble$MaterialBubble30, f_MaterialLabel31, f_MaterialLabel32, f_MaterialRow33, f_MaterialImage34, f_bubble$MaterialBubble35, f_MaterialLabel36, f_MaterialLabel37, f_MaterialRow38, f_MaterialImage39, f_bubble$MaterialBubble40, f_MaterialLabel41, f_MaterialLabel42;\n  f_HTMLPanel1 = new HTMLPanel($html4_0(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Usage') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML_0(f_PrettyPre3, (sb = new StringBuilder , sb.string += '\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> \\u2003&lt;ma:bubble.MaterialBubble textColor=\"white\" backgroundColor=\"red\" position=\"LEFT\" float=\"LEFT\"&gt;<br> \\u2003&lt;m:MaterialLabel text=\"Hello there, How are you doing?\"/&gt;<br> \\u2003&lt;m:MaterialLabel text=\"1/2/2016\" fontSize=\"0.6em\" float=\"RIGHT\"/&gt;<br> &lt;/ma:bubble.MaterialBubble&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre3.element, 'lang-xml', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle4.header), 'Usage') , $setText_9(f_MaterialTitle4.paragraph, \"You can position the bubble by adding : position='LEFT,RIGHT,TOP or BOTTOM'\") , f_MaterialTitle4), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow5 = new MaterialRow , $add_12(f_MaterialRow5, (f_MaterialImage6 = new MaterialImage , $setTextColor_0((!f_MaterialImage6.colorsMixin_0 && (f_MaterialImage6.colorsMixin_0 = new ColorsMixin(f_MaterialImage6)) , f_MaterialImage6.colorsMixin_0), 'white') , f_MaterialImage6.element.style['height'] = '40px' , $setBackgroundColor_0((!f_MaterialImage6.colorsMixin_0 && (f_MaterialImage6.colorsMixin_0 = new ColorsMixin(f_MaterialImage6)) , f_MaterialImage6.colorsMixin_0), 'red') , f_MaterialImage6.element.style['marginTop'] = ($clinit_Style$Unit() , '8.0px') , $setShadow_0((!f_MaterialImage6.shadowMixin && (f_MaterialImage6.shadowMixin = new ShadowMixin(f_MaterialImage6)) , f_MaterialImage6.shadowMixin), 1) , f_MaterialImage6.element.style['marginRight'] = '12.0px' , f_MaterialImage6.element.style['width'] = '40px' , $setOn((!f_MaterialImage6.circleMixin && (f_MaterialImage6.circleMixin = new ToggleStyleMixin(f_MaterialImage6, 'circle')) , f_MaterialImage6.circleMixin), true) , $setFloat(f_MaterialImage6, ($clinit_Style$Float() , LEFT)) , $setUrl_3(f_MaterialImage6.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1ccdd322433737.5631e853db4a9.png') , f_MaterialImage6)) , $add_12(f_MaterialRow5, (f_bubble$MaterialBubble7 = new MaterialBubble , $add_12(f_bubble$MaterialBubble7, (f_MaterialLabel8 = new MaterialLabel , $setInnerHTML(f_MaterialLabel8.element, 'Hello there, How are you doing?') , f_MaterialLabel8)) , $add_12(f_bubble$MaterialBubble7, (f_MaterialLabel9 = new MaterialLabel , $setInnerHTML(f_MaterialLabel9.element, '1/2/2016') , $setFontSize_0(f_MaterialLabel9.fontSizeMixin, '0.6em') , $setFloat(f_MaterialLabel9, RIGHT) , f_MaterialLabel9)) , $setPosition_2(f_bubble$MaterialBubble7, ($clinit_Position() , LEFT_7)) , $setTextColor_0((!f_bubble$MaterialBubble7.colorsMixin_0 && (f_bubble$MaterialBubble7.colorsMixin_0 = new ColorsMixin(f_bubble$MaterialBubble7)) , f_bubble$MaterialBubble7.colorsMixin_0), 'white') , $setBackgroundColor_0((!f_bubble$MaterialBubble7.colorsMixin_0 && (f_bubble$MaterialBubble7.colorsMixin_0 = new ColorsMixin(f_bubble$MaterialBubble7)) , f_bubble$MaterialBubble7.colorsMixin_0), 'red') , $setFloat(f_bubble$MaterialBubble7, LEFT) , f_bubble$MaterialBubble7)) , f_MaterialRow5.element.style['marginBottom'] = '0.0px' , undefined , f_MaterialRow5), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre10 = new PrettyPre , $setHTML_0(f_PrettyPre10, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;ma:bubble.MaterialBubble textColor=\"white\" backgroundColor=\"red\" position=\"LEFT\" float=\"LEFT\"&gt;<br> \\u2003&lt;m:MaterialLabel text=\"Hello there, How are you doing?\"/&gt;<br> \\u2003&lt;m:MaterialLabel text=\"1/2/2016\" fontSize=\"0.6em\" float=\"RIGHT\"/&gt;<br> &lt;/ma:bubble.MaterialBubble&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre10.element, 'lang-xml', true) , setStyleName(f_PrettyPre10.element, 'z-depth-1', true) , f_PrettyPre10), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle11.header), 'Example') , $setText_9(f_MaterialTitle11.paragraph, 'Here is a sample card with chat feature implementing bubble addin component') , f_MaterialTitle11), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow12 = new MaterialRow , $add_12(f_MaterialRow12, (f_MaterialCard13 = new MaterialCard , $add_12(f_MaterialCard13, (f_MaterialPanel14 = new MaterialPanel , $add_12(f_MaterialPanel14, (f_MaterialIcon15 = new MaterialIcon , $setTextColor_0((!f_MaterialIcon15.colorsMixin_0 && (f_MaterialIcon15.colorsMixin_0 = new ColorsMixin(f_MaterialIcon15)) , f_MaterialIcon15.colorsMixin_0), 'white') , $setFloat(f_MaterialIcon15, RIGHT) , $setIconType_3(f_MaterialIcon15, ($clinit_IconType() , MORE_VERT)) , f_MaterialIcon15)) , $add_12(f_MaterialPanel14, (f_MaterialIcon16 = new MaterialIcon , $setTextColor_0((!f_MaterialIcon16.colorsMixin_0 && (f_MaterialIcon16.colorsMixin_0 = new ColorsMixin(f_MaterialIcon16)) , f_MaterialIcon16.colorsMixin_0), 'white') , $setFloat(f_MaterialIcon16, RIGHT) , $setIconType_3(f_MaterialIcon16, CLOSE) , f_MaterialIcon16)) , $setBackgroundColor_0((!f_MaterialPanel14.colorsMixin_0 && (f_MaterialPanel14.colorsMixin_0 = new ColorsMixin(f_MaterialPanel14)) , f_MaterialPanel14.colorsMixin_0), 'blue darken-2') , $setOverflow(f_MaterialPanel14, ($clinit_Style$Overflow() , HIDDEN_0)) , f_MaterialPanel14.element.style['padding'] = '12.0px' , f_MaterialPanel14)) , $add_12(f_MaterialCard13, (f_MaterialCardContent17 = new MaterialCardContent , $add_12(f_MaterialCardContent17, (f_MaterialRow18 = new MaterialRow , $add_12(f_MaterialRow18, (f_MaterialImage19 = new MaterialImage , f_MaterialImage19.element.style['height'] = '40px' , $setBackgroundColor_0((!f_MaterialImage19.colorsMixin_0 && (f_MaterialImage19.colorsMixin_0 = new ColorsMixin(f_MaterialImage19)) , f_MaterialImage19.colorsMixin_0), 'blue accent-1') , f_MaterialImage19.element.style['marginTop'] = '8.0px' , $setShadow_0((!f_MaterialImage19.shadowMixin && (f_MaterialImage19.shadowMixin = new ShadowMixin(f_MaterialImage19)) , f_MaterialImage19.shadowMixin), 1) , f_MaterialImage19.element.style['marginRight'] = '12.0px' , f_MaterialImage19.element.style['width'] = '40px' , $setOn((!f_MaterialImage19.circleMixin && (f_MaterialImage19.circleMixin = new ToggleStyleMixin(f_MaterialImage19, 'circle')) , f_MaterialImage19.circleMixin), true) , $setFloat(f_MaterialImage19, LEFT) , $setUrl_3(f_MaterialImage19.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/70e0a922433737.5631e83fc9429.png') , f_MaterialImage19)) , $add_12(f_MaterialRow18, (f_bubble$MaterialBubble20 = new MaterialBubble , $add_12(f_bubble$MaterialBubble20, (f_MaterialLabel21 = new MaterialLabel , $setInnerHTML(f_MaterialLabel21.element, 'Hello there, How are you doing?') , f_MaterialLabel21)) , $add_12(f_bubble$MaterialBubble20, (f_MaterialLabel22 = new MaterialLabel , $setInnerHTML(f_MaterialLabel22.element, '1/2/2016') , $setFontSize_0(f_MaterialLabel22.fontSizeMixin, '0.6em') , $setFloat(f_MaterialLabel22, RIGHT) , f_MaterialLabel22)) , $setPosition_2(f_bubble$MaterialBubble20, LEFT_7) , $setBackgroundColor_0((!f_bubble$MaterialBubble20.colorsMixin_0 && (f_bubble$MaterialBubble20.colorsMixin_0 = new ColorsMixin(f_bubble$MaterialBubble20)) , f_bubble$MaterialBubble20.colorsMixin_0), 'blue accent-1') , $setFloat(f_bubble$MaterialBubble20, LEFT) , f_bubble$MaterialBubble20)) , f_MaterialRow18.element.style['marginBottom'] = '0.0px' , f_MaterialRow18)) , $add_12(f_MaterialCardContent17, (f_MaterialRow23 = new MaterialRow , $add_12(f_MaterialRow23, (f_MaterialImage24 = new MaterialImage , f_MaterialImage24.element.style['height'] = '40px' , $setBackgroundColor_0((!f_MaterialImage24.colorsMixin_0 && (f_MaterialImage24.colorsMixin_0 = new ColorsMixin(f_MaterialImage24)) , f_MaterialImage24.colorsMixin_0), 'blue darken-3') , f_MaterialImage24.element.style['marginLeft'] = '12.0px' , f_MaterialImage24.element.style['marginTop'] = '8.0px' , $setShadow_0((!f_MaterialImage24.shadowMixin && (f_MaterialImage24.shadowMixin = new ShadowMixin(f_MaterialImage24)) , f_MaterialImage24.shadowMixin), 1) , f_MaterialImage24.element.style['width'] = '40px' , $setOn((!f_MaterialImage24.circleMixin && (f_MaterialImage24.circleMixin = new ToggleStyleMixin(f_MaterialImage24, 'circle')) , f_MaterialImage24.circleMixin), true) , $setFloat(f_MaterialImage24, RIGHT) , $setUrl_3(f_MaterialImage24.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png') , f_MaterialImage24)) , $add_12(f_MaterialRow23, (f_bubble$MaterialBubble25 = new MaterialBubble , $add_12(f_bubble$MaterialBubble25, (f_MaterialLabel26 = new MaterialLabel , $setInnerHTML(f_MaterialLabel26.element, 'Hi there, Im fine, thank you. How about you?') , f_MaterialLabel26)) , $add_12(f_bubble$MaterialBubble25, (f_MaterialLabel27 = new MaterialLabel , $setInnerHTML(f_MaterialLabel27.element, '1/2/2016') , $setFontSize_0(f_MaterialLabel27.fontSizeMixin, '0.6em') , $setFloat(f_MaterialLabel27, RIGHT) , f_MaterialLabel27)) , $setPosition_2(f_bubble$MaterialBubble25, RIGHT_8) , $setTextColor_0((!f_bubble$MaterialBubble25.colorsMixin_0 && (f_bubble$MaterialBubble25.colorsMixin_0 = new ColorsMixin(f_bubble$MaterialBubble25)) , f_bubble$MaterialBubble25.colorsMixin_0), 'white') , $setBackgroundColor_0((!f_bubble$MaterialBubble25.colorsMixin_0 && (f_bubble$MaterialBubble25.colorsMixin_0 = new ColorsMixin(f_bubble$MaterialBubble25)) , f_bubble$MaterialBubble25.colorsMixin_0), 'blue darken-3') , $setFloat(f_bubble$MaterialBubble25, RIGHT) , f_bubble$MaterialBubble25)) , f_MaterialRow23.element.style['marginBottom'] = '0.0px' , f_MaterialRow23)) , $add_12(f_MaterialCardContent17, (f_MaterialRow28 = new MaterialRow , $add_12(f_MaterialRow28, (f_MaterialImage29 = new MaterialImage , f_MaterialImage29.element.style['height'] = '40px' , $setBackgroundColor_0((!f_MaterialImage29.colorsMixin_0 && (f_MaterialImage29.colorsMixin_0 = new ColorsMixin(f_MaterialImage29)) , f_MaterialImage29.colorsMixin_0), 'blue darken-3') , f_MaterialImage29.element.style['marginLeft'] = '12.0px' , f_MaterialImage29.element.style['marginTop'] = '8.0px' , $setShadow_0((!f_MaterialImage29.shadowMixin && (f_MaterialImage29.shadowMixin = new ShadowMixin(f_MaterialImage29)) , f_MaterialImage29.shadowMixin), 1) , f_MaterialImage29.element.style['width'] = '40px' , $setOn((!f_MaterialImage29.circleMixin && (f_MaterialImage29.circleMixin = new ToggleStyleMixin(f_MaterialImage29, 'circle')) , f_MaterialImage29.circleMixin), true) , $setFloat(f_MaterialImage29, RIGHT) , $setUrl_3(f_MaterialImage29.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png') , f_MaterialImage29)) , $add_12(f_MaterialRow28, (f_bubble$MaterialBubble30 = new MaterialBubble , $add_12(f_bubble$MaterialBubble30, (f_MaterialLabel31 = new MaterialLabel , $setInnerHTML(f_MaterialLabel31.element, 'Me too, Im doing good.') , f_MaterialLabel31)) , $add_12(f_bubble$MaterialBubble30, (f_MaterialLabel32 = new MaterialLabel , $setInnerHTML(f_MaterialLabel32.element, '1/2/2016') , $setFontSize_0(f_MaterialLabel32.fontSizeMixin, '0.6em') , $setFloat(f_MaterialLabel32, RIGHT) , f_MaterialLabel32)) , $setPosition_2(f_bubble$MaterialBubble30, RIGHT_8) , $setTextColor_0((!f_bubble$MaterialBubble30.colorsMixin_0 && (f_bubble$MaterialBubble30.colorsMixin_0 = new ColorsMixin(f_bubble$MaterialBubble30)) , f_bubble$MaterialBubble30.colorsMixin_0), 'white') , $setBackgroundColor_0((!f_bubble$MaterialBubble30.colorsMixin_0 && (f_bubble$MaterialBubble30.colorsMixin_0 = new ColorsMixin(f_bubble$MaterialBubble30)) , f_bubble$MaterialBubble30.colorsMixin_0), 'blue darken-3') , $setFloat(f_bubble$MaterialBubble30, RIGHT) , f_bubble$MaterialBubble30)) , f_MaterialRow28.element.style['marginBottom'] = '0.0px' , f_MaterialRow28)) , $add_12(f_MaterialCardContent17, (f_MaterialRow33 = new MaterialRow , $add_12(f_MaterialRow33, (f_MaterialImage34 = new MaterialImage , f_MaterialImage34.element.style['height'] = '40px' , $setBackgroundColor_0((!f_MaterialImage34.colorsMixin_0 && (f_MaterialImage34.colorsMixin_0 = new ColorsMixin(f_MaterialImage34)) , f_MaterialImage34.colorsMixin_0), 'blue accent-1') , f_MaterialImage34.element.style['marginTop'] = '8.0px' , $setShadow_0((!f_MaterialImage34.shadowMixin && (f_MaterialImage34.shadowMixin = new ShadowMixin(f_MaterialImage34)) , f_MaterialImage34.shadowMixin), 1) , f_MaterialImage34.element.style['marginRight'] = '12.0px' , f_MaterialImage34.element.style['width'] = '40px' , $setOn((!f_MaterialImage34.circleMixin && (f_MaterialImage34.circleMixin = new ToggleStyleMixin(f_MaterialImage34, 'circle')) , f_MaterialImage34.circleMixin), true) , $setFloat(f_MaterialImage34, LEFT) , $setUrl_3(f_MaterialImage34.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/70e0a922433737.5631e83fc9429.png') , f_MaterialImage34)) , $add_12(f_MaterialRow33, (f_bubble$MaterialBubble35 = new MaterialBubble , $add_12(f_bubble$MaterialBubble35, (f_MaterialLabel36 = new MaterialLabel , $setInnerHTML(f_MaterialLabel36.element, 'Would you want to go to Philippines?') , f_MaterialLabel36)) , $add_12(f_bubble$MaterialBubble35, (f_MaterialLabel37 = new MaterialLabel , $setInnerHTML(f_MaterialLabel37.element, '1/2/2016') , $setFontSize_0(f_MaterialLabel37.fontSizeMixin, '0.6em') , $setFloat(f_MaterialLabel37, RIGHT) , f_MaterialLabel37)) , $setPosition_2(f_bubble$MaterialBubble35, LEFT_7) , $setBackgroundColor_0((!f_bubble$MaterialBubble35.colorsMixin_0 && (f_bubble$MaterialBubble35.colorsMixin_0 = new ColorsMixin(f_bubble$MaterialBubble35)) , f_bubble$MaterialBubble35.colorsMixin_0), 'blue accent-1') , $setFloat(f_bubble$MaterialBubble35, LEFT) , f_bubble$MaterialBubble35)) , f_MaterialRow33.element.style['marginBottom'] = '0.0px' , f_MaterialRow33)) , $add_12(f_MaterialCardContent17, (f_MaterialRow38 = new MaterialRow , $add_12(f_MaterialRow38, (f_MaterialImage39 = new MaterialImage , f_MaterialImage39.element.style['height'] = '40px' , $setBackgroundColor_0((!f_MaterialImage39.colorsMixin_0 && (f_MaterialImage39.colorsMixin_0 = new ColorsMixin(f_MaterialImage39)) , f_MaterialImage39.colorsMixin_0), 'blue darken-3') , f_MaterialImage39.element.style['marginLeft'] = '12.0px' , f_MaterialImage39.element.style['marginTop'] = '8.0px' , $setShadow_0((!f_MaterialImage39.shadowMixin && (f_MaterialImage39.shadowMixin = new ShadowMixin(f_MaterialImage39)) , f_MaterialImage39.shadowMixin), 1) , f_MaterialImage39.element.style['width'] = '40px' , $setOn((!f_MaterialImage39.circleMixin && (f_MaterialImage39.circleMixin = new ToggleStyleMixin(f_MaterialImage39, 'circle')) , f_MaterialImage39.circleMixin), true) , $setFloat(f_MaterialImage39, RIGHT) , $setUrl_3(f_MaterialImage39.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png') , f_MaterialImage39)) , $add_12(f_MaterialRow38, (f_bubble$MaterialBubble40 = new MaterialBubble , $add_12(f_bubble$MaterialBubble40, (f_MaterialLabel41 = new MaterialLabel , $setInnerHTML(f_MaterialLabel41.element, 'Yes of course, I want to visit Philippines and take a tour.') , f_MaterialLabel41)) , $add_12(f_bubble$MaterialBubble40, (f_MaterialLabel42 = new MaterialLabel , $setInnerHTML(f_MaterialLabel42.element, '1/2/2016') , $setFontSize_0(f_MaterialLabel42.fontSizeMixin, '0.6em') , $setFloat(f_MaterialLabel42, RIGHT) , f_MaterialLabel42)) , $setPosition_2(f_bubble$MaterialBubble40, RIGHT_8) , $setTextColor_0((!f_bubble$MaterialBubble40.colorsMixin_0 && (f_bubble$MaterialBubble40.colorsMixin_0 = new ColorsMixin(f_bubble$MaterialBubble40)) , f_bubble$MaterialBubble40.colorsMixin_0), 'white') , $setBackgroundColor_0((!f_bubble$MaterialBubble40.colorsMixin_0 && (f_bubble$MaterialBubble40.colorsMixin_0 = new ColorsMixin(f_bubble$MaterialBubble40)) , f_bubble$MaterialBubble40.colorsMixin_0), 'blue darken-3') , $setFloat(f_bubble$MaterialBubble40, RIGHT) , f_bubble$MaterialBubble40)) , f_MaterialRow38.element.style['marginBottom'] = '0.0px' , f_MaterialRow38)) , f_MaterialCardContent17)) , $setBackgroundColor_0((!f_MaterialCard13.colorsMixin_0 && (f_MaterialCard13.colorsMixin_0 = new ColorsMixin(f_MaterialCard13)) , f_MaterialCard13.colorsMixin_0), 'blue') , f_MaterialCard13.element.style['marginLeft'] = '24.0px' , f_MaterialCard13.element.style['marginTop'] = '24.0px' , $setGrid((!f_MaterialCard13.gridMixin_0 && (f_MaterialCard13.gridMixin_0 = new GridMixin(f_MaterialCard13)) , f_MaterialCard13.gridMixin_0), 'l5 m12 s12') , setStyleName(f_MaterialCard13.element, 'no-padding', true) , f_MaterialCard13)) , f_MaterialRow12), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre43 = new PrettyPre , $setHTML_0(f_PrettyPre43, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialRow marginBottom=\"0\"&gt;<br> \\u2003&lt;m:MaterialImage backgroundColor=\"blue accent-1\" marginRight=\"12\" marginTop=\"8\" float=\"LEFT\" width=\"40px\" height=\"40px\" shadow=\"1\" circle=\"true\" url=\"https://mir-s3-cdn-cf.behance.net/project_modules/disp/70e0a922433737.5631e83fc9429.png\"/&gt;<br> \\u2003&lt;ma:bubble.MaterialBubble backgroundColor=\"blue accent-1\" position=\"LEFT\" float=\"LEFT\"&gt;<br> \\u2003\\u2003&lt;m:MaterialLabel text=\"Would you want to go to Philippines?\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialLabel text=\"1/2/2016\" fontSize=\"0.6em\" float=\"RIGHT\"/&gt;<br> \\u2003&lt;/ma:bubble.MaterialBubble&gt;<br> &lt;/m:MaterialRow&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre43.element, 'lang-xml', true) , setStyleName(f_PrettyPre43.element, 'z-depth-1', true) , f_PrettyPre43), $get_0(this$static.domId7Element));\n  return f_HTMLPanel1;\n}\n\nfunction BubbleView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n}\n\ndefineClass(1152, 1, {}, BubbleView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_bubble_BubbleView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.bubble', 'BubbleView_BinderImpl/Widgets', 1152);\nfunction $html4_0(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$) {\n    result = new BubblePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$) {\n    result = new BubbleView(new BubbleView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$;\n}\n\ndefineClass(555, 1, $intern_80);\n_.onSuccess_0 = function onSuccess_0(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(1);\n\n//# sourceURL=gwtmaterialdemo-1.js\n")
