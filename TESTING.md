# Testing Guide

## Full test cycle

```bash
# 1. Create package
npm pack

# 2. Install globally from .tgz
npm install -g ./qwen-superpowers-1.0.0.tgz

# 3. Verify installation
dir %USERPROFILE%\.qwen\skills\superpowers

# 4. Test uninstall command
qwen-superpowers-uninstall

# 5. Verify removal
dir %USERPROFILE%\.qwen\skills\superpowers

# 6. Remove package
npm uninstall -g qwen-superpowers
```

## Test installation from GitHub

```bash
# Install directly from GitHub
npm install -g github:YOUR_USERNAME/qwen-superpowers

# Verify
qwen-superpowers-uninstall
npm uninstall -g qwen-superpowers
```

## Test in Qwen Code

After installation, start Qwen Code and try:

```
help me plan a new feature
```

The agent should automatically invoke the `brainstorming` skill.
