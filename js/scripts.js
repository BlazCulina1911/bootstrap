$(document).ready(() => {
    $('#mycarousel').carousel({ interval: 5000 })

    $('#carouselButton').click(() => {
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
    $('#loginButton').click(() => {
        $('#loginModal').modal();
    })
    $('#closeModal').click(() => {
        $('#loginModal').modal('toggle');
    })
    $('#closeLModal').click(() => {
        $('#loginModal').modal();
    })
    $('#cancelLModal').click(() => {
        $('#loginModal').modal('toggle');
    })

    $('#reservationButton').click(() => {
        $('#reservationModal').modal();
    })
    $('#reserveRModal').click(() => {
        $('#reservationModal').modal('toggle');
        console.log("This doesn't do anything! :(");
    })
    $('#closeRModal').click(() => {
        $('#reservationModal').modal('toggle');
    })
    $('#cancelRModal').click(() => {
        $('#reservationModal').modal('toggle');
    })

})