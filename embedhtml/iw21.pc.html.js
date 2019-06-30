// return status of malfunction report
 function return_status()
 {
   var status = {monitor:"", 
                 pc:"", 
                 keyboard:"",
                 mouse:"", 
                 camera:"", 
                 microphone:""};

    for (var prop in status) 
    {
      status[prop] = document.getElementById(prop).value;
    };
  
    return status;
 };
