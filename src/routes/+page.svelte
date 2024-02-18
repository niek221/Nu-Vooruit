<script lang=ts>
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
    import '$lib/styles.css'

	import carousel_1 from '$lib/images/carousel_1.jpg'
	import carousel_2 from '$lib/images/carousel_2.jpg'
	import carousel_3 from '$lib/images/carousel_3.jpg'
	const imagesArray = [carousel_1, carousel_2, carousel_3]
</script>

<svelte:head>
    <title>Home - Nu Vooruit</title>
	<meta name="description" content="About this app"/>
</svelte:head>

<section>
    <Header />

	<main>
		<!-- {#each imagesArray as image}
       		<img src={image}>
    	{/each} -->
	</main>

	<Footer />
</section>

<style>
	main {
		height: 50vh;
	}
</style>
