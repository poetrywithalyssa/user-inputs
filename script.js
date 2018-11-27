document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

$(".chonkiest").on("click", function() {
	$(".chonkiest").show("https://pm1.narvii.com/6926/e99eaec16986161c6363b2d25f8e1bea85fa0aaar1-1396-785v2_hq.jpg");
	$(".chonkiest").text("YEP, OHLAWDHECOMIN")
});

$(".fine").on("click", function() {
	$(".fine").show("https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg");
	$(".fine").text("Nope, they be A fine boi")
});

$(".hefty").on("click", function () {
	$(".hefty").show("https://i1.wp.com/catoverdose.com/wp-content/uploads/2015/11/chartreux-large-cat.jpg?resize=560%2C399&ssl=1");
	$("hefty").text("Eh, just a HEFTYCHONK")
});

