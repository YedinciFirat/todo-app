window.jQuery = $= require ("../node_modules/jquery/dist/jquery.js");
var bootstrap = require ('../node_modules/bootstrap/bootstrap.js');


	$('a#addItem').on("click",function () {
    if ($('input').val() !== '') {
        var input_value = $('#gettext').val();
        $('ul#todolist').append('<li class="list-group-item">' + input_value + '<a href="" class="delete" title="Delete item">Delete</a></li>');

    };
    $('input').val('');
    return false;
});

$(document).on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});
