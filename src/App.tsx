import React, { useRef, useState } from 'react';
import { PrimaryButton, Fabric } from 'office-ui-fabric-react';
import Editor, { EditorDidMount } from '@monaco-editor/react';
import { useStyles } from './App.style';

export interface IProps {
  /**
   * Set margin of the entire application
   */
  margin?: number;
};

const defaultProps = {
  margin: 10
};

const App: React.FC<IProps> = (props) => {
  const [isEditorReady, setIsEditorReady] = useState<boolean>(false);
  const valueGetter = useRef<any>();
  const classes = useStyles(props);

  const handleEditorDidMount: EditorDidMount = (_valueGetter: () => string) => {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }

  return (
    <Fabric className={classes.app}>
      <Editor
        height='80vh'
        language='markdown'
        value='# Markdown Editor Preview'
        editorDidMount={handleEditorDidMount}
      />
      <PrimaryButton
        text='Show current value'
        disabled={!isEditorReady}
        onClick={() => alert(valueGetter.current())}
      />
    </Fabric>
  );
};

App.defaultProps = defaultProps;

export default App;
