<script lang="ts">
	import { page } from '$app/stores';
	import { blockersOpen, isContactOpen } from '$lib/stores/store.elements';
	import { PartyPopper } from 'lucide-svelte';
	import { get } from 'svelte/store';
	import { blur } from 'svelte/transition';
	import { applyAction, enhance } from '$app/forms';
	import { clickOutside } from '$lib/functions/functions.utilities';
	import Input from '$lib/components/forms/input.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	export function open() {
		isOpen = true;
		isContactOpen.set(true);
		blockersOpen.set(get(blockersOpen) + 1);
		document.querySelector('body')?.classList.add('overflow-hidden');
	}

	export function close() {
		if (!isOpen) {
			return;
		}

		if ($page.form?.success) {
			isSubmitting = false;
			hasSubmitted = true;
			formElement.reset();
		}

		isOpen = false;
		isContactOpen.set(false);
		blockersOpen.set(get(blockersOpen) - 1);

		if (get(blockersOpen) === 0) {
			document.querySelector('body')?.classList.remove('overflow-hidden');
		}
	}

	let isOpen: boolean = false;
	let isSubmitting: boolean = false;
	let hasSubmitted: boolean = false;
	let formElement: HTMLFormElement;
	let nameInputElement: Input;
	let emailInputElement: Input;
	let messageInputElement: Input;

	function validate(): boolean {
		let isValid = true;

		//Run each of these separately so that they all get checked
		if (!nameInputElement.validate()) {
			isValid = false;
		}

		if (!emailInputElement.validate()) {
			isValid = false;
		}

		if (!messageInputElement.validate()) {
			isValid = false;
		}

		return isValid;
	}
</script>

<div
	aria-labelledby="modal-title"
	aria-modal="true"
	class="fixed z-30 transition-[visibility] duration-300 {isOpen ? 'visible' : 'invisible'}"
	role="dialog"
>
	<div
		aria-hidden="true"
		class="fixed inset-0 bg-black bg-opacity-65 transition-opacity {isOpen
			? 'opacity-100 duration-300 ease-out'
			: 'opacity-0 duration-200 ease-in'}"
	/>
	<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
		<div class="flex min-h-full w-full items-end justify-center p-4 sm:items-center sm:p-0">
			<div
				class="w-full rounded-lg bg-gray-50 shadow sm:max-w-xl {isOpen
					? 'translate-y-0 opacity-100 duration-300 ease-out sm:scale-100'
					: 'translate-y-4 opacity-0 duration-200 ease-in sm:translate-y-0 sm:scale-95'}"
				on:clickoutside={close}
				use:clickOutside
			>
				<div class="p-6 sm:p-7 md:p-10">
					<div class="relative">
						{#if $page.form?.success}
							<div
								in:blur
								class="absolute inset-0 z-10 flex min-w-full flex-col bg-gray-50"
							>
								<div class="flex-1">
									<div
										class="inline-block rounded-full bg-green-100 p-4 text-green-900"
									>
										<div class="hidden sm:block">
											<PartyPopper size="3.75rem" />
										</div>
										<div class="sm:hidden">
											<PartyPopper size="3rem" />
										</div>
									</div>
									<h3 class="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
										Success
									</h3>
									<p class="mt-4 text-gray-700">
										Thank you for your message, I'll get back to you as soon as
										possible.
									</p>
								</div>
								<div class="flex justify-end">
									<Button color="blue" on:click={close} text="Close" />
								</div>
							</div>
						{/if}
						<div aria-hidden={$page.form?.success || hasSubmitted}>
							<h3 class="text-2xl font-bold sm:text-3xl md:text-4xl" id="modal-title">
								Contact
							</h3>
							<p class="mt-4 text-gray-700">
								Use the form below to send me a message.
							</p>
							<form
								action="/contact"
								bind:this={formElement}
								class="mt-10"
								method="POST"
								use:enhance={(event) => {
									if (!validate()) {
										event.cancel();
										return;
									}

									isSubmitting = true;

									return async ({ result }) => {
										await applyAction(result);
									};
								}}
							>
								<Input
									autocomplete="name"
									bind:this={nameInputElement}
									isDisabled={isSubmitting}
									label="Name"
									name="name"
									required={true}
								/>
								<Input
									autocomplete="email"
									bind:this={emailInputElement}
									classes="mt-4"
									isDisabled={isSubmitting}
									label="Email"
									name="email"
									required={true}
									type="email"
								/>
								<Input
									bind:this={messageInputElement}
									classes="mt-4 resize-none"
									isDisabled={isSubmitting}
									label="Message"
									name="message"
									required={true}
									type="textarea"
								/>
								<div class="mt-10 flex justify-end gap-3">
									<Button color="gray" on:click={close} text="Close" />
									<Button color="blue" {isSubmitting} text="Send" type="submit" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
