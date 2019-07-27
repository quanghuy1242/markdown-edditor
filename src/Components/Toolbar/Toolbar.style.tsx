import { mergeStyleSets } from 'office-ui-fabric-react';

export const useStyles = () => {
  return mergeStyleSets({
    toolbarWrapper: {
      selectors: {
        '& .ms-Button-icon': {
          color: 'rgb(50, 49, 48)'
        }
      }
    },
    dialogContent: {
      marginBottom: '1.5rem'
    }
  });
}