$(document).ready(function () {
    
    // cascade slider
    if ($('#chart-slider').length > 0) {
        $('#chart-slider').divas();
        $('.divas-wing').mouseover(function(){
           $('.divas-hover-l').show();
           $('.divas-hover-r').show();
        });
        $('.divas-wing').mouseleave(function(){
           $('.divas-hover-l').hide();
           $('.divas-hover-r').hide();
        });
    }

    // on-off slider
    if ($('.toggle').length > 0) {
        $('.toggle').toggles({type: 'select'});
    }

    if ($('#slider').length > 0) {
        $('#slider').slider({
            range: "min",
            animate: true,
            value: 1,
            min: 0,
            max: 10000,
            step: 10,
            slide: function (event, ui) {
                update(1, ui.value);
            }
        });
    }

    // added, set initial value.
    $('#amount').val(0);
    $('#amount-label').text(0);

    update();

    // changed. now with parameter
    function update(slider, val) {
        // changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider == 1 ? val : $('#amount').val();
        /* commented
        $amount = $('#slider').slider('value');
        $duration = $('#slider2').slider('value');
        */
        $('#amount').val($amount);
        $('#amount-label').text($amount);

        $('#slider a').html('<label>' + $amount + '</label><div class="ui-slider-label-inner"></div>');
    }

});