const colorThief = new ColorThief();
const img = document.querySelector('.gambar');
var color = []

setInterval(() => {
    if (img.complete) {
        color = colorThief.getPalette(img);
        
    } else {
        img.addEventListener('load', function() {
            color = colorThief.getPalette(img);
        });
    }
    var num = Math.floor((Math.random() * 10) + 1);
    $("html").css("background-color", `rgb(${color[num][0]}, ${color[num][1]}, ${color[num][2]})`);
}, 3500)
