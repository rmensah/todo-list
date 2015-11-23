$(document).ready(function() {
	$("#add").click(function() {
		var newListItem = $("#addtodo").val();

		if (newListItem.length>0){
			$("#todolist").append("<li>" + newListItem + "</li>");
			$("#addtodo").val(" ");
		}

});
});