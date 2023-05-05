import { useState } from 'react'
import { 
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material/' 

import { useHistory } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

import useStyles from './Header.style'


const Header = () => {
  const classes = useStyles()
  const history = useHistory()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = route => {
    handleToggleMenu()
    history.push(route)
  }

  return (
    <>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleToggleMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List> 
          <ListItem button onClick={() => handleMenuClick('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('/users')}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Users List</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('/users/add')}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText>Sign In</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>    
  )
}

export default Header