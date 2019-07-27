import { READY, TOGGLE, UPDATE, IActionType } from './types';

export function togglePreview(toggle: boolean): IActionType {
  return {
    type: TOGGLE,
    payload: toggle
  }
}

export function makeEditorReady(isReady: boolean): IActionType {
  return {
    type: READY,
    payload: isReady
  }
}

export function updateEditorValue(value: string): IActionType {
  return {
    type: UPDATE,
    payload: value
  }
}