import React from 'react'
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import TextsmsIcon from '@material-ui/icons/Textsms'
import Avatar from '@material-ui/core/Avatar/Avatar'
import Badge from '@material-ui/core/Badge/Badge'
import Menu from '@material-ui/core/Menu/Menu'
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import {Wrapper, LogoWrapper ,HomePageButton, FollowingButton, SearchWrapper, SearchBarWrapper, IconsWrapper} from './styled'






function NavBar() {
  return (
    <Wrapper>
        <LogoWrapper>
            <IconButton>
                <PinterestIcon/>
           </IconButton>
        </LogoWrapper>
        <HomePageButton>
        <a href='/'>Página inicial</a>
        </HomePageButton>
        <FollowingButton>
        <a href='/'>hoje</a>
        </FollowingButton>
        <SearchWrapper>
            <SearchBarWrapper>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <form>
                        <input type="text" placeholder='Pesquisar'/>
                        <button type='submit'></button>
                </form>
            </SearchBarWrapper>
        </SearchWrapper>
        <IconsWrapper>
            <IconButton>
                <Badge badgeContent={1876} max={2000} color="error">
                    <NotificationsIcon/>
                </Badge>
            </IconButton>
            <IconButton>
            <Badge badgeContent={1} color="error">
            <TextsmsIcon/>
            </Badge>
            </IconButton>
            <IconButton>
            <Avatar alt="Usuário 1" src="https://app.lit.com.br:8443/api/downdImg/12" />
            </IconButton>
            <IconButton>
            <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <KeyboardArrowDownIcon variant="contained" {...bindTrigger(popupState)}>
          </KeyboardArrowDownIcon>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Perfil</MenuItem>
            <MenuItem onClick={popupState.close}>Minha Conta</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
            </IconButton>
        </IconsWrapper>
    </Wrapper>
  )
}

export default NavBar
