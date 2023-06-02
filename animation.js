//scroll back to top script

window.onscroll = function() {
	var e = document.getElementById("scrolltop");
    if (!e) {
    	e = document.createElement("a");
        e.id = "scrolltop";
        e.href = "#";
        document.body.appendChild(e);
	}
	e.style.display = document.documentElement.scrollTop > 300 ? "block" : "none";
    e.onclick = (ev) => {
    	ev.preventDefault();
        document.documentElement.scrollTop = 0;

    };
};


//search anything on site

//$(document).ready(function () {
//    $("#anythingSearch").on("keyup", function () {
//      var value = $(this).val().toLowerCase();
//      $("#myDIV *").filter(function () {
//        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//      });
//    });
//  });