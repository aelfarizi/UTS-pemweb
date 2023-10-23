function postDataToLocalStorage() {
    const id = document.getElementById('id').value;
    const nama = document.getElementById('nama').value;
    const kategori = document.getElementById('kategori').value;
    const satuan = document.getElementById('satuan').value;
    const stok = document.getElementById('stok').value;
    const beli = document.getElementById('beli').value;
    const jual = document.getElementById('jual').value;
    const diskon = document.getElementById('diskon').value;
    const supplier = document.getElementById('supplier').value;

    const product = {
        id,
        nama,
        kategori,
        satuan,
        stok,
        beli,
        jual,
        diskon,
        supplier
    };
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    alert('Data Barang telah berhasil disimpan ke Tabel.');
    document.getElementById('productForm').reset();
}

const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', postDataToLocalStorage);