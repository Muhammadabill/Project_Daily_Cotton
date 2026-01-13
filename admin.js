// 1. Data Lengkap (32 Item sesuai rincian Anda)
const defaultData = [
    // 1. Cotton Australia Coolbreeze (6 Items)
    { id: 101, nama: "Cotton Australia Coolbreeze", warna: "PASTEL GREEN", gsm: "250", stok: 50, harga: 175000 },
    { id: 102, nama: "Cotton Australia Coolbreeze", warna: "ROYAL BENHUR", gsm: "250", stok: 45, harga: 175000 },
    { id: 103, nama: "Cotton Australia Coolbreeze", warna: "WHITE NETRAL", gsm: "235", stok: 60, harga: 170000 },
    { id: 104, nama: "Cotton Australia Coolbreeze", warna: "WHITE NETRAL", gsm: "265", stok: 55, harga: 180000 },
    { id: 105, nama: "Cotton Australia Coolbreeze", warna: "DUSTY PINK", gsm: "250", stok: 30, harga: 175000 },
    { id: 106, nama: "Cotton Australia Coolbreeze", warna: "COFFEE", gsm: "250", stok: 40, harga: 175000 },

    // 2. Cotton Japan Aloe (5 Items)
    { id: 201, nama: "Cotton Japan Aloe", warna: "BLACK NT", gsm: "200", stok: 80, harga: 165000 },
    { id: 202, nama: "Cotton Japan Aloe", warna: "NAVY", gsm: "200", stok: 75, harga: 165000 },
    { id: 203, nama: "Cotton Japan Aloe", warna: "SYCAMORE", gsm: "200", stok: 35, harga: 165000 },
    { id: 204, nama: "Cotton Japan Aloe", warna: "OLIVE", gsm: "200", stok: 42, harga: 165000 },
    { id: 205, nama: "Cotton Japan Aloe", warna: "BEIGE", gsm: "200", stok: 50, harga: 165000 },

    // 3. Combed Supersoft BCI (7 Items)
    { id: 301, nama: "Combed Supersoft BCI", warna: "TEAL BLUE", gsm: "20S", stok: 25, harga: 145000 },
    { id: 302, nama: "Combed Supersoft BCI", warna: "DEEP BLUE", gsm: "24S", stok: 30, harga: 140000 },
    { id: 303, nama: "Combed Supersoft BCI", warna: "DEEP BLUE", gsm: "20S", stok: 20, harga: 145000 },
    { id: 304, nama: "Combed Supersoft BCI", warna: "TURQUISE", gsm: "30S", stok: 40, harga: 135000 },
    { id: 305, nama: "Combed Supersoft BCI", warna: "TURQUISE", gsm: "24S", stok: 35, harga: 140000 },
    { id: 306, nama: "Combed Supersoft BCI", warna: "BABY PINK", gsm: "30S", stok: 20, harga: 135000 },
    { id: 307, nama: "Combed Supersoft BCI", warna: "FANTA", gsm: "24S", stok: 22, harga: 140000 },

    // 4. Combed Biowash BCI (8 Items)
    { id: 401, nama: "Combed Biowash BCI", warna: "BUBBLE GUM", gsm: "24S", stok: 15, harga: 148000 },
    { id: 402, nama: "Combed Biowash BCI", warna: "LEMON", gsm: "24S", stok: 18, harga: 148000 },
    { id: 403, nama: "Combed Biowash BCI", warna: "BABY YELLOW", gsm: "24S", stok: 20, harga: 148000 },
    { id: 404, nama: "Combed Biowash BCI", warna: "BLACK NT", gsm: "30S", stok: 100, harga: 140000 },
    { id: 405, nama: "Combed Biowash BCI", warna: "BLACK NT", gsm: "24S", stok: 90, harga: 145000 },
    { id: 406, nama: "Combed Biowash BCI", warna: "BLACK NT", gsm: "20S", stok: 80, harga: 150000 },
    { id: 407, nama: "Combed Biowash BCI", warna: "SKY BLUE", gsm: "30S", stok: 25, harga: 140000 },
    { id: 408, nama: "Combed Biowash BCI", warna: "BABY PINK", gsm: "24S", stok: 15, harga: 145000 },

    // 5. Cotton Fleece (6 Items)
    { id: 501, nama: "Cotton Fleece", warna: "MISTY 71", gsm: "280", stok: 60, harga: 190000 },
    { id: 502, nama: "Cotton Fleece", warna: "MISTY 71", gsm: "330", stok: 55, harga: 200000 },
    { id: 503, nama: "Cotton Fleece", warna: "MINT", gsm: "280", stok: 25, harga: 195000 },
    { id: 504, nama: "Cotton Fleece", warna: "PLACID BLUE", gsm: "280", stok: 30, harga: 195000 },
    { id: 505, nama: "Cotton Fleece", warna: "ROYAL LILAC", gsm: "280", stok: 20, harga: 195000 },
    { id: 506, nama: "Cotton Fleece", warna: "IRISH BLUE", gsm: "280", stok: 35, harga: 195000 }
];

