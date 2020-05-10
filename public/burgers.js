
$(function () {
  
  $(".change-devour").on("click", function () {
    var id = $(this).data("id");
    var newDevourState = {
      devoured: 1
    };
    location.reload();

    
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
       console.log("changed devour state")
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
