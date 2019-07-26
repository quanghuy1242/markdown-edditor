import React from 'react';
import { CommandBar, ICommandBarItemProps, css } from 'office-ui-fabric-react';

export interface IProps {
  classNames?: string;
  disable?: boolean;
};

const defaultProps = {
  disable: true
};

const Toolbar: React.FC<IProps> = ({ classNames, disable }) => {
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
    }
  ];
  const farItems: ICommandBarItemProps[] = [
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
        className={css(classNames)}
      />
    </>
  );
}

Toolbar.defaultProps = defaultProps;

export default Toolbar;