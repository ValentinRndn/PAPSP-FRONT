<template>
    <footer class=" text-grey font-semibold pt-8 pb-2 font-cgothic mx-auto flex justify-center items-center">
    <div class="container ">
        <div class="links h-10">
        <img src="../assets/PAPSP-logo.png" alt="logo-reseaux" class="h-[100px] w-[100] mx-auto mt-5 mb-2 hidden sm:block " />
            <ul class="text-sm flex gap-5 justify-center items-center sm:flex-col">
                <li><a href="#" class="">ACCUEIL</a></li>
                <li><a href="#" class="">CARTOGRAPHIE</a></li>
                <li><a href="#" class="">DOCUMENTATION</a></li>
                <li><a href="#" class="">CONTACT</a></li>
                <li><a href="#" class="">EN SAVOIR +</a></li>
                <p class="sm:hidden">|</p>
                <!-- <p class=""></p> -->
                <div class="socials flex sm:flex gap-5 ">
                <img src="../assets/fb.png" alt="logo-reseaux" class="h-[35px] w-[35px]" />
                <img src="../assets/ln.png" alt="logo-reseaux" class="h-[35px] w-[35px]" />
                <img src="../assets/insta.png" alt="logo-reseaux" class="h-[35px] w-[35px]" />
                <img src="../assets/tiktok.png" alt="logo-reseaux" class="h-[35px] w-[35px]" />
                </div>
        <p class="text-center text-xs font-cgothic hidden sm:block">© 2024 PAPSP. Tous droits réservés.</p>
                
            </ul>
        </div>

        <img src="../assets/PAPSP-logo.png" alt="logo-reseaux" class="h-[155px] w-[155px] mx-auto mt-4 sm:hidden" />
        <p class="text-center text-xs mt-4 font-cgothic sm:hidden">© 2024 PAPSP. Tous droits réservés.</p>

    </div>
</footer>

</template>

<script>
export default {
  name: 'Footer',

};
  </script>