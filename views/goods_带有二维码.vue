<template>
  <div class="container">
    <h1>商品列表</h1>
    <ul class="item-list">
      <li v-for="item in items" :key="item.id" class="item">
        <div class="item-info">
        <div class="item-name">{{ item.name }}</div>
        <div class="item-price">
          <span>价格：</span>{{ item.price }}<span> 元</span>
        </div>
        <button class="btn" @click="addToCart(item)">加入购物车</button>
      </div>
      </li>
    </ul>

    <div class="cart-box">
      <h2>购物车</h2>
      <ul class="cart-list">
        <li v-for="item in cartItems" :key="item.id" class="cart-item">
          <span>{{ item.name }}</span>
          <span>数量：{{ item.quantity }}</span>
          <span>价格：{{ item.price * item.quantity }} 元</span>
        </li>
      </ul>

      <div class="qrcode-box">
        <div class="qrcode-wrapper">
          <p>这是一个二维码：</p>
          <q-r-code value="https://www.baidu.com/" class="qrcode"></q-r-code>
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
      qrCodeUrl: 'https://www.example.com/qrcode.png',
    };
  },
  methods: {
    addToCart(item) {
      const cartItem = this.cartItems.find((i) => i.id === item.id);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        this.cartItems.push({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
        });
      }
    },
  },
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
  padding: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.item-image {
  max-width: 200px;
  height: auto;
  margin-right: 20px;
}

.item-info {
  flex: 1;
}

.btn {
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
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

.item-info {
  display: flex;
  justify-content: space-between;
}

.item-name, .item-price {
  flex: 1;
}

.item-price {
  text-align: right;
}

.btn {
  width: 100px;
  height: 40px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}
</style>