$(document).ready(function() {
  // user comment
  if(document.location.href.match(/\/r\/\w+\/comments\//i)) {
    $(".link .usertext .md, .usertext-body .md").css({
      'padding': '0px',
      'margin-top': '6px',
      'background-color': '#fff',
      'line-height': '1.6',
      'font-size': '14px',
      'border': 'none',
      '-moz-border-radius': 'none',
      '-webkit-border-radius': 'none',
      'border-radius': 'none',
    });

    $(".comment .child").css({
      'border-left': '1px dotted #ddf',
      'margin-left': '7px'
    });

    $(".tabmenu").remove();

    var insert_real_image = function(href) {
      var img_style = "margin: 10px 0 0 10px; max-width: 765px; height: auto";
      img_style += "-moz-box-shadow: 0 0 7px #999;-webkit-box-shadow: 0 0 7px #999; box-shadow: 0 0 7px #999"
      $("#siteTable .child").append("<img style='" + img_style + "' src='" + href + "'>");
    };

    // render real image
    if($("a.thumbnail").attr("href").match(/\.(?:gif|png|jpg|tif|bmp)$/i)) {
      insert_real_image($("a.thumbnail").attr("href"));
      $("a.thumbnail").remove();
    }
    else if($("a.thumbnail").attr("href").match(/imgur\.com\/\w+/i)) {
      insert_real_image($("a.thumbnail").attr("href") + ".jpg");
      $("a.thumbnail").remove();
    }

    $(".comment").each(function() {
      // delete negative comments
      if(parseInt($(this).find(".score.unvoted").text()) <= 0) {
        $(this).remove();
      }
      // delete deleted comments
      if($(this).find(".tagline em").text().match(/deleted/i)) {
        $(this).remove();
      }
    });
  }

  // header work
  $("#sr-header-area .flat-list.sr-bar.hover:first").remove();
  $("#sr-header-area .separator:first").remove();

  $("#header-bottom-left img").css({
    'margin-bottom': '-2px'
  });

  // header-right work
  $("#header-bottom-right").css({
    'background': 'none',
    'border': 'none',
    'margin-right': '5px',
    'padding': '0 1px 1px 0'
  });
  $("#header-bottom-right .pref-lang").css({'font-weight': 'normal'});
  $("#header-bottom-right .submit, #header-bottom-right .user, #header-bottom-right .user, #header-bottom-right .flat-list.hover, #header-bottom-right .logout").css({
    'margin-left': '12px',
    'color': '#777'
  });
  $("#header-bottom-right .nohavemail").css({
    'margin-left': '4px',
  });
  $("#header-bottom-right .separator").remove();

  // Sidebar work
  $(".side").css({
    'margin': '7px 5px 10px 10px',
    'border': 'none !important'
  });
  $(".side .spacer").css({
    'margin': '0 0 12px 0'
  });
  $(".side .spacer .morelink .nub").remove();
  $(".side .spacer .sidebox .spacer").remove();
  $(".side .spacer .linkinfo").parent().remove();
  $(".side .spacer .sidecontentbox").parent().remove();

  var random_button = '<div class="spacer"><div class="sidebox"><div class="morelink"><a href="http://www.reddit.com/r/random">Random Reddit</a></div></div></div>';
  $(random_button).insertAfter($(".side .spacer .sidebox.submit").parent());

  $(".side .spacer .morelink, #search input[type=text]").css({
    'height': '25px',
    '-moz-border-radius': '3px',
    '-webkit-border-radius': '3px',
    'border-radius': '3px'
  });
  $("#search input[type=text]").css({
    'border': '1px solid #ccc'
  });

  $(".side .spacer .morelink:hover a").css({
    'color': '#169'
  });

  $(".side .spacer .sidecontentbox").parent().remove();

  // login form
  $("#login_login-main").css({
    'margin': '18px 0 0',
    'padding': '5px 0 4px',
    'border': 'none',
    'border-top': '1px dotted #ddd',
    'border-bottom': '1px dotted #ddd'
  });
  $("#login_login-main input[name=user], #login_login-main input[type=password]").css({
    'height': '19px',
    'border': '1px solid #ccc',
    '-moz-border-radius': '3px',
    '-webkit-border-radius': '3px',
    'border-radius': '3px'
  });

  $("#login_login-main input[name=user]").attr("placeholder", "username");
  $("#login_login-main input[type=password]").attr("placeholder", "*********");
  $("#login_login-main button").addClass("morelink").css({
    'color': '#336699',
    'padding': '0 8px 3px',
    'height': '32px',
    'vertical-align': 'center',
    '-moz-border-radius': '3px',
    '-webkit-border-radius': '3px',
    'border-radius': '3px'
  });
  $("#login_login-main .recover-password").remove();

  $("label[for='rem-login-main']").css({
    'color': '#666'
  });

  $(".titlebox h1").css({
    'margin': '0 0 1px'
  });

  $(".titlebox .usertext-body .md").css({
    'font-size': '12px',
    'margin-top': '0px'
  });

  $(".titlebox .usertext-body .md p").css({
    'margin': '0 0 7px'
  });

  $(".fancy-toggle-button .active, .fancy-toggle-button .remove").css({
    'padding': '2px 8px',
  });
  $(".fancy-toggle-button").siblings(".number, .word").remove();


  // tab work
  $(".tabmenu li:last").remove();
  $(".tabmenu li:last").remove();

  $(".tabmenu li").css({
    'font-size': '14px',
    'margin': '0 3px 0 0'
  });

  $(".tabmenu li a").css({
    'padding': '4px 5px 2px 5px',
    'vertical-align': '2px',
    'background': 'inherit'
  });

  $(".tabmenu li.selected a").css({
    'padding': '4px 10px 2px 10px',
    'background-color': '#fff',
    '-moz-border-radius-topleft': '3px',
    '-moz-border-radius-topright': '3px',
    '-webkit-border-top-left-radius': '3px',
    '-webkit-border-top-right-radius': '3px',
    'border-top-left-radius': '3px',
    'border-top-right-radius': '3px'
  });

  // listing work
  $(".link .rank").remove();

  $(".midcol").css({
    'margin': '0 5px'
  });

  $(".thumbnail").css({
    'margin': '0 10px 0 0'
  });

  $("#siteTable .link").css({
    'margin': '7px 0 18px 0'
  });
  $("#siteTable .link .title").css({
    'margin-bottom': '2px'
  });

  $("#siteTable .link .title a").attr("target", "_blank");
  $("#siteTable .link .tagline").css({
    'margin-bottom': '1px'
  });

  $("#siteTable .link a.thumbnail").each(function() {
    var parent = $(this).parent();
    $(parent).children(".child").append("<img src='" + $(this).attr("href") + "'/>");
    $(parent).children(".child").css({
      'margin': '10px 0 0 10px'
    });
    $(parent).find(".child img").css({
      'max-width': '765px'
    });
    $(this).remove();
  });

  // textarea
  $(".usertext-edit").css('width', '600px');
  $("textarea").css({
    '-moz-border-radius': '3px',
    '-webkit-border-radius': '3px',
    'border-radius': '3px'
  });
  $("textarea[name=text]").css({
    'width': '600px',
    'height': '220px',
    'border': '1px solid #aaa',
  });
  $(".usertext-edit button.save, button.btn").addClass('morelink').css({
    'color': '#336699',
    'padding': '0 8px 3px',
    'height': '32px',
    'vertical-align': 'center',
    '-moz-border-radius': '3px',
    '-webkit-border-radius': '3px',
    'border-radius': '3px'
  });

  $(".nextprev").css({
    'font-size': '35px',
    'margin': '10px'
  });

  // submit page
  if(document.location.href.match(/\/r\/\w+\/submit/i)) {
    $("h1").css({
      'border-top': 'none',
      'font-size': '20px',
      'margin': '8px 0 3px',
      'padding-bottom': '3px',
      'border-bottom': '1px dotted #ccc'
    });
    $(".content").css({
      'padding-left': '10px'
    });
    $("#newlink").css({
      'margin': '0',
      'padding-left': '0'
    });
    $(".formtabs-content").css({
      'border-top': 'none'
    });
    $("#link-desc, .roundfield, input[name=url], input[name=sr]").css({
      '-moz-border-radius': '3px',
      '-webkit-border-radius': '3px',
      'border-radius': '3px'
    });
  }

  // footer work
  $(".footer-parent").css({
    'padding': '0px',
    'margin-top': '12px',
    'border-top': '1px solid #f0f0f0'
  });

  var new_footer = '<ul>';
  new_footer += '<li><a href="http://store.reddit.com/index.html">reddit store</a></li>';
  new_footer += '<li><a href="http://www.reddit.com/help/gold/">reddit gold</a></li>';
  new_footer += '<li><a href="http://www.reddit.com/promoted/">self serve ads</a></li>';
  new_footer += '<li><a href="http://www.reddit.com/ad_inq/">inquire ads</a></li>';
  new_footer += '<li><a href="http://www.reddit.com/socialite/">socialite</a></li>';
  new_footer += '<li><a href="http://www.reddit.com/code/">reddit code</a></li>';
  new_footer += '<li><a href="http://www.reddit.com/password">recover password</a></li>';
  new_footer += '</ul>';

  $(".footer-parent .footer").removeClass('rounded');
  $(".footer-parent .footer").css({
    'border': 'none'
  });
  $(".footer-parent .footer .col").remove();
  $(".footer-parent .footer").prepend(new_footer);

  $(".footer-parent .footer ul").css({
    'margin-bottom': '10px'
  });
  $(".footer-parent .footer ul li").css({
    'display': 'inline',
    'margin-right': '18px',
    'font-size': '14px'
  });
});
