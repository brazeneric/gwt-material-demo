$wnd.gwtmaterialdemo.runAsyncCallback21("function GridPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(539, 51, $intern_41, GridPresenter);\n_.onReveal = function onReveal_28(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Grid', 'We are using a standard 12 column fluid responsive grid system.The grid helps you layout your page in an ordered, easy fashion'));\n}\n;\nvar Lgwt_material_design_demo_client_application_style_grid_GridPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.grid', 'GridPresenter', 539);\nfunction GridView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_17(new GridView_BinderImpl$Widgets));\n}\n\ndefineClass(684, 55, $intern_42, GridView);\nvar Lgwt_material_design_demo_client_application_style_grid_GridView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.grid', 'GridView', 684);\nfunction GridView_BinderImpl(){\n}\n\ndefineClass(892, 1, {}, GridView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_style_grid_GridView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.style.grid', 'GridView_BinderImpl', 892);\nfunction $build_f_HTMLPanel1_17(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialRow3, f_MaterialLabel28, f_HTMLPanel29, __attachRecord___0, f_MaterialLabel31, f_MaterialTitle32, f_MaterialRow33, f_MaterialRow37, f_PrettyPre44, f_MaterialTitle45, f_MaterialRow46, f_PrettyPre53, f_MaterialTitle54, f_MaterialRow55, f_PrettyPre60, f_MaterialTitle61, f_MaterialRow62, f_PrettyPre72, f_MaterialColumn4, f_Span5, f_MaterialColumn6, f_Span7, f_MaterialColumn8, f_Span9, f_MaterialColumn10, f_Span11, f_MaterialColumn12, f_Span13, f_MaterialColumn14, f_Span15, f_MaterialColumn16, f_Span17, f_MaterialColumn18, f_Span19, f_MaterialColumn20, f_Span21, f_MaterialColumn22, f_Span23, f_MaterialColumn24, f_Span25, f_MaterialColumn26, f_Span27, f_PrettyPre30, sb, f_MaterialColumn34, f_HTMLPanel35, __attachRecord___1, f_Span36, f_MaterialColumn38, f_HTMLPanel39, __attachRecord___2, f_Span40, f_MaterialColumn41, f_HTMLPanel42, __attachRecord___3, f_Span43, sb_0, f_MaterialColumn47, f_HTMLPanel48, __attachRecord___4, f_Span49, f_MaterialColumn50, f_HTMLPanel51, __attachRecord___5, f_Span52, sb_1, f_MaterialColumn56, f_Span57, f_MaterialColumn58, f_Span59, sb_2, f_MaterialColumn63, f_MaterialImage64, f_MaterialTitle65, f_MaterialColumn66, f_MaterialImage67, f_MaterialTitle68, f_MaterialColumn69, f_MaterialImage70, f_MaterialTitle71, sb_3;\n  f_HTMLPanel1 = new HTMLPanel($html12_0(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId9, this$static.domId12, this$static.domId13, this$static.domId14, this$static.domId17, this$static.domId18, this$static.domId19, this$static.domId20, this$static.domId21, this$static.domId22, this$static.domId23).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId12Element);\n  $get_0(this$static.domId13Element);\n  $get_0(this$static.domId14Element);\n  $get_0(this$static.domId17Element);\n  $get_0(this$static.domId18Element);\n  $get_0(this$static.domId19Element);\n  $get_0(this$static.domId20Element);\n  $get_0(this$static.domId21Element);\n  $get_0(this$static.domId22Element);\n  $get_0(this$static.domId23Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), '12 Columns') , $setText_4(f_MaterialTitle2.paragraph, 'Our standard grid has 12 columns. No matter the size of the browser, each of these columns will always have an equal width.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow3 = new MaterialRow , $add_13(f_MaterialRow3, (f_MaterialColumn4 = new MaterialColumn , $add_13(f_MaterialColumn4, (f_Span5 = new Span , f_Span5.setText('1') , setStyleName(f_Span5.element, 'flow-text', true) , f_Span5)) , setStyleName(f_MaterialColumn4.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn4.gridMixin, 's1') , f_MaterialColumn4)) , $add_13(f_MaterialRow3, (f_MaterialColumn6 = new MaterialColumn , $add_13(f_MaterialColumn6, (f_Span7 = new Span , f_Span7.setText('2') , setStyleName(f_Span7.element, 'flow-text', true) , f_Span7)) , setStyleName(f_MaterialColumn6.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn6.gridMixin, 's1') , f_MaterialColumn6)) , $add_13(f_MaterialRow3, (f_MaterialColumn8 = new MaterialColumn , $add_13(f_MaterialColumn8, (f_Span9 = new Span , f_Span9.setText('3') , setStyleName(f_Span9.element, 'flow-text', true) , f_Span9)) , setStyleName(f_MaterialColumn8.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn8.gridMixin, 's1') , f_MaterialColumn8)) , $add_13(f_MaterialRow3, (f_MaterialColumn10 = new MaterialColumn , $add_13(f_MaterialColumn10, (f_Span11 = new Span , f_Span11.setText('4') , setStyleName(f_Span11.element, 'flow-text', true) , f_Span11)) , setStyleName(f_MaterialColumn10.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn10.gridMixin, 's1') , f_MaterialColumn10)) , $add_13(f_MaterialRow3, (f_MaterialColumn12 = new MaterialColumn , $add_13(f_MaterialColumn12, (f_Span13 = new Span , f_Span13.setText('5') , setStyleName(f_Span13.element, 'flow-text', true) , f_Span13)) , setStyleName(f_MaterialColumn12.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn12.gridMixin, 's1') , f_MaterialColumn12)) , $add_13(f_MaterialRow3, (f_MaterialColumn14 = new MaterialColumn , $add_13(f_MaterialColumn14, (f_Span15 = new Span , f_Span15.setText('6') , setStyleName(f_Span15.element, 'flow-text', true) , f_Span15)) , setStyleName(f_MaterialColumn14.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn14.gridMixin, 's1') , f_MaterialColumn14)) , $add_13(f_MaterialRow3, (f_MaterialColumn16 = new MaterialColumn , $add_13(f_MaterialColumn16, (f_Span17 = new Span , f_Span17.setText('7') , setStyleName(f_Span17.element, 'flow-text', true) , f_Span17)) , setStyleName(f_MaterialColumn16.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn16.gridMixin, 's1') , f_MaterialColumn16)) , $add_13(f_MaterialRow3, (f_MaterialColumn18 = new MaterialColumn , $add_13(f_MaterialColumn18, (f_Span19 = new Span , f_Span19.setText('8') , setStyleName(f_Span19.element, 'flow-text', true) , f_Span19)) , setStyleName(f_MaterialColumn18.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn18.gridMixin, 's1') , f_MaterialColumn18)) , $add_13(f_MaterialRow3, (f_MaterialColumn20 = new MaterialColumn , $add_13(f_MaterialColumn20, (f_Span21 = new Span , f_Span21.setText('9') , setStyleName(f_Span21.element, 'flow-text', true) , f_Span21)) , setStyleName(f_MaterialColumn20.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn20.gridMixin, 's1') , f_MaterialColumn20)) , $add_13(f_MaterialRow3, (f_MaterialColumn22 = new MaterialColumn , $add_13(f_MaterialColumn22, (f_Span23 = new Span , f_Span23.setText('10') , setStyleName(f_Span23.element, 'flow-text', true) , f_Span23)) , setStyleName(f_MaterialColumn22.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn22.gridMixin, 's1') , f_MaterialColumn22)) , $add_13(f_MaterialRow3, (f_MaterialColumn24 = new MaterialColumn , $add_13(f_MaterialColumn24, (f_Span25 = new Span , f_Span25.setText('11') , setStyleName(f_Span25.element, 'flow-text', true) , f_Span25)) , setStyleName(f_MaterialColumn24.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn24.gridMixin, 's1') , f_MaterialColumn24)) , $add_13(f_MaterialRow3, (f_MaterialColumn26 = new MaterialColumn , $add_13(f_MaterialColumn26, (f_Span27 = new Span , f_Span27.setText('12') , setStyleName(f_Span27.element, 'flow-text', true) , f_Span27)) , setStyleName(f_MaterialColumn26.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn26.gridMixin, 's1') , f_MaterialColumn26)) , f_MaterialRow3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialLabel28 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel28.directionalTextHelper, 'To get a feel of how the grid is used in HTML. Take a look at this code below which will produce a similar result as the one above.') , f_MaterialLabel28), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_HTMLPanel29 = new HTMLPanel($html2_4(this$static.domId4).html) , __attachRecord___0 = attachToDom(f_HTMLPanel29.element) , $get_0(this$static.domId4Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement_1(f_HTMLPanel29, (f_PrettyPre30 = new PrettyPre , $setHTML(f_PrettyPre30, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialRow&gt;<br><br> \\u2003&lt;m:MaterialColumn grid=\"s1\" &gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 1 &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s1\" addStyleNames=\"{style.grid}\"&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 2 &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s1\" addStyleNames=\"{style.grid}\"&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 3 &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s1\" addStyleNames=\"{style.grid}\"&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 4 &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s1\" addStyleNames=\"{style.grid}\"&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 5 &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s1\" addStyleNames=\"{style.grid}\"&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 6 &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s1\" addStyleNames=\"{style.grid}\"&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 7 &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s1\" addStyleNames=\"{style.grid}\"&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 8 &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s1\" addStyleNames=\"{style.grid}\"&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 9 &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s1\" addStyleNames=\"{style.grid}\"&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 10 &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s1\" addStyleNames=\"{style.grid}\"&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 11 &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s1\" addStyleNames=\"{style.grid}\"&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 12 &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;<br><br> &lt;/m:MaterialRow&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre30.element, 'lang-xml', true) , setStyleName(f_PrettyPre30.element, 'z-depth-1', true) , f_PrettyPre30), $get_0(this$static.domId4Element)) , f_HTMLPanel29), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialLabel31 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel31.directionalTextHelper, \"Note: For now, just know that the s1 stands for small-1 which in plain English means '1 column on small screens'.\") , f_MaterialLabel31), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle32 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle32.header), 'Columns live inside Rows') , $setText_4(f_MaterialTitle32.paragraph, 'Remember when you are creating your layout that all columns must be contained inside a row and that you must add the col class to your inner divs to make them into columns') , f_MaterialTitle32), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow33 = new MaterialRow , $add_13(f_MaterialRow33, (f_MaterialColumn34 = new MaterialColumn , $add_13(f_MaterialColumn34, (f_HTMLPanel35 = new HTMLPanel($html3_2(this$static.domId8).html) , __attachRecord___1 = attachToDom(f_HTMLPanel35.element) , $get_0(this$static.domId8Element) , __attachRecord___1.origParent?$insertBefore(__attachRecord___1.origParent, __attachRecord___1.element, __attachRecord___1.origSibling):orphan(__attachRecord___1.element) , $addAndReplaceElement_1(f_HTMLPanel35, (f_Span36 = new Span , f_Span36.setText('This div is 12-columns wide on all screen sizes') , setStyleName(f_Span36.element, 'flow-text', true) , f_Span36), $get_0(this$static.domId8Element)) , f_HTMLPanel35)) , setStyleName(f_MaterialColumn34.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn34.gridMixin, 's12') , f_MaterialColumn34)) , f_MaterialRow33), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow37 = new MaterialRow , $add_13(f_MaterialRow37, (f_MaterialColumn38 = new MaterialColumn , $add_13(f_MaterialColumn38, (f_HTMLPanel39 = new HTMLPanel($html4_3(this$static.domId10).html) , __attachRecord___2 = attachToDom(f_HTMLPanel39.element) , $get_0(this$static.domId10Element) , __attachRecord___2.origParent?$insertBefore(__attachRecord___2.origParent, __attachRecord___2.element, __attachRecord___2.origSibling):orphan(__attachRecord___2.element) , $addAndReplaceElement_1(f_HTMLPanel39, (f_Span40 = new Span , f_Span40.setText('6-columns (one-half)') , setStyleName(f_Span40.element, 'flow-text', true) , f_Span40), $get_0(this$static.domId10Element)) , f_HTMLPanel39)) , setStyleName(f_MaterialColumn38.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn38.gridMixin, 's6') , f_MaterialColumn38)) , $add_13(f_MaterialRow37, (f_MaterialColumn41 = new MaterialColumn , $add_13(f_MaterialColumn41, (f_HTMLPanel42 = new HTMLPanel($html5_2(this$static.domId11).html) , __attachRecord___3 = attachToDom(f_HTMLPanel42.element) , $get_0(this$static.domId11Element) , __attachRecord___3.origParent?$insertBefore(__attachRecord___3.origParent, __attachRecord___3.element, __attachRecord___3.origSibling):orphan(__attachRecord___3.element) , $addAndReplaceElement_1(f_HTMLPanel42, (f_Span43 = new Span , f_Span43.setText('6-columns (one-half)') , setStyleName(f_Span43.element, 'flow-text', true) , f_Span43), $get_0(this$static.domId11Element)) , f_HTMLPanel42)) , setStyleName(f_MaterialColumn41.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn41.gridMixin, 's6') , f_MaterialColumn41)) , f_MaterialRow37), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre44 = new PrettyPre , $setHTML(f_PrettyPre44, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m:MaterialRow&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s12\"&gt; &lt;g:HTMLPanel&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; This div is 12-columns wide on all screen sizes &lt;/m.html:Span&gt; &lt;/g:HTMLPanel&gt;&lt;/m:MaterialColumn&gt;<br> &lt;/m:MaterialRow&gt;<br><br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s6\"&gt; &lt;g:HTMLPanel&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 6-columns (one-half) &lt;/m.html:Span&gt;&lt;/g:HTMLPanel&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s6\"&gt; &lt;g:HTMLPanel&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt; 6-columns (one-half) &lt;/m.html:Span&gt;&lt;/g:HTMLPanel&gt; &lt;/m:MaterialColumn&gt;<br> &lt;/m:MaterialRow&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre44.element, 'lang-xml', true) , setStyleName(f_PrettyPre44.element, 'z-depth-1', true) , f_PrettyPre44), $get_0(this$static.domId12Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle45 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle45.header), 'Offsets') , $setText_4(f_MaterialTitle45.paragraph, 'To offset, simply add offset-s2 to the class where s signifies the screen class-prefix (s = small, m = medium, l = large) and the number after is the number of columns you want to offset by.') , f_MaterialTitle45), $get_0(this$static.domId13Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow46 = new MaterialRow , $add_13(f_MaterialRow46, (f_MaterialColumn47 = new MaterialColumn , $add_13(f_MaterialColumn47, (f_HTMLPanel48 = new HTMLPanel($html7_2(this$static.domId15).html) , __attachRecord___4 = attachToDom(f_HTMLPanel48.element) , $get_0(this$static.domId15Element) , __attachRecord___4.origParent?$insertBefore(__attachRecord___4.origParent, __attachRecord___4.element, __attachRecord___4.origSibling):orphan(__attachRecord___4.element) , $addAndReplaceElement_1(f_HTMLPanel48, (f_Span49 = new Span , f_Span49.setText('This div is 12-columns wide on all screen sizes') , setStyleName(f_Span49.element, 'flow-text', true) , f_Span49), $get_0(this$static.domId15Element)) , f_HTMLPanel48)) , setStyleName(f_MaterialColumn47.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn47.gridMixin, 's12') , f_MaterialColumn47)) , $add_13(f_MaterialRow46, (f_MaterialColumn50 = new MaterialColumn , $add_13(f_MaterialColumn50, (f_HTMLPanel51 = new HTMLPanel($html8(this$static.domId16).html) , __attachRecord___5 = attachToDom(f_HTMLPanel51.element) , $get_0(this$static.domId16Element) , __attachRecord___5.origParent?$insertBefore(__attachRecord___5.origParent, __attachRecord___5.element, __attachRecord___5.origSibling):orphan(__attachRecord___5.element) , $addAndReplaceElement_1(f_HTMLPanel51, (f_Span52 = new Span , f_Span52.setText('6-columns (offset-by-6)') , setStyleName(f_Span52.element, 'flow-text', true) , f_Span52), $get_0(this$static.domId16Element)) , f_HTMLPanel51)) , setStyleName(f_MaterialColumn50.element, 'C6OS1DC-m-a', true) , $setGrid(f_MaterialColumn50.gridMixin, 's6') , $setOffset(f_MaterialColumn50.gridMixin, 's6') , f_MaterialColumn50)) , f_MaterialRow46), $get_0(this$static.domId14Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre53 = new PrettyPre , $setHTML(f_PrettyPre53, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialRow&gt;<br><br> \\u2003&lt;m:MaterialColumn grid=\"s12\" &gt;&lt;g:HTMLPanel&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt;This div is 12-columns wide on all screen sizes&lt;/m.html:Span&gt;&lt;/g:HTMLPanel&gt; &lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s6\" offset=\"s6\" &gt;&lt;g:HTMLPanel&gt;&lt;m.html:Span addStyleNames=\"flow-text\"&gt;6-columns (offset-by-6)&lt;/m.html:Span&gt;&lt;/g:HTMLPanel&gt;&lt;/m:MaterialColumn&gt;<br><br> &lt;/m:MaterialRow&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre53.element, 'lang-xml', true) , setStyleName(f_PrettyPre53.element, 'z-depth-1', true) , f_PrettyPre53), $get_0(this$static.domId17Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle54 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle54.header), 'Adding Responsiveness') , $setText_4(f_MaterialTitle54.paragraph, \"In the previous examples, we only defined the size for small screens using 'col s12'. This is fine if we want a fixed layout since the rules propogate upwards. By just saying s12, we are essentially saying 'col s12 m12 l12'. But by explicitly defining the size we can make our website more responsive.\") , f_MaterialTitle54), $get_0(this$static.domId18Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow55 = new MaterialRow , $add_13(f_MaterialRow55, (f_MaterialColumn56 = new MaterialColumn , $add_13(f_MaterialColumn56, (f_Span57 = new Span , f_Span57.setText('I am always full-width (col s12)') , setStyleName(f_Span57.element, 'flow-text', true) , f_Span57)) , setStyleName(f_MaterialColumn56.element, 'C6OS1DC-m-a', true) , $setBackgroundColor(f_MaterialColumn56.colorsMixin, 'teal lighten-2') , $setGrid(f_MaterialColumn56.gridMixin, 's12') , f_MaterialColumn56)) , $add_13(f_MaterialRow55, (f_MaterialColumn58 = new MaterialColumn , $add_13(f_MaterialColumn58, (f_Span59 = new Span , f_Span59.setText('I am full-width on mobile (col s12 m6)') , setStyleName(f_Span59.element, 'flow-text', true) , f_Span59)) , setStyleName(f_MaterialColumn58.element, 'C6OS1DC-m-a', true) , $setBackgroundColor(f_MaterialColumn58.colorsMixin, 'teal lighten-2') , $setGrid(f_MaterialColumn58.gridMixin, 's12 m6') , f_MaterialColumn58)) , f_MaterialRow55), $get_0(this$static.domId19Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre60 = new PrettyPre , $setHTML(f_PrettyPre60, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialRow&gt;<br><br> \\u2003&lt;m:MaterialColumn grid=\"s12\" backgroundColor=\"teal lighten-2\"&gt;<br> \\u2003\\u2003&lt;m.html:Span addStyleNames=\"flow-text\"&gt;I am always full-width (col s12)&lt;/m.html:Span&gt;<br> \\u2003&lt;/m:MaterialColumn&gt;<br><br> \\u2003&lt;m:MaterialColumn grid=\"s12 m6\" backgroundColor=\"teal lighten-2\"&gt;<br> \\u2003\\u2003&lt;m.html:Span addStyleNames=\"flow-text\"&gt;I am full-width on mobile (col s12 m6)&lt;/m.html:Span&gt;<br> \\u2003&lt;/m:MaterialColumn&gt;<br><br> &lt;/m:MaterialRow&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(f_PrettyPre60.element, 'lang-xml', true) , setStyleName(f_PrettyPre60.element, 'z-depth-1', true) , f_PrettyPre60), $get_0(this$static.domId20Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle61 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle61.header), 'Example Promotion Table') , $setText_4(f_MaterialTitle61.paragraph, \"If we want 3 divs that are equal size, we define the divs with a width of 4-columns, 4+4+4 = 12, which nicely adds up to 12. Inside those divs, we can put our content. Take our front page content for example. We've modified it slightly for the sake of this example.\") , f_MaterialTitle61), $get_0(this$static.domId21Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow62 = new MaterialRow , $add_13(f_MaterialRow62, (f_MaterialColumn63 = new MaterialColumn , $add_13(f_MaterialColumn63, (f_MaterialImage64 = new MaterialImage , $setResource(f_MaterialImage64, ($clinit_MaterialResources_default_InlineClientBundleGenerator$ic_metaphorInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator_0() , ic_metaphor)) , f_MaterialImage64)) , $add_13(f_MaterialColumn63, (f_MaterialTitle65 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle65.header), 'Material is the metaphor') , $setText_4(f_MaterialTitle65.paragraph, 'The metaphor of material defines the relationship between space and motion. The idea is that the technology is inspired by paper and ink and is utilized to facilitate creativity and innovation. Surfaces and edges provide familiar visual cues that allow users to quickly understand the technology beyond the physical world.') , f_MaterialTitle65)) , $setGrid(f_MaterialColumn63.gridMixin, 's12 m4') , f_MaterialColumn63)) , $add_13(f_MaterialRow62, (f_MaterialColumn66 = new MaterialColumn , $add_13(f_MaterialColumn66, (f_MaterialImage67 = new MaterialImage , $setResource(f_MaterialImage67, ($clinit_MaterialResources_default_InlineClientBundleGenerator$ic_boldInitializer() , ic_bold)) , f_MaterialImage67)) , $add_13(f_MaterialColumn66, (f_MaterialTitle68 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle68.header), 'Bold, graphic, intentional') , $setText_4(f_MaterialTitle68.paragraph, 'Elements and components such as grids, typography, color, and imagery are not only visually pleasing, but also create a sense of hierarchy, meaning, and focus. Emphasis on different actions and components create a visual guide for users.') , f_MaterialTitle68)) , $setGrid(f_MaterialColumn66.gridMixin, 's12 m4') , f_MaterialColumn66)) , $add_13(f_MaterialRow62, (f_MaterialColumn69 = new MaterialColumn , $add_13(f_MaterialColumn69, (f_MaterialImage70 = new MaterialImage , $setResource(f_MaterialImage70, ($clinit_MaterialResources_default_InlineClientBundleGenerator$ic_motionInitializer() , ic_motion)) , f_MaterialImage70)) , $add_13(f_MaterialColumn69, (f_MaterialTitle71 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle71.header), 'Motion provides meaning') , $setText_4(f_MaterialTitle71.paragraph, 'Motion allows the user to draw a parallel between what they see on the screen and in real life. By providing both feedback and familiarity, this allows the user to fully immerse him or herself into unfamiliar technology. Motion contains consistency and continuity in addition to giving users additional subconscious information about objects and transformations.') , f_MaterialTitle71)) , $setGrid(f_MaterialColumn69.gridMixin, 's12 m4') , f_MaterialColumn69)) , f_MaterialRow62), $get_0(this$static.domId22Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre72 = new PrettyPre , $setHTML(f_PrettyPre72, (sb_3 = new StringBuilder , sb_3.string += '\\u2003&lt;m:MaterialRow&gt;<br><br> \\u2003&lt;m:MaterialColumn grid=\"s12 m4\"&gt;<br> \\u2003\\u2003&lt;m:MaterialImage resource=\"{res.ic_metaphor}\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialTitle title=\"Material is the metaphor\" description=\"The metaphor of material defines the relationship between space and motion. The idea is that the technology is inspired by paper and ink and is utilized to facilitate creativity and innovation. Surfaces and edges provide familiar visual cues that allow users to quickly understand the technology beyond the physical world.\"/&gt;<br> \\u2003&lt;/m:MaterialColumn&gt;<br><br> \\u2003&lt;m:MaterialColumn grid=\"s12 m4\"&gt;<br> \\u2003\\u2003&lt;m:MaterialImage resource=\"{res.ic_bold}\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialTitle title=\"Bold, graphic, intentional\" description=\"Elements and components such as grids, typography, color, and imagery are not only visually pleasing, but also create a sense of hierarchy, meaning, and focus. Emphasis on different actions and components create a visual guide for users.\"/&gt;<br> \\u2003&lt;/m:MaterialColumn&gt;<br><br> \\u2003&lt;m:MaterialColumn grid=\"s12 m4\"&gt;<br> \\u2003\\u2003&lt;m:MaterialImage resource=\"{res.ic_motion}\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialTitle title=\"Motion provides meaning\" description=\"Motion allows the user to draw a parallel between what they see on the screen and in real life. By providing both feedback and familiarity, this allows the user to fully immerse him or herself into unfamiliar technology. Motion contains consistency and continuity in addition to giving users additional subconscious information about objects and transformations.\"/&gt;<br> \\u2003&lt;/m:MaterialColumn&gt;<br><br> &lt;/m:MaterialRow&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html) , setStyleName(f_PrettyPre72.element, 'lang-xml', true) , setStyleName(f_PrettyPre72.element, 'z-depth-1', true) , f_PrettyPre72), $get_0(this$static.domId23Element));\n  return f_HTMLPanel1;\n}\n\nfunction GridView_BinderImpl$Widgets(){\n  this.style_0 = (new GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_13);\n  $ensureInjected_18(this.style_0);\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n  this.domId8 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId15 = $createUniqueId($doc);\n  this.domId16 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId13 = $createUniqueId($doc);\n  this.domId14 = $createUniqueId($doc);\n  this.domId17 = $createUniqueId($doc);\n  this.domId18 = $createUniqueId($doc);\n  this.domId19 = $createUniqueId($doc);\n  this.domId20 = $createUniqueId($doc);\n  this.domId21 = $createUniqueId($doc);\n  this.domId22 = $createUniqueId($doc);\n  this.domId23 = $createUniqueId($doc);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId15Element = new LazyDomElement(this.domId15);\n  this.domId16Element = new LazyDomElement(this.domId16);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId12Element = new LazyDomElement(this.domId12);\n  this.domId13Element = new LazyDomElement(this.domId13);\n  this.domId14Element = new LazyDomElement(this.domId14);\n  this.domId17Element = new LazyDomElement(this.domId17);\n  this.domId18Element = new LazyDomElement(this.domId18);\n  this.domId19Element = new LazyDomElement(this.domId19);\n  this.domId20Element = new LazyDomElement(this.domId20);\n  this.domId21Element = new LazyDomElement(this.domId21);\n  this.domId22Element = new LazyDomElement(this.domId22);\n  this.domId23Element = new LazyDomElement(this.domId23);\n}\n\ndefineClass(893, 1, {}, GridView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_grid_GridView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.grid', 'GridView_BinderImpl/Widgets', 893);\nfunction GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1138, 1, {}, GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_13;\nvar Lgwt_material_design_demo_client_application_style_grid_GridView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.style.grid', 'GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1138);\nfunction $ensureInjected_18(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '.C6OS1DC-m-a{border:1px solid #eee;margin:7px 0;text-align:center;line-height:50px;font-size:28px;background-color:tomato;color:white;padding:0}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1139, 1, {}, GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_24(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_style_grid_GridView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.style.grid', 'GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1139);\nfunction $clinit_GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_13 = new GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html12_0(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg13));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg14));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg15));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg16));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg17));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html2_4(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html3_2(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html4_3(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html5_2(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html7_2(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html8(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$grid$GridPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$grid$GridPresenter$_annotation$$none$$) {\n    result = new GridPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$style$grid$GridView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$style$grid$GridPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$grid$GridPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$grid$GridPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$grid$GridView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$grid$GridView$_annotation$$none$$) {\n    result = new GridView(new GridView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$grid$GridView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$grid$GridView$_annotation$$none$$;\n}\n\ndefineClass(493, 1, $intern_56);\n_.onSuccess_0 = function onSuccess_20(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$grid$GridPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(21);\n\n//# sourceURL=gwtmaterialdemo-21.js\n")
