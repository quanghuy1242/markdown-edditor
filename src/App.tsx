import React from 'react';
import { Fabric, Stack, initializeIcons } from 'office-ui-fabric-react';
import { useStyles } from './App.style';
import { Toolbar, Preview, EditorWrapper } from './Components';
import dataStore from './store';
import { Provider } from 'react-redux';

initializeIcons();

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Provider store={dataStore}>
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
    </Provider>
  );
};

export default App;
