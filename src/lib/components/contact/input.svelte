<script lang="ts">
	export let name: string;
	export let type: 'text' | 'email' | 'textarea' = 'text';
	export let label: string = '';
	export let placeholder: string = '';
	export let autocomplete: string = 'off';
	export let required: boolean = false;
	export let classes: string = '';

	export function validate(): boolean {
		if (required && input.value == '') {
			isValid = false;
		} else {
			isValid = input.checkValidity();
		}

		isModified = true;
		return isValid;
	}

	function onInput() {
		if (isModified) {
			validate();
		}
	}

	let input: HTMLInputElement | HTMLTextAreaElement;
	let isModified: boolean = false;
	let isValid: boolean = true;

	const baseClasses: string =
		'block w-full rounded border-2 border-gray-200 bg-white px-2.5 py-2 outline-none transition-colors duration-200 sm:px-3 sm:py-2.5';
	const validClasses: string =
		'border-gray-200 focus:border-gray-800 mhover:hover:border-gray-800';
	const invalidClasses: string = 'border-red-600';
</script>

<div class="w-full">
	<div>
		<label class="mb-1.5 inline-block text-sm font-medium sm:text-base" for={name}>
			{label}
			{#if required}
				<span class="text-red-600">*</span>
			{/if}
		</label>
	</div>
	{#if type === 'textarea'}
		<textarea
			bind:this={input}
			on:input={onInput}
			on:change={validate}
			id={name}
			{autocomplete}
			{placeholder}
			class="{baseClasses} {isValid ? validClasses : invalidClasses} {classes}"
			{name}
			rows="3"
		/>
	{:else}
		<input
			bind:this={input}
			on:input={onInput}
			on:change={validate}
			id={name}
			{autocomplete}
			{placeholder}
			class="{baseClasses} {isValid ? validClasses : invalidClasses} {classes}"
			{name}
			{type}
		/>
	{/if}
</div>
