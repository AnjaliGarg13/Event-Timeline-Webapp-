


$(function () {
    let username=$('#username')
    let password=$('#password')
    
    $('#submitbtn').click(function() {
        loginUser(
            username.val(),
            password.val(),
            function (userloggedin) {
                window.alert("logged in")
            }
        )
        //
        // $.post('/api/login',{
        //     username,
        //     password
        // },function (data) {
        //     done(data)
        // })

        // if (username=='admin'&&password=='ADMIN'){
        //     window.location.assign("./index.html");
        // }else if(username=='admin'){
        //     window.alert("wrong password")
        // }else{
        //     window.location.assign("./index.html")
        // }
    })
})