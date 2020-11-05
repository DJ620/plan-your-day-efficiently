console.log(moment().format("dddd, MMMM Do, YYYY"));
$("document").ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
    console.log(moment().get('hour'));
    for (var i = 0; i < 9; i++) {
        var timeBlock = $("<section>");
        timeBlock.addClass("time-block");
        var row = $("<div>");
        row.addClass("row");
        var hour = $("<div>");
        hour.addClass("hour");
        var current = moment().get('hour');
        var time = moment().hour(20+i);
        console.log(moment(time).hour()>current);
        hour.text(time.format('hA'));
        var textarea = $("<textarea>");
        if (moment(time).isSame(current)) {
            textarea.addClass("present");
        } else if (moment(time).isBefore(current)) {
            textarea.addClass("future");
        } else {
            textarea.addClass("past");
        }
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
