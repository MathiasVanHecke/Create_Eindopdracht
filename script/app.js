// 7eHGmwGPf9n6eV68Kn6uXVnDlwa4vtq0DVIG8okK
//https://api.nasa.gov/planetary/apod?api_key=7eHGmwGPf9n6eV68Kn6uXVnDlwa4vtq0DVIG8okK

var url = "https://api.nasa.gov/planetary/apod?api_key=7eHGmwGPf9n6eV68Kn6uXVnDlwa4vtq0DVIG8okK";


$.ajax({
  url: url,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null, 4));  
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});

function toggle(x, _this) {
  var stylesheet = document.styleSheets[2]
  if (_this.checked) {
      stylesheet.disabled = false;

  } else  {
    stylesheet.disabled = true;
  }
}