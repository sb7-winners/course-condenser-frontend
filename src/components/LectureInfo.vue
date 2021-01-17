<template>
  <div class="container">
    <h1 class="title">{{title}}</h1>
    {{summary}}
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        summary: String
    }
}
</script>

<style>
.title {
  font-size: 3rem;
  font-weight: bold;
}
</style>