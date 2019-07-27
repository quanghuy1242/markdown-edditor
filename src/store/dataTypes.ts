export const isTogglePreview = 'isTogglePreview';
export const isEditorReady = 'isEditorReady';

export interface ITogglePreview {
  type: string;
  dataType: typeof isTogglePreview;
  payload: boolean;
};

export interface IEditorReady {
  type: string;
  dataType: typeof isEditorReady;
  payload: boolean;
};

export interface IEditor {
  [isTogglePreview]: boolean,
  [isEditorReady]: boolean
};