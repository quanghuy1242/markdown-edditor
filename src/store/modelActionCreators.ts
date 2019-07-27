import { isTogglePreview, ITogglePreview, isEditorReady, IEditorReady } from './dataTypes';
import { TOGGLE, READY } from './modelAction';

export function toggleIsTogglePreview(toggle: boolean): ITogglePreview {
  return {
    type: TOGGLE,
    dataType: isTogglePreview,
    payload: toggle
  }
}

export function toggleIsEditorReady(payload: boolean): IEditorReady {
  return {
    type: READY,
    dataType: isEditorReady,
    payload: payload
  }
}