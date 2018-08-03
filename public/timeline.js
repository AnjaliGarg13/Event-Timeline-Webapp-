// for functions from complete js files i.e. index.js and add-events.js

function addEventNSIT(name,organiser,details,starttime,startdate,endtime,enddate,location,link,done) {
    $.post('/api/event',{
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
                <span class="month"> feb</span>
                <span class="date-number">19</span>
            </div>
        </div>
        <div class="details col-10" style="color: grey">
                <!-- facebook link of event -->
                <h2 class="event-title" align="left">
                    <a href="#">Orientation</a></h2>
                <p class="calender"><i class="fa fa-calender" aria-hidden="true"></i>  Date of Event</p>
                <p class="time"><i class="far fa-clock"></i>  Duration </p>
                <p class="location"><i class="fa fa-map-marker"></i>  Location</p>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-8">
                    <div class="organiser row">
                        <div class="col-2"> Organiser :</div>
                        <div class="col-6">organiser details</div>
                    </div>
                    <div class="organiser row">
                        <div class="col-2"> Details :</div>
                        <div class="col-6"> details</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
}