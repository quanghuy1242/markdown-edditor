import React, { useRef } from 'react';
import { EditorDidMount, ControlledEditor as Editor } from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store/types';

const EditorWrapper: React.FC = () => {
  const dispatch = useDispatch();
  const isToggle = useSelector((state: IState) => state.isTogglePreview);
  const value = useSelector((state: IState) => state.value);
  const options = {
    fontFamily: '"Roboto Mono", monospace',
    fontSize: '13px',
    wordWrap: true,
    value: value
  };
  const valueGetter = useRef<any>();
  const handleEditorDidMount: EditorDidMount = (_valueGetter: () => string) => {
    dispatch({ type: 'READY', payload: true });
    valueGetter.current = _valueGetter;
  }

  const handleEditorChange = (event: any, value: string | undefined) => {
    dispatch({ type: 'UPDATE', payload: value });
    return value;
  }

  return (
    <div style={{ width: isToggle ? '50%': '100%' }}>
      <Editor
        language='markdown'
        editorDidMount={handleEditorDidMount}
        options={options}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default EditorWrapper;