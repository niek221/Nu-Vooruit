<script lang="ts">
</script>

<header>
    <!-- Mobile -->
    <div class="header-mobile">
        <a href="/" class="logo-mobile">
            <span>Nu Vooruit</span>
        </a>

        <div class="hamburger-menu">

        </div>

        <div class="menu-mobile">
            <a href="/">Home</a>
            <a href="/missie">Missie & Visie</a>
            <a href="/zorgteam">Zorgteam</a>
            <a href="/begeleiding">Begeleiding</a>
            <a href="/dagbesteding">Dagbesteding</a>
            <a href="/contact">Contact</a>
        </div>
    </div>    

    <!-- Desktop -->
    <div class="header-desktop">
        <a href="/" class="logo-desktop">
            <span>Nu Vooruit</span>
        </a>

        <div class="menu-desktop">
            <a href="/">Home</a>
            <a href="/missie">Missie & Visie</a>
            <a href="/zorgteam">Zorgteam</a>
            <a href="/begeleiding">Begeleiding</a>
            <a href="/dagbesteding">Dagbesteding</a>
            <a href="/contact">Contact</a>
        </div>
    </div>    
</header>

<style>
    /* Mobile */
    .logo-mobile {
        display: none;
    }

    /* Desktop */
    @media (min-width: 1000px) {
        .header-mobile {
            display: none;
        }

        .header-desktop {
            display: flex;
            align-items: center;
            gap: 10%;

            width: 100%;
            padding-inline: 15%;
            padding-top: 2rem;
            padding-bottom: 2rem;

            background-color: #3A5DAE;
        }

        /* Logo */
        .logo-desktop {
            text-decoration: none;
        }

        .logo-desktop > span {
            font-size: 32px;
            text-decoration: none;
            text-wrap: nowrap;

            color: #fff;
        }

        /* Menu */
        .menu-desktop {
            display: flex;
            gap: 1.8rem;
        }

        .menu-desktop > a {
            text-decoration: none;
            text-wrap: nowrap;

            color: #fff;
        }

        .menu-desktop > a:hover {
            color: #ECECEC;
            transition: 0.3s;
        }       
    }
</style>
