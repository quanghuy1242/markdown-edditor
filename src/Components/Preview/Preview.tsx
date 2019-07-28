import React from 'react';
import { useStyles } from './Preview.style';
import { useSelector } from 'react-redux';
import { IState } from '../../store/types';
import MarkdownIt from 'markdown-it';
import './github-markdown.css';
import { css } from '@uifabric/utilities';

const md = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

const Preview: React.FC = () => {
  const classes = useStyles();
  const isToggle = useSelector((state: IState) => state.isTogglePreview);
  const value = useSelector((state: IState) => state.value);
  return isToggle ? (
    <div
      className={css(classes.previewWrapper, 'markdown-body')}
      dangerouslySetInnerHTML={{ __html: md.render(value as string) }}
    />
  ) : null;
}

export default Preview;