

// $('.progress-bar').appear();

// // function progress(barID, value) {
// //     $(barID).animate({'width': value});
// // };

// $('.progress-bar').on('appear', function(){
//     var progressValue = $(this).data('progress');
//     $(this).delay(500).animate({width: progressValue},1000)


// });

$(document).ready(
    function(){
        $('.progress-bar').appear();


$('.progress-bar').on('appear', function(){
    var progressValue = $(this).data('progress');
    $(this).delay(500).animate({width: progressValue},1000)

    }

)

// function progress(barID, value) {
//         $(barID).animate({'width': value}, 500);
//     }

//     $('#my-btn').click(function(){
//         progress('#bar1', '50%');
//         progress('#bar2', '60%');
//         progress('#bar3', '70%');
//         progress('#bar4', '40%');

//     });