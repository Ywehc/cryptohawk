<template>
    <div class="container">
        <table class="table table-bordered table-sm">
          <thead>
            <tr>
              <th scope="col" colspan="3" class="title-cell">
                <a :href="url" class="title-url" target="_blank">
                  {{ title }}
                </a>
              </th>
            </tr>
          </thead>
          <tbody class="card-body">
            <tr>
              <td colspan="3" class="p-3"><p>{{ description }}</p></td>
            </tr>
            <tr>
              <td colspan="3" class="text-center">
                <img
                  :src="require(`@/../public/assets/${img_src}`)"
                  :alt="img_src">
              </td>
            </tr>
            <tr>
              <td colspan="3" class="button-cell text-center">
                <p class="mb-2">{{ $t('message.grid.go_to') }} </p>
                <a class="btn btn-primary btn-sm"
                  :href="url"
                  role="button"
                  target="_blank">
                    {{ title }}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
export default {
  props: ['title', 'url', 'img_src', 'alt', 'description'],
};
</script>

<style scoped lang="scss">
tr {
    border-color: $medium;
    background-color: $lightest;
}
td {
    font-size: $main-text-size;
}
img {
  max-width: 180px;
}
.btn-primary {
    background-color: $attention;
    border-color: $attention;
    color: $darkest;
    font-weight: bold;
    margin-bottom: 8px;
}
.btn-primary:hover {
    background-color: $darkest;
    color: $attention;
    border-color: $darkest;
}
.title-url {
    text-decoration: none;
    color: $lightest;
}
.title-url:hover {
    color: $attention;
}
.title-cell {
    background: linear-gradient(to left, $medium, $dark);
    padding: 8px;
    font-size: 16px;
    border-color: $dark;
}
@media only screen and (min-width: 992px) {
    .table {
      height: 480px;
    }
}

</style>
