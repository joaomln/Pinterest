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

:hover {
  opacity: 0.5;
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

img :hover {
  opacity: 0.5;
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

:hover {
  opacity: 0.5;
}


`


export const CardInfoSocial = styled(StandardCardInfo)`

grid-row-end: span 16;
height: 20%;

.Avatar {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
img :hover {
  opacity: 0.5;
}

`