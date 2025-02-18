<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import Scroll from "$lib/components/Scroll.svelte";
  import Section from "$lib/components/Section.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import VideoBtn from "$lib/components/VideoBtn.svelte";
  import Person from "$lib/components/Person.svelte";
  import Video from "$lib/components/Video.svelte";

  export let data;
  let trial = data.trial;
</script>

<div class="absolute bottom-16 w-[25vw]">
  <Scroll />
</div>
<div class="mt-5 lg:mt-0 w-full">
  <Hero
    title={data.hero.title}
    titleMobile={data.hero.titleMobile}
    content={data.hero.content}
    contentMobile={data.hero.contentMobile}
  ></Hero>
  <div class="h-svh"></div>
  <div class="mb-10 relative w-full">
    <Section title={["↓ SERVIZI", "↘ SERVIZI", "• SERVIZI", "SERVIZI"]}>
      <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-2.5">
        <div class="lg:col-span-2">
          <Video title="Branding" videoSrc="/assets/video/branding.mp4" />
          <!--<a href="/branding"></a>-->
        </div>
        <div class="lg:row-span-2">
          <!--<a href="/grafica"
          </a>-->
          <Video title="Grafica" videoSrc="/assets/video/grafica.mp4" />
        </div>
        <!--<a href="/uiuxdesign">
        </a>-->
        <Video title="UI/UX Design" videoSrc="/assets/video/uiux.mp4" />
        <!--<a href="/sounddesign"
          ><VideoBtn
            title="Sound Design"
            videoSrc="/assets/video/sounddesign2.mp4"
          /></a
        >-->
        <!--<a href="/fotografia">
        </a>-->
        <Video title="Fotografia" videoSrc="/assets/video/fotografia.mp4" />
      </div>
    </Section>

    <div class="my-20"></div>
    <!-- CHI SIAMO
    <Section
      title={["↓ CHI SIAMO", "↘ CHI SIAMO", "• CHI SIAMO", "CHI SIAMO"]}
    >
      <div class="w-full flex flex-wrap gap-5 lg:gap-10 lg:px-5 lg:pt-5 pb-10">
        {#each data.people as person}
          <Person
            imgsrc={person.imgsrc}
            name={person.name}
            paragraph={person.paragraph}
            label={person.label}
            skills={person.skills}
          />
        {/each}
      </div>
    </Section>
    -->

    <Section
      title={["• LO STUDIO", "LO STUDIO", "↓ LO STUDIO", "↘ LO STUDIO"]}
    >
      <p>
        Abbiamo teste diverse, ognuna con personalità e abilità differenti. Ma
        siamo anche un insieme di persone che condividono non solo gli stessi
        obiettivi, ma anche la stessa attitudine e gli stessi interessi: quelli
        dei nostri clienti. Qui la creatività incontra il metodo, la strategia
        si fonde con la fantasia. Ci piace piuttosto raccontare che siamo uno
        Studio creativo orizzontale dall’anima artigianale: crediamo che solo
        attraverso l’attenzione al dettaglio, l’esperienza, la passione e la
        cura tipica degli artigiani possano nascere progetti di marketing e
        comunicazione realmente tailor-made.
      </p>
    </Section>

    <div class="my-20"></div>

    <Section title={data.trial.title}>
      <p class="mb-5">
        {data.trial.context}
      </p>
      <div class="w-full">
        <Grid items={data.trial.content}></Grid>
      </div>
    </Section>
  </div>
</div>
