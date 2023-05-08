<template>
  <div id="qrCode">
    <div id='code'></div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<style></style>
<script>
import QRCode from 'qrcode'
  export default{
      props: {
      value: {
        type: String,
        required: true,
      },
    },
      data(){
          return {
            msg: 'hello vue',
            codes:''

          }
      },

    // components: {
    //   QRCode: QRCode
    // },

    methods: {
      useqrcode(){
        var canvas = document.getElementById('canvas')
        QRCode.toCanvas(canvas, this.value, function (error) {
          if (error) console.error(error)
          console.log('QRCode success!');
        })
      }
    },

    mounted(){
          this.useqrcode();
    }
  }
</script>

