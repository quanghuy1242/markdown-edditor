export const TOGGLE = 'TOGGLE';
export const READY = 'READY';
export const UPDATE = 'UPDATE';

// export const isTogglePreview = 'isTogglePreview';
// export const isEditorReady = 'isEditorReady';
// export const value = 'value';

interface ITogglePreview {
  type: typeof TOGGLE;
  payload: boolean;
};

interface IEditorReady {
  type: typeof READY;
  payload: boolean;
};

interface IUpdateValue {
  type: typeof UPDATE;
  payload: string;
}

export type IActionType = 
    ITogglePreview
  | IEditorReady
  | IUpdateValue;

export interface IState {
  isTogglePreview: boolean;
  isEditorReady: boolean;
  value: string;
};
