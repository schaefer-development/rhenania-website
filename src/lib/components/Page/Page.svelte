<script lang="ts">
	type Page = {
		slug: string;
	};
	type Data = {
		page?: Page;
	};
	export let data: Data = {};
</script>

<h1>Ich bin die Page componente für /{data.page?.slug}</h1>
