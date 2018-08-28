$('.col p').hide();
$('.picture').hide();
$('.col ul').hide();


$('.main-content').on('click', 'h3', function(event) {
//show the spoiler text
    $(event.target).siblings().slideToggle();
// TODO: FiX THIS CODE SO THAT THE SELECTED COLUMN BECOMES THE LAST CHILD.
    // $(event.target).insertAfter(event.parent().last());
});

$("h3").hover(function(){
    $(this).css("color", "gold");
    }, function(){
    $(this).css("color", "inherit");
});
