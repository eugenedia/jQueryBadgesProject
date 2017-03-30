$(function() {

  // your code will go here
  $.ajax({
    url:'https://www.codeschool.com/users/1550944.json',
    datatype: 'jsonp',
    success: function(response){
      for (var i=0; i<response.courses.completed.length; i++){
        var course =  response.courses.completed[i];
        var courseDiv = $( "<div><h3>" +course.title+ "</h3><div>"+
          "<img  src=\"" + course.badge + "\">");

        var link = $("<a href=\""+ course.url +"\" target = \"blank\" >See course</a>").addClass("btn btn-primary");

         courseDiv.append(link);
         courseDiv.addClass('cource').appendTo("#badges");
      }
    }
  })

});
