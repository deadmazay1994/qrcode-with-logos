/*
 * @Author: super
 * @Date: 2019-06-27 16:29:26
 * @Last Modified by: super
 * @Last Modified time: 2019-07-01 15:51:26
 */
// import QrCodeWithLogo from "../lib/qrcode-with-logos.js";
// const QrCodeWithLogo = require('../lib/qrcode-with-logos.common')
import QrCodeWithLogo from '../lib/qrcode-with-logos.esm'

const Logo = require("./super.jpg");
let demo = new QrCodeWithLogo({
  canvas: document.getElementById("canvas"),
  content: "https://github.com/zxpsuper",
  width: 380,
  // download: true,
  image: document.getElementById("image"),
  logo: {
    src: Logo
  }
})
// demo.toCanvas()
demo.toImage()
demo.getCanvas().then(canvas => {
  console.log(canvas)
  canvas.toBlob(function(blob) {
    console.log(blob)
  })
})


