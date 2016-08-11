$( window ).load(function() {
        $( ".wondergirls" ).hide();    
            $( "#song1" ).click(function() {
                $( ".wondergirls" ).slideToggle( "slow" ); 
            });
        });

$( window ).load(function() {
        $( ".phoenix" ).hide();    
            $( "#song2" ).click(function() {
                $( ".phoenix" ).slideToggle( "slow" ); 
            });
        });

$( window ).load(function() {
        $( ".lou" ).hide();    
            $( "#song3" ).click(function() {
                $( ".lou" ).slideToggle( "slow" ); 
            });
        });

$( window ).load(function() {
        $( ".talking" ).hide();    
            $( "#song4" ).click(function() {
                $( ".talking" ).slideToggle( "slow" ); 
            });
        });

$( window ).load(function() {
     var colorOrig=$("#song1").css('background');
    $("#song1").hover(
    function() {
        //mouse over
        $(this).css('background', '#664766')
    }, function() {
        //mouse out
        $(this).css('background', colorOrig)
    });
});

$( window ).load(function() {
     var colorOrig=$("#song2").css('background');
    $("#song2").hover(
    function() {
        //mouse over
        $(this).css('background', '#664766')
    }, function() {
        //mouse out
        $(this).css('background', colorOrig)
    });
});

$( window ).load(function() {
     var colorOrig=$("#song3").css('background');
    $("#song3").hover(
    function() {
        //mouse over
        $(this).css('background', '#664766')
    }, function() {
        //mouse out
        $(this).css('background', colorOrig)
    });
});

$( window ).load(function() {
     var colorOrig=$("#song4").css('background');
    $("#song4").hover(
    function() {
        //mouse over
        $(this).css('background', '#664766')
    }, function() {
        //mouse out
        $(this).css('background', colorOrig)
    });
});

