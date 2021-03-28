<template>
  <div class="container-fluid">
    <p class="header text-center">{{ $t('message.contact.header') }}</p>
    <form
      action="https://formspree.io/f/meqpwwjo"
      method="POST"
    >
      <label>
        {{ $t('message.contact.email') }}
        <input type="text" name="_replyto">
      </label>
      <label>
        {{ $t('message.contact.message') }}
        <textarea name="message" rows="15" cols="20"></textarea>
      </label>

      <!-- your other form fields go here -->

      <button type="submit" class="btn btn-primary">{{ $t('message.contact.send') }}</button>
    </form>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact Cryptohawk.ca',
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  background-color: $dark;
  color: $lightest;
  padding-top: 40px;
}
form {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  max-width: 800px;
}
label {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.header {
  font-weight: bold;
}
.btn {
  margin: 20px auto;
  background-color: $light;
}
</style>
