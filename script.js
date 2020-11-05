console.log(moment().format("dddd, MMMM Do, YYYY"));
$("document").ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
    console.log(moment().get('hour'));
    console.log(moment().hour().format('hA'));
    for (var i = 0; i < 9; i++) {
        var timeBlock = $("<section>");
        timeBlock.addClass("time-block");
        var row = $("<div>");
        row.addClass("row");
        var hour = $("<div>");
        hour.addClass("hour");
        var time = moment().hour(9+i);
        hour.text(time.format('hA'));
        if (moment().get('hour') > time) {
            hour.addClass("past");
        };
        var textarea = $("<textarea>");
        textarea.attr("rows", "2");
        var save = $("<button>");
        save.addClass("saveBtn fa fa-save");
        row.append(hour);
        row.append(textarea);
        row.append(save);
        timeBlock.append(row);
        $(".container").append(timeBlock);
    }    

});