$(document).ready(function () {
    LoadPage("main");
    var pages = [
    { "Name": "Innkjøp", "Template": "main" },
    { "Name": "Reisefølge", "Template": "reisefolge" },
    { "Name": "Oppsummering", "Template": "oppsummering" }
    ];

    var defaultNav = $("#defaultnav")
    $.each(pages, function (k, v) {
        var elem = $("<li />");
        var link = $("<a />");
        link.html(v.Name);
        link.click(function () {
            LoadPage(v.Template);
            $(".navbar-toggle").trigger('click');
        })
        link.appendTo(elem);
        elem.appendTo(defaultNav);
    })
})

function LoadPage(name){
    var templateurl = "templates/" + name + ".html";
    $("#maincontent").load(templateurl);
}