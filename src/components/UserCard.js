import { useState } from 'react'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
} from '@mui/material/'

import IconButton from '@mui/material/IconButton'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import ModalConfirm from '../components/ModalConfirm'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  }
}))


const UserCard = ({
  id,
  name,
  lastname,
  email,
  avatar,
  className,
  onRemoveUser,
}) => {
  const classes = useStyles()

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = (id) => {
    onRemoveUser(id)
    handleToggleOpenModal()
  }

  const handleRemoveUser = () => {
    handleToggleOpenModal()
  }
  return (
    <>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              R
            </Avatar>
          }
          title={`${name} ${lastname}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={handleRemoveUser}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm 
      open={openModal}
      onClose={handleToggleOpenModal}
      onConfirm={() => handleConfirmModal(id)}
      title="Do you really want to delete this account?"
      message="When confirming, it will not be possible to revert this operation"
      />
    </>
  );
}


export default UserCard