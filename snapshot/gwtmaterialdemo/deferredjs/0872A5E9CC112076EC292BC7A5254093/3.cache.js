$wnd.gwtmaterialdemo.runAsyncCallback3("function $clinit_CollapsibleType(){\n  $clinit_CollapsibleType = emptyMethod;\n  ACCORDION = new CollapsibleType('ACCORDION', 0, 'accordion');\n  EXPANDABLE = new CollapsibleType('EXPANDABLE', 1, 'expandable');\n  POPOUT = new CollapsibleType('POPOUT', 2, 'popout');\n}\n\nfunction CollapsibleType(enum$name, enum$ordinal, cssClass){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.cssClass = cssClass;\n}\n\nfunction values_26(){\n  $clinit_CollapsibleType();\n  return initValues(getClassLiteralForArray(Lgwt_material_design_client_constants_CollapsibleType_2_classLit, 1), $intern_4, 205, 0, [ACCORDION, EXPANDABLE, POPOUT]);\n}\n\ndefineClass(205, 17, {28:1, 205:1, 172:1, 113:1, 6:1, 23:1, 17:1}, CollapsibleType);\n_.getCssName = function getCssName_66(){\n  return this.cssClass;\n}\n;\nvar ACCORDION, EXPANDABLE, POPOUT;\nvar Lgwt_material_design_client_constants_CollapsibleType_2_classLit = createForEnum('gwt.material.design.client.constants', 'CollapsibleType', 205, values_26);\nfunction $getActive(this$static){\n  try {\n    return $getWidget(this$static, this$static.index_0);\n  }\n   catch ($e0) {\n    $e0 = wrap($e0);\n    if (instanceOf($e0, 73)) {\n      return null;\n    }\n     else \n      throw unwrap($e0);\n  }\n}\n\nfunction $setActive(this$static){\n  var activeWidget;\n  this$static.index_0 = 1;\n  activeWidget = $getActive(this$static);\n  if (activeWidget) {\n    setStyleName(activeWidget.getStyleElement(), 'active', false);\n    setStyleName(activeWidget.getStyleElement(), 'active', true);\n  }\n}\n\nfunction $setType_2(this$static, type_0){\n  switch (type_0.ordinal) {\n    case 2:\n      $setAttribute(($clinit_DOM() , this$static.element), 'data-collapsible', 'accordion');\n      $addStyleName(this$static, type_0.cssClass);\n      break;\n    default:$setAttribute(($clinit_DOM() , this$static.element), 'data-collapsible', type_0.cssClass);\n  }\n}\n\nfunction CollapsiblePresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(519, 51, $intern_40, CollapsiblePresenter);\n_.onReveal = function onReveal_8(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Collapsibles', 'Collapsibles are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_collapsible_CollapsiblePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.collapsible', 'CollapsiblePresenter', 519);\nfunction CollapsibleView(){\n  var f_MaterialPanel1, f_MaterialTitle2, f_MaterialCollapsible3, f_MaterialCollapsibleItem4, f_MaterialCollapsibleItem9, f_MaterialCollapsibleItem14, f_PrettyPre19, sb, f_MaterialTitle20, f_MaterialCollapsible21, f_MaterialCollapsibleItem22, f_MaterialCollapsibleItem27, f_MaterialCollapsibleItem32, f_PrettyPre37, sb_0, f_MaterialTitle38, f_MaterialCollapsible39, f_MaterialCollapsibleItem40, f_MaterialCollapsibleItem45, f_MaterialCollapsibleItem50, f_PrettyPre55, sb_1, f_MaterialTitle56, f_MaterialCollapsible57, f_MaterialCollapsibleItem58, f_PrettyPre63, sb_2, f_MaterialTitle64, f_MaterialCollapsible65, f_MaterialCollapsibleItem66, f_MaterialCollapsibleItem71, f_MaterialCollapsibleItem76, f_PrettyPre81, sb_3, f_MaterialCollapsibleHeader5, f_MaterialLink6, f_MaterialCollapsibleBody7, f_MaterialLabel8, f_MaterialCollapsibleHeader10, f_MaterialLink11, f_MaterialCollapsibleBody12, f_MaterialLabel13, f_MaterialCollapsibleHeader15, f_MaterialLink16, f_MaterialCollapsibleBody17, f_MaterialLabel18, f_MaterialCollapsibleHeader23, f_MaterialLink24, f_MaterialCollapsibleBody25, f_MaterialLabel26, f_MaterialCollapsibleHeader28, f_MaterialLink29, f_MaterialCollapsibleBody30, f_MaterialLabel31, f_MaterialCollapsibleHeader33, f_MaterialLink34, f_MaterialCollapsibleBody35, f_MaterialLabel36, f_MaterialCollapsibleHeader41, f_MaterialLink42, f_MaterialCollapsibleBody43, f_MaterialLabel44, f_MaterialCollapsibleHeader46, f_MaterialLink47, f_MaterialCollapsibleBody48, f_MaterialLabel49, f_MaterialCollapsibleHeader51, f_MaterialLink52, f_MaterialCollapsibleBody53, f_MaterialLabel54, f_MaterialCollapsibleHeader59, f_MaterialLink60, f_MaterialCollapsibleBody61, f_MaterialLabel62, f_MaterialCollapsibleHeader67, f_MaterialLink68, f_MaterialCollapsibleBody69, f_MaterialLabel70, f_MaterialCollapsibleHeader72, f_MaterialLink73, f_MaterialCollapsibleBody74, f_MaterialLabel75, f_MaterialCollapsibleHeader77, f_MaterialLink78, f_MaterialCollapsibleBody79, f_MaterialLabel80;\n  ViewImpl.call(this);\n  $initWidget_0(this, (f_MaterialPanel1 = new MaterialPanel , $add_13(f_MaterialPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Accordion') , $setText_4(f_MaterialTitle2.paragraph, \"You can set the accordion type by adding an attribute type='ACCORDION'\") , f_MaterialTitle2)) , $add_13(f_MaterialPanel1, (f_MaterialCollapsible3 = new MaterialCollapsible , $add_16(f_MaterialCollapsible3, (f_MaterialCollapsibleItem4 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem4, (f_MaterialCollapsibleHeader5 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader5, (f_MaterialLink6 = new MaterialLink , $setIconPosition(f_MaterialLink6, ($clinit_IconPosition() , LEFT_4)) , f_MaterialLink6.span_0.setText('First') , $add_13(f_MaterialLink6, f_MaterialLink6.span_0) , $setTextColor(f_MaterialLink6.colorsMixin, 'black') , $setIconType(f_MaterialLink6, ($clinit_IconType() , POLYMER)) , f_MaterialLink6)) , f_MaterialCollapsibleHeader5)) , $add_13(f_MaterialCollapsibleItem4, (f_MaterialCollapsibleBody7 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody7, (f_MaterialLabel8 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel8.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel8)) , f_MaterialCollapsibleBody7)) , f_MaterialCollapsibleItem4)) , $add_16(f_MaterialCollapsible3, (f_MaterialCollapsibleItem9 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem9, (f_MaterialCollapsibleHeader10 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader10, (f_MaterialLink11 = new MaterialLink , $setIconPosition(f_MaterialLink11, LEFT_4) , f_MaterialLink11.span_0.setText('Second') , $add_13(f_MaterialLink11, f_MaterialLink11.span_0) , $setTextColor(f_MaterialLink11.colorsMixin, 'black') , $setIconType(f_MaterialLink11, POLYMER) , f_MaterialLink11)) , f_MaterialCollapsibleHeader10)) , $add_13(f_MaterialCollapsibleItem9, (f_MaterialCollapsibleBody12 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody12, (f_MaterialLabel13 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel13.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel13)) , f_MaterialCollapsibleBody12)) , f_MaterialCollapsibleItem9)) , $add_16(f_MaterialCollapsible3, (f_MaterialCollapsibleItem14 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem14, (f_MaterialCollapsibleHeader15 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader15, (f_MaterialLink16 = new MaterialLink , $setIconPosition(f_MaterialLink16, LEFT_4) , f_MaterialLink16.span_0.setText('Third') , $add_13(f_MaterialLink16, f_MaterialLink16.span_0) , $setTextColor(f_MaterialLink16.colorsMixin, 'black') , $setIconType(f_MaterialLink16, POLYMER) , f_MaterialLink16)) , f_MaterialCollapsibleHeader15)) , $add_13(f_MaterialCollapsibleItem14, (f_MaterialCollapsibleBody17 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody17, (f_MaterialLabel18 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel18.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel18)) , f_MaterialCollapsibleBody17)) , f_MaterialCollapsibleItem14)) , $setGrid(f_MaterialCollapsible3.gridMixin, 's12 m6 l8') , $setType_2(f_MaterialCollapsible3, ($clinit_CollapsibleType() , ACCORDION)) , f_MaterialCollapsible3)) , $add_13(f_MaterialPanel1, (f_PrettyPre19 = new PrettyPre , $setHTML(f_PrettyPre19, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialCollapsible type=\"ACCORDION\" grid=\"s12 m6 l8\"&gt;<br> \\u2003&lt;!-- ITEM 1 --&gt;<br> \\u2003&lt;m:MaterialCollapsibleItem&gt;<br> \\u2003\\u2003&lt;m:MaterialCollapsibleHeader&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLink text=\"First\" iconType=\"POLYMER\" iconPosition=\"LEFT\" textColor=\"black\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialCollapsibleHeader&gt;<br> \\u2003\\u2003&lt;m:MaterialCollapsibleBody&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialCollapsibleBody&gt;<br> \\u2003&lt;/m:MaterialCollapsibleItem&gt;<br> \\u2003&lt;!-- Other Collapsible items here --&gt;<br> &lt;/m:MaterialCollapsible&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(($clinit_DOM() , f_PrettyPre19.element), 'lang-xml', true) , setStyleName(f_PrettyPre19.element, 'z-depth-1', true) , f_PrettyPre19)) , $add_13(f_MaterialPanel1, (f_MaterialTitle20 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle20.header), 'Expandable') , $setText_4(f_MaterialTitle20.paragraph, \"You can set the accordion type by adding an attribute type='EXPANDABLE'\") , f_MaterialTitle20)) , $add_13(f_MaterialPanel1, (f_MaterialCollapsible21 = new MaterialCollapsible , $add_16(f_MaterialCollapsible21, (f_MaterialCollapsibleItem22 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem22, (f_MaterialCollapsibleHeader23 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader23, (f_MaterialLink24 = new MaterialLink , $setIconPosition(f_MaterialLink24, LEFT_4) , f_MaterialLink24.span_0.setText('First') , $add_13(f_MaterialLink24, f_MaterialLink24.span_0) , $setTextColor(f_MaterialLink24.colorsMixin, 'black') , $setIconType(f_MaterialLink24, POLYMER) , f_MaterialLink24)) , f_MaterialCollapsibleHeader23)) , $add_13(f_MaterialCollapsibleItem22, (f_MaterialCollapsibleBody25 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody25, (f_MaterialLabel26 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel26.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel26)) , f_MaterialCollapsibleBody25)) , f_MaterialCollapsibleItem22)) , $add_16(f_MaterialCollapsible21, (f_MaterialCollapsibleItem27 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem27, (f_MaterialCollapsibleHeader28 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader28, (f_MaterialLink29 = new MaterialLink , $setIconPosition(f_MaterialLink29, LEFT_4) , f_MaterialLink29.span_0.setText('Second') , $add_13(f_MaterialLink29, f_MaterialLink29.span_0) , $setTextColor(f_MaterialLink29.colorsMixin, 'black') , $setIconType(f_MaterialLink29, POLYMER) , f_MaterialLink29)) , f_MaterialCollapsibleHeader28)) , $add_13(f_MaterialCollapsibleItem27, (f_MaterialCollapsibleBody30 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody30, (f_MaterialLabel31 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel31.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel31)) , f_MaterialCollapsibleBody30)) , f_MaterialCollapsibleItem27)) , $add_16(f_MaterialCollapsible21, (f_MaterialCollapsibleItem32 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem32, (f_MaterialCollapsibleHeader33 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader33, (f_MaterialLink34 = new MaterialLink , $setIconPosition(f_MaterialLink34, LEFT_4) , f_MaterialLink34.span_0.setText('Third') , $add_13(f_MaterialLink34, f_MaterialLink34.span_0) , $setTextColor(f_MaterialLink34.colorsMixin, 'black') , $setIconType(f_MaterialLink34, POLYMER) , f_MaterialLink34)) , f_MaterialCollapsibleHeader33)) , $add_13(f_MaterialCollapsibleItem32, (f_MaterialCollapsibleBody35 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody35, (f_MaterialLabel36 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel36.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel36)) , f_MaterialCollapsibleBody35)) , f_MaterialCollapsibleItem32)) , $setType_2(f_MaterialCollapsible21, EXPANDABLE) , f_MaterialCollapsible21)) , $add_13(f_MaterialPanel1, (f_PrettyPre37 = new PrettyPre , $setHTML(f_PrettyPre37, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m:MaterialCollapsible type=\"EXPANDABLE\"&gt;<br> \\u2003&lt;!-- ITEM 1 --&gt;<br> \\u2003&lt;m:MaterialCollapsibleItem&gt;<br> \\u2003\\u2003&lt;m:MaterialCollapsibleHeader&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLink text=\"First\" iconType=\"POLYMER\" iconPosition=\"LEFT\" textColor=\"black\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialCollapsibleHeader&gt;<br> \\u2003\\u2003&lt;m:MaterialCollapsibleBody&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialCollapsibleBody&gt;<br> \\u2003&lt;/m:MaterialCollapsibleItem&gt;<br> \\u2003&lt;!-- Other Collapsible items here --&gt;<br> &lt;/m:MaterialCollapsible&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre37.element, 'lang-xml', true) , setStyleName(f_PrettyPre37.element, 'z-depth-1', true) , f_PrettyPre37)) , $add_13(f_MaterialPanel1, (f_MaterialTitle38 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle38.header), 'Popout') , $setText_4(f_MaterialTitle38.paragraph, \"You can set the popout type by adding an attribute type='POPOUT'\") , f_MaterialTitle38)) , $add_13(f_MaterialPanel1, (f_MaterialCollapsible39 = new MaterialCollapsible , $add_16(f_MaterialCollapsible39, (f_MaterialCollapsibleItem40 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem40, (f_MaterialCollapsibleHeader41 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader41, (f_MaterialLink42 = new MaterialLink , $setIconPosition(f_MaterialLink42, LEFT_4) , f_MaterialLink42.span_0.setText('First') , $add_13(f_MaterialLink42, f_MaterialLink42.span_0) , $setTextColor(f_MaterialLink42.colorsMixin, 'black') , $setIconType(f_MaterialLink42, POLYMER) , f_MaterialLink42)) , f_MaterialCollapsibleHeader41)) , $add_13(f_MaterialCollapsibleItem40, (f_MaterialCollapsibleBody43 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody43, (f_MaterialLabel44 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel44.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel44)) , f_MaterialCollapsibleBody43)) , f_MaterialCollapsibleItem40)) , $add_16(f_MaterialCollapsible39, (f_MaterialCollapsibleItem45 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem45, (f_MaterialCollapsibleHeader46 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader46, (f_MaterialLink47 = new MaterialLink , $setIconPosition(f_MaterialLink47, LEFT_4) , f_MaterialLink47.span_0.setText('Second') , $add_13(f_MaterialLink47, f_MaterialLink47.span_0) , $setTextColor(f_MaterialLink47.colorsMixin, 'black') , $setIconType(f_MaterialLink47, POLYMER) , f_MaterialLink47)) , f_MaterialCollapsibleHeader46)) , $add_13(f_MaterialCollapsibleItem45, (f_MaterialCollapsibleBody48 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody48, (f_MaterialLabel49 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel49.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel49)) , f_MaterialCollapsibleBody48)) , f_MaterialCollapsibleItem45)) , $add_16(f_MaterialCollapsible39, (f_MaterialCollapsibleItem50 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem50, (f_MaterialCollapsibleHeader51 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader51, (f_MaterialLink52 = new MaterialLink , $setIconPosition(f_MaterialLink52, LEFT_4) , f_MaterialLink52.span_0.setText('Third') , $add_13(f_MaterialLink52, f_MaterialLink52.span_0) , $setTextColor(f_MaterialLink52.colorsMixin, 'black') , $setIconType(f_MaterialLink52, POLYMER) , f_MaterialLink52)) , f_MaterialCollapsibleHeader51)) , $add_13(f_MaterialCollapsibleItem50, (f_MaterialCollapsibleBody53 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody53, (f_MaterialLabel54 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel54.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel54)) , f_MaterialCollapsibleBody53)) , f_MaterialCollapsibleItem50)) , $setType_2(f_MaterialCollapsible39, POPOUT) , f_MaterialCollapsible39)) , $add_13(f_MaterialPanel1, (f_PrettyPre55 = new PrettyPre , $setHTML(f_PrettyPre55, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialCollapsible type=\"POPOUT\"&gt;<br> \\u2003&lt;!-- ITEM 1 --&gt;<br> \\u2003&lt;m:MaterialCollapsibleItem&gt;<br> \\u2003\\u2003&lt;m:MaterialCollapsibleHeader&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLink text=\"First\" iconType=\"POLYMER\" iconPosition=\"LEFT\" textColor=\"black\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialCollapsibleHeader&gt;<br> \\u2003\\u2003&lt;m:MaterialCollapsibleBody&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialCollapsibleBody&gt;<br> \\u2003&lt;/m:MaterialCollapsibleItem&gt;<br> \\u2003&lt;!-- Other Collapsible items here --&gt;<br> &lt;/m:MaterialCollapsible&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre55.element, 'lang-xml', true) , setStyleName(f_PrettyPre55.element, 'z-depth-1', true) , f_PrettyPre55)) , $add_13(f_MaterialPanel1, (f_MaterialTitle56 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle56.header), 'Style') , $setText_4(f_MaterialTitle56.paragraph, 'You can define easily the style of your collapsible') , f_MaterialTitle56)) , $add_13(f_MaterialPanel1, (f_MaterialCollapsible57 = new MaterialCollapsible , $add_16(f_MaterialCollapsible57, (f_MaterialCollapsibleItem58 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem58, (f_MaterialCollapsibleHeader59 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader59, (f_MaterialLink60 = new MaterialLink , $setIconPosition(f_MaterialLink60, LEFT_4) , f_MaterialLink60.span_0.setText('First') , $add_13(f_MaterialLink60, f_MaterialLink60.span_0) , $setTextColor(f_MaterialLink60.colorsMixin, 'white') , $setIconType(f_MaterialLink60, POLYMER) , f_MaterialLink60)) , $setBackgroundColor(f_MaterialCollapsibleHeader59.colorsMixin, 'grey') , $setWaves(f_MaterialCollapsibleHeader59, ($clinit_WavesType() , DEFAULT_5)) , f_MaterialCollapsibleHeader59)) , $add_13(f_MaterialCollapsibleItem58, (f_MaterialCollapsibleBody61 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody61, (f_MaterialLabel62 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel62.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , $setTextColor(f_MaterialLabel62.colorsMixin, 'white') , f_MaterialLabel62)) , $setBackgroundColor(f_MaterialCollapsibleBody61.colorsMixin, 'grey darken-1') , f_MaterialCollapsibleBody61)) , f_MaterialCollapsibleItem58)) , $setType_2(f_MaterialCollapsible57, POPOUT) , f_MaterialCollapsible57)) , $add_13(f_MaterialPanel1, (f_PrettyPre63 = new PrettyPre , $setHTML(f_PrettyPre63, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialCollapsible type=\"POPOUT\"&gt;<br> \\u2003&lt;!-- ITEM 1 --&gt;&lt;br/&gt; \\u2003&lt;m:MaterialCollapsibleItem&gt;<br> \\u2003\\u2003&lt;m:MaterialCollapsibleHeader backgroundColor=\"grey\" waves=\"DEFAULT\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLink text=\"First\" iconType=\"POLYMER\" iconPosition=\"LEFT\" textColor=\"white\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialCollapsibleHeader&gt;<br> \\u2003\\u2003&lt;m:MaterialCollapsibleBody backgroundColor=\"grey darken-1\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel textColor=\"white\" text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialCollapsibleBody&gt;<br> \\u2003&lt;/m:MaterialCollapsibleItem&gt;<br> &lt;/m:MaterialCollapsible&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(f_PrettyPre63.element, 'lang-xml', true) , setStyleName(f_PrettyPre63.element, 'z-depth-1', true) , f_PrettyPre63)) , $add_13(f_MaterialPanel1, (f_MaterialTitle64 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle64.header), 'Preselected Section') , $setText_4(f_MaterialTitle64.paragraph, \"If you want a collapsible with a preopened section just add active='1' the parameter is the index of the collapsible item.\") , f_MaterialTitle64)) , $add_13(f_MaterialPanel1, (f_MaterialCollapsible65 = new MaterialCollapsible , $add_16(f_MaterialCollapsible65, (f_MaterialCollapsibleItem66 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem66, (f_MaterialCollapsibleHeader67 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader67, (f_MaterialLink68 = new MaterialLink , $setIconPosition(f_MaterialLink68, LEFT_4) , f_MaterialLink68.span_0.setText('First') , $add_13(f_MaterialLink68, f_MaterialLink68.span_0) , $setTextColor(f_MaterialLink68.colorsMixin, 'black') , $setIconType(f_MaterialLink68, POLYMER) , f_MaterialLink68)) , f_MaterialCollapsibleHeader67)) , $add_13(f_MaterialCollapsibleItem66, (f_MaterialCollapsibleBody69 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody69, (f_MaterialLabel70 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel70.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel70)) , f_MaterialCollapsibleBody69)) , f_MaterialCollapsibleItem66)) , $add_16(f_MaterialCollapsible65, (f_MaterialCollapsibleItem71 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem71, (f_MaterialCollapsibleHeader72 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader72, (f_MaterialLink73 = new MaterialLink , $setIconPosition(f_MaterialLink73, LEFT_4) , f_MaterialLink73.span_0.setText('Second') , $add_13(f_MaterialLink73, f_MaterialLink73.span_0) , $setTextColor(f_MaterialLink73.colorsMixin, 'black') , $setIconType(f_MaterialLink73, POLYMER) , f_MaterialLink73)) , f_MaterialCollapsibleHeader72)) , $add_13(f_MaterialCollapsibleItem71, (f_MaterialCollapsibleBody74 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody74, (f_MaterialLabel75 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel75.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel75)) , f_MaterialCollapsibleBody74)) , f_MaterialCollapsibleItem71)) , $add_16(f_MaterialCollapsible65, (f_MaterialCollapsibleItem76 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem76, (f_MaterialCollapsibleHeader77 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader77, (f_MaterialLink78 = new MaterialLink , $setIconPosition(f_MaterialLink78, LEFT_4) , f_MaterialLink78.span_0.setText('Third') , $add_13(f_MaterialLink78, f_MaterialLink78.span_0) , $setTextColor(f_MaterialLink78.colorsMixin, 'black') , $setIconType(f_MaterialLink78, POLYMER) , f_MaterialLink78)) , f_MaterialCollapsibleHeader77)) , $add_13(f_MaterialCollapsibleItem76, (f_MaterialCollapsibleBody79 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody79, (f_MaterialLabel80 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel80.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel80)) , f_MaterialCollapsibleBody79)) , f_MaterialCollapsibleItem76)) , $setActive(f_MaterialCollapsible65) , $setType_2(f_MaterialCollapsible65, POPOUT) , f_MaterialCollapsible65)) , $add_13(f_MaterialPanel1, (f_PrettyPre81 = new PrettyPre , $setHTML(f_PrettyPre81, (sb_3 = new StringBuilder , sb_3.string += '&lt;m:MaterialCollapsible type=\"POPOUT\" active=\"1\"&gt;<br> &lt;!-- ITEM 1 --&gt;<br> &lt;m:MaterialCollapsibleItem&gt;<br> &lt;m:MaterialCollapsibleHeader&gt;<br> &lt;m:MaterialLink text=\"First\" iconType=\"POLYMER\" iconPosition=\"LEFT\" textColor=\"black\"/&gt;<br> &lt;/m:MaterialCollapsibleHeader&gt;<br> &lt;m:MaterialCollapsibleBody&gt;<br> &lt;m:MaterialLabel text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\"/&gt;<br> &lt;/m:MaterialCollapsibleBody&gt;<br> &lt;/m:MaterialCollapsibleItem&gt;<br> &lt;!-- Other collapsible items here --&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html) , setStyleName(f_PrettyPre81.element, 'lang-xml', true) , setStyleName(f_PrettyPre81.element, 'z-depth-1', true) , f_PrettyPre81)) , f_MaterialPanel1));\n}\n\ndefineClass(644, 55, $intern_41, CollapsibleView);\nvar Lgwt_material_design_demo_client_application_components_collapsible_CollapsibleView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.collapsible', 'CollapsibleView', 644);\nfunction CollapsibleView_BinderImpl(){\n}\n\ndefineClass(808, 1, {}, CollapsibleView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_collapsible_CollapsibleView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.collapsible', 'CollapsibleView_BinderImpl', 808);\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsiblePresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsiblePresenter$_annotation$$none$$) {\n    result = new CollapsiblePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsibleView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsiblePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsiblePresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsiblePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsibleView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsibleView$_annotation$$none$$) {\n    result = new CollapsibleView(new CollapsibleView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsibleView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsibleView$_annotation$$none$$;\n}\n\ndefineClass(455, 1, $intern_55);\n_.onSuccess_0 = function onSuccess_2(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsiblePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(3);\n\n//# sourceURL=gwtmaterialdemo-3.js\n")
