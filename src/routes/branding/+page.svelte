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

    {#if data.trial}
      <div class="my-20">
        <Section title={data.trial.section.title}>
          <div>
            <p class="mb-5">
              {data.trial.section.paragraph}
            </p>
            <div class="w-full">
              <Grid items={data.trial.content}></Grid>
            </div>
          </div>
        </Section>
      </div>
    {/if}

    <div class="my-[15rem]"></div>

    {#if data.quote}
      <Quote quote={data.quote} />
    {/if}

    {#if data.hiddenText}
      <div class="my-20 p-5 border-2 border-grey-200 w-full rounded-lg">
        <h6 class="text-xl">Se vuoi leggere altro</h6>
        <div class="lg:max-w-[80%] max-w-[90%]">
          <HiddenText texts={data.hiddenText} />
        </div>
      </div>
    {/if}
  </div>
</div>
