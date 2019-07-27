import { mergeStyleSets } from 'office-ui-fabric-react';

export const useStyles = () => {
  return mergeStyleSets({
    toolbarWrapper: {
      selectors: {
        '& .ms-Button-icon': {
          color: 'rgb(50, 49, 48)'
        },
        '& .ms-FocusZone': {
          paddingLeft: 0
        }
      }
    },
    dialogContent: {
      marginBottom: '1.5rem'
    },
    mainLogo: {
      marginRight: 14,
      marginLeft: 5,
      pointerEvents: 'none',
      selectors: {
        '& .ms-Button-icon': {
          fontWeight: 'bolder',
          fontSize: 20,
          color: 'rgb(0, 120, 212)'
        }
      }
    }
  });
}