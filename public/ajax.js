// $.get('/todos', function(data) {
//     // debugger
//     console.log(data)
// })

// $('form').submit(function(e) {
//     e.preventDefault();
//     var formData = $(this).serialize();
//     // .serialize() pull all input values from the form to string
//     $.post('/todos', formData,function(data) {
//         console.log(data);
//     })
// })
// $('form').submit(function(e) {
//     e.preventDefault();
//     var formData = $(this).serialize();
//     // .serialize() pull all input values from the form to string
//     var formAction = $(this).attr('action');
//     $.ajax({
//         url: formAction,
//         data: formData,
//         type: 'PUT',
//         success: function(data) {
//             debugger
//         }
//     })
// })

$('form').submit(function(e) {
    e.preventDefault();
    // .serialize() pull all input values from the form to string
    var formAction = $(this).attr('action');
    $.ajax({
        url: formAction,
        type: 'DELETE',
        success: function(data) {
            debugger
        }
    })
})