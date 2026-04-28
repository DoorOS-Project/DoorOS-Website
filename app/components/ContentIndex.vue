<script setup lang="ts">
const props = defineProps<{
	group: string
	name: string
}>()
const { data: pages } = await useAsyncData(
	`${props.group}-collection`,
	() => {
		return queryCollection('content')
			.where('path', 'LIKE', '/' + props.group + '/%')
			.all()
	}
)
</script>

<template>
	<UPage class="px-4">
		<UPageHeader :title="props.name">
			<template #links>
				<UContentSearchButton :collapsed="false" />
			</template>
		</UPageHeader>
		<UPageBody>
			<UPageGrid>
				<UPageCard
					v-for="page in pages"
					:key="page.path"
					:to="page.path"
					:icon="page.meta.icon"
					v-bind="page"
					variant="subtle"
				/>
			</UPageGrid>
		</UPageBody>
	</UPage>
</template>
