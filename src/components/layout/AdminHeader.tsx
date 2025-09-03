'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/navigation';

export default function AdminHeader() {
  const [quotesAnchor, setQuotesAnchor] = React.useState<null | HTMLElement>(null);
  const [pujaAnchor, setPujaAnchor] = React.useState<null | HTMLElement>(null);
  const [chadhawaAnchor, setChadhawaAnchor] = React.useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const isMobile = useMediaQuery('(max-width:960px)');

  const handleQuotesClick = (event: React.MouseEvent<HTMLElement>) => {
    setQuotesAnchor(event.currentTarget);
  };

  const handlePujaClick = (event: React.MouseEvent<HTMLElement>) => {
    setPujaAnchor(event.currentTarget);
  };

  const handleChadhawaClick = (event: React.MouseEvent<HTMLElement>) => {
    setChadhawaAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setQuotesAnchor(null);
    setPujaAnchor(null);
    setChadhawaAnchor(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleBookPujaClick = () => {
    handleClose();
    if (isMobile) handleDrawerToggle();
    router.push('/admin/add-puja');
  };

  const drawerContent = (
    <Box sx={{ width: 250, p: 2 }}>
      <List>
        <ListItem onClick={() => { router.push('/admin'); handleDrawerToggle(); }}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem onClick={handleDrawerToggle}>
          <ListItemText primary="Gallery" />
        </ListItem>
        <ListItem onClick={handleQuotesClick}>
          <ListItemText primary="Quotes" />
        </ListItem>
        <Menu anchorEl={quotesAnchor} open={Boolean(quotesAnchor)} onClose={handleClose}>
          <MenuItem onClick={() => { handleClose(); handleDrawerToggle(); }}>Daily Quotes</MenuItem>
          <MenuItem onClick={() => { handleClose(); handleDrawerToggle(); }}>Spiritual Quotes</MenuItem>
        </Menu>
        <ListItem onClick={handleDrawerToggle}>
          <ListItemText primary="CMS" />
        </ListItem>
        <ListItem onClick={handlePujaClick}>
          <ListItemText primary="Puja" />
        </ListItem>
        <Menu anchorEl={pujaAnchor} open={Boolean(pujaAnchor)} onClose={handleClose}>
          <MenuItem onClick={handleBookPujaClick}>Add Puja</MenuItem>
          <MenuItem onClick={() => { handleClose(); handleDrawerToggle(); }}>Puja List</MenuItem>
        </Menu>
        <ListItem onClick={handleChadhawaClick}>
          <ListItemText primary="Chadhawa" />
        </ListItem>
        <Menu anchorEl={chadhawaAnchor} open={Boolean(chadhawaAnchor)} onClose={handleClose}>
          <MenuItem onClick={() => { handleClose(); handleDrawerToggle(); }}>Chadhawa Orders</MenuItem>
          <MenuItem onClick={() => { handleClose(); handleDrawerToggle(); }}>Manage Chadhawa</MenuItem>
        </Menu>
        <ListItem onClick={handleDrawerToggle}>
          <ListItemText primary="Blogs" />
        </ListItem>
        <ListItem onClick={handleDrawerToggle}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: { xs: 2, md: 4 }, my: { xs: 1, md: 0 } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: '#ffc107',
              fontFamily: 'serif',
            }}
          >
            Global-Puja
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              fontSize: { xs: '8px', md: '10px' },
              lineHeight: 1,
              ml: 1,
            }}
          >
            पूजा एवं ज्योतिष सेवाएं
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <>
            <Box sx={{ flexGrow: 1, display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'end' }}>
              <Button color="inherit" onClick={() => router.push('/admin')}>Dashboard</Button>
              <Button color="inherit">Gallery</Button>
              <Button color="inherit" endIcon={<ArrowDropDownIcon />} onClick={handleQuotesClick}>
                Quotes
              </Button>
              <Menu anchorEl={quotesAnchor} open={Boolean(quotesAnchor)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Daily Quotes</MenuItem>
                <MenuItem onClick={handleClose}>Spiritual Quotes</MenuItem>
              </Menu>
              <Button color="inherit">CMS</Button>
              <Button color="inherit" endIcon={<ArrowDropDownIcon />} onClick={handlePujaClick}>
                Puja
              </Button>
              <Menu anchorEl={pujaAnchor} open={Boolean(pujaAnchor)} onClose={handleClose}>
                <MenuItem onClick={handleBookPujaClick}>Add Puja</MenuItem>
                <MenuItem onClick={handleClose}>Puja List</MenuItem>
              </Menu>
              <Button color="inherit" endIcon={<ArrowDropDownIcon />} onClick={handleChadhawaClick}>
                Chadhawa
              </Button>
              <Menu anchorEl={chadhawaAnchor} open={Boolean(chadhawaAnchor)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Chadhawa Orders</MenuItem>
                <MenuItem onClick={handleClose}>Manage Chadhawa</MenuItem>
              </Menu>
              <Button color="inherit">Blogs</Button>
              <Button color="inherit" sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}>
                Logout
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}