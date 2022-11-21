//Animasi
setTimeout(() => {
    showEmote();
}, 0)
setTimeout(() => {
    showEmote();
}, 1500);
setTimeout(() => {
    showEmote();
}, 5000);
setInterval(() => {
    showEmote();
}, 8000);
function showEmote() {
    [...document.querySelectorAll(".animation")].forEach(emote => emote.style.marginLeft = `${randomX()}%`);
    [...document.querySelectorAll(".animation")].forEach(emote => emote.style.marginTop = `${randomY()}%`);
    [...document.querySelectorAll(".emote")].forEach(e => e.innerHTML = createEmote());
    [...document.querySelectorAll(".animation")].forEach(e => e.style.display = "inline-block");
    [...document.querySelectorAll(".animation")].forEach(e => e.style.transform = `scale(${scale()})`);
    [...document.querySelectorAll(".animation")].forEach(e => e.style.backgroundColor = `${warna()}`);
}
function createElementdiv() {
    for (i = [...document.querySelectorAll(".emote")].length; i < 10; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "animation");
        let emoji = `<span class="emote"></span>`;
        div.innerHTML = emoji;
        document.querySelector("#emote").appendChild(div);
    }}
createElementdiv();
function createEmote() {
    const emoji = Math.floor(Math.random()*19);
    switch (emoji) {
        case 0: return "👋";
            break;
        case 1: return "🤔";
            break;
        case 2: return "😎";
            break;
        case 3: return "😝";
            break;
        case 4: return "😄";
            break;
        case 5: return "🐼";
            break;
        case 6: return "🐻";
            break;
        case 7: return "🐮";
            break;
        case 8: return "🐱";
            break;
        case 9: return "🐶";
            break;
        case 10: return "🤩";
            break;
        case 11: return "😍";
            break;
        case 12: return "🥳";
            break;
        case 13: return "🥰";
            break;
        case 14: return "🤣";
            break;
        case 15: return "😊";
            break;
        case 16: return "🎮";
            break;
        case 17: return "🎠";
            break;
        case 18: return "⚽";
            break;
    }
}
function warna() {
    const w = Math.floor(Math.random()*6);
    switch (w) {
        case 0: return "red";
            break;
        case 1: return "skyblue";
            break;
        case 2: return "yellow";
            break;
        case 3: return "rgba(100,149,237,1)";
            break;
        case 4: return "pink";
            break;
        case 5: return "purple";
    }
}
function randomY() {
    return Math.floor(Math.random()*180-10);
}
function randomX() {
    return Math.floor(Math.random()*100-10);
}
function scale() {
    return Math.random()*1.2;
}

//get local Storage
let kumpulanRencana = JSON.parse(localStorage.getItem("kumpulanRencana"));
let kumpulanDiv = JSON.parse(localStorage.getItem("kumpulanDiv"));
let kumpulanJudul = JSON.parse(localStorage.getItem("kumpulanJudul"));
//Array

if (kumpulanRencana == null) {
    kumpulanRencana = [];
}

if (kumpulanDiv == null) {
    kumpulanDiv = [];
} else if (kumpulanDiv.length == 0) {
    document.querySelector(".tidakadarencana").textContent = "Tidak ada rencana";
} else {
    document.querySelector(".tugas").innerHTML = kumpulanDiv.join("");
}
if (kumpulanJudul == null) {
    kumpulanJudul = [];
}

