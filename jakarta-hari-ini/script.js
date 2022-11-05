console.clear();
var _data = JSON.parse(`{
    "lyrics":[
    
    {"line":"Jakarta Hari Ini","time":750},

    {"line":"Tak Pernah Sama","time":6500},
    
    {"line":"Jika Dahulu Ku Tak Pernah Membuatnya Kecewa","time":9000},
    
    {"line":"Jakarta Hari Ini","time":18000},

    {"line":"Tak Pernah Ada","time":24000},

    {"line":"Jika Dahulu Ku Tak Pernah Membuatnya Menyeka","time":26000},

    {"line":"Air Mata","time":37000},

    {"line":"♫ ♫","time":40500},

    {"line":"Dan Sebuah Pesan Menyapa","time":42900},

    {"line":"Menjelang Hari Bahagia","time":47000},

    {"line":"Tanpa Namaku Yang Di Sana","time":51500},

    {"line":"Temanimu Selamanya","time":56000},

    {"line":"Menyakitkan","time":62500},

    {"line":"Ini Terlalu Satir","time":67000},

    {"line":"Terlampau Getir Untuk Diterima","time":71500},

    {"line":"♫ ♫","time":78000},

    {"line":"Yang Datang Dan Pergi","time":94000},

    {"line":"Kan Membuatmu Mengerti","time":98000},

    {"line":"Kadang Kita Perlu Tersakiti","time":102000},

    {"line":"Tuk Mengenal Perih","time":107500},

    {"line":"Yang Datang Dan Pergi","time":111000},

    {"line":"Semua Yang Harus Dilalui","time":115000},

    {"line":"Kadang Kita Perlu Tersakiti","time":119000},

    {"line":"Tuk Menjadi Manusia","time":124800},

    {"line":"♫ ♫","time":130000},

    {"line":"Akhirnya Ku Menyerah","time":143800},

    {"line":"Maafkan Ku Yang Menyala","time":148000},

    {"line":"Jika Dahulu Ku Tak Pernah Membuatmu","time":153000},

    {"line":"Bahagia","time":159700},

    {"line":"Akhirnya ku mengalah","time":162800},

    {"line":"Dan biarkan kau menyala","time":166700},

    {"line":"Meski harus kulewati pedih yang tiada akhirnya","time":170000},

    {"line":"Akhirnya Ku Menyerah","time":179000},

    {"line":"Maafkan Ku Yang Menyala","time":183000},

    {"line":"Jika Dahulu Ku Tak Pernah Membuatmu Bahagia","time":187000},

    {"line":"Akhirnya ku mengalah","time":196000},

    {"line":"Merelakanmu dengannya","time":199000},

    {"line":"Dan rayakanlah hari-hari terindahmu di sana","time":204000}


    


    
    ]}`);
var currentLine = "";

function align() {
    var a = $(".highlighted").height();
    var c = $(".content").height();
    var d = $(".highlighted").offset().top - $(".highlighted").parent().offset().top;
    var e = d + (a / 2) - (c / 2);
    $(".content").animate({ scrollTop: e + "px" }, { easing: "swing", duration: 250 });
}

var lyricHeight = $(".lyrics").height();
$(window).on("resize", function() {
    if ($(".lyrics").height() != lyricHeight) { //Either width changes so that a line may take up or use less vertical space or the window height changes, 2 in 1
        lyricHeight = $(".lyrics").height();
        align();
    }
});

$(document).ready(function() {
    $("video").on('timeupdate', function(e) {
        var time = this.currentTime * 1000;
        var past = _data["lyrics"].filter(function(item) {
            return item.time < time;
        });
        if (_data["lyrics"][past.length] != currentLine) {
            currentLine = _data["lyrics"][past.length];
            $(".lyrics div").removeClass("highlighted");
            $(`.lyrics div:nth-child(${past.length})`).addClass("highlighted"); //Text might take up more lines, do before realigning
            align();
        }
    });
});

generate();

function generate() {
    var html = "";
    for (var i = 0; i < _data["lyrics"].length; i++) {
        html += "<div";
        if (i == 0) {
            html += ` class="highlighted"`;
            currentLine = 0;
        }
        if (_data["lyrics"][i]["note"]) {
            html += ` note="${_data["lyrics"][i]["note"]}"`;
        }
        html += ">";
        html += _data["lyrics"][i]["line"] == "" ? "•" : _data["lyrics"][i]["line"];
        html += "</div>"
    }
    $(".lyrics").html(html);
    align();
}