import React, { useRef, useState } from 'react';
import { PrimaryButton, Fabric, Stack, initializeIcons } from 'office-ui-fabric-react';
import Editor, { EditorDidMount } from '@monaco-editor/react';
import { useStyles } from './App.style';
import { Toolbar } from './Components';

initializeIcons();

const App: React.FC = () => {
  const [isEditorReady, setIsEditorReady] = useState<boolean>(false);
  const valueGetter = useRef<any>();
  const classes = useStyles();
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
        <Stack.Item disableShrink grow>
          <Editor
            language='markdown'
            value='# Markdown Editor Preview'
            editorDidMount={handleEditorDidMount}
            options={options}
          />
        </Stack.Item>
        <Stack.Item>
          <Stack
            horizontal
            className={classes.actionBar} 
            horizontalAlign='start'
            tokens={{ childrenGap: '0.5rem' }}
          >
            <PrimaryButton
              text='Show current value'
              disabled={!isEditorReady}
              onClick={() => alert(valueGetter.current())}
            />
            <PrimaryButton
              text='Another button'
              disabled={!isEditorReady}
              onClick={() => alert(valueGetter.current())}
            />
          </Stack>
        </Stack.Item>
      </Stack>
    </Fabric>
  );
};

export default App;
