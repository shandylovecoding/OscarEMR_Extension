if (window.location.href.indexOf("oscarMeasurements") > -1) {
    var inputFields = document.getElementsByTagName('input');
  
    function updateValue(e) {
      //Change your location of input field
      if (inputFields[2].value && inputFields[27].value) {
        inputFields[34].value = (inputFields[2].value / (inputFields[27].value / 100 * inputFields[27].value / 100)).toFixed(2)
      }
    }
  
    inputFields[2].addEventListener('input', updateValue)
    inputFields[27].addEventListener('input', updateValue)
  } else if(window.location.href.indexOf("ticklerMain") > -1){
    console.log("here",document.title.split(',')[0]);
    var theDefault='Front, Desk';
    var theOptions = document.getElementsByName('task_assigned_to')[0].options;
    for (theOption in theOptions)
    {
      if(typeof(theOption)=='object'){
        if(theOption.text==theDefault){
          theOption.selected=true;
          break;
        }
      }
    }
  }