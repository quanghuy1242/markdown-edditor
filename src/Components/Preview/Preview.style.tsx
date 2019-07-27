import { mergeStyleSets } from 'office-ui-fabric-react';

export const useStyles = () => {
  return mergeStyleSets({
    previewWrapper: {
      padding: '1rem',
      width: '50%'
    }
  });
}