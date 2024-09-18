<script lang="ts">
  import Grid from "$lib/components/Grid.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Scroll from "$lib/components/Scroll.svelte";
  import Section from "$lib/components/Section.svelte";
  import VideoSection from "$lib/components/VideoSection.svelte";
  import HiddenText from "$lib/components/HiddenText.svelte";
  import Quote from "$lib/components/Quote.svelte";

  export let data;
  let brandingProcess = data.trial;
  let hiddenText = data.hiddenText;
  let quote = data.quote;
</script>

<div class="absolute bottom-16 w-[25vw]">
  <Scroll />
</div>
<div class="mt-5 lg:mt-0">
  <Hero
    title={data.hero.title}
    titleMobile={data.hero.titleMobile}
    content={data.hero.content}
    contentMobile={data.hero.contentMobile}
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
            <Grid items={brandingProcess}></Grid>
          </div>
        </div>
      </Section>
    </div>

    <div class="my-[15rem]"></div>
    <Quote {quote} />

    <div class="my-20 p-5 border-2 border-grey-200 w-full rounded-lg">
      <h6 class="text-xl">Se vuoi leggere altro</h6>
      <div class="lg:max-w-[80%] max-w-[90%]">
        <HiddenText texts={hiddenText} />
      </div>
    </div>
  </div>
</div>
