// for functions from complete js files i.e. index.js and add-events.js

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

function fetchEvents(done){
    $.get('/api/event',function (data) {
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
                <span class="month">${Event.startdate.month} </span>
                <span class="date-number">${Event.startdate.date}</span>
            </div>
        </div>
        <div class="details col-10" style="color: grey">
                <!-- facebook link of event -->
                <h2 class="event-title" align="left">
                    <a href="${Event.link}">${Event.name}</a></h2>
                <p class="time"><i class="far fa-clock"></i>${Event.startdate} to ${Event.enddate}</p>
                <p class="location"><i class="fa fa-map-marker"></i>  ${Event.location}</p>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-8">
                    <div class="organiser row">
                        <div class="col-2"> Organiser</div>
                        <div class="col-6"> Details</div>
                    </div>
                    <div class="organiser row">
                        <div class="col-2"> ${Event.orgSociety}</div>
                        <div class="col-6"> ${Event.details}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
}