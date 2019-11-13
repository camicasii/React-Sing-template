import React from 'react';

const Toast =(props)=>{    
      const {sms}=props;
      return(
        <div id="snackbar" >{sms}</div>
      );
}
export default Toast;