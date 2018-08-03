$(function(){
    let eventlist=$('#events')
    fetchEvents(function(events){
        eventlist.empty()
        for(event of events){
            eventlist.append(createEventCard(event))
        }
    })
})