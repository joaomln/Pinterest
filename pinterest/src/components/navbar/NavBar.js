import React from 'react'
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import TextsmsIcon from '@material-ui/icons/Textsms'
import FaceIcon from '@material-ui/icons/Face'
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
                <NotificationsIcon/>
            </IconButton>
            <IconButton>
            <TextsmsIcon/>
            </IconButton>
            <IconButton>
            <FaceIcon/>
            </IconButton>
            <IconButton>
               <KeyboardArrowDownIcon/>
            </IconButton>
        </IconsWrapper>
    </Wrapper>
  )
}

export default NavBar
