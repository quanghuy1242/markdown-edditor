import { mergeStyleSets } from 'office-ui-fabric-react';
import { IProps } from './App';

export const useStyles = (props: IProps) => {
  return mergeStyleSets({
    app: {
      margin: props.margin
    }
  });
}