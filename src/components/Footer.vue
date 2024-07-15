<template>
    <footer class=" text-grey font-semibold pt-8 pb-2 font-cgothic mx-auto flex justify-center items-center">
    <div class="container ">
        <div class="links h-10">
        <img src="../assets/logo_typo.png" alt="logo-reseaux" class="h-[100px] w-[100] mx-auto  mb-2 hidden sm:block " />
            <ul class="text-sm flex gap-5 justify-center items-center sm:flex-col">
                <li><router-link to="/">ACCUEIL</router-link></li>
                <li><router-link to="/map">CARTOGRAPHIE</router-link></li>
                <li><router-link to="/guide">GUIDE</router-link></li>
                <li><router-link to="/blog">BLOG</router-link></li>
                <li><router-link to="/contact">CONTACT</router-link></li>
                <p class="sm:hidden text-3xl text-yellow">|</p>


                <!-- <p class=""></p> -->
                <!-- <div class="socials flex sm:flex gap-5 ">
                <img src="../assets/fb.png" alt="logo-reseaux" class="h-[35px] w-[35px]" />
                <img src="../assets/ln.png" alt="logo-reseaux" class="h-[35px] w-[35px]" />
                <img src="../assets/insta.png" alt="logo-reseaux" class="h-[35px] w-[35px]" />
                <img src="../assets/tiktok.png" alt="logo-reseaux" class="h-[35px] w-[35px]" />
                </div> -->
                
        <p class="text-center text-xs font-cgothic hidden sm:block">© 2024 Prévention Prostitution. Tous droits réservés.</p>
                
            </ul>
        </div>

        <img src="../assets/logo_typo.png" alt="logo-reseaux" class="w-1/5 object-cover mx-auto  sm:hidden" />
        <p class="text-center text-xs mt-4 font-cgothic sm:hidden">© 2024 Prévention Prostitution. Tous droits réservés.</p>

    </div>
</footer>

</template>

<script>
export default {
  name: 'Footer',

};
  </script>