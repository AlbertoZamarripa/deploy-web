import { makeStyles } from '@material-ui/core'

export const useModalStyles = makeStyles((theme) => ({
  textField: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
    },
  },
}))
