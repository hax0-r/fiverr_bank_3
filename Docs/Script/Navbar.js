
document.addEventListener("DOMContentLoaded", function () {
  const footerTemplate = `
<header class=" body-font px-4 z-20">
<div class="container h-24 mx-auto flex justify-between items-center">
  <div class="flex items-center gap-12">
    <a href="./index.html" class="flex items-center">
      <img src="./Docs/images/logo.png" class="h-16" alt="">
      <span class="ml-3 text-xl font-bold ">Square <p class="leading-5 pl-3">Finance</p></span>
    </a>
    <nav class="lg:flex hidden ">
      <a href="./Banques.html" class=" mr-5 font-medium ">Banques Pro</a>
      <a href="./Assurances.html" class=" mr-5 font-medium ">Assurances</a>
      <a href="./story.html" class=" mr-5 font-medium ">Notre histoire</a>
      <a href="./blog.html" class="  font-medium">Blog</a>
    </nav>
  </div>
  <div class="hidden md:block">
        <a href="./index.html#allInOne">
    <button
      class="inline-flex items-center  border-zinc-200  py-3 transition-all px-5  focus:outline-none hover:bg-gray-200 rounded-full border-2 text-base mt-4 md:mt-0">Nos
      comparaisons
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </a>
  </div>
    <i class="fa-solid fa-bars text-2xl cursor-pointer z-10 md:hidden" id="openNav"></i>
</div>
</header>

<div id="resNav" class="fixed transition-all right-0 top-0 h-screen w-0 overflow-hidden  bg-[#ad9c8c] z-50 ">
<h2 class="right-5 top-8 absolute cursor-pointer " id="closeNav">
  <i class="fa-solid fa-xmark text-2xl"></i>
</h2>
<a class="flex items-center">
  <img src="./Docs/images/logo.png" class="h-16" alt="">
  <span class="ml-3 text-xl font-bold ">Square <p class="leading-5 pl-3">Finance</p></span>
</a>
<div class="mt-10 flex flex-col gap-1">
  <a href="./Maintenance.html"
    class="hover:bg-[#7e6c5e] hover:text-white transition-all rounded-lg p-3 font-medium ">Banques Pro</a>
  <a href="./Maintenance.html"
    class="hover:bg-[#7e6c5e] hover:text-white transition-all rounded-lg p-3 font-medium ">Assurances</a>
  <a href="./Maintenance.html"
    class="hover:bg-[#7e6c5e] hover:text-white transition-all rounded-lg p-3 font-medium ">Notre histoire</a>
  <a href="./Maintenance.html"
    class="hover:bg-[#7e6c5e] hover:text-white transition-all rounded-lg p-3 font-medium">Blog</a>
</div>
</div>
     
    `;

  document.getElementById("navbar").innerHTML = footerTemplate;
});
