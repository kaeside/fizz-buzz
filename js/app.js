$(document).ready(function () {
    $("#fizz-buzz").submit(function (event) {
        event.preventDefault()
        
        var fizzBuzz = $('#user-input').val();

        if (fizzBuzz % 3 === 0) {
            $('#list').append('<li>FIZZ</li>');
            $('#user-input').val("");
        } if (fizzBuzz % 5 === 0) {
            $('#list').append('<li>BUZZ</li>');
            $('#user-input').val("");
        } if (fizzBuzz % 5 != 0, fizzBuzz % 3 != 0) {
            $('#list').append('<li>' + fizzBuzz + '</li>');
            $('#user-input').val("");
        } if (fizzBuzz % 5 === 0, fizzBuzz % 3 === 0) {
            $('#list').append('<li>FIZZ BUZZ!</li>');
            $('#user-input').val("");
        }   
        
    });

});


// Prepend li from list

