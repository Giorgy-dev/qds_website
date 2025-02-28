<script>
  import Contatti from "./Contatti.svelte";
  import Section from "./Section.svelte";
</script>

<div class="flex flex-wrap lg:flex-nowrap w-full gap-5 mb-10 mt-48">
  <div class="flex-auto w-full lg:max-w-[20vw]">
    <Contatti />
  </div>
  <div class="flex-auto w-full lg:max-w-[20vw]">
    <Section title={["LEGAL", "↓ LEGAL", "↘ LEGAL"]}>
      <p class="col-span-4 text-xs font-normal row-span-2 content-end">
        Q Design Studio by VIRGO S.r.l.
        <br />
        Strada comunale delle Corti, 54n- 31100 TREVISO - TV
        <br />
        Tutti i servizi Q Design Studio sono forniti da VIRGO S.r.l.
      </p>
    </Section>
  </div>
</div>
