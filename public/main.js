// run `node index.js` in the terminal

console.info('Buku Tamu');

// function buku tamu

const isibukutamu = () => {
  // tangkap elemen tbody

  let tbody = document.getElementById('tbody');

  // input nama
  let namalengkap = prompt('masukkan nama lengkap :');
  let alamat = prompt('masukkan alamat :');
  let keterangan = prompt('masukkan keterangan :');

  //console.log(namalengkap,alamat,keterangan)

  //dapatkan total child tbody
  let totaldata = tbody.childElementCount;

  // render string html
  tbody.innerHTML += `
  <tr>
    <td>${totaldata + 1}</td>
    <td>${namalengkap}</td>
    <td>${alamat}</td>
    <td style="text-align: center">${keterangan}</td>
   </tr>
  `;
};
