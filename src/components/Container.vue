<template>
  <div class="container">
    <app-header></app-header>
    <generator></generator>
    <app-description></app-description>
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader'
import Generator from '@/components/generator/Generator'
import AppDescription from '@/components/description/AppDescription'

export default {
  name: 'main',
  components: {
    'app-header': AppHeader,
    'generator': Generator,
    'app-description': AppDescription
  }
}
</script>
