!function($){var n=$(document);$(".main-nav > li > a ").click(function(n){n.preventDefault(),$(".main-nav > li").removeClass("active"),$(this).parent().addClass("active")}),$(".accordion").accordion(),n.on("key-2-open",function(n,e){console.log("This panel opened: "+e)}),$(".tabs, .pillbox").tabs(),$("#spinner-test").submit(function(n){n.preventDefault(),$.spinner({text:$("#test-spinner-text").val(),action:"show"}),setTimeout(function(){$.spinner({action:"hide"})},2e3)}),n.on("do-thing-1-open",function(n){console.log("I'm doing a thing",n)}),n.on("click","#shake-button",function(){$("#shake-target").addClass("an-shake"),setTimeout(function(){$("#shake-target").removeClass("an-shake")},2500)}),n.on("click","#fade-in-button",function(){$("#fade-in-target").addClass("an-fade-in").removeClass("disappear an-fade-out")}),n.on("click","#fade-out-button",function(){$("#fade-in-target").removeClass("an-fade-in").addClass("an-fade-out")})}(jQuery);