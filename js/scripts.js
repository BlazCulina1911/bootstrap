$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 5000 })

    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');

            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#mycarousel').carousel('cycle');

            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }

    })
    $('#loginButton').click(function() {
        $('#loginModal').modal();
    })
    $('#closeModal').click(function() {
        $('#loginModal').modal('toggle');
    })
    $('#closeLModal').click(function() {
        $('#loginModal').modal();
    })
    $('#cancelLModal').click(function() {
        $('#loginModal').modal('toggle');
    })

    $('#reservationButton').click(function() {
        $('#reservationModal').modal();
    })
    $('#reserveRModal').click(function() {
        $('#reservationModal').modal('toggle');
        console.log("This doesn't do anything! :(");
    })
    $('#closeRModal').click(function() {
        $('#reservationModal').modal('toggle');
    })
    $('#cancelRModal').click(function() {
        $('#reservationModal').modal('toggle');
    })
})