$(function() {
    var $scobo = $('#scobo-form');
    $('input[type="radio"]').click(function() {
        if($(this).val() == 'other') {
            $('.other-location').removeClass('hidden').attr('name', 'location');
            $('#location input[type="radio"]').attr('name', '');
        } else {
            $('.other-location').addClass('hidden').attr('name', ''); 
            $('#location input[type="radio"]').attr('name', 'location');
            $(this).prop('checked', true);
        }
    });
    
    $('.datepicker').datepicker({
        format : 'yyyy-mm-dd'
    });
    
    $('#btnBuy').click(function() {
        $('input[name="type"]').val('buy');
        
    });

    $('#btnSell').click(function() {
        $('input[name="type"]').val('sell');
    });

    $('textarea[name="description"]').keyup(function() {
        if( $(this).val() != '') {
            $('.add-ons').removeClass('hidden');
        } else {
            $('.add-ons').addClass('hidden');
        }
    });

    $(document).ajaxStart(function() {
        $('#loading').removeClass('hidden');
    });

    $(document).ajaxStop(function() {
        $('#loading').addClass('hidden');
    });
    
    jQuery.ias({
        container : '.listing',
        item: '.post',
        pagination: '.navigation',
        next: '.next-post a',
        loader: '<img src="/scobo/assets/img/loader.gif"/>',
        triggerPageThreshold : 4,
        noneleft : '<div style="color:red">Habis yah</div>'
    }); 
    
    $('#add-notification').click(function () {

        $('.notificationNew').animate({'height':'240px'});
        return false;
    });
    
});