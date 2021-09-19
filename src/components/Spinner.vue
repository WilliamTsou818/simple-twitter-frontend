<template>
  <div class="spinner"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.spinner {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 32px 0;
  border: 3px solid var(--theme-200);
  border-radius: 50%;
  border-top-color: var(--theme);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 0.5s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
