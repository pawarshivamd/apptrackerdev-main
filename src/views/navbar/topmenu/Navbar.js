import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Menu, MenuItem, Tooltip, alpha } from '@mui/material';
import { ExpandLess, ExpandMore, Logout, PersonAdd, Settings, StarBorder } from '@mui/icons-material';
import SideMenuList from '../menulist/SideMenuList';
import DashboardIcon from '@mui/icons-material/Dashboard';
const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  // backgroundColor: alpha(theme.palette.primary.main, 0.15),
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Navbar = () => {

  const [openlist, setOpenlist] = useState(true);
  const [openDialogbox, setOpenDialogbox] = useState(false);
  const handleCloseDialogbox = () => {
    setOpenDialogbox(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const profileopen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  



  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClickOpenDialogbox = () => {
    setOpenDialogbox(true);
  };
  const handleClicklist = () => {
    setOpenlist((prevOpenlist) => !prevOpenlist);
  };
  const [routes] = useState(SideMenuList);
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography component="div" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>


              <Typography variant="h6" noWrap component="div">
                App Tracker
              </Typography>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => { setOpen(!open) }}
                edge="start"
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip >
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={profileopen ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={profileopen ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={profileopen}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleClose} >
                <Avatar /> Profile
              </MenuItem>
            </Link>
            <Divider />
            <MenuItem onClick={handleClickOpenDialogbox} >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </AppBar>
        <Drawer variant="permanent" open={open} >
          <DrawerHeader >
            <IconButton onClick={handleDrawerClose} >
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <List>
           
          <ListItemButton onClick={handleClicklist}>
        <ListItemIcon>
        <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        {openlist ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openlist} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/")}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Back Office" />

          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/")}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Manpower " />
            
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/")}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Recruiter"  />
            
          </ListItemButton>
          </List>
          </Collapse>
            {routes.map((route) => (
              <>
              <ListItem
                key={route.path}
                disablePadding
                sx={{ display: 'block', border: "none" }}
                onClick={() => navigate(route.path)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                    primary={route.icon}
                  >
                    {route.icon}
                  </ListItemIcon>
                  <ListItemText primary={route.label} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              </>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Dialog
        open={openDialogbox}
        onClose={handleCloseDialogbox}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {""}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you sure want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogbox}>No</Button>
          <Button onClick={() => { navigate("/"); }} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      </Box>

    </>

  );
}

export default Navbar



