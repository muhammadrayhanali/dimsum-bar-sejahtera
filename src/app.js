document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
      items: [
        { id: 1, name: '~Ekado~', img:'1.jpg', price: 20000, description: 'Kulit tahu yang digoreng dengan 2 bahan utama, yakni telur puyuh, udang, yang kemudian diikat dengan nori.'},
        { id: 2, name: '~Wonton~', img:'2.jpg', price: 20000, description: 'Berbentuk seperti gumpalan awan yang berisi daging udang kemudian dibungkus dengan pangsit yang digoreng.'},
        { id: 3, name: '~Hakau~', img: '3.jpg', price: 20000, description: 'Dimsum kukus dengan bahan utama daging udang, diselimuti oleh kulit tipis bening membungkus.'},
        { id: 4, name: '~Siomay Kepiting~', img: '4.jpg', price: 20000, description: 'Siomay kukus dengan bahan utama daging ayam dan udang lalu dihiasi potongan kepiting diatasnya.'},
        { id: 5, name: '~Bapao Susu~', img: '5.jpg', price: 20000, description: 'Berbahan dasar tepung terigu dan bubuk susu yang diberi ragi sehingga mengembang, kemudian dikukus.'},
        { id: 6, name: '~Kulit Tahu Ayam~', img: '6.jpg', price: 20000, description: 'Kulit tahu tipis berbentuk balok yang digoreng, dengan bahan utama ayam.'},
        { id: 7, name: '~Angsio~', img: '12.jpg', price: 15000, description: 'Dimsum dengan berbahan dasar ceker ayam yang diberi bumbu khas pada saat memasaknya.'},
        { id: 8, name: '~Boba Original Thai Tea~', img: '7.jpg', price: 8000, description: 'Variant teh yang dipadukan dengan susu kental manis dan ditambahkan topping berupa bola bola bobba.'},
        { id: 9, name: '~Boba Green Tea~', img: '8.jpg', price: 8000, description: 'Teh hijau yang dipadukan dengan susu kental manis dan ditambahkan topping berupa bola bola bobba.'},
        { id: 10, name: '~Boba Strawberry Tea~', img: '9.jpg', price: 8000, description: 'Variant teh yang dipadukan dengan susu kental manis juga serbuk strawberry, kemudian ditambahkan topping berupa bola bola bobba.'},
        { id: 11, name: '~Boba Taro~', img: '10.jpg', price: 8000, description: 'Variant teh yang dipadukan dengan susu kental manis dan serbuk taro, kemudian ditambahkan topping berupa bola bola bobba.'},
        { id: 14, name: '~Milkshake Strawberry~', img: '14.jpg', price: 12000, description: 'Susu kocok yang dipadukan dengan buah strawberry, kemudian diberi ice cream vanila diatasnya.'},
        { id: 15, name: '~Milkshake Chocolate~', img: '15.jpg', price: 12000, description: 'Susu kocok yang dipadukan dengan chocolate, kemudian diberi ice cream vanila diatasnya.'},
        { id: 12, name: '~Lemon Tea~', img: '11.jpg', price: 5000, description: 'Air teh yang diberi sedikit perasan lemon, dan diberi potongan lemon diatas gelasnya.'},
        { id: 13, name: '~Ice Cream Strawberry~', img: '13.jpg', price: 9000, description: 'Ice cream yang dicampur dengan air strawberry, yang kemudian didinginkan di dalam pendingin sehingga ice menjadi beku.'},
      ],
  }));

  Alpine.store('cart',{
items: [],
total: 0,
quantity: 0,
add(newitem) {
  // cek apakah ada barang yang sama di cart
  const cartItem= this.items.find((item) => item.id === newitem.id);

  //ika belum ada / cart masih kosong

  if (!cartItem) {
    this.items.push({...newitem, quantity: 1, total: newitem.price });
    this.quantity++;
    this.total += newitem.price;
  } else {

    //jika barang udah ada, cek apakah barang beda atau sama dengan yang ada di cart
    this.items = this.items.map((item) => {

      // jika barang berbeda
      if(item.id !== newitem.id) {
        return item;
      } else {

        //jika barang sudah ada, tambah quantity dan totalnya
        item.quantity++;
        item.total = item.price * item.quantity;
        this.quantity++;
        this.total += item.price;
        return item;
      }
    });
  }
},
remove(id) {
  // ambil item yang mau di remove berdasarkan id nya
  const cartItem = this.items.find((item) => item.id === id);

  // jika item lebih dari satu
  if(cartItem.quantity > 1) {
    //telusuri 1 1
    this.items = this.items.map((item) => {
      // jika bukan barang di klik
      if(item.id !== id) {
        return item;
      } else {
        item.quantity--;
        item.total = item.price * item.quantity;
        this.quantity--;
        this.total -= item.price;
        return item;
      }
    })
  } else if (cartItem.quantity ===1 ) {
    //jika barangnya sisa satu
    this.items = this.items.filter((item) => item.id !== id);
    this.quantity--;
    this.total -= cartItem.price;
  }
},
  });
});

// konversi ke rupiah
const rupiah = (Number) => {
  return new Intl.NumberFormat ('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(Number)
}

