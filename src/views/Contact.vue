<template>
    <div class="header-banner bg-banner-contact w-full h-[350px] bg-cover relative">
      <div class="absolute bottom-0 left-0 right-0 text-center">
        <div class="bg-white inline-block text-purple-fonce text-5xl py-6 px-24 rounded-t-2xl font-bold">CONTACT</div>
      </div>
    </div>


<!-- Formulaire de contact -->
<div class="contact-container flex flex-wrap justify-center items-center gap-10 mt-14">
    <div class="info-contact flex flex-col bg-purple-fonce p-8 rounded-xl text-white gap-4">
        <div class="mail-container flex justify-center items-center gap-2">
            <img src="../assets/mail_icon.png" alt="mail-icon" class="size-10">
            <p class="mail">info@youdomain.com</p>
        </div>
        <div class="phone-container flex justify-center items-center gap-2">
            <img src="../assets/phone_icon.png" alt="mail-icon" class="size-10">
            <p class="phone">+33 65 77 45 65</p>
        </div>
    </div>
<div class="contact-form bg-white flex flex-col justify-center items-center gap-6 mt-6 ">
  <form class="flex flex-col gap-6">
    <div class="first-row flex md:flex-row md:gap-8 w-full gap-8">
      <input type="text" placeholder="Nom" class="border-b-2 border-purple-fonce text-xl w-full md:w-auto">
      <input type="email" placeholder="Email" class="border-b-2 border-purple-fonce text-xl w-full md:w-auto">
    </div>
    <div class="second-row flex md:flex-row md:gap-8 w-full gap-8">
      <input type="text" placeholder="Objet" class="border-b-2 border-purple-fonce text-xl w-full md:w-auto">
      <input type="telephone" placeholder="Téléphone" class="border-b-2 border-purple-fonce text-xl w-full md:w-auto">
    </div>
    <div class="textarea w-full">
      <textarea placeholder="Votre message" class="border-b-2 border-purple-fonce text-xl w-full"></textarea>
    </div>
    <div class="submit flex justify-end w-full">
      <button class="bg-purple-fonce text-white text-xl py-2 rounded-md px-6">Envoyer</button>
    </div>
  </form>   
</div>
</div>


</template>