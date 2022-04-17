var ind = -1
$('header .nav>ul>li').mouseenter(function () {
    ind = $(this).index()
    if (ind >= 1) $('header .down').eq(ind - 1).stop().slideDown(300)
})
$('header .nav>ul>li').mouseleave(function () {
    ind = $(this).index()
    if (ind >= 1) $('header .down').eq(ind - 1).stop().slideUp(300)
})
$('.down').mouseenter(function () {
    $(this).stop().show()
})
$('.down').mouseleave(function () {
    $(this).stop().slideUp(300)
})

$('body .top .nav>ul>li').mouseenter(function () {
    ind = $(this).index()
    if (ind >= 2) $('body .top .down').eq(ind - 2).stop().slideDown(300)
})