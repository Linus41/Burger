// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  //changes devoured from false to true
  $(".change-devour").on("click", function () {
    

    var id = $(this).data("id");
    // var newDevour = $(this).data("newdevour");
    var newDevourState = {
      devoured: 1
    };
    location.reload();

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
       console.log("changed devour state")
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: 0, //false
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
