// JavaScript for feedback form
$(document).ready(function () {
    // runs when user clicks "yes" button
    $('.feedback-yes').click(function () {
        // fade out yes/no buttons, fade in thank you message
        $('.feedback-question').fadeOut(function () {
            $('.feedback-reason.yes-thanks').fadeIn();
        });
        // send user response to Google Analytics
        ga('send', 'event', 'Feedback - Yes', 'N/A', location.href);
        // N/A is the default reason the user chose "yes"; there are no user-selectable inputs
    });

    // runs when user clicks "no" button
    $('.feedback-no').click(function () {
        // fade out yes/no buttons, fade in feedback form
        $('.feedback-question').fadeOut(function () {
            $('.feedback-reason.no').fadeIn();
        });
    });

    // collects "no" feedback and response reason
    $('#feedback-submit').on('click', function () {
        // get selected checkboxes, add to array object; get the array values, join them
        var selectedCheckboxes = $('.optionNo:checked').map(
            function () {
                return this.value;
            }).get();
        $.each(selectedCheckboxes, function (index, value) {
            ga('send', 'event', 'Feedback - No', value, location.href);
        });

        // get the value of the textarea and set as a variable
        var textExplanation = $('#reasonForChoice').val();
        // send user's text explanation to Google Analytics
        ga('send', 'event', 'Feedback - Response', textExplanation, location.href);
        // disable the submit button
        $('#feedback-submit').attr('disabled', true);
        // fade in thank you message and present option to email the authors
        $('.feedback-reason.no-thanks').fadeIn();
    });

});