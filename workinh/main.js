// $('#my-btn').click(function() {
//     $('#square').fadeToggle(2000);
// });

// the 2000 is optional and represents mseconds, makes the animation slower

// $('#my-btn').click(function() {
//     $('#square').animate(
//         {'width': 'toggle'},
//         2000
//     )
// });


// $('#my-btn').click(function() {
//         $('#bar1').animate({'width': '50%'},2000)
//         $('#bar2').animate({'width': '60%'},2000)
//         $('#bar3').animate({'width': '70%'},2000)
//         $('#bar4').animate({'width': '40%'},2000)
//     });

    // shorter version of the above


    // function progress(barID, value) {
    //         $(barID).animate({'width': value}, 500);
    //     }

    //     $('#my-btn').click(function(){
    //             progress('#bar1', '50%');
    //             progress('#bar2', '60%');
    //             progress('#bar3', '70%');
    //             progress('#bar4', '40%');


    //         });


            $('.progress').appear();

            function progress(barID, value) {
                $(barID).animate({'width': value}, 500);
            };

            $('.progress').on('appear', function(){
                progress('#bar1', '50%');
                progress('#bar2', '60%');
                progress('#bar3', '70%');
                progress('#bar4', '40%');
                // alert ('done!');

            });


            // $('.progress-bar').appear();
            // $('.progress-bar').on('appear', function() {
            //     var progressValue = $(this).data('progress'); // get progress value from custom data- attribute
            //     $(this).delay(300).animate({width: progressValue}, 1000); // animate progress bar’s width to the value from data-progress atribute
            // });