//Buat Rencana
const formBuatRencana = document.querySelector("#buatRencana");
const buat = document.querySelector(".Buat");
const batal = document.querySelector(".Batal");
const buatRencana = document.querySelector(".Buatrencana");
buatRencana.onclick = () => {
    formBuatRencana.style.display = "inline-block";
    halamanpertama.style.display = "none";
}
batal.onclick = () => {
    formBuatRencana.style.display = "none";
    halamanpertama.style.display = "inline-block";
}
buat.onclick = () => {
    const judulvalue = document.querySelector("#judul").value;
    const deskripsivalue = document.querySelector("#deskripsi").value;
    const tanggalvalue = document.querySelector("#tanggal").value;
    const waktuvalue = document.querySelector("#waktu").value;
    const kategorivalue = document.querySelector("#tipe").value;
    halamanpertama.style.display = "inline-block";
    formBuatRencana.style.display = "none";
    kumpulanRencana.push({
        kategori: `${kategorivalue}`,
        judul: `${judulvalue}`,
        deskripsi: `${deskripsivalue}`,
        tanggal: `${tanggalvalue}`,
        waktu: `${waktuvalue}`
});
kumpulanJudul.push(kumpulanRencana[kumpulanRencana.length-1].judul);
mulaiBuatRencana(kumpulanRencana[kumpulanRencana.length-1].judul, kumpulanRencana[kumpulanRencana.length-1].tanggal, kumpulanRencana[kumpulanRencana.length-1].waktu, emoteKategori(kategorivalue));
textContentAngkaInfo(kumpulanRencana.filter(k => k.tanggal), tanggalsaatini, tanggalbesok, hariini, besok, expired);

addLocal();
if (temaputih.style.display != "none") {
    kembaliGelap();
} else {
    warnaSesuaiTanggal();
}
if (kumpulanDiv.length > 0) {
    document.querySelector(".tidakadarencana").textContent = "";
}
};

function mulaiBuatRencana(judulvalue, tanggalrencana, jamrencana, kategorivalue) {
kumpulanDiv.push(`<div class="semuatugas"><div class="image">${kategorivalue}
</div><div class="juduldantanggal"><h3 class="judul">${judulvalue}</h3><p class="tanggalmulai">${tanggalrencana} ${jamrencana}</p></div>
</div>`);
document.querySelector(".tugas").innerHTML += kumpulanDiv[kumpulanDiv.length-1];
addLocal();

};

