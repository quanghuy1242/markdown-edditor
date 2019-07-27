import React from 'react';
import { CommandBar, ICommandBarItemProps, css } from 'office-ui-fabric-react';
import { useStyles } from './Toolbar.style';

export interface IProps {
  classNames?: string;
  disable?: boolean;
};

const defaultProps = {
  disable: true
};

const Toolbar: React.FC<IProps> = ({ classNames, disable }) => {
  const classes = useStyles();
  const items: ICommandBarItemProps[] = [
    {
      key: 'newItem',
      name: 'New Markdown Document',
      iconProps: { iconName: 'Document' },
      iconOnly: true,
      disabled: disable
    },
    {
      key: 'saveItem',
      name: 'Save',
      iconProps: { iconName: 'Save' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'header',
      name: 'Header',
      iconProps: { iconName: 'EditStyle' },
      iconOnly: true,
      disabled: disable,
      subMenuProps: {
        items: [
          {
            key: 'header1',
            name: 'Header 1',
            iconProps: { iconName: 'Header1' },
            disabled: disable,
          },
          {
            key: 'header2',
            name: 'Header 2',
            iconProps: { iconName: 'Header2' },
            disabled: disable,
          },
          {
            key: 'header3',
            name: 'Header 3',
            iconProps: { iconName: 'Header3' },
            disabled: disable,
          },
          {
            key: 'header4',
            name: 'Header 4',
            iconProps: { iconName: 'Header4' },
            disabled: disable,
          },
        ]
      }
    },
    {
      key: 'bold',
      name: 'Bold',
      iconProps: { iconName: 'Bold' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'italic',
      name: 'Italic',
      iconProps: { iconName: 'Italic' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'strikethrough',
      name: 'Strikethrough',
      iconProps: { iconName: 'Strikethrough' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'blockquotes',
      name: 'Blockquotes',
      iconProps: { iconName: 'RightDoubleQuote' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'bulletedList',
      name: 'Bulleted List',
      iconProps: { iconName: 'BulletedList' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'numberedList',
      name: 'Numbered List',
      iconProps: { iconName: 'NumberedList' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'taskList',
      name: 'Task List',
      iconProps: { iconName: 'CheckList' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'table',
      name: 'Table',
      iconProps: { iconName: 'Table' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'code',
      name: 'Code',
      iconProps: { iconName: 'CodeEdit' },
      iconOnly: true,
      disabled: disable,
      subMenuProps: {
        items: [
          {
            key: 'inline',
            name: 'Inline',
            iconProps: { iconName: 'CalculatorSubtract' },
            disabled: disable,
          },
          {
            key: 'block',
            name: 'Block',
            iconProps: { iconName: 'CollapseMenu' },
            disabled: disable,
          },
        ]
      }
    },
    {
      key: 'link',
      name: 'Link',
      iconProps: { iconName: 'Link' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'image',
      name: 'Image',
      iconProps: { iconName: 'Photo2' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'video',
      name: 'Video',
      iconProps: { iconName: 'Video' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'formulas',
      name: 'Formulas',
      iconProps: { iconName: 'Variable' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'tableofContent',
      name: 'Table of Content',
      iconProps: { iconName: 'CustomList' },
      iconOnly: true,
      disabled: disable,
    },
  ];
  const farItems: ICommandBarItemProps[] = [
    {
      key: 'documentation',
      name: 'Documentation',
      iconProps: { iconName: 'TextDocument' },
      iconOnly: true,
      disabled: disable,
    },
    {
      key: 'export',
      name: 'Export',
      iconProps: { iconName: 'Export' },
      iconOnly: true,
      disabled: disable,
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

Toolbar.defaultProps = defaultProps;

export default Toolbar;