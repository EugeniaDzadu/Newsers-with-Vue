<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
</script>

<template>
    <div>
        <Navbar/>
        
        <Header/>

        <div class="container-fluid py-5">
            <div class="container py-5 text-center">
                <ol class="breadcrumb justify-content-center mb-5">
                    <li class="breadcrumb-item"><router-link to="#">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link to="#">Pages</router-link></li>
                    <li class="breadcrumb-item active text-dark">404</li>
                </ol>
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <i class="bi bi-exclamation-triangle display-1 text-secondary"></i>
                        <h1 class="display-1">404</h1>
                        <h1 class="mb-4">Page Not Found</h1>
                        <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <router-link class="btn link-hover border border-primary rounded-pill py-3 px-5" to="/">Go Back To Home</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- 404 End -->



        

        <Footer/>
    </div>
</template>
     
<style>
</style>