function emoteKategori(kategori) {
switch (kategori) {
case "Tipe Rencana": return "";
break;
case "Belajar": return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" style="fill: rgba(255,255,255,1);transform: ;msFilter:;"><path d="M2 8v11.529S6.621 19.357 12 22c5.379-2.643 10-2.471 10-2.471V8s-5.454 0-10 2.471C7.454 8 2 8 2 8z"></path><circle cx="12" cy="5" r="3"></circle></svg>`;
case "Bekerja": return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" style="fill: rgba(255,255,255,1);transform: ;msFilter:;"><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"></path></svg>`;
break;
case "Main Game": return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" style="fill: rgba(255,255,255,1);transform: ;msFilter:;"><path d="M21.986 9.74a3.193 3.193 0 0 0-.008-.088A5.003 5.003 0 0 0 17 5H7a4.97 4.97 0 0 0-4.987 4.737c-.01.079-.013.161-.013.253v6.51c0 .925.373 1.828 1.022 2.476A3.530 3.530 0 0 0 5.5 20c1.8 0 2.504-1 3.5-3 .146-.292.992-2 3-2 1.996 0 2.853 1.707 3 2 1.004 2 1.7 3 3.5 3 .925 0 1.828-.373 2.476-1.022A3.530 3.530 0 0 0 22 16.5V10c0-.095-.004-.18-.014-.26zM7 12.031a2 2 0 1 1-.001-3.999A2 2 0 0 1 7 12.031zm10-5a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-2 4a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm2 2a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm2-2a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"></path></svg>`;
break;
case "Jalan - Jalan": return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" style="fill: rgba(255,255,255,1);transform: ;msFilter:;"><path d="M11 15.414V20h2v-4.586c0-.526-.214-1.042-.586-1.414l-2-2L13 9.414l2 2c.372.372.888.586 1.414.586H20v-2h-3.586l-3.707-3.707a.999.999 0 0 0-1.414 0L8 9.586c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414l3 3z"></path><circle cx="16" cy="5" r="2"></circle><path d="M18 14c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM6 22c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path></svg>`;
break;
case "Menghadiri Acara": return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" style="fill: rgba(255,255,255,1);transform: ;msFilter:;"><path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path><path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"></path></svg>`;
break;
case "Mengerjakan Tugas": return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" style="fill: rgba(255,255,255,1);transform: ;msFilter:;"><path d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z"></path><path d="m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z"></path></svg>`;
}
}

//Dapatkan waktu saat ini (hari)
const waktu = new Date();
const hari = waktu.getDay();
const jam = waktu.getHours();
const tanggal = waktu.getDate();
const bulan = waktu.getMonth();
const tahun = waktu.getYear();
const tampiltanggal = document.querySelector(".tanggal");
tampilkanTanggal(hari, tanggal, bulan, tahun);
function tampilkanTanggal(hari, tanggal, bulan, tahun) {
let namahari;
let namabulan;
let namatahun;
if (hari == 0) {
namahari = "Min";
} else if (hari == 1) {
namahari = "Sen";
} else if (hari == 2) {
namahari = "Sel";
} else if (hari == 3) {
namahari = "Rab";
} else if (hari == 4) {
namahari = "Kam";
} else if (hari == 5) {
namahari = "Jum";
} else {
namahari = "Sab";
}

//BULAN
if (bulan == 0) {
namabulan = "Jan";
} else if (bulan == 1) {
namabulan = "Feb";
} else if (bulan == 2) {
namabulan = "Mar";
} else if (bulan == 3) {
namabulan = "Apr";
} else if (bulan == 4) {
namabulan = "Mei";
} else if (bulan == 5) {
namabulan = "Jun";
} else if (bulan == 6) {
namabulan = "Jul";
} else if (bulan == 7) {
namabulan = "Agu";
} else if (bulan == 8) {
namabulan = "Sep";
} else if (bulan == 9) {
namabulan = "Okt";
} else if (bulan == 10) {
namabulan = "Nov";
} else {
namabulan = "Des";
}

// TAHUN
if (tahun == 122) {
namatahun = 2022;
} else if (tahun == 123) {
namatahun == 2023;
} else if (tahun == 130) {
namatahun == 2030;
} else if (tahun == 125) {
namatahun == 2025;
}
return tampiltanggal.textContent = `${namahari}, ${tanggal} ${namabulan} ${namatahun}`;
}

//Lihat Detail Rencana
const juduldetail = document.querySelector(".judulrencana");
const wakturencana = document.querySelector(".waktumulai");
const deskripsirencana = document.querySelector(".deskripsirencana");
const gambarkategori = document.querySelector(".gambarkategori");
let hitObject = function(j, e, d) {
return j.forEach(k => {
if (k.judul == e) {
d.textContent = k.deskripsi;
}
});
};
document.querySelector(".tugas").addEventListener("click", e => {
document.querySelector("#halamanpertama").style.display = "none";
document.querySelector("#Detailrencana").style.display = "inline-block";
if (e.target.className == "semuatugas") {
gambarkategori.innerHTML = e.target.firstChild.innerHTML;

hitObject(kumpulanRencana, e.target.firstChild.nextElementSibling.firstChild.textContent, deskripsirencana);

juduldetail.textContent = e.target.firstChild.nextElementSibling.firstChild.textContent;
wakturencana.textContent = e.target.firstChild.nextElementSibling.firstChild.nextElementSibling.textContent;

} else if (e.target.parentElement.parentElement.className == "image") {
gambarkategori.innerHTML = e.target.parentElement.parentElement.innerHTML;
hitObject(kumpulanRencana, e.target.parentElement.parentElement.nextElementSibling.firstChild.textContent, deskripsirencana);

juduldetail.textContent = e.target.parentElement.parentElement.nextElementSibling.firstChild.textContent;
wakturencana.textContent = e.target.parentElement.parentElement.nextElementSibling.firstChild.nextElementSibling.textContent;
} else if (e.target.className == "judul" || e.target.className == "tanggalmulai") {
gambarkategori.innerHTML = e.target.parentElement.parentElement.firstChild.innerHTML;
hitObject(kumpulanRencana, e.target.parentElement.firstChild.textContent, deskripsirencana);
juduldetail.textContent = e.target.parentElement.firstChild.textContent;
wakturencana.textContent = e.target.parentElement.firstChild.nextElementSibling.textContent;
} else {
document.querySelector("#Detailrencana").style.display = "none";
document.querySelector("#halamanpertama").style.display = "inline-block";
}if (temaputih.style.display != "none") {
kembaliGelap();
} else {
warnaSesuaiTanggal();
warnaDetail();
}
});
document.querySelector(".kembali").onclick = () => {
document.querySelector("#halamanpertama").style.display = "inline-block";
document.querySelector("#Detailrencana").style.display = "none";
};

//Jumlah rencana HARI INI, BESOK dan EXPIRED (Telah lewat hari target).

const tanggalsaatini = `${1900+tahun}-${1+bulan}-${tanggal}`;
const tanggalbesok = `${1900+tahun}-${1+bulan}-${tanggal+1}`;
const hariini = document.querySelector(".hariini");
const besok = document.querySelector(".besok");
const expired = document.querySelector(".expired");
function textContentAngkaInfo(...arguments) {
const [tanggalRencana, tanggalsaatini, tanggalbesok, hariini, besok, expired] = arguments;
hariini.textContent = tanggalRencana.filter(hasil => hasil.tanggal == tanggalsaatini).length;
besok.textContent = tanggalRencana.filter(hasil => hasil.tanggal == tanggalbesok).length;
expired.textContent = tanggalRencana.filter(hasil => hasil.tanggal < tanggalsaatini).length;
};

// Pindah halaman dan Lihat Rencana
const tugas = document.querySelector(".tugas");
const tombolsemuarencana = document.querySelector(".Lihatrencana");
const tombolgantitema = document.querySelector(".gantitema");

tombolsemuarencana.onclick = () => {
if (tombolsemuarencana.textContent != "Kembali") {
document.querySelector(".semuainfo").style.display = "none";
tugas.style.height = "80%";
tugas.style.overflow = "scroll";
tombolsemuarencana.textContent = "Kembali";
} else {
tugas.style.height = "50%";
tugas.style.overflow = "hidden";
document.querySelector(".semuainfo").style.display = "flex";
tombolsemuarencana.textContent = "Lihat Semua";
}if (temaputih.style.display != "none") {
kembaliGelap();
} else {
warnaSesuaiTanggal();
}
};

//Hapus rencana
refreshJumlah();
let hapusrencana = document.querySelector(".hapusrencana");
hapusrencana.onclick = () => {
let yesOrNo = confirm("Anda yakin ingin menghapus ?");
if (yesOrNo == true) {
let index = kumpulanJudul.indexOf(document.querySelector(".judulrencana").textContent);
kumpulanRencana.splice(index, 1);
kumpulanJudul.splice(index, 1);
kumpulanDiv.splice(index, 1);
document.querySelector("#Detailrencana").style.display = "none";
document.querySelector("#halamanpertama").style.display = "inline";
document.querySelectorAll(".semuatugas")[index].style.display = "none";
refreshJumlah();
addLocal();
refreshDiv();
}if (temaputih.style.display != "none") {
kembaliGelap();
} else {
warnaSesuaiTanggal();
}
};

//Hapus expired
const hapusexpired = document.querySelector(".hapusexpired");
hapusexpired.onclick = () => {
for (i = 0; i <= kumpulanRencana.length-1; i++) {
if (kumpulanRencana[i].tanggal < tanggalsaatini) {
expired.textContent = 0;
kumpulanRencana.splice(i, 1);
kumpulanJudul.splice(i, 1);
kumpulanDiv.splice(i, 1);
i =- 1;
addLocal();
refreshJumlah();
refreshDiv();
} else {
i = i;
}
}if (temaputih.style.display != "none") {
kembaliGelap();
} else {
warnaSesuaiTanggal();
}
};
//Ganti Tema
const temaputih = document.querySelector(".temaputih");
const temahitam = document.querySelector(".temahitam");

temaputih.onclick = () => {
temaputih.classList.add("transisi");
temaColorfull();
};
temahitam.onclick = () => {
temahitam.classList.add("transisi");
temaGelap();
};


function refreshJumlah() {
setTimeout(() => {
textContentAngkaInfo(kumpulanRencana.filter(k => k.tanggal), tanggalsaatini, tanggalbesok, hariini, besok, expired);
}, 0);
};

function refreshDiv() {
document.querySelector(".tugas").innerHTML = kumpulanDiv.join("");
};
//Local Storage
function addLocal() {
localStorage.setItem("kumpulanRencana", JSON.stringify(kumpulanRencana));
localStorage.setItem("kumpulanDiv", JSON.stringify(kumpulanDiv));
localStorage.setItem("kumpulanJudul", JSON.stringify(kumpulanJudul));
};

//warna
function warnaSesuaiTanggal() {
for (e in [...document.querySelectorAll(".semuatugas")]) {
if ([...document.querySelectorAll(".semuatugas")[e].firstChild.nextElementSibling.firstChild.nextElementSibling.textContent].splice(0, 10).join("") == tanggalsaatini) {
document.querySelectorAll(".semuatugas")[e].style.backgroundColor = "rgba(222,49,99,.85)";
} else if ([...document.querySelectorAll(".semuatugas")[e].firstChild.nextElementSibling.firstChild.nextElementSibling.textContent].splice(0, 10).join("") == tanggalbesok) {
document.querySelectorAll(".semuatugas")[e].style.backgroundColor = "rgba(255,105,180,.85)";
} else if ([...document.querySelectorAll(".semuatugas")[e].firstChild.nextElementSibling.firstChild.nextElementSibling.textContent].splice(0, 10).join("") < tanggalsaatini) {
document.querySelectorAll(".semuatugas")[e].style.backgroundColor = "rgba(114,14,158,.85)";

}

}
};

function warnaDetail() {
if ([...document.querySelector(".detailrencana").firstChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent].splice(0, 10).join("") == tanggalsaatini) {
document.querySelector(".detailrencana").style.backgroundColor = "rgba(222,49,99,.85)";

} else if ([...document.querySelector(".detailrencana").firstChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent].splice(0, 10).join("") == tanggalbesok) {
document.querySelector(".detailrencana").style.backgroundColor = "rgba(255,105,180,.85)";
} else if ([...document.querySelector(".detailrencana").firstChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent].splice(0, 10).join("") < tanggalsaatini) {
document.querySelector(".detailrencana").style.backgroundColor = "rgba(114,14,158,.85)";
} else {
    document.querySelector(".detailrencana").style.backgroundColor = "rgba(3,150,255,.7)";
}
};

function kembaliGelap() {
for (e in [...document.querySelectorAll(".semuatugas")]) {
document.querySelectorAll(".semuatugas")[e].style.backgroundColor = "rgba(255,255,255,.2)";
}
};

function temaGelap() {

document.querySelector(".Background").classList.remove("White");
document.querySelector(".Background").classList.add("Black");
setTimeout(() => {
kembaliGelap();
document.querySelector(".semuainfo").style.backgroundColor = "rgba(255,255,255,.05)";
document.querySelector(".tugas").style.backgroundColor = "rgba(255,255,255,.05)";
hapusexpired.style.backgroundColor = "rgba(0,0,0,.3)";
document.querySelector(".tanggal").style.backgroundColor = "rgba(255,255,255,.05)";
document.querySelector(".mulaibuat").style.backgroundColor = "rgba(255,255,255,.05)";
document.querySelector(".tugasyangbelumdikerjakan").style.backgroundColor = "rgba(255,255,255,.05)";
document.querySelector(".tugasyangsudahdikerjakan").style.backgroundColor = "rgba(255,255,255,.05)";
document.querySelector(".tugasyangdihapus").style.backgroundColor = "rgba(255,255,255,.05)";
document.querySelector(".detailrencana").style.backgroundColor = "rgba(255,255,255,.05)";
buatRencana.style.backgroundColor = "rgba(255,255,255,.05)";
tombolsemuarencana.style.backgroundColor = "rgba(255,255,255,.05)";
temahitam.classList.remove("transisi");
temaputih.style.display = "inline-block";
temahitam.style.display = "none";
}, 300);
};

function temaColorfull() {
document.querySelector(".Background").classList.remove("Black");
document.querySelector(".Background").classList.add("White");
setTimeout(() => {
warnaSesuaiTanggal();
document.querySelector(".semuainfo").style.backgroundColor = "rgba(3,150,255,.7)";
document.querySelector(".tanggal").style.backgroundColor = "rgba(114,14,158,.7)";
document.querySelector(".tugas").style.backgroundColor = "rgba(3,150,255,.7)";
document.querySelector(".mulaibuat").style.backgroundColor = "rgba(3,150,255,.7)";
document.querySelector(".tugasyangbelumdikerjakan").style.backgroundColor = "rgba(222,49,99,.8)";
document.querySelector(".tugasyangsudahdikerjakan").style.backgroundColor = "rgba(255,105,180,.8)";
document.querySelector(".tugasyangdihapus").style.backgroundColor = "rgba(114,14,158,.8)";
buatRencana.style.backgroundColor = "rgba(100,149,237,.8)";
tombolsemuarencana.style.backgroundColor = "rgba(100,149,237,.8)";
hapusexpired.style.backgroundColor = "rgba(114,14,158,.7)";
temaputih.classList.remove("transisi");
temahitam.style.display = "inline-block";
temaputih.style.display = "none";
}, 300);
};