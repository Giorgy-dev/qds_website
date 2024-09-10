<script lang="ts">
  import Grid from "$lib/components/Grid.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Scroll from "$lib/components/Scroll.svelte";
  import Section from "$lib/components/Section.svelte";
  import VideoSection from "$lib/components/VideoSection.svelte";

  let branding_process = [
    {
      char: ".1",
      title: "Ambiente",
      description: `
          Ci conosciamo e valutiamo lo scenario competitivo e l'ambiente in cui si muove il brand
          `,
    },
    {
      char: ".2",
      title: "Identità",
      description: `
          Definiamo i valori, visione, obiettivi e posizionamento del brand: tutto è specchio del cliente 
          `,
    },
    {
      char: ".3",
      title: "«Boom»",
      description: `
          Tutto viene tradotto visivamente e strutturato in un libro dedicato volto a guidare chiunque lavori con il brand
          `,
    },
  ];
</script>

<div class="absolute bottom-16 w-[25vw]">
  <Scroll />
</div>
<div class="mt-5 lg:mt-0">
  <Hero
    title={["«Brand Boom»", "Contact Us↘", "↙Other Works", "Never Lorem"]}
    titleMobile={[
      "«Brand Boom»",
      "Contact Us↘",
      "↙Other Works",
      "Never Lorem",
    ]}
    content={[
      `Branding è conoscere ciò che rende unico e differente un'azienda, un`,
      `prodotto, un servizio o una persona e renderlo evidente agli occhi di tutti.`,
      `È un processo articolato e continuo: il brand è l'espressione visiva,`,
      `verbale e sensoriale che tocca il tuo pubblico.`,
    ]}
    contentMobile={[
      `Branding è conoscere ciò che rende unico e differente un'azienda, un
    prodotto, un servizio o una persona e renderlo evidente agli occhi di tutti.
    È un processo articolato e continuo: il brand è l'espressione visiva,
    verbale e sensoriale che tocca il tuo pubblico..`,
    ]}
  ></Hero>
  <div class="h-svh"></div>

  <div class="mb-10 relative w-full">
    
    <VideoSection banner="→BRANDING" bottomBanner="BRANDING←" videoSrc="/assets/video/branding_stock.mp4" />

    <Section title={["↓ PERCORSO", "↘ PERCORSO", "• PERCORSO", "PERCORSO"]}>
      <div>
        <p class="mb-5">
          Vuoi capire come funziona? Questo è il percorso di branding che
          intraprenderemo.
        </p>
        <div class="w-full">
          <Grid items={branding_process}></Grid>
        </div>
      </div>
    </Section>
  </div>
</div>
