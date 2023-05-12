import * as React from 'react';
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LighthouseLogo from 'public/LighthouseLogo.png'

const pages = ['Github'];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(false);

  const handleOpenNavMenu = () => {
    setAnchorElNav(true);
    if(anchorElNav) window.open('https://github.com/oslabs-beta/Lighthouse')
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };


  return (
    <AppBar position="static" style={{backgroundColor: '#aceed9'}}>

      <Container maxWidth="xl" sx={{ m: 0}} >
        <Toolbar disableGutters sx={{ display: {position: "flex" }}}>

          <Image  src={LighthouseLogo} alt='logo display' sx={{ display: { width: 200, xs: 'none', md: 'container' }, mr: 1 }} />
          <Typography
            variant="h4"
            component="a"
            href="/"
            sx={{
              display: {},
              fontFamily: 'Helvetica',
              fontWeight: 450,
              letterSpacing: '0.5rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >Lighthouse
          </Typography>
          <Box>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleOpenNavMenu}
                sx={{ my: 1, color: 'black', display: 'block'}}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>

    </AppBar>
  );
};
