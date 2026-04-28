<script setup>
useHead({
	meta: [
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
	],
	link: [
		{ rel: 'icon', href: 'https://github.com/DoorOS-Project.png' }
	],
	htmlAttrs: {
		lang: 'en'
	}
})

const title = 'DoorOS'
const description = 'A free open-source GUI OS and Windows alternative'

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	ogImage: 'https://github.com/DoorOS-Project.png',
	twitterCard: 'summary_large_image'
})
</script>

<template>
	<UApp>
		<UHeader>
			<template #left>
				<NuxtLink to="/">
					<AppLogo />
				</NuxtLink>
			</template>

			<AppNavigation />

			<template #body>
				<AppNavigation orientation="vertical" />
			</template>

			<template #right>
				<UColorModeButton />

				<UButton
					to="https://github.com/DoorOS-Project/DoorOS"
					target="_blank"
					icon="i-simple-icons-github"
					aria-label="GitHub"
					color="neutral"
					variant="ghost"
				/>
			</template>
		</UHeader>

		<UMain>
			<NuxtPage />
		</UMain>

		<USeparator icon="i-lucide-door-open" />

		<UFooter>
			<p class="text-sm text-muted">
				Licensed under GNU General Public License v2.0 &bull; &copy; 2026-present DoorOS Open-Source Project
			</p>

			<template #right>
				<UButton
					to="https://github.com/DoorOS-Project/DoorOS"
					target="_blank"
					icon="i-simple-icons-github"
					aria-label="GitHub"
					color="neutral"
					variant="ghost"
				/>
			</template>
		</UFooter>
	</UApp>
</template>
