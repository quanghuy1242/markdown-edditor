import { IActionType, IState, READY, TOGGLE, UPDATE } from './types';

const initialState: IState = {
  isTogglePreview: false,
  isEditorReady: false,
  value: '# Markdown Editor Preview\nMarkdown Editor Preview\nComming soon...',
};

export function reducer(state = initialState, action: IActionType): IState {
  switch (action.type) {
    case TOGGLE: {
      return {
        ...state,
        isTogglePreview: action.payload
      };
    }
    case READY: {
      return {
        ...state,
        isEditorReady: action.payload
      };
    }
    case UPDATE: {
      return {
        ...state,
        value: action.payload
      };

    }
    default: 
      return state;
  }
}