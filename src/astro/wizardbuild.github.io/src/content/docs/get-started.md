---
title: Get Started with Wizard Build
description: In this magical guide, we’ll walk you through how to summon your first backend project with Wizard Build and how to wield its power for maximum effect!
createdAt: 2024-10-11
updatedAt: 2024-10-11
---

**Welcome to Wizard Build**, the ultimate CLI tool to help you conjure up backend setups with ease! Whether you’re building with Node.js, Express, Prisma, or MongoDB, Wizard Build lets you configure your backend project in just a few commands. In this guide, we’ll walk you through how to install, configure, and use Wizard Build in your backend projects.

## 🧙‍♀️ What is Wizard Build?

Wizard Build is your magical spellbook for backend wizards. It simplifies backend project setups with ease, so you can spend more time brewing up powerful code and less time configuring tools. No more manual setup! 🪄

### ✨ Features:
- **Instant Spellcasting**: Automatically scaffold projects for Node.js, Express, and more.
- **Magical Database Integration**: Support for MongoDB, PostgreSQL, SQLite, and other enchanted data stores.
- **Prisma, Sequelize, or No ORM**: Integrate with popular ORMs for smooth database handling.
- **TypeScript Enchantment**: Cast TypeScript into your project for type safety.
- **Works with Any Potion (Package Manager)**: Use npm, yarn, or pnpm—whatever suits your wizardly needs.
- **Runtimes for Every Realm**: Node, Deno, Bun—your choice of magic power. ⚡

---

## ⚡️ Summon Wizard Build

Ready to start casting backend spells? First, you'll need to summon the tool.

### 🧑‍💻 Option 1: Invoke with `npx`

The fastest way to start wielding Wizard Build is to cast it directly without installation:

```bash
npx wizard-build init
```

> With this incantation, you’ll be guided through a magical process to set up your project. 🎩✨

### Option 2: Install globally

If you want to keep Wizard Build in your spellbook permanently, you can install it globally:

```bash
npm install -g wizard-build
```

## 🔮 Summoning Your First Project
Now that you've got Wizard Build in your arsenal, let's conjure up your first project:

1. Start the incantation: Summon a new project with the following spell:

```bash
wizard-build init
```

2. Answer the Oracle's Questions: The magical Oracle will ask you a series of questions to tailor your spell. Just pick the right options to suit your needs:

```bash
🧙‍♂️ What backend framework would you like to use? (Use arrow keys)
❯ Node.js
  Express
  Fastify
  Prisma
  MongoDB
  Other
```

3. Let the magic happen: Wizard Build will gather all the ingredients (config files, dependencies, etc.) and brew your project potion. 🧪

```bash
🧙‍♀️ Brewing project...
🪄 Installing dependencies...
✨ Project created successfully!
```

4. Begin your journey: After the setup is complete, navigate into your project folder and start coding!

```bash
cd my-project
npm install
npm run dev
```

5. Cast the spell: Open your browser and visit `http://localhost:3000` to see your freshly brewed backend magic at work! 🌟

```bash
Server running at http://localhost:3000 🧙‍♂️
```

## 🎉 Conclusion

Congratulations! You’ve successfully mastered your first backend spell with Wizard Build. Now that you can conjure full backend setups in minutes, the world of backend development is at your fingertips. 🌍✨

If you ever need help on your magical journey, feel free to reach out on GitHub or follow us on Twitter.

Happy coding, and may your backend always be enchanted! 🧙‍♂️💻✨
