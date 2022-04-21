import React from "react";
import { CardStyleBig, CardStyleMedium, CardStyleSmall,CardInfoSocial, CardStyleBigSocial } from './styles'
import img1 from '../img/dog.jpeg'
import img2 from '../img/pave.jpeg'
 function Card() {
    return (
      <>
      <CardStyleBigSocial>
        <img src="https://images.unsplash.com/photo-1650372440867-8983bcbad2f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"/> 
        <CardInfoSocial>
          <img className="Avatar" src="https://app.lit.com.br:8443/api/downdImg/12"></img>
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
      <CardStyleMedium></CardStyleMedium>
      <CardStyleBig></CardStyleBig>
      <CardStyleSmall></CardStyleSmall>
      <CardStyleMedium></CardStyleMedium>
      <CardStyleBig></CardStyleBig>
      <CardStyleSmall></CardStyleSmall>
      <CardStyleMedium></CardStyleMedium>
      </>
    );
  }

  export default Card;