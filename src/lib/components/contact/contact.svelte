<script lang="ts">
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
</script>

<VerticalStack classes="max-w-[650px]">
	<div class="flex items-center gap-1.5">
		<p class="text-xl font-medium">Let's Chat</p>
	</div>
	<form>
		<VerticalStack>
			<HorizontalStack>
				<div class="flex-1">
					<!--
					<label for="name">
						<span class="font-medium">Name </span>
						<span class="font-bold text-red-500">*</span>
					</label>
					-->
					<input
						autocomplete="name"
						class="block w-full rounded-lg border-2 border-transparent bg-gray-100 px-3 py-2.5 outline-none transition-colors duration-300 mhover:hover:border-gray-300 focus:border-blue-800"
						name="name"
						placeholder="Name"
						type="text"
					/>
				</div>
				<div class="flex-1">
					<!--
					<label for="email">
						<span class="font-medium">Email </span>
						<span class="font-bold text-red-500">*</span>
					</label>
					-->
					<input
						autocomplete="email"
						class="block w-full rounded-lg border-2 border-transparent bg-gray-100 px-3 py-2.5 outline-none transition-colors duration-300 mhover:hover:border-gray-300 focus:border-blue-800"
						name="email"
						placeholder="Email"
						type="email"
					/>
				</div>
			</HorizontalStack>
			<div>
				<!--
				<label for="subject">
					<span class="font-medium">Subject </span>
					<span class="font-bold text-red-500">*</span>
				</label>
				-->
				<input
					autocomplete="off"
					class="block w-full rounded-lg border-2 border-transparent bg-gray-100 px-3 py-2.5 outline-none transition-colors duration-300 mhover:hover:border-gray-300 focus:border-blue-800"
					name="subject"
					placeholder="Subject"
					type="text"
				/>
			</div>
			<div>
				<!--
				<label for="message" class="font-medium">Message</label>
				-->
				<textarea
					autocomplete="off"
					class="block w-full rounded-lg border-2 border-transparent bg-gray-100 px-3 py-2.5 outline-none transition-colors duration-300 mhover:hover:border-gray-300 focus:border-blue-800"
					name="message"
					placeholder="Message (optional)"
					rows="3"
				/>
			</div>
			<div class="mt-3 text-right sm:mt-4">
				<input
					class="rounded bg-blue-100 px-3 py-2 font-semibold text-blue-800 transition-colors duration-300 mhover:hover:cursor-pointer mhover:hover:bg-blue-200 mhover:hover:text-blue-900 sm:px-5 sm:py-2.5"
					type="submit"
				/>
			</div>
		</VerticalStack>
	</form>
</VerticalStack>
