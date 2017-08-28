package gwt.material.design.demo.client.application.addins.cropper;

/*
 * #%L
 * GwtMaterial
 * %%
 * Copyright (C) 2015 - 2016 GwtMaterialDesign
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */


import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import gwt.material.design.addins.client.image.MaterialImageCropper;
import gwt.material.design.addins.client.image.constants.Type;
import gwt.material.design.client.ui.MaterialImage;

import javax.inject.Inject;

public class ImageCropperView extends ViewImpl implements ImageCropperPresenter.MyView {
    interface Binder extends UiBinder<Widget, ImageCropperView> {
    }

    @UiField
    MaterialImageCropper cropper;

    @UiField
    MaterialImage croppedImage;
    
    @Inject
    ImageCropperView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));

        cropper.addValueChangeHandler(valueChangeEvent -> {
            croppedImage.setUrl(valueChangeEvent.getValue());
        });
    }

    @UiHandler("crop")
    void crop(ClickEvent e) {
        cropper.crop(Type.BASE64);
    }
}
