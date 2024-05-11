document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
      items: [
        { id: 1, name: '~Ekado~', img:'1.jpg', price: 16000},
        { id: 2, name: '~Wonton~', img:'2.jpg', price: 16000},
        { id: 3, name: '~Hakau~', img: '3.jpg', price: 16000},
        { id: 4, name: '~Siomay Kepiting~', img: '4.jpg', price: 16000},
        { id: 5, name: '~Bapao Susu~', img: '5.jpg', price: 16000},
        { id: 6, name: '~Kulit Tahu Ayam~', img: '2.jpg', price: 16000},
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