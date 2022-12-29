<template>
  <form
    class="email-signup"
    action="https://danehillard.us3.list-manage.com/subscribe/post?u=7b074cb21df3367b6d1c4f049&amp;id=25089b656d"
    method="post"
    target="_blank"
    novalidate
  >
    <p>
      Sign up below to receive important updates about the book. Right now the book is available in
      print and eBook from Manning, and should be available on Amazon and Kindle soon.
    </p>
    <TextInput
      id="mce-EMAIL"
      class="required email"
      name="EMAIL"
      type="email"
      placeholder="youre@thebomb.com"
    >
      Email
    </TextInput>

    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px" aria-hidden="true">
      <input type="text" name="b_7b074cb21df3367b6d1c4f049_25089b656d" tabindex="-1" value="" />
    </div>

    <PrimaryButton type="submit" name="subscribe" id="mc-embedded-subscribe"
      >Subscribe</PrimaryButton
    >
  </form>
</template>

<script>
import PrimaryButton from "./atoms/PrimaryButton.vue";
import TextInput from "./atoms/TextInput.vue";

export default {
  name: "SignupForm",
  components: {
    PrimaryButton,
    TextInput,
  },
};
</script>

<style>
.email-signup {
  margin: var(--spacing-roomy) 0;
}
</style>
