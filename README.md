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

---

## 📖 Why These Skills?

### The Problem: AI Coding Without Structure

When you ask Qwen Code to implement a feature **without skills**, here's what typically happens:

#### ❌ Without Skills (Chaotic Approach)

```
User: "Add user authentication to my app"

AI: *immediately starts writing code*
      - Creates auth.service.ts with login/register methods
      - Adds JWT token generation
      - Writes password hashing
      - Creates middleware for protected routes
      
*No tests written*
*No discussion about edge cases*
*No consideration for existing codebase patterns*
*No error handling strategy*
*No documentation*

Result:
- Code works for happy path only
- No tests to catch regressions
- Missing error handling for invalid tokens
- Password validation rules unclear
- No rate limiting for brute force protection
- Technical debt accumulates
```

**Common issues:**
- 🚫 Code without tests → bugs slip through
- 🚫 No requirements clarification → wrong features built
- 🚫 Skipping design discussions → poor architecture
- 🚫 No code review → inconsistent patterns
- 🚫 No cleanup → technical debt

---

### The Solution: Structured Development with Skills

With **Qwen Superpowers**, the same request follows a disciplined process:

#### ✅ With Skills (Structured Approach)

```
User: "/skills brainstorming - Add user authentication to my app"

AI (Brainstorming Skill):
  "Before we start, let me clarify some requirements:
   
   1. What authentication method do you prefer?
      - JWT tokens
      - Session-based
      - OAuth (Google, GitHub, etc.)
   
   2. What user fields do you need?
      - Email/password only?
      - Phone number?
      - Social profiles?
   
   3. Security requirements:
      - Password complexity rules?
      - Rate limiting?
      - 2FA support?
   
   4. Integration needs:
      - Existing user database?
      - Email verification?
      - Password reset flow?"

*After clarification:*

AI (Writing Plans Skill):
  "Here's the implementation plan:
   
   Phase 1: Database Schema (5 min)
   - Create users table migration
   - Add indexes on email/username
   
   Phase 2: Core Authentication (15 min)
   - User entity with validation
   - Password hashing service (bcrypt)
   - JWT token service
   
   Phase 3: API Endpoints (20 min)
   - POST /auth/register
   - POST /auth/login
   - POST /auth/refresh
   - POST /auth/logout
   
   Phase 4: Security (10 min)
   - Rate limiting middleware
   - Password strength validator
   - Token blacklist for logout
   
   Phase 5: Testing (25 min)
   - Unit tests for services
   - Integration tests for endpoints
   - Security tests (invalid tokens, etc.)"

*After plan approval:*

AI (TDD Skill):
  "Starting with tests first:
   
   1. Writing test for password hashing
   2. Writing test for token generation
   3. Writing test for login endpoint
   4. Running tests (RED phase)
   5. Implementing code to pass tests (GREEN phase)
   6. Refactoring for clarity"

*After implementation:*

AI (Code Review Skill):
  "Code review complete:
   ✅ All tests passing (42/42)
   ✅ Coverage: 95%
   ✅ Follows project patterns
   ⚠️  Suggestion: Add timeout for token refresh
   ✅ Error handling comprehensive"

AI (Finishing Branch Skill):
  "Feature complete:
   ✅ All tasks done
   ✅ Tests passing
   ✅ Code reviewed
   ✅ Temporary files cleaned
   ✅ Ready to commit"
```

**Benefits:**
- ✅ Requirements clarified upfront → right features built
- ✅ Tests written first → fewer bugs
- ✅ Design reviewed → better architecture
- ✅ Code reviewed → consistent quality
- ✅ Cleanup included → no technical debt

---

## 🎓 Deep Dive: Each Skill Explained

### 1. 🧠 Brainstorming

**Purpose:** Prevent building the wrong thing by clarifying requirements first.

**When to use:** Starting any new feature, fixing complex bugs, architectural decisions.

**Example:**
```
/skills brainstorming - Add real-time notifications

AI will ask:
- What notification types? (push, email, in-app)
- What triggers notifications?
- User preferences/subscription management?
- Delivery guarantees (at-least-once, exactly-once)?
- Third-party services (Firebase, OneSignal)?
```

---

### 2. 📝 Writing Plans

**Purpose:** Break complex work into manageable, reviewable tasks.

**When to use:** After brainstorming, before any implementation.

**Example:**
```
/skills writing-plans - Implement file upload with S3

Output:
□ Task 1: Add AWS SDK dependency (2 min)
□ Task 2: Create upload service with presigned URLs (10 min)
□ Task 3: Add file validation (size, type) (5 min)
□ Task 4: Create upload endpoint (8 min)
□ Task 5: Write integration tests (15 min)
□ Task 6: Add progress tracking (optional) (10 min)
```

---

### 3. ⚙️ Executing Plans

**Purpose:** Systematic implementation without skipping steps.

**When to use:** After plan is approved by user.

**Example:**
```
/skills executing-plans - Implement the upload plan

AI will:
1. Work through tasks in order
2. Report progress after each task
3. Ask for clarification if blocked
4. Never skip tasks without approval
```

---

### 4. 🤖 Subagent-Driven Development

**Purpose:** Leverage multiple AI agents for complex tasks with built-in review.

**When to use:** Large features, refactoring, performance optimization.

**Example:**
```
/skills subagent-driven-development - Refactor auth module

Process:
1. Agent A: Implements new auth flow
2. Agent B: Reviews implementation
3. Agent A: Addresses review comments
4. Final review before completion
```

---

### 5. 🧪 Test-Driven Development

**Purpose:** Ensure code quality by writing tests BEFORE implementation.

**When to use:** All new features, bug fixes, refactoring.

**Example:**
```
/skills test-driven-development - Add password reset

RED Phase:
  ❌ Test: Should send reset email
  ❌ Test: Should validate token expiry
  ❌ Test: Should hash new password
  
GREEN Phase:
  ✅ Implement sendResetEmail()
  ✅ Implement validateToken()
  ✅ Implement resetPassword()
  
REFACTOR Phase:
  - Clean up duplicate code
  - Improve error messages
  - Add type hints
```

---

### 6. 🔍 Systematic Debugging

**Purpose:** Find root causes, not just symptoms.

**When to use:** Crashes, intermittent failures, performance issues.

**Example:**
```
/skills systematic-debugging - API returns 500 randomly

4-Phase Analysis:
1. Reproduce: Under what conditions does it fail?
2. Instrument: Add logging, metrics, tracing
3. Hypothesize: Database connections? Memory leaks?
4. Test: Confirm or reject each hypothesis

Result: Found connection pool exhaustion under load
```

---

### 7. 👀 Requesting Code Review

**Purpose:** Ensure code meets standards before merging.

**When to use:** After implementation, before commit/merge.

**Example:**
```
/skills requesting-code-review - Review auth implementation

Review Checklist:
□ Follows project style guide
□ All tests passing
□ Error handling complete
□ Security considerations addressed
□ Documentation updated
□ No hardcoded values
□ Logging appropriate
```

---

### 8. 🏁 Finishing a Development Branch

**Purpose:** Clean completion with no loose ends.

**When to use:** Feature complete, ready to merge.

**Example:**
```
/skills finishing-a-development-branch

Verification:
✅ All tests passing
✅ Code reviewed and approved
✅ No console.log() or debug code
✅ No temporary files
✅ Documentation updated
✅ Commit message follows conventions

Ready to merge!
```

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
