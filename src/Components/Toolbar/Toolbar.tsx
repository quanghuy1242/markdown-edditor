import React, { useState } from 'react';
import {
  CommandBar,
  ICommandBarItemProps,
  css,
  Dialog,
  DialogType,
  ContextualMenu,
  DialogFooter,
  PrimaryButton,
  Text,
  Stack
} from 'office-ui-fabric-react';
import { useStyles } from './Toolbar.style';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../store/types';
import { togglePreview } from '../../store/actions';

export interface IProps {
  classNames?: string;
};

const Toolbar: React.FC<IProps> = ({ classNames }) => {
  const classes = useStyles();
  const isToggle = useSelector((state: IState) => state.isTogglePreview);
  const isEditorReadi = useSelector((state: IState) => state.isEditorReady);
  const dispatch = useDispatch();

  const [hideDialog, setHideDialog] = useState<boolean>(true);

  const items: ICommandBarItemProps[] = [
    {
      key: 'logo',
      iconProps: { iconName: 'MarkDownLanguage' },
      iconOnly: true,
      disabled: !isEditorReadi,
      className: classes.mainLogo
    },
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
      key: 'undo',
      name: 'Undo',
      iconProps: { iconName: 'Undo' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'redo',
      name: 'Redo',
      iconProps: { iconName: 'Redo' },
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
      iconProps: { iconName: isToggle ? 'Hide': 'View' },
      iconOnly: true,
      disabled: !isEditorReadi,
      onClick: () => { dispatch(togglePreview(!isToggle)) }
    },
    {
      key: 'documentation',
      name: 'Documentation',
      iconProps: { iconName: 'TextDocument' },
      iconOnly: true,
      disabled: !isEditorReadi,
    },
    {
      key: 'info',
      name: 'Information',
      iconProps: { iconName: 'Info' },
      iconOnly: true,
      disabled: !isEditorReadi,
      onClick: () => { setHideDialog(false) }
    },
    {
      key: 'export',
      name: 'Export',
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
      <Dialog
        hidden={hideDialog}
        onDismiss={() => { setHideDialog(true) }}
        dialogContentProps={{
          type: DialogType.normal,
          title: 'Information',
        }}
        modalProps={{
          styles: { main: { maxWidth: 450 } },
          dragOptions: {
            moveMenuItemText: 'Move',
            closeMenuItemText: 'Close',
            menu: ContextualMenu
          }
        }}
      >
        <Stack
          tokens={{ childrenGap: '0.5rem' }}
          horizontalAlign='center'
          className={classes.dialogContent}
        >
          <Text block variant='xLarge'>Markdown Editor</Text>
          <Text block>Nguyễn Quang Huy - 2019</Text>
        </Stack>
        <DialogFooter>
          <PrimaryButton
            text='Close'
            onClick={() => setHideDialog(true)}
          />
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Toolbar;