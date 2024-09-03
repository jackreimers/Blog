<script lang="ts">
	import { page } from '$app/stores';
	import { applyAction, enhance } from '$app/forms';
	import { ArrowRight, MailCheck, X } from 'lucide-svelte';
	import Section from '$lib/components/page/section.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import Modal from '$lib/components/modal/modal.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Input from '$lib/components/contact/input.svelte';

	export function open() {
		modal.open();
	}

	export function close() {
		modal.close();
	}

	function validate(): boolean {
		let isValid = true;

		//Run each of these separately so that they all get checked
		if (!nameInput.validate()) {
			isValid = false;
		}

		if (!emailInput.validate()) {
			isValid = false;
		}

		if (!messageInput.validate()) {
			isValid = false;
		}

		return isValid;
	}

	let modal: Modal;
	let nameInput: Input;
	let emailInput: Input;
	let messageInput: Input;
</script>

<Modal bind:this={modal} showOverlay={$page.form?.success}>
	<p class="text-2xl font-bold leading-none sm:text-3xl" slot="header">Contact</p>
	<div class="flex h-full flex-col" slot="overlay">
		<VerticalStack classes="flex-1">
			<div>
				<div class="inline-block rounded-full bg-green-100 p-4 text-green-900 md:p-5">
					<div class="hidden sm:block">
						<MailCheck size="60" />
					</div>
					<div class="sm:hidden">
						<MailCheck size="48" />
					</div>
				</div>
			</div>
			<p class="text-2xl font-bold sm:text-3xl">Thank you for your message!</p>
			<p class="max-w-prose text-gray-500">
				I appreciate you taking the time to reach out and I will get back to you as soon as
				possible.
			</p>
		</VerticalStack>
		<div class="flex justify-end">
			<Button color="red" on:click={close} text="Close">
				<X />
			</Button>
		</div>
	</div>
	<form
		action="/contact"
		method="POST"
		slot="body"
		use:enhance={(event) => {
			if (!validate()) {
				event.cancel();
				return;
			}

			return async ({ result }) => {
				await applyAction(result);
			};
		}}
	>
		<p class="mb-6 text-gray-500 sm:mb-8">
			Email me directly at
			<a
				class="border-b border-gray-300 font-medium text-gray-800 transition-colors duration-200 mhover:hover:border-gray-800"
				href="mailto:me@jackreimers.dev"
			>
				me@jackreimers.dev
			</a>
			or use the form below to get in touch.
		</p>
		<Section>
			<VerticalStack>
				<Input
					autocomplete="name"
					bind:this={nameInput}
					label="Name"
					name="name"
					required={true}
				/>
				<Input
					autocomplete="email"
					bind:this={emailInput}
					label="Email"
					name="email"
					required={true}
					type="email"
				/>
				<Input
					bind:this={messageInput}
					classes="resize-none"
					label="Message"
					name="message"
					required={true}
					type="textarea"
				/>
			</VerticalStack>
		</Section>
		<div class="flex justify-end">
			<Button color="blueSolid" text="Submit" type="submit">
				<ArrowRight />
			</Button>
		</div>
	</form>
</Modal>
