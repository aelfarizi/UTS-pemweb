const kontenTable = document.querySelector('.konten.table');

async function fetchProducts() {
    let data = [];
    const storedProducts = localStorage.getItem('products');

    if (storedProducts) {

        data = JSON.parse(storedProducts);
    } else {
        const productData = [
            {
                id: "17201",
                nama: "Indomie Goreng",
                kategori: Makanan,
                satuan: "pcs",
                stok: 24,
                beli: 2750,
                jual: 3000,
                diskon: 0,
                supplier: "Superindo",
            },
            {
                id: "17202",
                nama: "Indomie Rebus Kari Ayam",
                kategori: Makanan,
                satuan: "pcs",
                stok: 24,
                beli: 2750,
                jual: 3000,
                diskon: 0,
                supplier: "Superindo",
            }
        ];

        localStorage.setItem('products', JSON.stringify(productData));

    }
    return data;
}

async function generateTable() {
    try {
        const data = await fetchProducts();
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const headerRow = document.createElement('tr');

        for (const key in data[0]) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
        thead.appendChild(headerRow);

        data.forEach(item => {
            const row = document.createElement('tr');
            for (const key in item) {
                const cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);

        kontenTable.innerHTML = '';
        kontenTable.appendChild(table);
    } catch (error) {
        console.error('Error:', error);
    }
}


generateTable();