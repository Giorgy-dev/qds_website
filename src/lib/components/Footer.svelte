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
        Q Design Studio by The Hive S.r.l.
        <br />
        Viale dell'Industria, 19 - 35129 PADOVA - PD
        <br />
        P.IVA: 05260180285
        <br />
        Tutti i servizi Q Design Studio sono forniti da The Hive S.r.l.
      </p>
    </Section>
  </div>
</div>
