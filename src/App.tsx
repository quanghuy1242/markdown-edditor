import React, { useRef, useState } from 'react';
import { Fabric, Stack, initializeIcons } from 'office-ui-fabric-react';
import Editor, { EditorDidMount } from '@monaco-editor/react';
import { useStyles } from './App.style';
import { Toolbar } from './Components';

initializeIcons();

const App: React.FC = () => {
  const [isEditorReady, setIsEditorReady] = useState<boolean>(false);
  const valueGetter = useRef<any>();
  const classes = useStyles();
  const options = {
    fontFamily: '"Roboto Mono", monospace',
    fontSize: '13px',
    wordWrap: true,
    value: `# Markdown Editor Preview\nMarkdown Editor Preview\nComming soon...`
  };

  const handleEditorDidMount: EditorDidMount = (_valueGetter: () => string) => {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }

  return (
    <Fabric className={classes.app}>
      <Stack className={classes.appInner}>
        <Stack.Item>
          <Toolbar classNames={classes.toolbar} disable={!isEditorReady} />
        </Stack.Item>
        <Stack.Item disableShrink grow>
          <Editor
            language='markdown'
            editorDidMount={handleEditorDidMount}
            options={options}
          />
        </Stack.Item>
      </Stack>
    </Fabric>
  );
};

export default App;
