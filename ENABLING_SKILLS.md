# Enabling Skills

Skills are an **experimental feature** in Qwen Code and may require explicit enabling.

## Method 1: Add to settings.json (Recommended)

Add the following to your global settings file at `~/.qwen/settings.json`:

```json
{
  "tools": {
    "experimentalSkills": true
  }
}
```

**Location by platform:**
- **Windows**: `%USERPROFILE%\.qwen\settings.json`
- **macOS/Linux**: `~/.qwen/settings.json`

## Method 2: CLI flag (if available)

Some versions support the CLI flag:

```bash
qwen --experimental-skills
```

## Method 3: Create an alias

Add to your shell config (`~/.bashrc`, `~/.zshrc`, or PowerShell profile):

```bash
# Bash/Zsh
alias qwen='qwen --experimental-skills'

# PowerShell
function qwen { & qwen.exe --experimental-skills $args }
```

## Verify Skills are Working

After enabling:

1. Restart Qwen Code
2. Run `/skills` to see available skills
3. Try a task like `help me plan a feature`

## Troubleshooting

If skills still don't activate:

1. **Check installation**: Ensure skills are in `~/.qwen/skills/`
2. **Restart Qwen Code**: Close and reopen
3. **Use explicit invocation**: Try `/skills brainstorming`
4. **Check version**: Update to latest Qwen Code with `npm update -g @qwen-code/qwen-code`
