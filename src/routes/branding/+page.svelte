<script lang="ts">
  import Grid from "$lib/components/Grid.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Scroll from "$lib/components/Scroll.svelte";
  import Section from "$lib/components/Section.svelte";
  import VideoSection from "$lib/components/VideoSection.svelte";
  import HiddenText from "$lib/components/HiddenText.svelte";
  import Quote from "$lib/components/Quote.svelte";

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

  let HiddenTextData = [
    {
      title: "Il branding riguarda solo grandi aziende?",
      content: [
        `Spesso si pensa al branding come un’attività svolta solo da grandi aziende con ingenti budget, ti farà piacere sapere che non è strettamente necessario.
        Il mercato italiano è composto maggiormente da piccole e micro imprese spesso sconosciute. Il loro approccio è prettamente commerciale con focalizzazione
        sul prodotto o servizio ma è inevitabile che miglioramenti di qualità o introduzione di innovazioni vengano adottati anche dalla concorrenza. Il risultato
        è che la clientela segue il prodotto a loro più conveniente, e già domani potrebbe non essere più il tuo. Fornire loro un legame visivo (e non solo) con
        un brand li porterà a sceglierti nuovamente qualora il tuo prodotto gli sia piaciuto in passato.
`,
      ],
    },
  ];

  let quote = {
    quote:
      "In questa società in continua evoluzione, i marchi più potenti e duraturi sono costruiti col cuore. Sono reali e sostenibili. Le loro basi sono solide perché sono costruite con la forza dello spirito umano e non su una campagna pubblicitaria. Le società più durature sono quelle autentiche",
    author: "Howard Schultz",
  };
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
    <VideoSection
      banner="→BRANDING"
      bottomBanner="BRANDING←"
      videoSrc="/assets/video/branding_stock.mp4"
    />
    <VideoSection
      banner="ALTRO VIDEO"
      videoSrc="/assets/video/branding_stock.mp4"
    />

    <div class="my-20">
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

    <Quote {quote} />

    <div class="my-20 p-5 border-2 border-grey-200 w-full rounded-lg">
      <h6 class="text-xl">Se vuoi leggere altro</h6>
      <div class="lg:max-w-[80%] max-w-[90%]">
        <HiddenText texts={HiddenTextData} />
      </div>
    </div>
  </div>
</div>
