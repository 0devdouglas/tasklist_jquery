$('form').on("submit", (e) => {
    e.preventDefault()
    const taskName = $('#task-name').val();
    const newTask = $('<li></li>').text(taskName);

    $(newTask).appendTo('ul')

    $("#task-name").val("")

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('task')
    })

})




