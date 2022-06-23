<template>
  <form
    action="https://danehillard.us3.list-manage.com/subscribe/post?u=7b074cb21df3367b6d1c4f049&amp;id=25089b656d"
    method="post"
    target="_blank"
    novalidate
  >
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
      <input
        type="text"
        name="b_7b074cb21df3367b6d1c4f049_25089b656d"
        tabindex="-1"
        value=""
      />
    </div>

    <PrimaryButton type="submit" name="subscribe" id="mc-embedded-subscribe"
      >Subscribe</PrimaryButton
    >
  </form>
</template>

<script>
import PrimaryButton from "./PrimaryButton.vue";
import TextInput from "./TextInput.vue";

export default {
  name: "SignupForm",
  components: {
    PrimaryButton,
    TextInput,
  },
};
</script>
