import { mergeStyleSets } from 'office-ui-fabric-react';

export const useStyles = () => {
  return mergeStyleSets({
    previewWrapper: {
      padding: '0rem 1rem 1rem 1rem',
      width: '50%',
      overflowY: 'auto',
      height: 'calc(100vh - 44px - 3rem)'
    }
  });
}