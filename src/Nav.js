import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';


class Nav extends Component{
    constructor(){
        super();
        this.state = {
            anchorElNav: null,
            anchorElUser: null
        }
        this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this)
        this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this)
        this.handleOpenUserMenu = this.handleOpenUserMenu.bind(this)
        this.handleCloseUserMenu = this.handleCloseUserMenu.bind(this)
        this.toLink = this.toLink.bind(this)

    }
    handleOpenNavMenu(event){
        this.setState({
            anchorElNav: event.currentTarget
        })
    };
    handleOpenUserMenu(event){
        this.setState({
            anchorElUser: event.currentTarget
        })
    };
    
    handleCloseNavMenu(){
        this.setState({
            anchorElNav: null
        })
      };
    
    handleCloseUserMenu(){
        this.setState({
            anchorElUser: null
        })
    };
    toLink(pageName){
        const {history} = this.props;
        history.push(`/${pageName}`)
    }


    render(){
        const {handleOpenNavMenu, handleCloseNavMenu, toLink} = this
        const {anchorElNav} = this.state

        const pages = ['Disease Info', 'Visualize'];


        return(
            <AppBar 
            position="static"
            sx={{
                backgroundColor: '#B0C4DE',
                color: 'black'
            }}
            >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <CoronavirusIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , fontSize: 35}} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Times, Times New Roman, serif',
                    fontSize: 30,
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  COVID-19
                </Typography>
      
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
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
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >


                    <MenuItem onClick={handleCloseNavMenu}>
                      <Button
                        onClick={()=> toLink('')}
                        sx={{ 
                            color: 'black', 
                            display: 'block',
                            fontFamily: 'Times, Times New Roman, serif',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                            
                        }}
                        >
                            <Typography textAlign="left">Home</Typography>
                        </Button>
                      </MenuItem>

                      <MenuItem onClick={handleCloseNavMenu}>
                      <Button
                        onClick={()=> toLink('deseaseInfo')}
                        sx={{ 
                            color: 'black', 
                            display: 'block',
                            fontFamily: 'Times, Times New Roman, serif',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                            
                        }}
                        >
                            <Typography textAlign="left">Disease Info</Typography>
                        </Button>
                      </MenuItem>


                      <MenuItem onClick={handleCloseNavMenu}>
                      <Button
                        onClick={()=> toLink('Visualize')}
                        sx={{  
                            color: 'black', 
                            display: 'block',
                            fontFamily: 'Times, Times New Roman, serif',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                            
                        }}
                        >
                          <Typography textAlign="left">Visualize</Typography>
                      </Button>
                    </MenuItem>


                  </Menu>
                </Box>

                <CoronavirusIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: 35}} />


                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'Times, Times New Roman, serif',
                    fontSize: 30,
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  COVID-19
                </Typography>
                
                
                
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'left' }}>
                    <Button
                    onClick={()=> toLink('')}
                    sx={{ 
                        m: 1,
                        my: 2, 
                        color: 'black', 
                        display: 'block',
                        fontFamily: 'Times, Times New Roman, serif',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                        
                    }}
                    >
                    Home
                    </Button>
                    <Button
                    onClick={()=> toLink('deseaseInfo')}
                    sx={{ 
                        m: 1,
                        my: 2, 
                        color: 'black', 
                        display: 'block',
                        fontFamily: 'Times, Times New Roman, serif',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                        
                    }}
                    >
                    Disease Info
                    </Button>
                    <Button
                    onClick={()=> toLink('visualize')}
                    sx={{ 
                        m: 1,
                        my: 2, 
                        color: 'black', 
                        display: 'block',
                        fontFamily: 'Times, Times New Roman, serif',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                        
                    }}
                    >
                    Visualize
                    </Button>
                </Box>


              </Toolbar>
            </Container>
          </AppBar>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        state
    }
}
const mapDispatchToProps = (dispatch) =>{
 return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)