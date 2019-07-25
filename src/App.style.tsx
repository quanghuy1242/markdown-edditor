import { mergeStyleSets } from 'office-ui-fabric-react';

export const useStyles = () => {
  return mergeStyleSets({
    app: {
      height: '100vh'
    },
    appInner: {
      height: '100%'
    },
    actionBar: {
      margin: '0.5rem'
    }
  });
}