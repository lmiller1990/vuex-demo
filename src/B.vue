<template>
  <div>
    Component B
    {{ other }}
    Store gretting: {{ $store.state.storeGreeting}}
  </div>  
</template>

<script>
export default {
  props: ['other'] 

}
</script>

