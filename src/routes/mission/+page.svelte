<script>
  import Hero from "$lib/components/Hero.svelte";
  import Scroll from "$lib/components/Scroll.svelte";
</script>

<div class="absolute bottom-16 w-[25vw]">
  <Scroll />
</div>
<div class="mt-5 lg:mt-0">
  <Hero
    title={["Our Mission", "Never Lorem"]}
    titleMobile={["Our Mission", "Never Lorem"]}
    content={[""]}
    contentMobile={[""]}
  />
  <div class="h-svh"></div>

  <div class="flex flex-col gap-5 mt-20">
    <div
      class="gap-10 my-5 h-svh flex flex-col lg:flex-row overflow-hidden lg:overflow-visible"
    >
      <div class="lg:w-1/2 z-10">
        <p class="text-xs text-secondary mb-2">OBIETTIVO</p>
        <h1 class="text-2xl">Espandere gli orizzonti propri e altrui</h1>
        <p class="text-m lg:text-l mt-2.5">
          Definire, scoprire e progettare brand nuovi o già esistenti è solo una
          parte dell’obiettivo di QDS, per espandere gli orizzonti altrui è
          necessario creare persistenza e lasciare un segno nel tempo
        </p>
      </div>
      <div
        class="lg:w-1/2 flex place-content-center lg:scale-150 lg:-translate-x-[25%] z-0"
      >
        <img
          class="w-full rotate-onscroll opacity-30"
          src="/assets/graphics/espandi.svg"
          alt=""
        />
      </div>
    </div>
    <div
      class="gap-10 my-5 h-svh flex flex-col lg:flex-row overflow-hidden lg:overflow-visible"
    >
      <div class="lg:w-1/2 z-10">
        <p class="text-xs text-secondary mb-2">VISIONE</p>
        <h1 class="text-2xl">Realizzabile.</h1>
        <p class="text-m lg:text-l mt-2.5">
          Pensare il contrario è penalizzante già dalla nascita: tutto è
          realizzabile
        </p>
      </div>
      <div
        class="lg:w-1/2 flex place-content-center lg:scale-150 translate-x-[25%] lg:-translate-x-[25%] -translate-y-[5%] z-0 lg:overflow-visible"
      >
        <img
          class="w-full write opacity-30"
          src="/assets/graphics/pen.svg"
          alt=""
        />
      </div>
    </div>
    <div
      class="gap-10 my-5 h-svh flex flex-col lg:flex-row overflow-hidden lg:overflow-visible"
    >
      <div class="lg:w-1/2 z-10">
        <p class="text-xs text-secondary mb-2">POSIZIONAMENTO</p>
        <h1 class="text-2xl">Il passato come risorsa</h1>
        <p class="text-m lg:text-l mt-2.5">
          Utilizzare il pensiero per elaborare il passato ci permette di creare
          armonia o contrasto con esso e con ciò che ci circonda tuttora
        </p>
      </div>
      <div
        class="lg:w-1/2 flex place-content-center lg:scale-150 lg:-translate-x-[25%] -translate-y-[5%] z-0 lg:overflow-visible"
      >
        <img
          class="w-full show-x-onscroll opacity-30"
          src="/assets/graphics/connection.svg"
          alt=""
        />
      </div>
    </div>
    <div
      class="gap-10 my-5 h-svh flex flex-col lg:flex-row overflow-hidden lg:overflow-visible"
    >
      <div class="lg:w-1/2 z-10">
        <p class="text-xs text-secondary mb-2">VALORI</p>
        <h1 class="text-2xl">Contrasto</h1>
        <p class="text-m lg:text-l mt-2.5">
          Il contrasto, insieme al pensiero, è ciò che permette di creare qualcosa
        di sempre nuovo, più o meno forte rimarrà sempre presente all’interno
        delle creazioni
        </p>
      </div>
      <div
        class="lg:w-1/2 flex place-content-center lg:scale-150 lg:-translate-x-[25%] -translate-y-[5%] z-0 lg:overflow-visible"
      >
        <img
          class="w-full rotate-onscroll opacity-30"
          src="/assets/graphics/contrasto.svg"
          alt=""
        />
      </div>
    </div>
  </div>

  <div class="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-5">
    <div
      class="
      my-2.5 lg:my-0 border-2 border-secondary rounded-lg p-5
      lg:even:pl-5 lg:odd:pr-5
    "
    >
      <div class="mb-5 flex">
        <img
          class="w-full lg:w-1/6"
          src="/assets/graphics/chirale.svg"
          alt=""
        />
      </div>
      <h1 class="text-2xl">Chiralità</h1>
      <p class="text-m lg:text-l mt-2.5">
        QDS è una copia non sovrapponibile del passato per il futuro in quanto
        lo utilizza solamente come risorsa
      </p>
    </div>
    <div
      class="
      my-2.5 lg:my-0 border-2 border-secondary rounded-lg p-5
    "
    >
      <div class="mb-5 flex">
        <img
          class="w-full lg:w-1/6"
          src="/assets/graphics/determinazione.svg"
          alt=""
        />
      </div>
      <h1 class="text-2xl">Determinazione</h1>
      <p class="text-m lg:text-l mt-2.5">
        Aspirazioni, ambizioni e promesse sfociano in determinazione per il
        raggiungimento degli obiettivi
      </p>
    </div>
    <div
      class="
      my-2.5 lg:my-0 border-2 border-secondary rounded-lg p-5
    "
    >
      <div class="mb-5 flex">
        <img
          class="w-full lg:w-1/6"
          src="/assets/graphics/pulizia.svg"
          alt=""
        />
      </div>
      <h1 class="text-2xl">Pulizia</h1>
      <p class="text-m lg:text-l mt-2.5">
        Linee decise e nette aiutano a convogliare i nostri valori
      </p>
    </div>
    <div
      class="
      my-2.5 lg:my-0 border-2 border-secondary rounded-lg p-5
      "
    >
      <div class="mb-5 flex">
        <img class="w-full lg:w-1/6" src="/assets/graphics/sfondo.svg" alt="" />
      </div>
      <h1 class="text-2xl">Sfondo</h1>
      <p class="text-m lg:text-l mt-2.5">
        QDS mantiene a pari passo ciò che è visibile all’esterno e ciò che non
        lo è
      </p>
    </div>
  </div>
</div>

<style>
  .rotate-onscroll {
    animation-name: rotateAnimation;
    animation-duration: 1ms; /* Firefox requires this to apply the animation */
    animation-direction: alternate;
    animation-timeline: scroll(block nearest);
  }
  .write {
    animation: writeAnimation 2s 0.4s infinite;
  }
  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    90% {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes writeAnimation {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .show-x-onscroll{
    animation-name: showXAnimation;
    animation-duration: 1ms; /* Firefox requires this to apply the animation */
    animation-direction: alternate;
    animation-timeline: scroll(block nearest);
  }
  @keyframes showXAnimation {

    50% {
      transform: translate(-150%, -10%);
      opacity: 0;
    }
    75% {
      transform: translate(0%);
      opacity: 0.3;
    }
    100% {
      transform: translate(150%, 10%);
      opacity: 0;
    }
  }
</style>
