import React from 'react';
import { useStyles } from './Preview.style';
import { useSelector } from 'react-redux';
import { IEditor } from '../../store/dataTypes';

const Preview: React.FC = () => {
  const classes = useStyles();
  const isToggle = useSelector((state: IEditor) => state.isTogglePreview);
  return isToggle ? (
    <div className={classes.previewWrapper}>
      When I was young!
    </div>
  ) : null;
}

export default Preview;