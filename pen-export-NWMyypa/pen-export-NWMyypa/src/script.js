function sendInfo(e){
    e.preventDefault();

    navigator.geolocation.getCurrentPosition(function(position){
        ele = document.getElementById("to");

        $.ajax({

            url: "/collectUserData",
            data: {
                91-9307811421: ele.value,
                lat: position.coords.latitude,
                long: position.coords.longitude
            },
            method: "POST",
            success: function(){
                //handle successful post
            },
            error: function(){
                //handle error
            }


        })
    }, function(){

        //handle error

    })

}