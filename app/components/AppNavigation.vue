<script setup lang="ts">
defineProps<{
	orientation?: 'horizontal' | 'vertical'
}>()
const route = useRoute()
const isActive = (group: string): boolean => {
	return route.path.replace(/^\//g, '').split('/')[0] === group
}
</script>

<template>
	<UNavigationMenu
		highlight
		:orientation="orientation"
		:items="[
			[
				{
					label: 'DoorOS',
					icon: 'i-lucide-book-open',
					to: '/guides',
					active: isActive('guides') || isActive('')
				},
				{
					label: 'DFS',
					icon: 'i-lucide-folder-root',
					to: '/dfs',
					active: isActive('dfs')
				},
				{
					label: 'DEX',
					icon: 'i-lucide-file-terminal',
					to: '/dex',
					active: isActive('dex')
				},
				{
					label: 'Bnash',
					icon: 'i-lucide-terminal',
					to: '/bnash',
					active: isActive('bnash')
				},
				{
					label: 'Kernel',
					icon: 'i-lucide-square-centerline-dashed-vertical',
					to: '/kernel',
					active: isActive('kernel')
				},
				{
					label: 'Development Tools',
					icon: 'i-lucide-wrench',
					to: '/tools',
					active: isActive('tools')
				},
				{
					label: 'D#',
					icon: 'i-lucide-languages',
					to: '/dsharp',
					active: isActive('dsharp')
				},
				{
					label: 'Applications',
					icon: 'i-lucide-app-window',
					to: '/apps',
					active: isActive('apps')
				}
			]
		]"
	/>
</template>
