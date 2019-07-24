import React from 'react';
import { Button } from '@material-ui/core';
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
    <div className={classes.app}>
      <Button variant='contained' color='primary'>
        Upload a document
      </Button>
    </div>
  );
};

App.defaultProps = defaultProps;

export default App;
