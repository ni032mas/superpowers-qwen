# Qwen Superpowers

> **Inspired by** [obra/superpowers](https://github.com/obra/superpowers)

A collection of composable skills for Qwen Code that enforce structured software development workflows.

## 🎯 What is this?

Qwen Superpowers is a set of mandatory workflows that guide Qwen Code through disciplined software development practices. Instead of jumping straight into coding, the agent follows a structured process:

1. **Clarifies requirements** through brainstorming and questions
2. **Presents design** in small, reviewable sections
3. **Creates detailed implementation plans** with specific tasks
4. **Executes via subagents** with built-in code review
5. **Follows TDD** (Red-Green-Refactor) for all implementations
6. **Verifies and cleans up** before declaring completion

## 📦 Installation

### Option 1: npm (Recommended)

```bash
# Install globally
npm install -g qwen-superpowers

# Or install from GitHub
npm install -g github:YOUR_USERNAME/qwen-superpowers
```

The package will automatically copy skills to `~/.qwen/skills/` during installation.

### Option 2: Manual (Git)

1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/qwen-superpowers.git
   ```

2. Copy or symlink the `skills` folder to your Qwen Code skills directory:
   - **Windows**: `%USERPROFILE%\.qwen\skills\superpowers`
   - **macOS/Linux**: `~/.qwen/skills/superpowers`

   ```bash
   # Example for macOS/Linux
   cp -r qwen-superpowers/skills ~/.qwen/skills/superpowers
   ```

## ⚙️ Enabling Skills

**Important:** Skills are an experimental feature. You may need to enable them:

1. Open `%USERPROFILE%\.qwen\settings.json` (Windows) or `~/.qwen/settings.json` (macOS/Linux)
2. Add the following setting:
   ```json
   {
     "tools": {
       "experimentalSkills": true
     }
   }
   ```
3. Restart Qwen Code

For more details, see [ENABLING_SKILLS.md](./ENABLING_SKILLS.md).

### Verify Installation

Ask Qwen Code something like:
```
use brainstorming skill to help me plan a feature
```

Or use the explicit command:
```
/skills brainstorming
```

### Uninstall

```bash
# If installed via npm (recommended)
qwen-superpowers-uninstall

# Or manually remove
rm -rf ~/.qwen/skills/superpowers  # macOS/Linux
rmdir /s /q %USERPROFILE%\.qwen\skills\superpowers  # Windows

# Then remove the package
npm uninstall -g qwen-superpowers
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
npm update -g qwen-superpowers

# If installed from GitHub
npm update -g github:YOUR_USERNAME/qwen-superpowers

# If installed manually (Git)
cd qwen-superpowers
git pull
```

Then restart Qwen Code.

## 📚 Philosophy

- ✅ **TDD First** — tests always before implementation
- ✅ **Systematic** over ad-hoc approaches
- ✅ **Simplicity** as the primary goal
- ✅ **Evidence** over assertions
- ✅ **Review** before completion

---

*This project adapts the excellent [superpowers](https://github.com/obra/superpowers) workflow for Qwen Code.* 
