

$('.progress_bars').appear();

function progress(barID, value) {
    $(barID).animate({'width': value});
};

$('.progress_bars').on('appear', function(){
    progress('#bar1', '50%');
    progress('#bar2', '60%');
    progress('#bar3', '70%');
    progress('#bar4', '40%');
    // alert ('done!');


});

// function progress(barID, value) {
//         $(barID).animate({'width': value}, 500);
//     }

//     $('#my-btn').click(function(){
//         progress('#bar1', '50%');
//         progress('#bar2', '60%');
//         progress('#bar3', '70%');
//         progress('#bar4', '40%');

//     });