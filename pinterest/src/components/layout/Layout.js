import React from "react";
import Card from "../card/Card";
import {LayoutStyle} from './styles';

 function Layout(props) {
    return (
     <>
        <LayoutStyle>
          <Card/>
        </LayoutStyle>
        </>
    );
  }
  
export default Layout;