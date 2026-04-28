<script setup lang="ts">
import type { PageCollections } from '@nuxt/content'

const collection = 'content'
const route = useRoute()

const { data: navigation } = await useAsyncData(`${route.path}-navigation`, () => {
	return queryCollectionNavigation(collection as keyof PageCollections)
})

const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection(collection as keyof PageCollections)
		.path(route.path)
		.first()
})

if (!page || !page.value) {
	throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
	return queryCollectionItemSurroundings(
		collection as keyof PageCollections,
		route.path,
		{ fields: ['description'] }
	)
})
</script>

<template>
	<UPage>
		<template #left>
			<UPageAside>
				<UContentToc
					:links="page?.body?.toc?.links"
					title="Table of Contents"
				/>
			</UPageAside>
		</template>

		<UPageBody class="px-4">
			<ContentRenderer :value="page" />
			<UContentSurround :surround="(surround)" />
		</UPageBody>

		<template #right>
			<UPageAside>
				<UContentNavigation
					:navigation="navigation"
					highlight
				/>
			</UPageAside>
		</template>
	</UPage>
</template>
