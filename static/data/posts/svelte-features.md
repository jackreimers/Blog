---
date: 2024-04-18T18:48:00.000+10:00
tags: [ "svelte", "javascript", "typescript" ]
title: 6 Interesting Svelte Features
description: A list of six interesting SvelteKit features that I found useful whilst learning the framework.
slug: svelte-features
---

Having only recently started using SvelteKit I was really impressed with how easy it was to get started and how much I
enjoyed using it. Here are six of the features that I found particularly useful whilst I was learning the framework.

<!--endintro-->

## Shorthand Properties

When passing a property to an element or component you can use the shorthand syntax if the variable name is the same as
the property name. This makes the code cleaner and easier to read, and saves you having to specify the property name.

```svelte
<script>
    export let href = '/';
</script>

<a {href}>Link</a>
```

## Named Slots

Svelte provides the `slot` element which allows you to pass child content to a component. If you want to have multiple
slots on a component you can give each slot a name and then reference that name when passing content to the slot, making
it easy to control how the child content is rendered.

```svelte
<!-- component.svelte -->
<div>
    <slot name="header" />
    <slot name="content" />
</div>

<!-- +page.svelte -->
<Component>
    <!-- This will be rendered in the header slot -->
    <h1 slot="header">Header</h1>
    <!-- This will be rendered in the content slot -->
    <p slot="content">Content</p>
</Component>
```

## Element Binding Directive

Getting a reference to an element can be frustrating in some frameworks, but Svelte makes it easy with the `bind:this`
directive. Once you have the element reference you can access it's exported properties and functions directly.

```svelte
<script>
    let element;
</script>

<Component bind:this={element} />
```

## Custom Component Directives

Svelte allows you to emit custom events that can be subscribed to using the `on:` directive. I
found this particularly useful when I wanted to trigger an action in a parent component or pass data out of a component.

```svelte
<!-- component.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
    
    function handleClick() {
        dispatch('click', { message: 'Hello from the child component!' });
    }
</script>

<button on:click={handleClick}>Trigger</button>

<!-- +page.svelte -->
<Component on:click={e => console.log(e.detail.message)} />

```

For more information see [the docs](https://svelte.dev/docs/component-directives).

## Exported Functions

Using the `export` keyword you can export functions from a component that can be invoked from outside the component. I
found this particularly useful when I wanted to trigger an action in a child component or pass data into a component.

```svelte
<!-- component.svelte -->
<script>
    export function trigger() {
        console.log('Hello from the child component!');
    }
</script>

<!-- +page.svelte -->
<script>
    import Component from './component.svelte';

    let component;

    function handleClick() {
        component.trigger();
    }
</script>

<button on:click={handleClick}>Trigger</button>
<Component bind:this={component} />
```

## Transitions

When using `#await` you can animate the new elements as they are added to the DOM using Svelte's in-built transitions.
The transitions are applied to the element using the `in:` directive and can be easily customised.

```svelte
<script>
    import { fade } from 'svelte/transition';
    
    let promise = new Promise(resolve => setTimeout(resolve, 2000));
</script>

{#await promise}
    <p>Waiting...</p>
{:then _}
    <p in:fade>Loaded!</p>
{/await}

```

For more information see [the docs](https://svelte.dev/docs/svelte-transition).
