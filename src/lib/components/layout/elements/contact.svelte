<script lang="ts">
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
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
						type="text"
						name="name"
						placeholder="Name"
						autocomplete="name"
						class="block w-full rounded-lg border-2 border-transparent bg-gray-100 px-3 py-2.5 outline-none transition-colors duration-300 hover:border-gray-300 focus:border-blue-800"
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
						type="email"
						name="email"
						placeholder="Email"
						autocomplete="email"
						class="block w-full rounded-lg border-2 border-transparent bg-gray-100 px-3 py-2.5 outline-none transition-colors duration-300 hover:border-gray-300 focus:border-blue-800"
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
					type="text"
					name="subject"
					placeholder="Subject"
					autocomplete="off"
					class="block w-full rounded-lg border-2 border-transparent bg-gray-100 px-3 py-2.5 outline-none transition-colors duration-300 hover:border-gray-300 focus:border-blue-800"
				/>
			</div>
			<div>
				<!--
				<label for="message" class="font-medium">Message</label>
				-->
				<textarea
					name="message"
					placeholder="Message (optional)"
					autocomplete="off"
					rows="3"
					class="block w-full rounded-lg border-2 border-transparent bg-gray-100 px-3 py-2.5 outline-none transition-colors duration-300 hover:border-gray-300 focus:border-blue-800"
				/>
			</div>
			<div class="mt-3 text-right sm:mt-4">
				<input
					type="submit"
					class="rounded bg-blue-100 px-3 py-2 font-semibold text-blue-800 transition-colors duration-300 hover:cursor-pointer hover:bg-blue-200 hover:text-blue-900 sm:px-5 sm:py-2.5"
				/>
			</div>
		</VerticalStack>
	</form>
</VerticalStack>
