<template>
  <div class="generator">
    <div class="generator__generate">
      <button class="button" @click="create()">イイワケを考える！</button>
    </div>

    <div class="generator__form" v-if="doesGenerated()">
      <span class="generator__subject">{{ subject }}</span>が<span class="generator__reason">{{ reason }}</span>ので遅刻します！！！
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subject: '犬',
      reason: 'ハウスから出てこない',
      generated: false
    }
  },
  methods: {
    // TODO データのもたせ方
    create: function() {
      this.generated = true
    },
    doesGenerated: function() {
      return this.generated
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'LogoTypeJP';
  src: url('./LogoTypeJP.ttf') format('truetype');
}

.generator {
  text-align: center;
}

.generator__generate {
  margin: 40px 0;
}

.generator__form {
  width: 960px;
  margin: 0 auto;
  padding: 40px 50px;
  font-family: 'LogoTypeJP';
  font-size: 36px;
  background: #fffee9;
  border: 3px solid #fff;
  border-radius: 25px;
}

.generator__form span.generator__subject,
.generator__form span.generator__reason {
  color: #d64141;
}

.button {
	display: inline-block;
  padding: 5px 50px;
	text-align: center;
	text-decoration: none;
	outline: none;
  cursor: pointer;
  font-family: 'LogoTypeJP';
  font-size: 24px;
}
.button::before,
.button::after {
	position: absolute;
	z-index: -1;
	display: block;
	content: '';
}
.button,
.button::before,
.button::after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-transition: all .3s;
	transition: all .3s;
}

.button {
	position: relative;
	z-index: 2;
	background-color: #fff;
	border: 2px solid #fff;
	color: #a4d5d8;
	line-height: 50px;
}
.button:hover {
	background-color: #a4d5d8;
	border-color: #fff;
	color: #fff;
}
.button::before,
.button::after {
	top: 0;
	width: 50%;
	height: 100%;
	background-color: #fff;
}
.button::before {
	right: 0;
}
.button::after {
	left: 0;
}
.button:hover::before,
.button:hover::after {
	width: 0;
	background-color: #fff;
}
</style>
