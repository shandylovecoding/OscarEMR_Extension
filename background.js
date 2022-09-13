

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
}

else {

  var demoNo = JSON.stringify(location.href);
  demoNo = demoNo.substring(demoNo.indexOf('demographicNo') + 14, demoNo.indexOf('&provid'));

  var elements = (window.location.pathname.split('/', 2))
  var firstElement = (elements.slice(1))
  console.log(firstElement)
  //Change vPath

  var vPath = ("https://" + location.hostname + ":9082/" + firstElement + "/")
  console.log(vPath)
  var input4 = document.createElement("input");
  input4.type = "button";
  input4.value = "Vital Signs";
  input4.onclick = showAlert4;
  input4.setAttribute("style", "width:90px;font-size:16px;position:fixed;bottom:20px;right:80px; ");
  document.body.appendChild(input4);
  function showAlert4() { window.open(vPath + 'oscarEncounter/oscarMeasurements/SetupMeasurements.do?groupName=Vitals', 'VitalsWindow', 'width=1000,height=500') }


  var input5 = document.createElement("input");
  input5.type = "button";
  input5.value = " PAP ";
  input5.onclick = showAlert5;
  input5.setAttribute("style", "width:90px;font-size:16px;position:fixed;bottom:50px;right:80px; ");
  document.body.appendChild(input5);

  function showAlert5() { window.open(vPath + 'eform/efmformslistadd.jsp?demographic_no=' + demoNo + '&appointment=null&parentAjaxId=eforms', 'PAP', 'width=1000,height=500') }


  window.addEventListener('load', function () {
    var targetDiv = document.getElementById("tickler").getElementsByTagName("div")[1].getElementsByTagName("h3")[0].getElementsByTagName("a")[0]
    console.log("targetDiv", targetDiv);
    var input3 = document.createElement("input");
    input3.type = "button";
    input3.value = "Tickler";
    input3.onclick = showAlert3;
    input3.setAttribute("style", "width:90px;font-size:16px;position:fixed;bottom:80px;right:80px; ");
    document.body.appendChild(input3);
    function showAlert3() { targetDiv.click() }
  })
}