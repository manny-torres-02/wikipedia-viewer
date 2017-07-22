//start jquery 
$(document).ready(function() {
  //when the "Search Button is clicked - Run Search
  $("#search").click(function(){
    
    //get the query input 
    var query = $("#query").val(); 
    //Test the query var 
    //console.log(query)
    //API URL - Add in the search term 
    var apiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+query+"&callback=?";
    console.log(apiURL);
   $.ajax({
     type:"GET",
     url:apiURL,
     async:false,
     dataType:"json",
     success: function(data) {
       //data[1][0] is the heading 
       //description is data[2][0]
       //link is data [3][0]
       //need to remove previous list items from screen 
       $("#output").val("")
      for (var i=0; i<data[1].length;i++){
         //set out put - 0's are i - they are what we need to iterate through 
         $("#output").prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
         
       }
     },
     error: function(errorMessage) {
       alert("ERROR");
     }
     
   });
  });
});