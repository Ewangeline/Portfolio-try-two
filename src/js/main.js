

console.log('something more more');
 $('.progress-bar').appear();
 console.log('Something');
 $('.progress-bar').on('appear', function() {
     console.log('something more')
     var progressValue = $(this).data('progress'); // get progress value from custom data- attribute
     $(this).delay(300).animate({'width': progressValue}, 1000); // animate progress bar’s width to the value from data-progress atribute
 });




// $('.progress-bar').appear();


// $('.progress-bar').on('appear', function(){
    //     var progressValue = $(this).data('progress');
    //     $(this).delay(500).animate({width: progressValue},1000)


    // });

    // // function progress(barID, value) {
    // //     $(barID).animate({'width': value});
    // // };


//         $('.progress-bar').appear();


// $('.progress-bar').on('appear', function(){
//     var progressValue = $(this).data('progress');
//     $(this).delay(500).animate({width: progressValue},1000)

//     })

//     $(document).ready(

//     )



// function progress(barID, value) {
//         $(barID).animate({'width': value}, 500);
//     }

//     $('#my-btn').click(function(){
//         progress('#bar1', '50%');
//         progress('#bar2', '60%');
//         progress('#bar3', '70%');
//         progress('#bar4', '40%');

//     });