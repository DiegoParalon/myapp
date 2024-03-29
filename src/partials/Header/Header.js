
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'


import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './Header.style'

//JSS JavaSCRIPT StyleSheet




const Header = () => {
const classes = useStyles()

  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.title}>
            MyApp
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  )
}

export default Header
