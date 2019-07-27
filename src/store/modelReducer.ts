import { TOGGLE, READY } from './modelAction';
import { initData } from './initData';
import { ITogglePreview, IEditor, isTogglePreview, isEditorReady } from './dataTypes';

export default function(storeData = initData, action: ITogglePreview): IEditor {
  switch (action.type) {
    case TOGGLE: {
      return {
        ...storeData,
        [isTogglePreview]: action.payload
      };
    }
    case READY: {
      console.log('a');
      return {
        ...storeData,
        [isEditorReady]: action.payload
      };
    }
    default: 
      return storeData;
  }
}