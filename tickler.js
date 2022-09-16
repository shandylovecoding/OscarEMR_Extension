
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
        if($(this).find('a')[2]){
            var find =  $(this).find('a')[2].getAttribute('onclick');
        
             url = find.substring(find.indexOf('1024')+9, find.indexOf('encounter')-3);
        } else{
            url = ""
        }
       
        //var demoNo = find.substring(find.indexOf('demographic_no') + 15, find.indexOf('&displaymode') );
    
        var tick = document.createElement("button");
        tick.type = "button";
        tick.value = "Done";
        tick.onclick = done;
        tick.setAttribute("style", "width:20px; height:20px; font-size:12px;");
        function done() {
    
            let eChart = window.open(vPath + url , 'Echart', 'width=1000,height=500')
                setTimeout(
                eChart.onload = function () {
                    var textarea = eChart.$('textarea[name=caseNote_note]')[0]
                    console.log(eChart.$('textarea[name=caseNote_note]'));

                    console.log("textarea", textarea);
                    if(textarea){
                        textarea.innerHTML += '\n  Done  Tickler " ' + ticklerMsg + ' "'
                        console.log("textarea.innerHTML",textarea.innerHTML);
                    }
                },2000)
        }
         var newCell = tr.insertCell(11)
         newCell.append(tick)
    
     })
