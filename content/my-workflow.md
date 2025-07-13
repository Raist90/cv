---
title: "My workflow"
date: "2025-07-09"
tags: "coding, neovim, zellij, alacritty"
description: "About the tools I use to code daily and how I set them up."
alt: ""
---

::toc
<!--toc:start-->
- [A little side note](#a-little-side-note)
- [I use Neovim btw](#i-use-neovim-btw)
- [Where do I run Neovim?](#where-do-i-run-neovim)
- [About the multiplexer](#about-the-multiplexer)
- [Git workflow](#git-workflow)
- [AI in my workflow](#ai-in-my-workflow)
- [Other tools and dot files](#other-tools-and-dot-files)
<!--toc:end-->
::

### A little side note

Since I work as a developer I'm stuck on MacOS because it seems to be the preferred OS for most companies. Don't get me wrong, I respect MacOS and I kinda like it, but my heart belongs to **Linux**.

Yes, MacOS never failed me, the hardware is great and the OS is stable as a rock, it's just that Linux is so fun to tinker with and I love the freedom it gives me.

I run **Fedora** on my personal laptop and it's just perfection. Since I've started using Linux (not that long ago) I tried different distros like Arch, Ubuntu, NixOS and some others but Fedora made me stay. What I miss the most and what I wasn't really able to replicate on MacOS is Sway and the ability to use a good tiling window manager. Yes I tried Yabai and I thought it was cool but somehow it didn't feel right.

And again Linux is **fun**. I want this word in bold because I think work should be fun, else we can't be productive 40 hours a week for the rest of our lives. Remember that word when you continue reading this post because it's the secret key to my workflow.

### I use Neovim btw

This is not a surprise for anyone who knows me, I use Neovim as my main text editor. 

Is it the best editor? I don't know, I don't care. Probably not actually! But sure it's a beast.

It's fast, it's lightweight, it's portable, it's hackable, it's customizable till the bone. I can be anywhere in my codebase in a matter of seconds. But most importantly it's fun as hell. The dopamine rush I get when I send all of my grep results to a quickfix list and I do find and replace is just priceless.

And AI? I have recently integrated an interesting tool in my workflow which I will talk about later.

Let's not forget about version control! I can checkout on a older commit in detached mode by pressing a few keys, if I want the history of a file it's literally **`<space> g h`**. I've got every codebase at my fingertips, it's just crazy, you need to try it to understand.

I will make a post about my Neovim setup soon, so stay tuned for that.

Now hear this. I tried them all: Atom, VSCode, Emacs, Zed, Helix (which is super cool by the way) and many others. Zed and Helix are what I would use if I had to switch from Neovim, but I don't see that happening anytime soon. I just like to be close to my code without having anything in between.

### Where do I run Neovim?

I run Neovim inside a terminal of course, and that terminal for now is **Alacritty**. I tried many others, like Gnome Terminal, Kitty, foot, iTerm2, Konsole, Ghostty but... Alacritty never failed me and I actually like that it's not a multiplexer. I prefer to rely on a more specialized tool for that. I want to say that font rendering in Kitty is just amazing, kudos to them, but I couldn't find a way to make it fullscreen on startup, while Ghostty non-native MacOS fullscreen is buggy. Not a big deal of course but I mean, you gotta choose because of these little things today, almost every terminal emulator is good to be honest!

I customize every terminal in the same way, I use **Monaco** as my font and that is a recent thing, I used to read Hack for a long time. My terminal runs in fullscreen mode with an opacity of 0.95. You'll see if you care, I will share my dots later.

### About the multiplexer

That's a no-brainer really, I use **Zellij** to enhance my terminal experience. Yeah I know about **tmux** of course but ehy, Zellij was a breeze to set up and recently they added a feature to avoid Neovim keybindings conflicts, so I don't have to worry about that either. I'm also aligned with it's philosophy and design so in the end I just went with it and never looked back. **Alt+f** and I can spawn a little floating terminal in no time, seriously I love it.

### Git workflow

I'm addicted to **Lazygit**, I can even use it directly from within Neovim and that's just amazing. I usually don't like relying on IDE's Git wrappers, I use Lazygit even when coding with Zed. Sometimes I just use the command line for common daily operations like *fetch*, *pull* and *status* but for everything else I'm lazygitting. Nothing much else to say, it's just a great tool and I suggest you try it if you haven't already.

### AI in my workflow

It's usually Copilot or whatever stuff my company throws at me and when it comes to agents I tried **Avante**, **Codecompanion** and **Copilot chat** but in the end I chose **Open Code**, which is same as **Claude Code** basically except you can use whatever model you want.

You can run it straight from your terminal, kinda like **Aider** and is fast enough to not make things boring.

I don't think I will ever use agents plugins for Neovim because they usually don't work well with my setup, they're built around some specific plugins like **Telescope** and **nvim-cmp** which I don't use and they come in with lot of other plugins as dependencies.

### Other tools and dot files

And that's it for what matters the most. Other honorable mentions are **fzf** and **ripgrep**, **bat**, **oh my zsh** and **starship**. Nothing fancy really, they make my life easier and more enjoyable.

You can find my dot files on [Github](https://github.com/Raist90/dots).
