// JavaScript Document

var content= [["The Uncanny Celebrity: Exploring the Implications of Virtual Influencers on Instagram", "This project, created for my Online Communication course, explores the, , , ", "content/digital_influencers/img.jpeg", "pages/influencer.html"]] ;
var portfolio = document.getElementById("portfolioGrid");

function populatePage(sample){
	for(var i=0; i<sample.length; i++){
		portfolio.innerHTML += '<div class="col-lg-6"><a class="portfolio-item" href="'+ sample[i][3]+'"><span class="caption"><span class="caption-content"><p class="mb-0 centered">' + sample[i][0] +'</p> </span></span><img class="img-fluid" src="'+ sample[i][2]+ '" alt=""></a></div>';
	}
}

window.onload = populatePage(content
						);