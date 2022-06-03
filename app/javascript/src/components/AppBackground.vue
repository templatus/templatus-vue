<template>
  <svg
    class="fixed inset-0 hidden h-96 w-full drop-shadow-xl lg:block"
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 100 100"
  >
    <defs>
      <linearGradient id="grad1" x1="0" y1="0" x2="100%" y2="0">
        <stop offset="0%" class="gradient__rails-dark" />
        <stop offset="30%" class="gradient__rails-light" />
        <stop offset="100%" class="gradient__vue" />
      </linearGradient>
    </defs>

    <polygon fill="url(#grad1)" points="0,0 0,100 100,40 100,0" />
  </svg>

  <svg
    class="fixed bottom-0 hidden h-96 w-full drop-shadow-xl lg:block"
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 100 100"
  >
    <defs>
      <linearGradient id="grad2" x1="0" y1="0" x2="100%" y2="0">
        <stop offset="0%" class="gradient__rails-dark" />
        <stop offset="60%" class="gradient__rails-light" />
        <stop offset="100%" class="gradient__vue" />
      </linearGradient>
    </defs>

    <polygon fill="url(#grad2)" points="0,80 0,100 100,100 100,50" />
  </svg>
</template>
