
var elements = (window.location.pathname.split('/', 2))
var firstElement = (elements.slice(1))
var vPath = ("https://" + location.hostname + "/" + firstElement + "/")


//Set Assign to user
$.ajax({
    url: vPath + "provider/providercontrol.jsp?year=2022&month=9&day=12&view=0&displaymode=day&dboperation=searchappointmentday&viewall=1",
    dataType: 'html',
    success: function (data) {

        var user = data.match("<title>(.*?)</title>")[1].split(',')[0];

        var theOptions = document.getElementsByName('assignedTo')[0].options;
        for (let i = 0; i < theOptions.length; i++) {
            if (theOptions[i].innerText.indexOf(user) > -1) {
                theOptions[i].selected = true;
                break;
            }
        }

    }
});

// Add Finish & LM button

$('table:eq(3) > tbody  > tr').each(function (index, tr) {
    var style = $(this).find('td').attr('class')
    var ticklerMsg = $(this).find('td')[9].innerText
    var url
    if ($(this).find('a')[2]) {
        var E = $(this).find('a')[2].getAttribute('onclick');

        url = E.substring(E.indexOf('1024') + 9, E.indexOf('encounter') - 3);
    } else {
        url = ""
    }
    var ticklerUrl
    if ($(this).find('a')[0]) {
        var ticlkerButton = $(this).find('a')[0].getAttribute('onclick');
        ticklerUrl = ticlkerButton.substring(ticlkerButton.indexOf('800') +9, ticlkerButton.indexOf('\')'));
    } else {
        ticklerUrl = ""
    }
    //var demoNo = find.substring(find.indexOf('demographic_no') + 15, find.indexOf('&displaymode') );

    //Added Tick in Tickler
    var tick = document.createElement("input");
    tick.type = "button";
    tick.value = "✓";
    tick.onclick = done;
    tick.setAttribute("style", "width:20px; height:20px; font-size:12px; padding: 0");
    function done() {

        let eChart = window.open(vPath + url, 'Echart', 'width=1000,height=500')
        setTimeout(
            eChart.onload = function () {
                var textarea = eChart.$('textarea[name=caseNote_note]')[0]

                if (textarea) {
                    textarea.innerHTML += '\n  Done  Tickler " ' + ticklerMsg + ' "'
                }
            }, 3000)
        let tickler = window.open(vPath + ticklerUrl, 'Tickler', 'width=800,height=500')
        setTimeout(
            tickler.onload = function () {
                var select = tickler.document.getElementsByTagName('select')[1]

                console.log("select", select);
                if (select) {
                    select.value = "C"
                }
            }, 5000)
    }
    var newCell = tr.insertCell(11)
    newCell.className = style
    newCell.append(tick)
    // Add LM Button
    var lmButton = document.createElement("input");
    lmButton.type = "button";
    lmButton.value = "LM";
    lmButton.onclick = lm;
    lmButton.setAttribute("style", "width:20px; height:20px; font-size:12px; padding: 0");
    function lm() {

        let eChart = window.open(vPath + url, 'Echart', 'width=1000,height=500')
        setTimeout(
            eChart.onload = function () {
                var textarea = eChart.$('textarea[name=caseNote_note]')[0]

                if (textarea) {
                    textarea.innerHTML += '\n  LM  Tickler " ' + ticklerMsg + ' "'
                }
            }, 3000)
        let tickler = window.open(vPath + ticklerUrl, 'Tickler', 'width=800,height=500')
        setTimeout(
            tickler.onload = function () {
                var apptDate = tickler.document.getElementsByName("xml_appointment_date")[0].value

                console.log("apptDate", apptDate);
                var year = parseInt(apptDate.substring(0,4))
                var month = parseInt(apptDate.substring(5,7))
                var day = parseInt(apptDate.substring(8,11))
                console.log("year", year);
                console.log("month", month);
                console.log("day", day);
                switch (month) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                      dayCount = 31;
                      break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                      dayCount = 30;
                      break;
                    case 2:
                      // leap year
                      if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
                        dayCount = 29;
                      } else {
                        dayCount = 28;
                      }
                      break;
                    default:
                      dayCount = -1; // invalid month
                  }
                  newDate = day + 7
                  if(newDate >  dayCount && month == 12){
                    console.log(1);
                    newApptDate = ((year+1).toString()+"-01-"+(newDate-dayCount>10?newDate-dayCount:"0"+newDate-dayCount).toString())
                  } else if (newDate >  dayCount && month == 12){
                    console.log(2);
                    newApptDate = ((year+1).toString()+"-"+(month+1>10?month+1:"0"+month).toString()+"-"+(newDate-dayCount>10?newDate-dayCount:"0"+newDate-dayCount).toString())
                  } else{
                    console.log(3);
                    newApptDate = ((year+1).toString()+"-"+(month+1>10?month+1:"0"+month).toString()+"-"+(newDate>10?newDate:"0"+newDate).toString())
                  }
                  console.log("newApptDate",newApptDate);
                  tickler.document.getElementsByName("xml_appointment_date")[0].value = newApptDate
                  
            }, 3000)
    }
    

    var newCell = tr.insertCell(12)
    newCell.className = style
    newCell.append(lmButton)

})
