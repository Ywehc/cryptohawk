<template>
    <tr>
        <td><img  :src="img_url" alt="bitcoin" class="icon"></td>
        <td >{{ name }}</td>
        <td>${{ price }}</td>
    </tr>
</template>

<script>

export default {
  props: ['name', 'img_url', 'price'],
};
</script>

<style scoped lang="scss">
.icon {
    width: $coin_icon_width;
    height: $coin_icon_height;
    margin: $coin_icon_margin;
}
</style>
