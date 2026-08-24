---
title: "I built my own Neovim file explorer"
date: "2026-03-28"
tags: "coding, neovim, lua, file explorer"
description: "A fun experiment about building a simple file explorer for Neovim using Lua. I wanted to see if I could create something simple and functional without relying on any external plugins."
alt: "I built my own Neovim file explorer"
---

::toc
<!--toc:start-->
- [Why not just using an existing plugin?](#why-not-just-using-an-existing-plugin)
- [The problem with Netrw](#the-problem-with-netrw)
- [The joy of programming in Lua](#the-joy-of-programming-in-lua)
- [Next features](#next-features)
- [Check it out](#check-it-out)
<!--toc:end-->
::

### Why not just using an existing plugin?

I don't like file explorers, that's one of the reasons why I use Neovim. Tree-like file explorers especially, they stand too much in the way of my workflow and I don't like to have a lot of things on the side of my editor. I just want to have a clean and minimal interface where I can focus on my code.

However, lately I've been getting lost in some big projects and I found myself spawning lots of terminals in order to print "ls" in different directories just to find the file I wanted to edit.
When **ls** wasn't enough, I also tried to leverage **eza** and **lf**, but I still found myself doing a lot of **cd** and **e** commands in order to navigate through the file system. I thought to myself, why not using **Netrw**, the builtin Neovim file explorer?

Again, not a plugin like **Neotree** or **Nvim-tree** or whatever, because I don't like tree-like file explorers, too much noise for my taste. Netrw is a flat file explorer, it just shows you the files in the current directory and you can navigate through them with some keybindings. It seemed like a good fit for my needs, so I gave it a try.

Things were going okaysh for a while, but then ...

### The problem with Netrw

The thing is just a nightmare to use. Keybindings doesn't really feel well integrated with the rest of Neovim. Wanna get a taste of it? Just type **nvim .** in your terminal and see it for yourself.

But then I experimented with the **Lex** command, which is a command that opens Netrw in a vertical split and it was slightly better.
I've also customized it a little bit by adding the following options:

```lua
vim.g.netrw_banner = 0
vim.g.netrw_keepdir = 0
vim.g.netrw_winsize = 15
```

Not too bad, but there were a couple of things that were drawing me crazy. First of all, it doesn't follow you. Like, when I open a file with **fzf** or whatever file picker, I want the file explorer to automatically refresh and show me the directory of the file I just opened. Netrw doesn't do that.
But I said ok, it's a thing I can try to solve with an **autocmd**. And that's what I did. Cool!

But then I noticed that whenever I opened a file with **fzf**, or did something else I can't quite remember now, Netrw would randomly create new empty buffers. I tend to work a lot with the **fzf** buffer list, and it was super annoying to have a new empty buffer appear every time I opened a file.
Again, I thought to myself, why not just solve this with another **autocmd**? And that's what I did.

But then I thought, it would be nice to create a toggle command for the file explorer and triggering it with a custom keybinding. You know what? It would also be nice to get an idea of which file is currently staged in git and which one is not without opening **lazygit** (this one is wip for now). Or to perform some little file operations without having to always open **mini-files**.

You know, that kind of stuff.

I was having my hands dirty again when I thought: *"Why not just build my own file explorer? It can't be that hard, right? I'm already doing all of this stuff with this half-baked file explorer called Netrw."*

### The joy of programming in Lua

I want to be honest with you, the development experience was brutal initially, I had to deal with a lot of edge cases and I had to learn a lot about how Neovim works under the hood. But it was a fun experiment and I'm pretty happy with the result. It's not perfect, but it does the job for me and it doesn't get in the way of my workflow, it's a win!

The thing it's also super-fast! I also went further and added some basic file operations like opening a file, creating a new file, deleting a file, etc.

I called it **Lsplorer** because it mimics the output of **ls** and I'm thinking about open-sourcing it as a plugin, but I don't know if it's worth it since it's pretty basic and there are already a lot of file explorers out there. Maybe I'll just keep it as a personal project and share it with my friends for now.

I have to say that programming in Lua is a lot of fun, it's a really nice language to work with and it's super easy to learn. I was able to create something functional in a relatively short amount of time. I also learned a lot about how Neovim works under the hood and how to leverage its API to create custom functionality. It was a great learning experience and I'm pretty happy with the result.

### Next features

Like I said, Lsplorer can add, rename, delete and open files. It can't cut/paste and move files yet, and that's the next feature I want to add.
Another thing it is missing it's a way to perform bulk operations, like selecting multiple files and performing an operation on them. That would be a nice addition but it's already something that I can live without for now since for cases like that I can just rely on **mini-files**. The way I would like to achieve it's an hybrid approach between Neotree and mini-files. We'll see how it goes!

### Check it out

[You can check it here](https://github.com/Raist90/nvim-config/tree/main/lua/lsplorer), on my Neovim config repository. Again, it's not a plugin, it's just a simple Lua module that you can require in your Neovim config and use it as you like. If you want to use it, just copy the **lsplorer** folder in your Neovim config and require it in your **init.lua** file. You will also need to define a keybind in order to toggle it (I'm using leader + E).

If you have any feedback or suggestions for improvement, feel free to reach out to me via email or LinkedIn, I would love to hear your thoughts and ideas on how to make it better!
