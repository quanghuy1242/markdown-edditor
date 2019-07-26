import React from 'react';
import { CommandBar, ICommandBarItemProps, css } from 'office-ui-fabric-react';

export interface IProps {
  classNames?: string
};

const Toolbar: React.FC<IProps> = ({ classNames }) => {
  const items: ICommandBarItemProps[] = [
    {
      key: 'newItem',
      name: 'New',
      iconProps: { iconName: 'Add' },
      iconOnly: true,
      subMenuProps: {
        items: [
          {
            key: 'newMarkdownDocument',
            name: 'New Markdown Document',
            iconProps: { iconName: 'Document' }
          }
        ]
      }
    },
    {
      key: 'saveItem',
      name: 'Save',
      iconProps: { iconName: 'Save' },
      iconOnly: true,
    }
  ];
  const farItems: ICommandBarItemProps[] = [
    {
      key: 'export',
      name: 'Export',
      iconProps: { iconName: 'Export' },
      iconOnly: true,
    }
  ];

  return (
    <>
      <CommandBar
        items={items}
        farItems={farItems}
        className={css(classNames)}
      />
    </>
  );
}

export default Toolbar;