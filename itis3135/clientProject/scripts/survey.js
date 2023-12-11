$(document).ready(function() {
    $("#html-form").submit(function(event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var number = $("#number").val();
        var dropdown = $("#dropdown").val();
        var rangeValue = $("#rangesliderValue output").text();
        var checkboxes = $("input[name='checkbox']:checked").map(function(){
            return this.value;
        }).get();
        var comments = $("textarea").val();
        var copiedContent = `
            <div class="copied-content">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${number}</p>
                <p><strong>Experience and Knowledge:</strong> ${dropdown}</p>
                <p><strong>Recommendation Score:</strong> ${rangeValue}</p>
                <p><strong>Improvements:</strong> ${checkboxes.join(', ')}</p>
                <p><strong>Comments:</strong> ${comments}</p>
            </div>
        `;
        $(".mainForm").append(copiedContent);
    });
    $("#html-form").on("reset", function() {
        $(".copied-content").remove();
    });
});