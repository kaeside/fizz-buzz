$(document).ready(function () {
    $("#fizz-buzz-form").submit(function (event) {
    	event.preventDefault()
        
        var fizzBuzz = $("#integer").val();

        if ((fizzBuzz % 3) == 0) {
            .alert("hi!");
        }
    });
});