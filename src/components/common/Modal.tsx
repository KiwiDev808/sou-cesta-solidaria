import {
  Card,
  CardContent,
  createStyles,
  makeStyles,
  Modal,
  Theme,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 'auto',
      height: 'auto',
      backgroundColor: 'white',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '30%',
      left: '50%',
      transform: `translate(-50%, -50%)`,
    },
  })
)

const ModalAux = (props: any) => {
  const classes = useStyles()
  const { open, handleClose, children } = props

  const body = (
    <Card className={classes.paper}>
      <CardContent>{children}</CardContent>
    </Card>
  )

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  )
}

export default ModalAux
