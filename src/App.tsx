import React from 'react';
import { Fabric, Stack, initializeIcons } from 'office-ui-fabric-react';
import { useStyles } from './App.style';
import { Toolbar, Preview, EditorWrapper } from './Components';

initializeIcons();

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Fabric className={classes.app}>
      <Stack className={classes.appInner}>
        <Stack.Item>
          <Toolbar classNames={classes.toolbar} />
        </Stack.Item>
        <Stack.Item disableShrink grow>
          <Stack horizontal style={{ height: '100%' }}>
            <EditorWrapper />
            <Preview />
          </Stack>
        </Stack.Item>
      </Stack>
    </Fabric>
  );
};

export default App;
