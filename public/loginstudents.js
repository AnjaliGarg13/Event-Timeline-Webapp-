


$(function () {
    let username=$('#username')
    let password=$('#password')
    
    $('#submitbtn').onclick(function () {
        $.post('/api/event/login',{
            username,
            password
        },function (data) {
            done(data)
        })
    })
})