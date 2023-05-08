<template>
  <div class="container">
    <h1>商品列表</h1>
    <ul class="item-list">
      <li v-for="item in items" :key="item.id" class="item">
        <div class="item-info">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-price">{{ item.price }} 元</div>
        </div>
        <button class="btn" @click="addToCart(item)">加入购物车</button>
      </li>
    </ul>

    <div class="cart-box" v-if="cartItems.length">
      <h2>购物车</h2>
      <ul class="cart-list">
        <li v-for="cartItem in cartItems" :key="cartItem.id" class="cart-item">
          <div class="cart-item-info">
            <div class="cart-item-name">{{ cartItem.name }}</div>
            <div class="cart-item-quantity">x {{ cartItem.quantity }}</div>
          </div>
          <div class="cart-item-price">{{ cartItem.price }} 元</div>
        </li>
      </ul>
      <div class="qrcode-box">
        <h3>扫码结算</h3>
        <div class="qrcode-wrapper">
          <q-r-code value="http://119.29.21.29:2333/" class="qrcode"></q-r-code>
          <div class="qrcode-desc">长按保存二维码</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import QRCode from '../src/components/QRCode.vue'
export default {
  components: {QRCode},
  data() {
    return {
      items: [
        { id: 1, name: '商品1', price: 100 },
        { id: 2, name: '商品2', price: 200 },
        { id: 3, name: '商品3', price: 300 },
      ],
      cartItems: [],
    };
  },
  methods: {
    addToCart(item) {
      const cartItem = this.cartItems.find((i) => i.id === item.id);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        this.cartItems.push(this.createCartItem(item));
      }
    },
    createCartItem(item) {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
      }
    },
    // getCartLink() {
    //   const baseUrl = 'https://example.com/cart';
    //   const queryString = this.cartItems
    //     .map((item) => `id=${item.id}&quantity=${item.quantity}`)
    //     .join('&');
    //   return `${baseUrl}?${queryString}`;
    // },
  },
  // components: {
  //   'q-r-code': {
  //     props: ['value', 'size'],
  //     template: '<img class="qrcode" :src="qrCodeUrl">)',
  //     computed: {
  //       qrCodeUrl() {
  //         const encodedValue = encodeURIComponent(this.value);
  //         return `https://chart.googleapis.com/chart?chs=${this.size}x${this.size}&cht=qr&chl=${encodedValue}`;
  //       },
  //     },
  //   },
  // },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.item-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.item {
  border: 1px solid #ccc;
  border-radius: 5px;
  /* padding: 10px;
  margin: 10px 0; */
  /* 增加上下边距 */
  margin: 20px 50px;
  /* 增加左右内边距 */
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.item-info {
  display: flex;
  justify-content: space-between;
  flex: 1;
}

.item-name,
.item-price {
  flex: 1;
}

.item-price {
  text-align: right;
}

.btn {
  width: 100px;
  height: 40px;
  margin: 0px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.cart-box {
  margin-top: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.cart-item-info {
  margin: 0px 20px;
  display: flex;
  flex: 1;
}

.cart-item-name{
  margin: 0px 20px;
}
.cart-item-quantity {
  flex: 1;
}

.cart-item-price {
  text-align: right;
}

.qrcode-box {
  margin-top: 30px;
  text-align: center;
}

.qrcode-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qrcode {
  width: 200px;
  height: auto;
}
</style>
