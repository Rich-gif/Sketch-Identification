timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}

function clearCanvas() {
    background("white");
}

function check_sketch() {
    timer_counter++;
    document.getElementById('time').innerHTML = 'Timer: ' + timer_counter;
    console.log(timer_counter) 
    if (timer_counter > 400) {
        timer_counter = 0;
        timer_check = "completed"
    }
    if (timer_check == "completed" || answer_holder == "set") {
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}