var apikey= "7eHGmwGPf9n6eV68Kn6uXVnDlwa4vtq0DVIG8okK"
//https://api.nasa.gov/planetary/apod?api_key=7eHGmwGPf9n6eV68Kn6uXVnDlwa4vtq0DVIG8okK


var today = new Date.today();
loadPic(today.add(1).day());

var dateGlobal = today;
var x = 1


function prevPic(){
    console.log("prev")
    var prev = (x).days().ago();
    loadPic(prev);
    x = x + 1;
}

function nextPic(){
    console.log("next")
    var next = dateGlobal.add(1).day();
    loadPic(next);
    x = x - 1;
}



function loadPic(value) {
  var valueSlice = value.toISOString().slice(0,10);
  var url = "https://api.nasa.gov/planetary/apod?api_key="+apikey+"&date="+valueSlice;
  $.ajax({
      url: url,
      success: function(result){
          if("copyright" in result) {
              $("#copyright").text("Image Credits: " + result.copyright);
          }
          else {
              $("#copyright").text("Image Credits: " + "Public Domain");
          }

          $("#apod_vid_id").css("display", "none");
          $("#apod_img_id").css("display", "none");

          if(result.media_type == "video") {
   
              $("#apod_vid_id").css("display", "inline");
              $("#apod_vid_id").attr("src", result.url);
           
          }
          else {

              $("#apod_img_id").css("display", "inline");
              $("#apod_img_id").attr("src", result.url);
 
          }

          $("#apod_explaination").text(result.explanation);
          $("#apod_title").text(result.title);
          
          var rightSpan = document.getElementById("right");
          var rightButton = document.getElementById("next")

          if(result.date == today.toISOString().slice(0,10)){
             rightSpan.className += " disabled";
             rightButton.className += " disabled";
              console.log("disabled");
          }
          else{
              rightSpan.className = "span-right";
              rightButton.className = "btn btn-next";
          }
       
      }

  });
  dateGlobal = value;
}


// SLIDER
function toggle(x, _this) {
  var stylesheet = document.styleSheets[2]
  if (_this.checked) {
      stylesheet.disabled = false;

  } else  {
    stylesheet.disabled = true;
  }
}