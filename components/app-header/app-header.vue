<template>
    <div class="app-header">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <nuxt-link  
                to="/" 
                class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
                Magic 8 ball
            </nuxt-link>

            <ul class="nav nav-pills">
                <li class="nav-item">
                    <nuxt-link 
                        href="/" 
                        class="btn btn-outline-primary me-2" aria-current="page"
                        active-class="active"
                    >
                        Home
                    </nuxt-link>
                </li>

                <li class="nav-item">
                    <nuxt-link 
                        to="/about" 
                        class="btn btn-outline-primary me-2"
                        active-class="active"
                    >
                        About
                    </nuxt-link>
                </li>

                <li class="nav-item">
                    <nuxt-link 
                        to="/favourites" 
                        class="btn btn-outline-primary me-2"
                        active-class="active"
                    >
                        Favourites
                    </nuxt-link>
                </li>

                <li class="nav-item">
                    <nuxt-link 
                        to="/search" 
                        class="btn btn-outline-primary me-2"
                        active-class="active"
                    >
                        Search
                    </nuxt-link>
                </li>
            </ul>
        </header>
    </div>
</template>