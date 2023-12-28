<script>
  /** @type {import('./$types').PageData} */
  import SettingsForm from "./settings-form.svelte";
  export let data;
</script>

<SettingsForm form={data.form} />
