<script lang="ts">
	export let name: string;
	export let type: 'text' | 'email' | 'textarea' = 'text';
	export let label: string = '';
	export let placeholder: string = '';
	export let autocomplete: string = 'off';
	export let required: boolean = false;
	export let disabled: boolean = true;

	let input: HTMLInputElement | HTMLTextAreaElement;
	let isModified: boolean = false;
	let isValid: boolean = true;

	export function focus() {
		input.focus();
	}

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
</script>

<div class="w-full {$$restProps.class}">
	<div>
		<label class="inline-block text-sm font-medium sm:text-base" for={name}>
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
			{disabled}
			class="mt-2 block w-full rounded bg-gray-200 px-3 py-2.5 placeholder-gray-500 outline-none ring-blue-600 ring-offset-2 transition-[background-color,box-shadow] duration-200 disabled:!border-gray-200 disabled:bg-gray-100 mhover:hover:bg-gray-300 {isValid
				? 'border-gray-200 focus:ring-2'
				: 'ring-2 ring-red-600'}"
			{name}
			rows="3"
		/>
	{:else}
		<input
			bind:this={input}
			on:input={onInput}
			on:change={validate}
			{disabled}
			id={name}
			{autocomplete}
			{placeholder}
			class="mt-2 block w-full rounded bg-gray-200 px-3 py-2.5 placeholder-gray-500 outline-none ring-blue-600 ring-offset-2 transition-[background-color,box-shadow] duration-200 disabled:!border-gray-200 disabled:bg-gray-100 mhover:hover:bg-gray-300 {isValid
				? 'border-gray-200 focus:ring-2'
				: 'ring-2 ring-red-600'}"
			{name}
			{type}
		/>
	{/if}
</div>
