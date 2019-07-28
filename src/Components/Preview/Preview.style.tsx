import { mergeStyleSets } from 'office-ui-fabric-react';

export const useStyles = () => {
  return mergeStyleSets({
    previewWrapper: {
      padding: '1rem',
      width: '50%',
      overflowY: 'auto',
      height: 'calc(100vh - 44px - 3rem)'
    }
  });
}