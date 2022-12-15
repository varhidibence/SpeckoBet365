// starting webpage: https://www.bet365.com/#/IP/B1
console.log("Starting SpeckoBet365 extension...")
// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
// document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function () {
    console.log("Searching actual number of corners...");
    getActualNumberOfCorners();
  });


function navigateToLiveMatches() {
    var match = document.getElementsByClassName('ovm-FixtureDetailsTwoWay_TeamsWrapper');
    console.log(match);
}

function navigateToFootballMatches() {
    
}

function openLiveMatch() {
    
}

function canBetOnCorner() {
    return true;
}

function getActualMatchTime() {
    
}

function getActualNumberOfCorners() {
    // var matchDetails = document.getElementsByClassName('ipe-EventViewDetail_ContentContainer');
    // console.log(matchDetails[0]);
    //var indexOfCorners = matchDetails.innerHtml.indexOf('Jelenlegi szögletek');
    // if(indexOfCorners !== -1){ 
    //     alert("searched string available"); 
    //     console.log(document[indexOfCorners]);
    //} 

    var pattern = "Jelenlegi szögletek";
  
    var divs = document.getElementsByClassName("ipe-EventViewDetail_ContentContainer");
    for (var i = 0; i < divs.length; i++) {
       var para = divs[i];
       var index = para.innerText.toLowerCase().indexOf(pattern);
       if (index != -1) {
            alert("searched string available");
            break;
       }
    }  
}

