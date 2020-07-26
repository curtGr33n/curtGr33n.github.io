/* launches all functions inside when the webpage is loaded */
$(document).ready(function() {
	//Pulls data from local storage if it exists
	var slqData = localStorage.getItem("slqData");
	/*
	If it exists speed up the loading time.
	if it doesnt increase loading time and play intro video.
	*/
	if(slqData) {
		$("body").addClass("completed");
		setTimeout(function() {
			$("body").addClass("loaded");
		}, 	950);
	} else{
		setTimeout(function() {
			$("body").addClass("loaded");
			var myText = 'Hello and welcome to the site My name is Bob and you must be my new salesman! Well we are pretty relaxed round here so how about you have a look around and when you are ready simply click yes to start selling. Have fun!';
			var myWords = myText.split(" ").reverse();

			var ntrvl = setInterval(function() {
				addNextWord();
			}, 300);
			/*
			Loops through each word and adds them to the intro text 
			on the webpage.
			*/
			function addNextWord() {
				var nextWord = myWords.pop();
				if(nextWord != undefined) {
					var textNow = $("#introText").text() + " " + nextWord;
					$("#introText").text(textNow);
					}
				if(nextWord == "fun!"){
					setTimeout(function() {
						$("body").addClass("completed");
					}, 1500);
				}
			}
			//Closes the intro by adding a completed class to it.
			$('body').click(function(){	
				$("body").addClass("completed");
			});
		}, 	4000);
	}
	$('#yes,#no').hide();
	//Animates the agent and his speech bubble into view.
	setTimeout(function() {
		$('#agent').animate({bottom: '0px'}, 1000,function(){
			});
		setTimeout(function() {
		$('#bubble').animate({width: '360px'}, 1000,function(){
				$('#yes').fadeIn(500);
				$('#no').fadeIn(500);
				});
		}, 1000);
	}, 1000);
	//Hides all the layers of the site that shouldnt be seen on the home page
	$('#out,#popup,#name,#attributes,#markerScreen,#wwl,#pick,#grade,#imageClick')
			.hide();
	//The points the user scored in a round.
	var activePoints = 0
	//The arrays the clients wants will be pulled from.
	var attributeOne = ["A large Estate","Close to Railway","Close to River"];
	var attributeTwo = ["On the Coast","The city life",
			"lots of land"];
	var attributeThree = [];
	//The clients.
	var people = ["images/human2.png","images/human3.png","images/human4.png"];
	//Randomly selects a client.
	var human = people[Math.floor(Math.random()*people.length)];
	//Randomly picks wants for the client and sets them in their speech bubble.
	var attributeOneClient = attributeOne[Math.floor(Math.random()
			*attributeOne.length)];
	$('#att1').text(attributeOneClient);
	var attributeTwoClient = attributeTwo[Math.floor(Math.random()
			*attributeTwo.length)];
	$('#att2').text(attributeTwoClient);
	var attributeThreeClient = attributeThree[Math.floor(Math.random()
			*attributeThree.length)];
	$('#att3').text("Set in " + attributeThreeClient);
	
	/* Shows the how to play popup with the video on click */
	$('#htp').click(function(){
		$('#base').attr('src',"images/base1.png");
		 $("#popup").show();
		 $("video").show();
		 $("#rewatch").show();
		 $("#aboutUs").hide();
		 $("#contactUs").hide();
		 $('form').hide(); 
	});
	
	/* Shows the about us popup on click */
	$('#au').click(function(){
		$('#base').attr('src',"images/base2.png");
		$("#aboutUs").show();
	    $("#popup").show();
		$("video").hide();
		$("#rewatch").hide();
		$("#contactUs").hide();
		$('form').hide()
	});

	/* Shows the contact us popup on click */
	$('#cu').click(function(){
		$('#base').attr('src',"images/base3.png");
		$("#popup").show();
	    $("video").hide();
		$("#rewatch").hide();
		$("#aboutUs").hide();
		$("#contactUs").show();
		$('form').show()
	});
	
	/* Sets the close button so it closes all popups and resets the stars */
	$('.close').click(function(){
		$("#popup").fadeOut(200);
		$('#markerScreen').fadeOut(200);
		$('#markerImageLarge').fadeOut(200);
		$('#star1').attr('src',"images/star.png");
		$('#star2').attr('src',"images/star.png");
		$('#star3').attr('src',"images/star.png");
		$('#imageClick').fadeOut(200);
	});
	
	/* Restarts the intro video taking over the webpage */
	$('#rewatch').click(function(){
		$("body").addClass("again");
		$("#introText").text("");
		$("#intro").show()
		setTimeout(function() {
			var myText = 'Hello and welcome to the site My name is Bob and you must be my new salesman! \n Well we are pretty relaxed round here so how about you have a look around and when you are ready simply click yes to start selling. Have fun!';
			var myWords = myText.split(" ").reverse();
			var ntrvl = setInterval(function() {
				addNextWord();
			}, 300);
			/* Function that checks and then adds the next word to the introText */
			function addNextWord() {
				var nextWord = myWords.pop();
				if(nextWord != undefined) {
					var textNow = $("#introText").text() + " " + nextWord;
					$("#introText").text(textNow);
				}
				if(nextWord == "fun!"){
					$('#intro').fadeOut(700);
				}
			}
		}, 	100); // 2 second delay
	});
	
	/* Creates the menu animation of it sliding out of view on click */
	$('#in').click(function(){
		$('#menu').animate({right: '-22.5%'}, 1000,function(){
			});
		setTimeout(function(){
			$('#out').show();
			$('#menuImage').attr('src',"images/menuMainTwo.png");
		}, 995);
		$('#in').hide();
	});

	/* Creates the menu animation of it sliding into view on click */
	$('#out').click(function(){
		$('#menu').animate({right: '0px'}, 1000,function(){
		});
		$('#menu').show();
		setTimeout(function(){
			$('#in').show();
			$('#menuImage').attr('src',"images/menuMain.png");
		}, 995);
		$('#out').hide();
	});
	
	/* 
	When clicked the yes button takes the agent away and brings forward a client 
	by animating the agent off the screen and animating the client on, as well as their 
	speech bubble.
	*/
	$('#yes').click(function(){
		$('#pointHolder').animate({left: '0%'}, 1000,function(){
			});
		$('#points').animate({left: '1.5%'}, 1000,function(){
			});
		setTimeout(function(){
			$('#pick').fadeIn(100);
		}, 3000);
		//resets the stars incase the user clicked yes before closing their previous round.
		$('#star1').attr('src',"images/star.png");
		$('#star2').attr('src',"images/star.png");
		$('#star3').attr('src',"images/star.png");
		$('#agent').animate({bottom: '-650px'}, 1000,function(){
			});
		$('#bubble').hide();
		$('#bubble').animate({width: '0px'}, 1000,function(){
				});
		$('#yes').hide();
		$('#no').hide();
		setTimeout(function(){
			//Checks what random client was picked and changes the name accordingly.
			var human = people[Math.floor(Math.random()*people.length)];
			$('#agent').attr('src',human);
			if(human == "images/human2.png"){
				$('#name').text("Sonia and Noel");
				$('#agent').width('490px');
			} else if(human == "images/human3.png"){
				$('#name').text("Erin and Boris");
				$('#agent').width('460px');
			} else {
				$('#name').text("Ann and ricky");
				$('#agent').width('450px');
			}
			$('#agent').animate({bottom: '0px'}, 1000,function(){
			});
			setTimeout(function(){
				$('#bubbleClient').animate({width: '360px'}, 1000,function(){
				});
				setTimeout(function(){
					//resets the random client attributes on click to ensure multiple rounds can be played.
					var attributeOneClient = attributeOne[Math.floor(Math.random()*attributeOne.length)];
					var attributeTwoClient = attributeTwo[Math.floor(Math.random()*attributeTwo.length)];
					var attributeThreeClient = attributeThree[Math.floor(Math.random()*attributeThree.length)];
					$('#att1').text(attributeOneClient);
					$('#att2').text(attributeTwoClient);
					$('#att3').text("Based in " + attributeThreeClient);
					$('#wwl').text("We would like");
					$('#attributes').fadeIn(100);
					$('#name').fadeIn(100);
					$('#wwl').fadeIn(100);
				}, 1000);
			}, 1000);
		}, 995);
	});
	
	/* Cause the site to enter browsing mode turning off the game */
	$('#no').click(function(){
		$('#agent').animate({bottom: '-650px'}, 1000,function(){
			});
		$('#bubble').hide();
		$('#yes').hide();
		$('#no').hide();
		$('#pick').hide();
	});
	
	/* 
	When clicked the user is scored on how well they matched the client attributes
	to the locations attributes. This done by changing the stars and the clients 
	textual reaction in their speech bubble	
	*/
	$('#pick').click(function(){
		var counter = 0;
		//Checks to see matches and adds to the counter if so.
		if(($('#att1').text() == "Close to Railway" && $('#markerOne').text()
					== "Features a connecting Railway") || 
				($('#att1').text() == "A large Estate" && $('#markerOne').text()
						== "Features a luxurious Estate  ") || 
				($('#att1').text() == "Close to River" && $('#markerOne').text()
						== "Close to the Brisbane River  ")){
			counter += 1;
		}
		if(($('#att2').text() == "On the Coast" && $('#markerTwo').text() 
						== "Coastal Views") ||
				($('#att2').text() == "The city life" && $('#markerTwo').text() 
						== "Close to the city") ||
				($('#att2').text() == "suburbia" && $('#markerTwo').text() 
						== "suburban Living") ||
				($('#att2').text() == "lots of land" && $('#markerTwo').text() 
						== "Large blocks of land")){
			counter += 1;
		} 
		if($('#att3').text() == $('#markerThree').text()){
			counter += 1;
		} 
		/* 
		Uses the counter to determine how many matched and the score 
		the user will recieve. Changes the stars, grade and clients reaction
		accordingly. 
		*/
		if(counter == 1){
			$('#star1').attr('src',"images/starshine.png");
			$('#wwl').text("Are feeling ok");
			$('#att1').text("I guess its alright");
			$('#att2').text("");
			$('#att3').text("");
			$('#grade').attr('src',"images/c.png");
		} else if(counter == 2){
			$('#star1').attr('src',"images/starshine.png");
			$('#star2').attr('src',"images/starshine.png");
			$('#wwl').text("are satisfied");
			$('#att1').text("Nice choice!");
			$('#att2').text("");
			$('#att3').text("");
			$('#grade').attr('src',"images/b.png");
		} else if(counter == 3){
			$('#star1').attr('src',"images/starshine.png");
			$('#star2').attr('src',"images/starshine.png");
			$('#star3').attr('src',"images/starshine.png");
			$('#wwl').text("are very happy");
			$('#att1').text("Amazing Thankyou!");
			$('#att2').text("");
			$('#att3').text("");
			$('#grade').attr('src',"images/aplus.png");
		}else{
			$('#wwl').text("are not happy");
			$('#att1').text("Terrible choice");
			$('#att2').text("");
			$('#att3').text("");
			$('#grade').attr('src',"images/d.png");
		}
		activePoints += counter;
		$('#points').text("Points: " + activePoints);
		//Animates the client of screen and brings back the agent
		setTimeout(function(){
			$('#grade').animate({bottom: '15%'}, 0,function(){
				$('#grade').fadeIn(150);
			});
			$('#grade').animate({width: '10%'}, 250,function(){
			});
			setTimeout(function(){
				$('#attributes').hide();
				$('#name').hide();
				$('#wwl').hide();
				$('#bubbleClient').animate({width: '0px'}, 600,function(){
				});
				setTimeout(function(){
					$('#grade').animate({bottom: '-615px'}, 1000,function(){
						$('#grade').hide();
					});
					$('#agent').animate({bottom: '-650px'}, 1000,function(){
					});
					setTimeout(function(){
						$('#agent').attr('src',"images/human1.png");
						$('#agent').width('475px');
						$('#agent').animate({bottom: '0px'}, 1000,function(){
						});
						$('#pick').hide();
						$('#markerImageLarge').hide();
						setTimeout(function(){
							$('#bubble').attr('src',"images/bubble3.png");
							$('#bubble').show();
							$('#bubble').animate({width: '360px'}, 1000,function(){
							$('#yes').fadeIn(500);
							$('#no').fadeIn(500);
							});
							$('#grade').animate({width: '30%'}, 250,function(){
							});
						}, 1200);
					}, 1200);
				},650);
			}, 2200);	
		}, 1000);
	});
	
	// Formats the map and sets it view	
	/* Map and marker code from Leaflet, Accesed: 3/10/2018, https://leafletjs.com/ */
	var theMap = L.map('mapid' ,{scrollWheelZoom: false, zoomControl:false,keyboard:false,
	scrollWheelZoom: false,doubleClickZoom: false,boxZoom: false })
	.setView([-27.4000, 153.111000], 11.49);
	theMap.dragging.disable();
	//Styles the map through the use of a tile layer.
	L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>,' + 
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		maxZoom: 20,
		accessToken: 'sk.eyJ1Ijoiam9pbnRhY2NvdW50YWdlbnQwMDciLCJhIjoiY2ptdjdhZXdjMGQz'+
		'cjN3bzJtdnE1a3NjayJ9.Pbq_gC0rcbqzEV1uUeeirw'
	}).addTo(theMap);
	//Creates the for sale marker used on the map.
	var icon = L.Icon.extend({
		options: {
			iconSize:     [45, 60],
			shadowSize:   [38, 60],
			iconAnchor:   [20, 50],
		}
	});
	var mainIcon = new icon({iconUrl: 'images/sign.png'});	
	//try to load cache data
	var slqData = localStorage.getItem("slqData");
	/*
	If the data loads then runs the iterate records function if it doesnt load
	in the API data and save it to local storage. Then iterate it. 
	*/
	if(slqData) {
		console.log('From localStorage');	
		slqData = JSON.parse(slqData);
	    iterateRecords(slqData);
	} else {
		//API data retrieved from Queensland State Libary, Real Estate Maps API.
		$.ajax({
			type: "GET",
			url: 'https://data.gov.au/api/3/action/datastore_search_sql?sql=SELECT * from "f5ecd45e-7730-4517-ad29-73813c7feda8"',
			dataType: "text",
			cache: true,
			success: function (data) {
				//parse json data
				data = JSON.parse(data);
				//iterate records
				iterateRecords(data);
				//save the data to local storage
				data = JSON.stringify(data);
				localStorage.setItem('slqData', data);
			}
		});
	}
	
	/* Converts the year to its numerical form */
	function getYear(year) {
		if(year) {
			return year.match(/[\d]{4}/);
		}
	}
	
	/*
	Goes through the records assigning all important variables 
	and places each marker on the map. Uses the title, year, 
	description and image of each record to create the marker popups.
	*/
	function iterateRecords(data) {
		//Loops through the records
		$.each(data.result.records, function(recordKey, recordValue) {
			//split records into name-location array
			latlong = recordValue["dcterms:spatial"].split(";");
			var recordYear = getYear(recordValue["dcterms:temporal"]);
			/*
			check that an associated location exists and the record is based 
			in 1850 to 1950
			*/
			if (latlong.length > 1 && recordValue["dc:description"] != null &&
					recordYear > 1850 && recordYear < 1950) {
				var allAttributes = recordValue["dc:description"].split(" ");
				var recordTitle = recordValue["dc:title"].split(",");
				var recordImageLarge = recordValue["1000_pixel_jpg"];
				var recordDescription = recordValue["dc:description"];
				attributeThree.push(recordYear);
				//split location into lat-lng array
				latlong = latlong[1].split(",");
				var lat = latlong[0].trim();
				var lng = latlong[1].trim();
				//adds the marker to the map.
				var marker = L.marker([lat, lng],{icon: mainIcon}).addTo(theMap);
				/*
				Filters the attributes so when clicked the marker popup displays
				the correct attributes.
				*/
				$(marker).click(function(){
					$('#title').text(recordTitle[0]),
					$('#markerImage').attr("src", recordImageLarge);
					$('#markerScreen').show();
					/* Filtering for attribute one */
					if(allAttributes.indexOf("Estate") > -1){
						$('#markerOne').text("Features a luxurious Estate  ");	
					}
					if(allAttributes.indexOf("Estate.") > -1){
						$('#markerOne').text("Features a luxurious Estate  ");	
					}
					if(allAttributes.indexOf("estate") > -1){
						$('#markerOne').text("Features a luxurious Estate  ");	
					}
					if(allAttributes.indexOf("estate.") > -1){
								$('#markerOne').text("Features a luxurious Estate  ");	
					}
					if(allAttributes.indexOf("river") > -1){
						$('#markerOne').text("Close to the Brisbane River  ");
					}
					if(allAttributes.indexOf("river.") > -1){
						$('#markerOne').text("Close to the Brisbane River  ");
					}
					if(allAttributes.indexOf("River.") > -1){
						$('#markerOne').text("Close to the Brisbane River  ");
					}
					if(allAttributes.indexOf("River") > -1){
						$('#markerOne').text("Close to the Brisbane River  ");
					}
					if(allAttributes.indexOf("Railway") > -1){
						$('#markerOne').text("Features a connecting Railway");
					}
					if(allAttributes.indexOf("Railway.") > -1){
						$('#markerOne').text("Features a connecting Railway");
					}
					if(allAttributes.indexOf("railway") > -1){
						$('#markerOne').text("Features a connecting Railway");
					}
					if(allAttributes.indexOf("railway.") > -1){
						$('#markerOne').text("Features a connecting Railway");
					}
					/* Filtering for attribute two */
					if(lng >= (153.058504)){
						$('#markerTwo').text("Coastal Views");
					} else {
						$('#markerTwo').text("Large blocks of land");
					}
					if(lng > 152.962439 && lng < 153.150000 && lat < -27.400000 
							&& lat > -27.495014){
						$('#markerTwo').text("Close to the city");
					}
					if(lng < 153.100000 && lat < -27.500000){
							$('#markerTwo').text("Large blocks of land");
					}
					/* Filtering for attribute three */
					$('#markerThree').text("Based in " + recordYear);
					/* 
					Causes a larger version of the image to appear when the 
					marker image is clicked.
					*/
					$("#markerImage").click(function(){
						$('#imageClick').attr("src", recordImageLarge);
						$('#imageClick').show();
						$("#imageClick").click(function(){
							$('#imageClick').hide();
						});
					});
				});
			}
			
		});
	}
});

