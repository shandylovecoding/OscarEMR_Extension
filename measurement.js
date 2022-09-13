
    var inputFields = document.getElementsByTagName('input');
  
    function updateValue(e) {
      //Change your location of input field
      if (inputFields[2].value && inputFields[27].value) {
        inputFields[34].value = (inputFields[2].value / (inputFields[27].value / 100 * inputFields[27].value / 100)).toFixed(2)
      }
    }
  
    inputFields[2].addEventListener('input', updateValue)
    inputFields[27].addEventListener('input', updateValue)
