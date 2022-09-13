



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
  function showAlert4() { window.open(vPath + 'oscarEncounter/oscarMeasurements/SetupMeasurements.do?groupName=Vital Signs', 'VitalsWindow', 'width=1000,height=500') }


  var input5 = document.createElement("input");
  input5.type = "button";
  input5.value = " PAP ";
  input5.onclick = showAlert5;
  input5.setAttribute("style", "width:90px;font-size:16px;position:fixed;bottom:50px;right:80px; ");
  document.body.appendChild(input5);

  function showAlert5() { window.open(vPath + 'eform/efmformslistadd.jsp?demographic_no=' + demoNo + '&appointment=null&parentAjaxId=eforms', 'PAP', 'width=1000,height=500') }


  