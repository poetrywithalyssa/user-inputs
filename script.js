$(".chonkiest").on("click", function() {
	$(".chonkiest").remove()
	$(".fine").remove()
	$(".hefty").remove()
	$(".result-1").append("<img class='responsive-img' src='https://pm1.narvii.com/6926/e99eaec16986161c6363b2d25f8e1bea85fa0aaar1-1396-785v2_hq.jpg'>")
	$(".result-1").append("<h1>YEP, OHLAWDHECOMIN</h1>");
});

$(".fine").on("click", function() {
	$(".chonkiest").remove()
	$(".fine").remove()
	$(".hefty").remove()
	$(".result-2").append("<img class='responsive-img' src='https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg'>")
	$(".result-2").append("<h1>Nope, they be A fine boi</h1>");
});

$(".hefty").on("click", function () {
	$(".chonkiest").remove()
	$(".fine").remove()
	$(".hefty").remove()
	$(".result-3").append("<img class='responsive-img' src='https://www.fmdos.cl/wp-content/uploads/2018/07/gato-1.jpg'>")
	$(".result-3").append("<h1>Eh, just a HEFTYCHONK</h1>");
});
