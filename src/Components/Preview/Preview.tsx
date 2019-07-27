import React from 'react';
import { useStyles } from './Preview.style';
import { useSelector } from 'react-redux';
import { IState } from '../../store/types';

const Preview: React.FC = () => {
  const classes = useStyles();
  const isToggle = useSelector((state: IState) => state.isTogglePreview);
  const value = useSelector((state: IState) => state.value);
  return isToggle ? (
    <div className={classes.previewWrapper}>
      {value}
    </div>
  ) : null;
}

export default Preview;