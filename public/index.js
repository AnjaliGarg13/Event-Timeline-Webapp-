//only for onload fetching of events
//rest function are in timeline.js

$(function(){
    let eventList=$('#events-list')
    fetchEvents(function(events){
        console.log(events)
        eventList.empty()
        for(event of events){
            eventList.append(createEventCard(event))
        }
    })
})

function myfunction() {
    let date=document.getElementById('searchbox').value
    console.log(date)
    fetchEvents(function (events) {
        searchEvents(date,events)
    })
}