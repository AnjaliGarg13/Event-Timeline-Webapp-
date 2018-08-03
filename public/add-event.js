//js file for adding an event

$(function(){
    let eventName=$('#eventname')
    let orgSociety=$('#organiser')
    let details=$('#eventdetails')
    let starttime=$('#starttime')
    let startdate=$('#Startdate')
    let endtime=$('#endtime')
    let enddate=$('#enddate')
    let location=$('#location')
    let link=$('#link')

    $('#btnadd').click(function () {
        addEventNSIT(
            eventName.val(),
            orgSociety.val(),
            details.val(),
            starttime.val(),
            startdate.val(),
            endtime.val(),
            enddate.val(),
            location.val(),
            link.val(),
            function (addedEvent) {
                window.alert("Added "+addedEvent+" to database")
            }
        )
    })

})