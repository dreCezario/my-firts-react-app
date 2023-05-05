import { 
    Snackbar,
    Alert,
} from '@mui/material/'

const Toasty = ({ open, text, severity, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    onClose()
  }


  return (
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert elevation={6} variant="filled" severity={severity}>
          {text}
        </Alert>
      </Snackbar>

  )
}

export default Toasty