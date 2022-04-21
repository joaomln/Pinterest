
import styled from "styled-components";



export const StandardCardInfo = styled.div`
margin: 15px 10px;
padding: 0;
border-radius: 16px;

img{
  
  width: 100%;
  height: 100%;
  border-radius: 16px;
 
}



`
export const StandardCardSocialInfo = styled.div`
margin: 15px 10px;
padding: 0;
border-radius: 16px;

img{
  
  width: 100%;
  height: 80%;
  border-radius: 16px;
}



`

export const CardStyleBig = styled(StandardCardInfo)`

grid-row-end: span 45;

`
export const CardStyleMedium = styled(StandardCardInfo)`

grid-row-end: span 33;

`

export const CardStyleSmall = styled(StandardCardInfo)`

grid-row-end: span 26;

`

export const CardStyleBigSocial = styled(StandardCardSocialInfo)`
grid-row-end: span 45;




`

export const CardStyleSmallSocial = styled(StandardCardSocialInfo)`
grid-row-end: span 26;
`
export const CardInfoSocial = styled(StandardCardInfo)`

grid-row-end: span 16;
height: 10%;

.Avatar {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

a {
  text-decoration: none;
  color: black;
  font-size: 15px;
  padding-left: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
}

`
export const NotificationsWrapper = styled.div `

grid-row-end: span 16;
height: 10%;
width: 100%;
display: flex;
flex-direction: row;

`
export const FavoriteTwoToneIcon =styled.div `
`
export const Counter = styled.div`
font-size: 15px;
text-decoration: none;
font-family: Arial, Helvetica, sans-serif;
margin-top: 0.5vh;
margin-right: 1vh;
`