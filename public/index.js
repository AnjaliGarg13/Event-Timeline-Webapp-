//only for onload fetching of events
//rest function are in timeline.js

$(function(){
    let eventlist=$('#events')
    fetchEvents(function(events){
        eventlist.empty()
        for(event of events){
            eventlist.append(createEventCard(event))
        }
    })
})