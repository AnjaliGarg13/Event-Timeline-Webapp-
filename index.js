//only for onload fetching of events
//rest function are in timeline.js

$(function(){
    let eventList=$('#events-list')
    fetchEvents(function(events){
        eventList.empty()
        for(task of events){
            eventList.append(createEventCard(task))
        }
    })
})