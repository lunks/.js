
$(function() {
  function hide_sparks() {
    $(".a-b-Gf-la-A").hide()
    $("a[href='/welcome'], a[href='/u/0/welcome']").hide().next().hide()
  }

  $("body").bind("DOMNodeInserted", function() {
    hide_sparks();
    $("span.a-b-f-i-aGdrWb:contains('Public')").parents("div.a-f-i").addClass("tek-public")
    $("span.a-b-f-i-aGdrWb:contains('Limited')").parents("div.a-f-i").addClass("tek-limited")
  })
  hide_sparks();

  $("body").append("<style> .tek-public { background: #f6fff6; } .tek-limited { background: #fff6f6; } </style>")
})
