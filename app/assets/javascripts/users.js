$(function(){
  $(".view-user-recipes").on("click", function(event){
    // assign i to data-id, equal to @user.id
    let i = $(".view-user-recipes").attr("data-id");
    $.get("/users/" + i + ".json", function(data){
      // pass data to getUserRecipes
      getUserRecipes(data)
    })
    event.preventDefault();
  })
  $(".view-user-reviews").on("click", function(event){
    let i = $(".view-user-reviews").attr("data-id");
    $.get("/users/" + i + ".json", function(data){
      getUserReviews(data)
    })
    event.preventDefault();
  })
})

function getUserRecipes(data){
  let recipes = data["recipes"];
  // set div in DOM to variable
  let recipesDiv = $(".usersRecipes");
  // empty div before appending
  recipesDiv.empty();
  // set JSON to variables
  let userId = data["id"];
  let email = data["email"]
  $.each(recipes, function(i, recipe){
    // append html recipes info
    recipesDiv.append(
      `<div>
        <h4>${recipe.name}</h4>
      </div>`
    )
  })
}

function getUserReviews(data){
  let reviews = data["reviews"];
  // set div in DOM to variable
  let reviewsDiv = $(".usersReviews");
  // empty div before appending
  reviewsDiv.empty();
  // set JSON to variables
  let userId = data["id"];
  let email = data["email"]
  $.each(reviews, function(i, review){
    // append html recipes info
    reviewsDiv.append(
      `<div>
        <p>
        <a href='/recipes/${review.recipe_id}'>
        Review: ${review.description} Difficulty: ${review.difficulty}
        </a>
        </p>
      </div>`
    )
  })
}
