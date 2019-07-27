import React from 'react';
import { CommandBar, ICommandBarItemProps, css } from 'office-ui-fabric-react';
import { useStyles } from './Toolbar.style';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../store/types';

export interface IProps {
  classNames?: string;
};

const Toolbar: React.FC<IProps> = ({ classNames }) => {
  const classes = useStyles();
  const isToggle = useSelector((state: IState) => state.isTogglePreview);
  const isEditorReadi = useSelector((state: IState) => state.isEditorReady);
  const dispatch = useDispatch();
  const items: ICommandBarItemProps[] = [
    {
      key: 'newItem',
      name: 'New Markdown Document',
      iconProps: { iconName: 'Document' },
      iconOnly: true,
      disabled: !isEditorReadi
    },
    {
      key: 'saveItem',
      name: 'Save',
      iconProps: { iconName: 'Save' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'header',
      name: 'Header',
      iconProps: { iconName: 'EditStyle' },
      iconOnly: true,
      disabled: !isEditorReadi,
      subMenuProps: {
        items: [
          {
            key: 'header1',
            name: 'Header 1',
            iconProps: { iconName: 'Header1' },
            disabled: !isEditorReadi,
          },
          {
            key: 'header2',
            name: 'Header 2',
            iconProps: { iconName: 'Header2' },
            disabled: !isEditorReadi,
          },
          {
            key: 'header3',
            name: 'Header 3',
            iconProps: { iconName: 'Header3' },
            disabled: !isEditorReadi,
          },
          {
            key: 'header4',
            name: 'Header 4',
            iconProps: { iconName: 'Header4' },
            disabled: !isEditorReadi,
          },
        ]
      }
    },
    {
      key: 'bold',
      name: 'Bold',
      iconProps: { iconName: 'Bold' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'italic',
      name: 'Italic',
      iconProps: { iconName: 'Italic' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'strikethrough',
      name: 'Strikethrough',
      iconProps: { iconName: 'Strikethrough' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'blockquotes',
      name: 'Blockquotes',
      iconProps: { iconName: 'RightDoubleQuote' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'bulletedList',
      name: 'Bulleted List',
      iconProps: { iconName: 'BulletedList' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'numberedList',
      name: 'Numbered List',
      iconProps: { iconName: 'NumberedList' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'taskList',
      name: 'Task List',
      iconProps: { iconName: 'CheckList' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'table',
      name: 'Table',
      iconProps: { iconName: 'Table' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'code',
      name: 'Code',
      iconProps: { iconName: 'CodeEdit' },
      iconOnly: true,
      disabled: !isEditorReadi,
      subMenuProps: {
        items: [
          {
            key: 'inline',
            name: 'Inline',
            iconProps: { iconName: 'CalculatorSubtract' },
            disabled: !isEditorReadi,
          },
          {
            key: 'block',
            name: 'Block',
            iconProps: { iconName: 'CollapseMenu' },
            disabled: !isEditorReadi,
          },
        ]
      }
    },
    {
      key: 'link',
      name: 'Link',
      iconProps: { iconName: 'Link' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'image',
      name: 'Image',
      iconProps: { iconName: 'Photo2' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'video',
      name: 'Video',
      iconProps: { iconName: 'Video' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'formulas',
      name: 'Formulas',
      iconProps: { iconName: 'Variable' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'tableofContent',
      name: 'Table of Content',
      iconProps: { iconName: 'CustomList' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
  ];
  const farItems: ICommandBarItemProps[] = [
    {
      key: 'preview',
      name: 'Preview',
      iconProps: { iconName: isToggle ? 'ErrorBadge': 'View' },
      iconOnly: true,
      disabled: !isEditorReadi,
      onClick: () => { dispatch({ type: 'TOGGLE', payload: !isToggle }) }
    },
    {
      key: 'documentation',
      name: 'Documentation',
      iconProps: { iconName: 'TextDocument' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'export',
      name: JSON.stringify(isEditorReadi),
      iconProps: { iconName: 'Export' },
      iconOnly: true,
      disabled: !isEditorReadi,
    }
  ];

  return (
    <>
      <CommandBar
        items={items}
        farItems={farItems}
        className={css(classNames, classes.toolbarWrapper)}
      />
    </>
  );
}

export default Toolbar;