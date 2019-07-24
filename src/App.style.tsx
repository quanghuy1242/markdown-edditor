import { makeStyles } from '@material-ui/styles';
import { IProps } from './App';

export const useStyles = (props: IProps) => {
  return makeStyles({
    app: {
      margin: props.margin
    }
  })(props);
}