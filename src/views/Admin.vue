<template>
    <div class=" flex w-[100vw] h-[100vh]">
        <div class="w-[50vw]">
            <h1>Connexion</h1>
        </div>
        <img src="../assets/alveoles2.png" alt="alveoles" class="h-[100vh] w-[80vw] object-cover" />
    </div>
        <!-- <div class="connexion">
        <h1>Connexion</h1>
        <form @submit.prevent="login">
            <div class="form-group w-full h-full">
            <div class="flex flex-col w-full h-full justify-center items-center">
                <label for="pseudo">Email</label>
                <input type="pseudo" id="pseudo" v-model="username" class="form-control bg-slate-100" required>
            </div>
            <div class="flex flex-col w-full h-full justify-center items-center">
                <label for="password">Mot de passe</label>
                <input type="password" id="password" v-model="password" class="form-control bg-slate-100" required>
            </div>
                <button type="submit" class="btn btn-primary">Se connecter</button>

                <div v-if="error" class="">
                    {{ error }} 
                </div>
            </div>
        </form>
    </div> -->
</template>

