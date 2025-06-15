---
title: 'A simple i18n t function with TypeScript'
date: '2025-06-10'
tags: 'coding, typescript, i18n'
description: 'Simple guide about creating a custom i18n t function with just TypeScript and some json files.'
cover: '/simple-i18n-t-function-with-typescript.png'
alt: 'A code editor with TypeScript code'
---

::toc
<!--toc:start-->
- [The why](#the-why)
- [The execution](#the-execution)
- [The t function](#the-t-function)
- [Conclusions](#conclusions)
<!--toc:end-->
::

### The why

I always wanted to find a simple way to handle translations in my projects without relying on big libraries or frameworks. That's why the other day I sat down on my desktop and started tinkering with TypeScript and some json files to create a nice function for translations.

I'm pretty sure there are lot of ways to handle this kind of stuff but I always liked the **t** function from i18n, so I wanted to create something with a similar DX. For who doesn't know, the **t** function is a simple function that takes a key and returns the corresponding translation. Suppose you have a json file like this:

```json
{
  "hello": {
    "world": "Hello World"
  }
}
```

You can render the translation by simply doing:

```typescript
const translation = t('hello.world')
```
And you also get a nice autocompletion in your IDE with all the different translations available! THAT is precisely what I wanted to achieve with my function too. Again, I decided not to use any library or framework, I didn't actually needed everything else then the **t** function from i18n. Couldn't bother to mantain a whole library just for that, especially for a personal project.

### The execution

With a mapped type, a couple of generics and a little bit of recursion, here's what I came up with:

```typescript
type TranslationKey<T extends object> = {
[K in keyof T]: K extends string
  ? T[K] extends string
    ? K
    : T[K] extends object
      ? `${K}.${TranslationKey<T[K]>}`
      : never
  : never
}[keyof T];
```

That seems a bit complex, let's try to break it down. The first thing I want to say is that I hate ternary operators, but I guess it is what it is since seems to be the only way to achieve this kind of stuff in Typescript.

Anyway, the type **TranslationKey** takes an object **T** which is basically your translation object. One thing worth noting is that all of this won't work without a generic type. That could be because if you specify a type for it then you also need to specify the exact literal type of the key you want to use. That means you can't set **T\[K\]** as a generic string and so on. 

Now let's analyze the second line. **\[K in keyof T\]** is a mapped type that iterates over all the keys of the object **T**. For each key **K**, we check if it is a string. If it is, we proceed to the next step, else we return never. We do this because we want to filter out any non-string keys, since we are only interested in string keys for our translations. You could argue that it's not possible to use non-string keys in json files but Typescript doesn't know that our **T** is coming from a json file, so we need to be explicit about it. Else we will get an error when doing **${K}.${TranslationKey<T\[K\]>}** as it expects **K** to be a string but it could be anything else. Remember we want to leverage recursion here, so if we find a string we need to return it:

```json
{
  "hello": "world"
}
```

And that explains line 3 and 4. If **K extends string** and **T\[K\] extends string** we want it to return **translations.hello**, and that means we'll get **hello** as autocompletion in our IDE.

But what if **T\[K\]** is an object (line 5)? Like in this example here:

```json
{
  "hello": {
    "world": "Hello World",
    "everyone": "Hello Everyone"
  }
}
```

In that case we want our autocompletion to return **hello.world** and **hello.everyone**. That's why we do **${K}** (which is **hello**), we add a dot after it and then we call **TranslationKey<T\[K\]>** recursively. Remember **T** is the translation object we passed as generic to the function and then **K** is **world** or **everyone**. What will happen next is that **world** and **everyone** will extend string in the next iteration, so they will get returned.

And that's it, really. The last line **\[keyof T\]** is just to return the union of all the keys we found, so we can use it in our function.

That will also work on nested objects, like this:

```json
{
  "hello": {
    "world": {
      "everyone": "Hello Everyone"
    }
  }
}
```

Here **world** will extend object and then **everyone** will extend string, so it will return **hello.world.everyone**.

I hope you were able to follow along, recursion can be a bit tricky most of the time and I don't know if my explanation was clear enough. Also keep in mind there could be several other ways to achieve this, I'm pretty sure you could do it better than me.

### The t function

I will also share my **t** function but I will not explain it in detail since I didn't tinkered with it too much, I don't think it's elegant. Sure it works though.

```typescript
const t = (key: TranslationKey<Translations>, replacements?: Record<string, string>) => {
  const keys = key.split(".");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current = translations.value as Record<string, any> | string;
  for (const k of keys) {
    if (typeof current !== "object" || current === null || !(k in current)) {
      console.warn(`Translation key "${key}" not found.`);
      return "";
    }
    current = current[k];
  }

  if (typeof current !== "string") {
    console.warn(`Translation key "${key}" does not point to a string.`);
    return "";
  }

  if (!replacements) return current;

  const matches = current.match(/{[a-zA-Z_]+}/g) || [];
  for (const match of matches) {
    const placeholder = match.slice(1, -1); // Remove { and }
    if (placeholder in replacements) {
      current = current.replace(match, replacements[placeholder]);
    }
    else {
      console.warn(`Variable "${placeholder}" not found in translation key "${key}".`);
    }
  }

  return current;
};
```

A little bonus here: you can also use variables in your translations because of the second optional parameter **replacements**, like this:

```json
{
  "hello": {
    "world": "Hello {name}"
  }
}
```

And then you can consume it exactly like **i18n**'s **t**:

```typescript
const translation = t('hello.world', { name: 'John' });
```

### Conclusions

I hope you found this little guide useful and that you learned something new. I always like to experiment with Typescript so make sure to follow this blog for more content like this.
