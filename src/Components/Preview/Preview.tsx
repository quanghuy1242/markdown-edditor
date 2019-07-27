import React from 'react';
import { useStyles } from './Preview.style';
import { useSelector } from 'react-redux';
import { IState } from '../../store/types';
import MarkdownIt from 'markdown-it';

const md = MarkdownIt();

const Preview: React.FC = () => {
  const classes = useStyles();
  const isToggle = useSelector((state: IState) => state.isTogglePreview);
  const value = useSelector((state: IState) => state.value);
  return isToggle ? (
    <div
      className={classes.previewWrapper}
      dangerouslySetInnerHTML={{ __html: md.render(value) }}
    />
  ) : null;
}

export default Preview;