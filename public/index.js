//only for onload fetching of events
//rest function are in timeline.js




$(function(){
    let eventList=$('#events-list')
    fetchEvents(function(events){
        eventList.empty()
        for(event of events){
            eventList.append(createEventCard(event))
        }
    })
})