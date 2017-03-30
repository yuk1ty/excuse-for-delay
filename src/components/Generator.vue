<template>
  <div class="generator">
    <div class="generator__main-message">
      <p>遅刻のイイワケを考えちゃうゾウ！</p>
    </div>

    <div class="generator__form">
      <span class="generator__subject">{{ subject }}</span>が<span class="generator__reason">{{ reason }}</span>たので遅刻します！！！
      <button>イイワケを考える！</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subject: '[ ここに主語が入るよ！ ]',
      reason: '[ ここに遅刻のイイワケが入るよ！ ]'
    }
  }
}
</script>
