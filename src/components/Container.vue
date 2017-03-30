<template>
  <div class="container">
    <app-header></app-header>
    <generator></generator>
    <app-description></app-description>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import Generator from '@/components/Generator'
import AppDescription from '@/components/AppDescription'

export default {
  name: 'main',
  components: {
    'app-header': AppHeader,
    'generator': Generator,
    'app-description': AppDescription
  }
}
</script>
