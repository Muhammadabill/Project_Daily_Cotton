const dataPesanan = document.getElementById("dataPesanan");
const pesanan = JSON.parse(localStorage.getItem("pesanan")) || [];

dataPesanan.innerHTML = "";

if(pesanan.length === 0){
  dataPesanan.innerHTML = `
    <tr>
      <td colspan="6" class="text-center text-muted py-4">
        Belum ada pesanan.
      </td>
    </tr>
  `;
}else{
  pesanan.forEach(p => {
    dataPesanan.innerHTML += `
      <tr>
        <td>
          <div class="fw-bold">${p.produk}</div>
          <div class="sub">${p.warna}</div>
        </td>
        <td><span class="badge-gsm">${p.ketebalan}</span></td>
        <td>${p.qty}</td>
        <td class="price">Rp${Number(p.total).toLocaleString("id-ID")}</td>
        <td>${p.tanggal}</td>
        <td><span class="status">${p.status}</span></td>
      </tr>
    `;
  });
}
