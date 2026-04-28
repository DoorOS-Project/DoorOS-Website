<template>
	<div>
		<UPageHero
			title="DoorOS Open-Source Project"
			description="A free open-source GUI OS and Windows alternative"
			:links="[{
				label: 'Get started',
				to: '/guides/installation',
				trailingIcon: 'i-lucide-arrow-right',
				size: 'xl'
			}, {
				label: 'GitHub',
				to: 'https://github.com/DoorOS-Project/DoorOS',
				target: '_blank',
				icon: 'i-simple-icons-github',
				size: 'xl',
				color: 'neutral',
				variant: 'subtle'
			}]"
		/>

		<UPageSection
			id="features"
			title="A modern operating system"
			description="DoorOS is a comprehensive open-source GUI operating system designed as a Windows alternative, built with D#."
			:features="[{
				icon: 'i-lucide-rocket',
				title: 'Open Source',
				description: 'Fully open-source codebase that developers worldwide can contribute to, audit, and improve.'
			}, {
				icon: 'i-lucide-palette',
				title: 'Modern Web Integration',
				description: 'Native web browser (Corner) made with custom web rendering engine and JavaScript engine.'
			}, {
				icon: 'i-lucide-zap',
				title: 'High Performance',
				description: 'Optimized for speed and efficiency with responsive system performance.'
			}, {
				icon: 'i-lucide-blocks',
				title: 'Process Management',
				description: 'Process Manager ensures efficient resource allocation and system stability.'
			}, {
				icon: 'i-lucide-code-2',
				title: 'Developer Tools',
				description: 'DCC compiler and Binutils++ provide powerful tools for system and application development.'
			}, {
				icon: 'i-lucide-shield-check',
				title: 'Community-Driven',
				description: 'Transparent specifications and open development. Join a growing developer community.'
			}]"
		/>

		<UPageSection
			id="ecosystem"
			title="Complete Ecosystem"
			description="DoorOS projects working together to build the OS."
		>
			<UPageGrid>
				<UCard
					title="The DoorOS kernel"
					description="The heart of the system with kernel implementation and essential OS services."
				>
					<template #footer>
						<UButton
							label="View Project"
							to="https://github.com/DoorOS-Project/DoorOS"
							target="_blank"
							variant="ghost"
							size="sm"
							trailing-icon="i-lucide-arrow-right"
						/>
					</template>
				</UCard>

				<UCard
					title="Specifications"
					description="Complete format specifications for all DoorOS standards."
				>
					<template #footer>
						<UButton
							label="View Project"
							to="https://github.com/DoorOS-Project/Specifications"
							target="_blank"
							variant="ghost"
							size="sm"
							trailing-icon="i-lucide-arrow-right"
						/>
					</template>
				</UCard>

				<UCard
					title="DCC"
					description="Denormal Compiler Collection for DoorOS development."
				>
					<template #footer>
						<UButton
							label="View Project"
							to="https://github.com/DoorOS-Project/DCC"
							target="_blank"
							variant="ghost"
							size="sm"
							trailing-icon="i-lucide-arrow-right"
						/>
					</template>
				</UCard>

				<UCard
					title="Corner"
					description="Native web browser made with Twill and Batavia."
				>
					<template #footer>
						<UButton
							label="View Project"
							to="https://github.com/DoorOS-Project/Corner"
							target="_blank"
							variant="ghost"
							size="sm"
							trailing-icon="i-lucide-arrow-right"
						/>
					</template>
				</UCard>

				<UCard
					title="Twill & Batavia"
					description="Rendering engine and JavaScript engine for the Corner browser."
				>
					<template #footer>
						<UButton
							label="View Project"
							to="https://github.com/DoorOS-Project/Twill"
							target="_blank"
							variant="ghost"
							size="sm"
							trailing-icon="i-lucide-arrow-right"
						/>
					</template>
				</UCard>

				<UCard
					title="Tanya"
					description="Process Manager for system resource management."
				>
					<template #footer>
						<UButton
							label="View Project"
							to="https://github.com/DoorOS-Project/Tanya"
							target="_blank"
							variant="ghost"
							size="sm"
							trailing-icon="i-lucide-arrow-right"
						/>
					</template>
				</UCard>
			</UPageGrid>
		</UPageSection>

		<UPageSection>
			<UPageCTA
				title="Ready to join the DoorOS revolution?"
				description="Be part of an innovative community building the next generation of open-source operating systems. Contribute to DoorOS today."
				variant="subtle"
				:links="[{
					label: 'Start contributing',
					to: 'https://github.com/DoorOS-Project',
					target: '_blank',
					trailingIcon: 'i-lucide-arrow-right',
					color: 'neutral'
				}, {
					label: 'View on GitHub',
					to: 'https://github.com/DoorOS-Project/DoorOS',
					target: '_blank',
					icon: 'i-simple-icons-github',
					color: 'neutral',
					variant: 'outline'
				}]"
			/>
		</UPageSection>
	</div>
</template>
