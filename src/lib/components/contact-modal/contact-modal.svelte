<script lang="ts">
	import { blur } from 'svelte/transition';
	import { get } from 'svelte/store';
	import { applyAction, enhance } from '$app/forms';
	import { clickOutside } from '$lib/functions/functions.utilities';
	import { page } from '$app/stores';
	import { isContactOpen, isNavigationOpen } from '$lib/stores/stores';
	import { SendHorizonal } from 'lucide-svelte';
	import Input from '$lib/components/input/input.svelte';
	import Button from '$lib/components/buttons/basic/basic-button.svelte';

	export function open() {
		isOpen = true;
		isContactOpen.set(true);
		document.querySelector('body')?.classList.add('overflow-hidden');

		setTimeout(() => {
			nameInputElement.focus();
		}, 300);
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

		if (!get(isNavigationOpen)) {
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

	function onKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.preventDefault();
			close();
		}
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
				<div class="p-6 sm:p-10">
					<div class="relative">
						{#if $page.form?.success}
							<div
								in:blur
								class="absolute inset-0 z-10 flex min-w-full flex-col bg-gray-50"
							>
								<div class="flex-1">
									<!-- TODO: Put some sort of visual here -->
									<h3
										class="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl"
									>
										Success
									</h3>
									<p class="mt-4 text-gray-700">
										Thank you for your message, I'll get back to you as soon as
										possible.
									</p>
								</div>
								<div class="flex justify-end">
									<Button color="primary" on:click={close} text="Close" />
								</div>
							</div>
						{/if}
						<div aria-hidden={$page.form?.success || hasSubmitted}>
							<div class="mb-6 sm:mb-10">
								<h3
									class="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl"
									id="modal-title"
								>
									Contact
								</h3>
								<p class="mt-4 text-gray-700">
									Send me an email directly at
									<a
										class="border-b border-gray-300 font-medium transition-colors duration-300 focus:border-gray-900 mhover:hover:border-gray-900"
										href="mailto:me@jackreimers.dev"
									>
										me@jackreimers.dev
									</a>
									or use the form below to send me a message.
								</p>
							</div>
							<form
								action="/contact"
								bind:this={formElement}
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
								<div class="flex flex-col gap-4">
									<Input
										autocomplete="name"
										bind:this={nameInputElement}
										disabled={isSubmitting}
										label="Name"
										name="name"
										required={true}
									/>
									<Input
										autocomplete="email"
										bind:this={emailInputElement}
										disabled={isSubmitting}
										label="Email"
										name="email"
										required={true}
										type="email"
									/>
									<Input
										bind:this={messageInputElement}
										disabled={isSubmitting}
										label="Message"
										name="message"
										required={true}
										type="textarea"
									/>
								</div>
								<div class="mt-6 flex justify-end gap-3 sm:mt-10">
									<Button color="secondary" on:click={close} text="Close" />
									<Button
										color="primary"
										icon={SendHorizonal}
										submitting={isSubmitting}
										text="Submit"
										type="submit"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<svelte:window on:keydown={onKeyDown} />
