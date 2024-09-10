<!--Scroll down-->
<div class="grid grid-cols-1 grid-rows-3 w-fit mt-10">
  <div class="bounce-del-0 mt-2">
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.219727 15.7913C7.2049 16.582 14.1242 19.811 16.8919 27.1916H17.0237L16.9578 0.634766H23.4817L23.4158 27.1916H23.5476C26.3153 19.811 33.2346 16.582 40.2197 15.7913V22.5788C30.8622 23.5672 23.3499 29.6298 23.2181 40.2394H17.2214C17.1555 29.6298 9.57722 23.5672 0.219727 22.5788V15.7913Z"
        fill="#FD4912"
      />
    </svg>
  </div>
  <div class="bounce-del-1 mt-2">
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.219727 15.7913C7.2049 16.582 14.1242 19.811 16.8919 27.1916H17.0237L16.9578 0.634766H23.4817L23.4158 27.1916H23.5476C26.3153 19.811 33.2346 16.582 40.2197 15.7913V22.5788C30.8622 23.5672 23.3499 29.6298 23.2181 40.2394H17.2214C17.1555 29.6298 9.57722 23.5672 0.219727 22.5788V15.7913Z"
        fill="#FD4912"
      />
    </svg>
  </div>
  <div class="bounce-del-2 mt-2 grid grid-rows-1 grid-cols-2">
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.219727 15.7913C7.2049 16.582 14.1242 19.811 16.8919 27.1916H17.0237L16.9578 0.634766H23.4817L23.4158 27.1916H23.5476C26.3153 19.811 33.2346 16.582 40.2197 15.7913V22.5788C30.8622 23.5672 23.3499 29.6298 23.2181 40.2394H17.2214C17.1555 29.6298 9.57722 23.5672 0.219727 22.5788V15.7913Z"
        fill="#FD4912"
      />
    </svg>
  </div>
  <h1 class="text-l rotate-90 translate-y-[-250%] text-primary">SCROLL DOWN</h1>
</div>

<style>
  .bounce-del-0 {
    animation: bounce 2s infinite ease-in-out;
  }
  .bounce-del-1 {
    animation: bounce 2s infinite ease-in-out 0.1s;
  }
  .bounce-del-2 {
    animation: bounce 2s infinite ease-in-out 0.2s;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
    }
    50% {
      transform: translateY(25%);
    }
  }
  h1 {
    font-family: "FFF Acid Grotesk Bold", sans-serif;
    @apply whitespace-nowrap;
  }
</style>
