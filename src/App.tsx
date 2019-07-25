import React from 'react';
import { PrimaryButton, Fabric } from 'office-ui-fabric-react';
import { useStyles } from './App.style';

export interface IProps {
  /** Set margin of the entire application */
  margin?: number;
};

const defaultProps = {
  margin: 10
};

const App: React.FC<IProps> = (props) => {
  const classes = useStyles(props);
  document.title = 'Title is property, it is not a function'
  return (
    <Fabric className={classes.app}>
      <PrimaryButton>
        Upload a document
      </PrimaryButton>
    </Fabric>
  );
};

App.defaultProps = defaultProps;

export default App;
