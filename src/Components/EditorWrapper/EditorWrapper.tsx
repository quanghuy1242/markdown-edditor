import React, { useRef } from 'react';
import Editor, { EditorDidMount } from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';
import { IEditor } from '../../store/dataTypes';

const EditorWrapper: React.FC = () => {
  const dispatch = useDispatch();
  const isToggle = useSelector((state: IEditor) => state.isTogglePreview);
  const options = {
    fontFamily: '"Roboto Mono", monospace',
    fontSize: '13px',
    wordWrap: true,
    value: `# Markdown Editor Preview\nMarkdown Editor Preview\nComming soon...`
  };
  const valueGetter = useRef<any>();
  const handleEditorDidMount: EditorDidMount = (_valueGetter: () => string) => {
    dispatch({ type: 'READY', payload: true });
    valueGetter.current = _valueGetter;
  }

  return (
    <div style={{ width: isToggle ? '50%': '100%' }}>
      <Editor
        language='markdown'
        editorDidMount={handleEditorDidMount}
        options={options}
      />
    </div>
  );
}

export default EditorWrapper;