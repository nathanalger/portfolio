# Getting Started

Quick start guide for development. Probably not needed, but helps me to keep track of what I dev tools I need if necessary.

</br>

## Dependencies

1. [NodeJS v20+](#1-install-nodejs)
2. [VSCode & Extensions](#2-install-vscode--extensions)
3. [Clone Repository & Setup](#3-clone-repository-and-setup)

<br/>

### 1. Install NodeJS

#### Windows

Use the GUI installer linked [here](https://nodejs.org/en/download) to install the latest version of Node.

#### Linux/MacOS

**Run the official install script in bash/zsh:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.7/install.sh | bash
```

**Now, refresh the terminal:**

For Zsh:

```bash
source ~/.zshrc
```

For Bash:

```bash
source ~/.bashrc
```

**Install NodeJS:**

```bash
nvm install --lts
```

**Verify the installation:**

```bash
node -v
npm -v
```

<br/>

### 2. Install VSCode & Extensions

Download the graphical installer for VSCode [here](https://code.visualstudio.com/Download) and install it to your system.

Once it has downloaded, install these extensions:

1. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. [JS/TS Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
3. [Github Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions)
4. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

<br/>

### 3. Clone Repository & Setup

**In the folder you would like the repository cloned to, run:**

```bash
git clone git@github.com:nathanalger/portfolio.git
```

**Then, navigate into the folder:**

```bash
cd ./portfolio
```

**Install pnpm globally & install packages**

```bash
npx get-pnpm
```

then, run setup script:

```bash
pnpm run setup
```
