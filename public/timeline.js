// for functions from complete js files i.e. index.js and add-events.js

function searchEvents(date,events) {
    let eventList=$('#events-list')

    events = events.filter((event)=> {
        return ((event.startdate).substr(0,10) <= date && (event.enddate).substr(0,10) >= date);

    })
    console.log(events)
    eventList.empty()
    for(event of events){
        eventList.append(createEventCard(event))
    }
}

function fetchEvents(done){
    $.get('/api/event',function (data) {
        done(data)
    })
}

function addEventNSIT(name,organiser,details,starttime,startdate,endtime,enddate,location,link,done) {
    $.post('/api/events',{
        name:name,
        orgSociety:organiser,
        details:details,
        starttime:starttime,
        startdate:startdate,
        endtime:endtime,
        enddate:enddate,
        location:location,
        link:link
    },function (data) {
        done(data)
    })
}

function loginUser(username,password,done) {
    $.post('/api/login',{
        username:username,
        password:password
    },function (data) {
        done(data)
    })
}



function createEventCard(Event){
    return $(`
    <div class="event-item row padding">
        <div class="col-2 text-center">
            <br>
            <br>
            <br>
            <div class="date-label ">
                <span class="month">${Event.startdate.split('-')[1]} </span>
                <span class="date-number">${Event.enddate.split('-')[2].split('T')[0]}</span>
            </div>
        </div>
        <div class="details col-10" style="color: grey">
                <!-- facebook link of event -->
                <h2 class="event-title" align="left">
                    <a href="${Event.link}">${Event.name}</a></h2>
                
                <p class="time"><i class="far fa-clock"></i>  starting time :: ${Event.startdate.split('T')[0]}  -  ${Event.starttime}</p>
                
                <p class="time"><i class="far fa-clock"></i>  ending time  ::   ${Event.enddate.split('T')[0]}  -  ${Event.endtime}</p>
                <p class="location"><i class="fa fa-map-marker"></i>  ${Event.location}</p>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-8">
                    <div class="organiser row ">
                        <div class="col-2"> Organiser</div>
                        <div class="col-6">  ${Event.orgSociety}</div>
                    </div>
                    <div class="organiser row">
                        <div class="col-2">Details</div>
                        <div class="col-6"> ${Event.details}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
}