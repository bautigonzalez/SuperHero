import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import GroupIcon from '@material-ui/icons/Group';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {sendLogout} from "../../redux/action-creators/user"
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import "./Navbar.scss"

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    fontFamily: "'Bangers', cursive",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navbar({handleChange, handleSubmit, searchValue}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [state, setState] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const user = useSelector(store => store.user.user)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const keyPress = e => {
    if (e.keyCode == 13) handleSubmit();
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link className="myProfile" to={`/users/${user._id}`}>Profile</Link>
      </MenuItem>
      <MenuItem onClick={()=>{
        handleMenuClose()
        dispatch(sendLogout())
        }}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={()=>{user.username ? handleProfileMenuOpen():null}}>
        { user.username ? 
          <Link className="myProfile" to={`/users/${user._id}`}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            Profile</Link> 
        : 
        <Link className="myProfile" to={`/login`}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          Login</Link>}
      </MenuItem>
      {user.username ? (
        <MenuItem onClick={()=>{dispatch(sendLogout())}}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <MeetingRoomIcon />
            </IconButton>
            Logout 
      </MenuItem>
      ):(null)}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" id="navbar">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            <Link to="/home" id="linkTitle">SuperHero App</Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
              onKeyDown={keyPress}
              value={searchValue}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            {!user._id ? (<Link id="btnLogin" to="/login"><Button color="inherit">Login</Button></Link>
            ):(
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>)}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <React.Fragment>
          <SwipeableDrawer
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <div
              className={clsx(classes.list)}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
                <List>
                    <Link to="/home" className="linkNavbar">
                    <ListItem button >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                    </Link>
                    <Link to="/search" className="linkNavbar">
                    <ListItem button >
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Search"} />
                    </ListItem>
                    </Link>
                    <Link to="/users" className="linkNavbar">
                    <ListItem button >
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Users"} />
                    </ListItem>
                    </Link>
                </List>
              <Divider />
                <List>
                  <Link to="/contact" className="linkNavbar">
                      <ListItem button >
                          <ListItemIcon>
                              <MailIcon />
                          </ListItemIcon>
                          <ListItemText primary={"Contact us"} />
                      </ListItem>
                  </Link>
                </List>
                </div>
              </SwipeableDrawer>
            </React.Fragment>
        </div>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
