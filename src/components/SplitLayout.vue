<template>
  <div id="splitLayoutContainer">
    <div class="pane-container">
      <slot name="primary"></slot>
    </div>
    <div class="pane-container">
      <slot name="secondary"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#splitLayoutContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.pane-container {
  width: 50%;
}
</style>