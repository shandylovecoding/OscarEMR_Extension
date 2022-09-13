console.log(123);

var elements = (window.location.pathname.split('/', 2))
var firstElement = (elements.slice(1))
var vPath = ("https://" + location.hostname + ":9082/" + firstElement + "/")


//Set Assign to user
$.ajax({
    url: vPath + "provider/providercontrol.jsp?year=2022&month=9&day=12&view=0&displaymode=day&dboperation=searchappointmentday&viewall=1",
    dataType: 'html',
    success: function (data) {


        var user = data.match("<title>(.*?)</title>")[1].split(',')[0];

        var theOptions = document.getElementsByName('assignedTo')[0].options;
        console.log(theOptions);
        for (let i = 0; i < theOptions.length; i++) {
            console.log(theOptions[i].innerText);
            if (theOptions[i].innerText.indexOf(user) > -1) {
                theOptions[i].selected = true;
                break;
            }
        }

    }
});
