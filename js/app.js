$('.col p').hide();
$('.picture').hide();
$('.col ul').hide();


$('.main-content').on('click', 'h3', function(event) {
//show the spoiler text
    $(event.target).siblings().slideToggle();
});
