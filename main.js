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
});

// $(document).ready(function () {
//   $("#p1").click(function () {
//     $("#p1").toggle();
//     $("#img1").toggle();
//   });
// });
