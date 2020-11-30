<template>
  <div class="home">
    <sec1 />
    <sec2 />
    <sec3 />
  </div>
</template>

<script>
// @ is an alias to /src
import sec1 from '@/components/layout/homepage/section1';
import sec2 from '@/components/layout/homepage/section2';
import sec3 from '@/components/layout/homepage/section3';

export default {
  name: 'home',
  components: {
    sec1,
    sec2,
    sec3
  }
}
</script>
