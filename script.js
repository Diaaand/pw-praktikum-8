function showMenu() {
    $.getJSON("data.json", function (data) {
      let posts = data.posts;
      $.each(posts, function (_i, data) {
        $("#card").append(
          '<div class="col-md-4 d-flex justify-content-evenly"><div class="card mt-2 mb-4" style="width: 20rem"><img src="img/' +
          data.image +
          '" class="card-img-top" /><div class="card-body"><h5 class="card-title">' +
          data.title +
          '</h5><p class="card-text" style="height: 110px;">' +
          data.body +
          '<div class="d-flex flex-row-reverse"></h5><p class="card-text">' +
          data.est +
          '</div></p><h5 class="card-title">' +
          data.price +
          'Rupie</p><a href="#" class="btn btn-primary">Order</a></div></div></div>'
        );
      });
    });
  }
  
  var btn = document.getElementById("navbar");
  var btna = document.getElementsByClassName("navbar");
  for (var i = 0; i < btna.length; i++) {
    btna[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += " active";
    });
  }

  filterSelection(null);
  function filterSelection(key) {
    $.getJSON('data.json', function(data) {
      let posts = data.posts;

      if (key) {
        posts = posts.filter(function (value) {
          return value.course === key;
        });
      }

      $('#card')
      .empty()
      $.each(posts, function (_i, data) {
        $("#card").append(
          '<div class="col-md-4 d-flex justify-content-evenly"><div class="card mt-2 mb-4" style="width: 20rem"><img src="img/' +
          data.image +
          '" class="card-img-top" /><div class="card-body"><h5 class="card-title">' +
          data.title +
          '</h5><p class="card-text" style="height: 110px;">' +
          data.body +
          '<div class="d-flex flex-row-reverse"></h5><p class="card-text">' +
          data.est +
          '</div></p><h5 class="card-title">' +
          data.price +
          '</p> Rupie <a href="#" class="btn btn-primary">Order</a></div></div></div>'
        );
    })
  });
}
  
