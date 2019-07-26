import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';

export const useStyles = () => {
  return mergeStyleSets({
    app: {
      height: 'calc(100vh - 2rem)',
      boxShadow: Depths.depth8,
      margin: '1rem'
    },
    appInner: {
      height: '100%'
    },
    toolbar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
    }
  });
}