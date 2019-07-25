import React, { useRef, useState } from 'react';
import { PrimaryButton, Fabric, Stack, initializeIcons } from 'office-ui-fabric-react';
import Editor, { EditorDidMount } from '@monaco-editor/react';
import { useStyles } from './App.style';
import { Toolbar } from './Components';

initializeIcons();

export interface IProps {
  /**
   * Set margin of the entire application
   */
  margin?: number;
};

const defaultProps = {
  margin: 0
};

const App: React.FC<IProps> = (props) => {
  const [isEditorReady, setIsEditorReady] = useState<boolean>(false);
  const valueGetter = useRef<any>();
  const classes = useStyles(props);
  const options = {
    fontFamily: '"Roboto Mono", monospace'
  };

  const handleEditorDidMount: EditorDidMount = (_valueGetter: () => string) => {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }

  return (
    <Fabric className={classes.app}>
      <Stack className={classes.appInner}>
        <Stack.Item>
          <Toolbar />
        </Stack.Item>
        <Stack.Item disableShrink grow={3}>
          <Editor
            language='markdown'
            value='# Markdown Editor Preview'
            editorDidMount={handleEditorDidMount}
            options={options}
          />
        </Stack.Item>
        <Stack.Item>
          <PrimaryButton
            text='Show current value'
            disabled={!isEditorReady}
            onClick={() => alert(valueGetter.current())}
          />
        </Stack.Item>
      </Stack>
    </Fabric>
  );
};

App.defaultProps = defaultProps;

export default App;
