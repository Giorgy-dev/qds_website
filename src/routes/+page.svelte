<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import Scroll from "$lib/components/Scroll.svelte";
  import Section from "$lib/components/Section.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import VideoBtn from "$lib/components/VideoBtn.svelte";
  import Person from "$lib/components/Person.svelte";

  let processo = [
    {
      char: ".1",
      title: "Contatto",
      description: `
          La nostra consulenza inizia sempre con la profonda conoscenza del cliente
          `,
    },
    {
      char: ".2",
      title: "Traduzione",
      description: `
          Le bozze si concretizzano in prime realizzazioni e valutazioni di quanto svolto
          `,
    },
    {
      char: ".3",
      title: "Stretta di mano",
      description: `
          Formiamo il prodotto finito da poter integrare nella comunicazione aziendale
          `,
    },
  ];
</script>

<div class="absolute bottom-16 w-[25vw]">
  <Scroll />
</div>
<div class="mt-5 lg:mt-0 w-full">
  <Hero
    title={["Design Studios", "↙Our Works", "Contact Us↘", "Never Lorem"]}
    titleMobile={[
      "Design Studios",
      "Our Works↗",
      "Contact Us↓",
      "Never Lorem",
    ]}
    content={[
      "Q Design Studios è una realtà dedicata alla creazione,",
      "di cosa? tutto.",
    ]}
    contentMobile={[
      "Q Design Studios è una realtà dedicata alla creazione, di cosa? tutto.",
    ]}
  ></Hero>
  <div class="h-svh"></div>

  <div class="mb-10 relative w-full">
    <Section title={["↓ SERVIZI", "↘ SERVIZI", "• SERVIZI", "SERVIZI"]}>
      <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-2.5">
        <div class="lg:col-span-2">
          <a href="/branding">
            <VideoBtn title="Branding" videoSrc="/assets/video/branding.mp4" />
          </a>
        </div>
        <a href="/grafica"
          ><VideoBtn title="Grafica" videoSrc="/assets/video/grafica.mp4" /></a
        >
        <a href="/uiuxdesign"
          ><VideoBtn
            title="UI/UX Design"
            videoSrc="/assets/video/grafica.mp4"
          /></a
        >
        <a href="/sounddesign"
          ><VideoBtn
            title="Sound Design"
            videoSrc="/assets/video/sounddesign2.mp4"
          /></a
        >
        <a href="/fotografia"
          ><VideoBtn
            title="Fotografia"
            videoSrc="/assets/video/grafica.mp4"
          /></a
        >
      </div>
    </Section>

    <div class="my-20"></div>
    
    <Section title={["↓ CHI SIAMO", "↘ CHI SIAMO", "• CHI SIAMO", "CHI SIAMO"]}>
      <div class="w-full flex flex-nowrap overflow-x-auto gap-5 lg:gap-10 lg:px-5 lg:pt-5">
        <Person
          imgsrc={'assets/img/stock_portrait.webp'}
          name={'Alessandro'}
          paragraph={`Sono Alessandro, 20 anni, da sempre ho una passione ben radicata per il Web Design e la cura del cliente. L'unione di queste due peculiarità mi ha portato alla fondazione di Virgo.`}
          label={'Co-founder'}
          skills={['Management', 'Customer Care']}
          />
        <Person
          imgsrc={'assets/img/stock_portrait.webp'}
          name={'Alessandro'}
          paragraph={`Sono Alessandro, 20 anni, da sempre ho una passione ben radicata per il Web Design e la cura del cliente. L'unione di queste due peculiarità mi ha portato alla fondazione di Virgo.`}
          label={'Co-founder'}
          skills={['Management', 'Customer Care']}
          />
      </div>
    </Section>

    <div class="my-20"></div>

    <Section title={["↓ PROCESSO", "↘ PROCESSO", "• PROCESSO", "PROCESSO"]}>
      <div>
        <p class="mb-5">
          Il processo è parte fondamentale per un team creativo di qualsiasi
          genere, così come per il cliente
        </p>
        <div class="w-full">
          <Grid items={processo}></Grid>
        </div>
      </div>
    </Section>
  </div>
</div>
