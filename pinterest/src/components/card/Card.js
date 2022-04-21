import React from "react";
import { CardStyleBig, CardStyleMedium, CardStyleSmall,CardInfoSocial, 
  CardStyleBigSocial, NotificationsWrapper, Counter } from './styles'
import img1 from '../img/dog.jpeg'
import img2 from '../img/pave.jpeg'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

 function Card() {
    return (
      <>
      <CardStyleBigSocial>
        <img src="https://images.unsplash.com/photo-1650372440867-8983bcbad2f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"/> 
        <CardInfoSocial>
          <img className="Avatar" src="https://app.lit.com.br:8443/api/downdImg/12"></img>
          <a href="/">Usuário 1</a> 
          <NotificationsWrapper>
         <FavoriteTwoToneIcon/>
         <Counter>1987</Counter>
       </NotificationsWrapper>
        </CardInfoSocial>
      </CardStyleBigSocial>
      
      <CardStyleSmall>
        <img src="https://images.unsplash.com/photo-1650372924099-25374072ce17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"></img>
      </CardStyleSmall>
      <CardStyleMedium>
        <img src="https://images.unsplash.com/photo-1650434044914-e5adcb42d16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
      </CardStyleMedium>
      <CardStyleBig>
        <img src="https://images.unsplash.com/photo-1650381694137-5d3c09a0994b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
      </CardStyleBig>
      <CardStyleSmall>
        <img src="https://images.unsplash.com/photo-1650434910011-aa6be391e766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
      </CardStyleSmall>
      <CardStyleMedium>
        <img src="https://images.unsplash.com/photo-1650375035327-4d81cc6cca40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
      </CardStyleMedium>
      <CardStyleBig>
        <img src={img1}></img>
      </CardStyleBig>
      <CardStyleSmall>
        <img src={img2}></img>
      </CardStyleSmall>
      <CardStyleMedium>
        <img src="https://images.unsplash.com/photo-1650386947990-99d416a970f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
      </CardStyleMedium>
      <CardStyleBig>
        <img src="https://images.unsplash.com/photo-1650390838469-cffe7aff0d8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
      </CardStyleBig>
      <CardStyleSmall>
        <img src="https://images.unsplash.com/photo-1650464637606-ea3e8ce23a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
      </CardStyleSmall>
      <CardStyleMedium>
        <img src="https://images.unsplash.com/photo-1650465725382-a9f2754f2d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
      </CardStyleMedium>
      <CardStyleBig>
        <img src="https://images.unsplash.com/photo-1650468685760-ad2d9ccddf19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
      </CardStyleBig>
      <CardStyleSmall>
        <img src="https://images.unsplash.com/photo-1646491730239-8b9c21a4a859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
      </CardStyleSmall>
      <CardStyleMedium>
        <img src="https://images.unsplash.com/photo-1650399470902-0dd9259b91c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
      </CardStyleMedium>
      </>
    );
  }

  export default Card;