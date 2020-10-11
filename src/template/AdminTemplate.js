import React from "react";
import { Route, Redirect } from "react-router-dom";

function AddLayout(props){
    return <div>{props.children}</div>;
}

export default function AdminTemplate({ Component, ...props}) {
  return <Route
    {...props}
    render={(propsComponent)=>{
      if(localStorage.getItem("UserAmin")){
        return (
          <AddLayout>
            <Component {...propsComponent}/>
          </AddLayout>
        )
      }
    }}
  />;
}