// 2. Ambil data dari LocalStorage
let data = JSON.parse(localStorage.getItem("material"));

// 3. Logika Paksa Update: Jika data lama jumlahnya bukan 32, timpa dengan yang baru
if (!data || data.length !== 32) {
    data = defaultData;
    localStorage.setItem("material", JSON.stringify(data));
}

// 4. Fungsi Render Tabel Admin
function renderTable(filter = "") {
    const tbody = document.getElementById("tableData");
    if (!tbody) return;
    tbody.innerHTML = "";
    let kritis = 0;

    const filtered = data.filter(d => 
        d.nama.toLowerCase().includes(filter.toLowerCase()) || 
        d.warna.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(d => {
        if (d.stok < 10) kritis++;
        tbody.innerHTML += `
            <tr>
                <td class="ps-4">
                    <div class="fw-bold">${d.nama}</div>
                    <div class="text-muted small">${d.warna} | ${d.gsm} GSM</div>
                </td>
                <td>
                    <span class="badge-stok ${d.stok < 10 ? 'bg-danger-subtle text-danger' : 'bg-success-subtle text-success'}">
                        ${d.stok} Kg
                    </span>
                </td>
                <td class="fw-bold text-dark">Rp ${d.harga.toLocaleString("id-ID")}</td>
                <td class="text-center">
                    <button class="btn btn-sm btn-outline-primary me-1" onclick="openEdit(${d.id})">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="hapus(${d.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>`;
    });

    document.getElementById("totalData").innerText = data.length + " Jenis";
    document.getElementById("stokKritis").innerText = kritis + " Item";
    localStorage.setItem("material", JSON.stringify(data));
}

// 5. Fungsi Simpan Baru
function simpanBaru() {
    const nama = document.getElementById("inNama").value;
    const warna = document.getElementById("inWarna").value;
    const tebal = document.getElementById("inTebal").value;
    const stok = document.getElementById("inStok").value;
    const harga = document.getElementById("inHarga").value;

    if(!nama || !warna || !tebal || !harga) return alert("Isi semua data!");

    data.push({
        id: Date.now(),
        nama: nama,
        warna: warna.toUpperCase(),
        gsm: tebal,
        stok: parseInt(stok),
        harga: parseInt(harga)
    });

    renderTable();
    bootstrap.Modal.getInstance(document.getElementById('modalTambah')).hide();
    document.getElementById("formTambah").reset();
}

// 6. Fungsi Edit
function openEdit(id) {
    const item = data.find(d => d.id === id);
    document.getElementById("editId").value = item.id;
    document.getElementById("editNama").value = item.nama;
    document.getElementById("editWarna").value = item.warna;
    document.getElementById("editTebal").value = item.gsm;
    document.getElementById("editStok").value = item.stok;
    document.getElementById("editHarga").value = item.harga;
    new bootstrap.Modal(document.getElementById('modalEdit')).show();
}

function updateMaterial() {
    const id = parseInt(document.getElementById("editId").value);
    const index = data.findIndex(d => d.id === id);
    data[index] = {
        ...data[index],
        nama: document.getElementById("editNama").value,
        warna: document.getElementById("editWarna").value.toUpperCase(),
        gsm: document.getElementById("editTebal").value,
        stok: parseInt(document.getElementById("editStok").value),
        harga: parseInt(document.getElementById("editHarga").value)
    };
    renderTable();
    bootstrap.Modal.getInstance(document.getElementById('modalEdit')).hide();
}

// 7. Fungsi Hapus
function hapus(id) {
    if(confirm("Hapus material ini?")) {
        data = data.filter(d => d.id !== id);
        renderTable();
    }
}

function logout() { window.location.href = "login.html"; }
const searchInput = document.getElementById("search");
if(searchInput) {
    searchInput.addEventListener("input", function() { renderTable(this.value); });
}

renderTable();