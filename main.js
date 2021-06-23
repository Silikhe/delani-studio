$(document).ready(function () {
  $("#img1").click(function () {
    $("#p1").toggle();
    $("#img1").toggle();
  });
  $("#p1").click(function () {
    $("#p1").toggle();
    $("#img1").toggle();
  });

  $("#img2").click(function () {
    $("#p2").toggle();
    $("#img2").toggle();
  });
  $("#p2").click(function () {
    $("#p2").toggle();
    $("#img2").toggle();
  });

  $("#img3").click(function () {
    $("#p3").toggle();
    $("#img3").toggle();
  });
  $("#p3").click(function () {
    $("#p3").toggle();
    $("#img3").toggle();
  });

  $("#div1").hover(
    function () {
      $(this).addClass("overlay");
      $(".hoover").show();
    },
    function () {
      $(".hoover").hide();
    }
  );

  $("#div2").hover(
    function () {
      $(this).addClass("overlay");
      $(".hoover1").show();
    },
    function () {
      $(".hoover1").hide();
    }
  );

  $("#div3").hover(
    function () {
      $(this).addClass("overlay");
      $(".hoover2").show();
    },
    function () {
      $(".hoover2").hide();
    }
  );

  $("#div4").hover(
    function () {
      $(this).addClass("overlay");
      $(".hoover3").show();
    },
    function () {
      $(".hoover3").hide();
    }
  );

  $("#div5").hover(
    function () {
      $(this).addClass("overlay");
      $(".hoover4").show();
    },
    function () {
      $(".hoover4").hide();
    }
  );

  $("#div6").hover(
    function () {
      $(this).addClass("overlay");
      $(".hoover5").show();
    },
    function () {
      $(".hoover5").hide();
    }
  );

  $("#div7").hover(
    function () {
      $(this).addClass("overlay");
      $(".hoover6").show();
    },
    function () {
      $(".hoover6").hide();
    }
  );

  $("#div8").hover(
    function () {
      $(this).addClass("overlay");
      $(".hoover7").show();
    },
    function () {
      $(".hoover7").hide();
    }
  );
});

// $("#div1").hover(function(){
//   $('.hoover').show();
// },function(){
//   $('.hoover').hide();
// });



const validate = () => {
  alert("Thanks for reaching Silas")
}