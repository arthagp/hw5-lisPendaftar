class Person {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
}
class AnakSekolah extends Person {
    constructor(nama, umur, uang) {
        super(nama, umur);
        this.uang = uang;
    }

}
//DOM
const getNama = document.getElementById('nama');
const getUmur = document.getElementById('umur');
const getUang = document.getElementById('uangSaku');
const bodyPendaftar = document.getElementById("body-pendaftar");
const target = document.getElementById('target');

const arrPerson = []
async function btnSubmit() {
    console.log(getNama.value, getUang.value, getUmur.value);

    if (getNama.value.length <= 10) {
        alert('nama harus 10 character');
    } else if (getUmur.value <= 25) {
        alert('umur anda minimal 25');
    } else if (getUang.value < 100000 || getUang.value > 1000000) {
        alert('uang anda kurang dari 100.000 dan kemungkinan lebih dari 1.000.000');
    } else {
        const pendaftar = new AnakSekolah(getNama.value, getUmur.value, getUang.value)
        arrPerson.push(pendaftar)
        kumpulanUmur.push(getUmur.value);
        kumpulanUang.push(getUang.value);
        await renderTable();
        console.log(arrPerson);
        alert("data berhasil tersimpan");

    }

}

let avgUmur = 0;
let avgUang = 0;
let kumpulanUmur = [];
let kumpulanUang = [];
async function btnHitung(){
    let totalUmur = 0;
    for (let index = 0; index < kumpulanUmur.length; index++) {
        let resultUmur = await kumpulanUmur[index];
        let numUmur = parseInt(resultUmur);
        totalUmur += numUmur
    }
    let totalUang = 0
    for (let index = 0; index < kumpulanUang.length; index++) {
        let resultUang = await kumpulanUang[index];
        let numUang = parseInt(resultUang);
        totalUang += numUang
        
    }
    avgUmur = totalUmur / kumpulanUmur.length;
    avgUang = totalUang / kumpulanUang.length;
    console.log(totalUmur);
    console.log(avgUmur);
    console.log(totalUang);
    console.log(avgUang);
    
    target.innerHTML = `Rata rata Umur ${avgUmur} dan rata rata Uang Saku ${avgUang}`

}

async function renderTable() {
    bodyPendaftar.innerHTML = "";
    for (let index = 0; index < arrPerson.length; index++) {
        const tr = document.createElement('tr');
        const tdNama = document.createElement("td");
        tdNama.innerHTML = arrPerson[index].nama;
        const tdUmur = document.createElement("td");
        tdUmur.innerHTML = arrPerson[index].umur;
        const tdUangSaku = document.createElement("td");
        tdUangSaku.innerHTML = arrPerson[index].uang;
        
        tr.appendChild(tdNama);
        tr.appendChild(tdUmur);
        tr.appendChild(tdUangSaku);

        bodyPendaftar.appendChild(tr);
    }
}





