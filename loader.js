$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.slider').slider({fullWidth: true});
    $('.parallax').parallax();
    $('.carousel').carousel();
});

function toggleModal() {
    var instance = M.Modal.getInstance($("#modal3"));
    instance.open();
}