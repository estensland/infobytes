$(function(){$(window).scroll(function(){var t=$("#marker"),s=t.offset().top-$(this).scrollTop();0>s?$("#toc-bar").slideDown(200):($("#toc-bar").slideUp(200),$(".chapter-list").slideUp(200),$("#toc-link").data("status","hidden"))}),$("#toc-link").on("click",function(t){t.preventDefault(),"hidden"===$(this).data("status")?($(this).data("status","shown"),$(".chapter-list").slideDown(200)):"shown"===$(this).data("status")&&$(this).data("status","hidden")}),$(".sidebar-link").on("click",function(){$("#toc-link").data("status","hidden"),$(".chapter-list").slideUp(200)}),$("#close-toc").on("click",function(t){t.preventDefault(),$("#toc-link").data("status","hidden"),$(".chapter-list").slideUp(200)})});