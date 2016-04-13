$(document).ready(function () {
    $("#fizz-buzz-form").submit(function (event) {
    	event.preventDefault()
        
        var fizzBuzz = $("#integer").val();

        for (var int = fizzBuzz; i < 101; i++) {
        console.log(int)      
        }
        if ((int % 3) == 0) {
            $('.integer-list').append("<li>fizz</li>")
            $('#integer').val("");
        };
    });
});