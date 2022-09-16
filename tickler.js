
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
    console.log(ticklerUrl);
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
    newCell.append(tick)

})
