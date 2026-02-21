# Qwen Superpowers

> **Inspired by** [obra/superpowers](https://github.com/obra/superpowers)

A collection of composable skills for Qwen Code that enforce structured software development workflows.

[![npm version](https://badge.fury.io/js/superpowers-qwen.svg)](https://www.npmjs.com/package/superpowers-qwen)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🎯 What is this?

Qwen Superpowers is a set of mandatory workflows that guide Qwen Code through disciplined software development practices. Instead of jumping straight into coding, the agent follows a structured process:

1. **Clarifies requirements** through brainstorming and questions
2. **Presents design** in small, reviewable sections
3. **Creates detailed implementation plans** with specific tasks
4. **Executes via subagents** with built-in code review
5. **Follows TDD** (Red-Green-Refactor) for all implementations
6. **Verifies and cleans up** before declaring completion

## 📦 Installation

### Option 1: From npm (Recommended)

```bash
# Install from npm registry
npm install -g superpowers-qwen
```

### Option 2: From GitHub

```bash
# Install directly from GitHub
npm install -g github:ni032mas/superpowers-qwen
```

### Option 3: Local install (for development)

```bash
# Clone and install locally
git clone git@github.com:ni032mas/superpowers-qwen.git
cd superpowers-qwen
npm install -g .
```

### Verify Installation

After installation, the skills are automatically copied to `~/.qwen/skills/`.

To verify, ask Qwen Code:
```
/skills brainstorming
```

Or use explicit commands:
```
use brainstorming skill to help me plan a feature
```

## 💡 Usage Examples

### Start a new feature
```
/skills brainstorming - I want to add user authentication to my app
```

### Create an implementation plan
```
/skills writing-plans - Help me plan the database migration feature
```

### Execute a plan
```
/skills executing-plans - Let's implement the login form
```

### Test-driven development
```
/skills test-driven-development - Write tests for the user service
```

### Code review
```
/skills requesting-code-review - Review my changes in src/auth.ts
```

### Debug an issue
```
/skills systematic-debugging - The app crashes when logging in
```

### Finish a branch
```
/skills finishing-a-development-branch - I'm done with the feature
```

## 🗑️ Uninstall

**Note:** Due to npm limitations, uninstall requires two steps:

```bash
# Step 1: Remove skills from ~/.qwen/skills/
superpowers-qwen-cleanup

# Step 2: Remove the npm package
npm uninstall -g superpowers-qwen
```

Or use the interactive uninstaller:
```bash
superpowers-qwen-uninstall
npm uninstall -g superpowers-qwen
```

**If you already removed the package**, cleanup skills manually:
```bash
superpowers-qwen-cleanup
```

Or remove manually:
```bash
# Windows
rmdir /s /q %USERPROFILE%\.qwen\skills\brainstorming
rmdir /s /q %USERPROFILE%\.qwen\skills\executing-plans
# ... repeat for each skill

# macOS/Linux
rm -rf ~/.qwen/skills/brainstorming
rm -rf ~/.qwen/skills/executing-plans
# ... repeat for each skill
```

## ⚡ Available Skills

| Skill | Description |
|-------|-------------|
| `brainstorming` | Clarifies ideas through questions before coding |
| `writing-plans` | Breaks work into 2-5 minute tasks with exact paths |
| `executing-plans` | Executes planned tasks systematically |
| `subagent-driven-development` | Delegates tasks to subagents with 2-stage review |
| `test-driven-development` | RED-GREEN-REFACTOR cycle for all code |
| `systematic-debugging` | 4-phase root cause analysis |
| `requesting-code-review` | Reviews work against the plan |
| `finishing-a-development-branch` | Verifies, commits, and cleans up |

## 🔄 Updating

```bash
# If installed via npm
npm update -g superpowers-qwen

# If installed from GitHub
npm update -g github:ni032mas/superpowers-qwen

# If installed locally (Git)
cd superpowers-qwen
git pull
npm install -g .
```

Then restart Qwen Code.

## 📋 Requirements

- **Node.js** >= 18.0.0
- **Qwen Code** CLI
- **npm** or **yarn**

## 📚 Philosophy

- ✅ **TDD First** — tests always before implementation
- ✅ **Systematic** over ad-hoc approaches
- ✅ **Simplicity** as the primary goal
- ✅ **Evidence** over assertions
- ✅ **Review** before completion

## 📖 Documentation

- [Development Guide](DEVELOPMENT.md) - How to develop and contribute skills
- [Testing Guide](TESTING.md) - How to test the package
- [Qwen Superpowers Context](QWEN.md) - Full project documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [obra/superpowers](https://github.com/obra/superpowers) - The original inspiration for this workflow

---

*Made with ❤️ for the Qwen Code community* 
