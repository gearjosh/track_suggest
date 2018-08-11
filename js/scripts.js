$(document).ready(function() {
  $("button#big-button").click(function(event) {
    event.preventDefault();
    $(".winner-block").hide();
    $(".tiebreaker-block").hide();

    var ruby = 0
    var react = 0
    var cSharp = 0

    var question1 = $("#qCompanySize").val();
    var question2 = $("#qFrontOrBack").val();
    var question3 = $("#qEasyReliable").val();
    var question4 = $("#qHtmlJavascript").val();
    var question5 = $("#qUserBusiness").val();
    var question6 = $("#qWhichCompany").val();

    if (question1 === "Big Company") {
      cSharp ++;
    } else if (question1 === "Small Company") {
      ruby ++;
    } else {
      react ++;
    }
    console.log(ruby, react, cSharp)

    if (question2 === "Frontend") {
      react ++;
    } else {
      ruby ++;
      cSharp ++;
    }
    console.log(ruby, react, cSharp);

    if (question3 === "Ease of Use") {
      react ++;
      ruby ++;
    } else {
      cSharp ++;
    }
    console.log(ruby, react, cSharp);

    if (question4 === "HTML") {
      cSharp ++;
      ruby ++;
    } else {
      react ++;
    }
    console.log(ruby, react, cSharp);

    if (question5 === "Individual Users") {
      react ++;
    } else if (question5 === "Businesses") {
      cSharp ++;
    } else {
      ruby ++;
    }
    console.log(ruby, react, cSharp);

    if (question6 === "Miscrosoft") {
      cSharp ++;
    } else if (question6 === "Netflix") {
      react ++;
    } else if (question6 === "Airbnb") {
      ruby ++;
    } else if (question6 === "Dropbox") {
      react ++;
    } else if (question6 === "Blizzard") {
      cSharp ++;
    } else if (question6 === "Soundcloud") {
      ruby ++;
    } else if (question6 === "Instagram") {
      react ++;
    } else {
      ruby ++;
    }
    console.log("ruby", "react", "cSharp");
    console.log(ruby, react, cSharp);

    if (ruby === react) {
      $(".tiebreaker-block").show();
      $("select#qTiebreak").children("option#tCSharp").remove();
      $("button#tie-button").click(function(event) {
        event.preventDefault();
        var question7 = $("#qTiebreak").val();
        if (question7 === "Slow Runtime Speed") {
          ruby += 0.5;
        } else {
          react += 0.5;
        }
      });
    } if (cSharp === react) {
      $(".tiebreaker-block").show();
      $("select#qTiebreak").children("option#tRuby").remove();
      $("button#tie-button").click(function(event) {
        event.preventDefault();
        var question7 = $("#qTiebreak").val();
        if (question7 === "Hard to Learn") {
          cSharp += 0.5;
        } else {
          react += 0.5;
        }
      });
    } if (ruby === cSharp) {
      $(".tiebreaker-block").show();
      $("select#qTiebreak").children("option#tReact").remove();
      $("button#tie-button").click(function(event) {
        event.preventDefault();
        var question7 = $("#qTiebreak").val();
        if (question7 === "Slow Runtime Speed") {
          ruby += 0.5;
        } else {
          cSharp += 0.5;
        }
      });
    }

    if ($(".tiebreaker-block").is(':visible')) {
      $("button#tie-button").click(function(event) {
        event.preventDefault();
        if (ruby > cSharp && ruby > react) {
          $("#winner-pic").attr("src", "img/ruby.png");
          $("#winner-link").attr("href", "https://www.ruby-lang.org/en/")
          $("#winner-name").html("Ruby");
          $("#winner-button").html("Ruby");
          $(".winner-block").show();
          $(".tiebreaker-block").hide();
        } else if (react >cSharp && react > ruby) {
          $("#winner-pic").attr("src", "img/react.png");
          $("#winner-link").attr("href", "https://reactjs.org/")
          $("#winner-name").html("React");
          $("#winner-button").html("React");
          $(".winner-block").show();
          $(".tiebreaker-block").hide();
        } else {
          $("#winner-pic").attr("src", "img/csharp.jpg");
          $("#winner-link").attr("href", "https://docs.microsoft.com/en-us/dotnet/csharp/")
          $("#winner-name").html("C#");
          $("#winner-button").html("C#");
          $(".winner-block").show();
          $(".tiebreaker-block").hide();
        }
      });
    } else {

      if (ruby > cSharp && ruby > react) {
        $("#winner-pic").attr("src", "img/ruby.png");
        $("#winner-link").attr("href", "https://www.ruby-lang.org/en/")
        $("#winner-name").html("Ruby");
        $("#winner-button").html("Ruby");
        $(".winner-block").show();
      } else if (react >cSharp && react > ruby) {
        $("#winner-pic").attr("src", "img/react.png");
        $("#winner-link").attr("href", "https://reactjs.org/")
        $("#winner-name").html("React");
        $("#winner-button").html("React");
        $(".winner-block").show();
      } else {
        $("#winner-pic").attr("src", "img/csharp.jpg");
        $("#winner-link").attr("href", "https://docs.microsoft.com/en-us/dotnet/csharp/")
        $("#winner-name").html("C#");
        $("#winner-button").html("C#");
        $(".winner-block").show();
      }
    }
  });
});
