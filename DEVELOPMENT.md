# Development

## How Skills Work

**Important:** Skills in Qwen Code require **explicit invocation**. They do NOT activate automatically based on description matching.

### Ways to invoke a skill:

1. **Slash command:**
   ```
   /skills brainstorming
   ```

2. **Mention in request:**
   ```
   use brainstorming skill to help me plan a feature
   ```

3. **Direct instruction:**
   ```
   invoke the test-driven-development skill
   ```

### Why automatic activation doesn't work

Qwen Code's skill system is experimental and currently requires explicit invocation. The `description` field in `SKILL.md` helps the model understand when to suggest using a skill, but won't trigger automatic activation.

## Publishing to npm

```bash
# Login to npm (first time)
npm login

# Bump version (choose major/minor/patch)
npm version patch

# Publish
npm publish --access public
```

## Testing local installation

```bash
# Install from local directory
npm install -g .

# Verify installation
ls ~/.qwen/skills/superpowers

# Uninstall
npm uninstall -g qwen-superpowers
```

## Testing installation from GitHub

```bash
# Install directly from GitHub
npm install -g github:YOUR_USERNAME/qwen-superpowers
```

## Structure

```
qwen-superpowers/
├── package.json           # npm package configuration
├── scripts/
│   ├── install-skills.js  # Postinstall script
│   └── uninstall-skills.js # Preuninstall script
├── skills/                # Skills directory (copied to ~/.qwen/skills/superpowers)
│   └── <skill-name>/
│       └── SKILL.md
├── README.md
├── .npmignore
└── .gitattributes
```

## How it works

1. **Postinstall**: When you run `npm install -g qwen-superpowers`, the `postinstall` script automatically copies all skills from `skills/` to `~/.qwen/skills/superpowers/`

2. **Preuninstall**: When you run `npm uninstall -g qwen-superpowers`, the `preuninstall` script removes the skills directory

3. **Updates**: `npm update -g qwen-superpowers` re-runs the postinstall script with the new version
