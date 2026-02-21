---
name: writing-plans
description: "Use AFTER brainstorming/design approval, BEFORE coding. Creates implementation plan with bite-sized tasks. Use when user says 'plan', 'implement', 'build', 'create feature', 'write code', 'add functionality'."
---

# Writing Plans

## Overview

Write comprehensive implementation plans assuming the engineer has **zero context** for our codebase and questionable taste. Document everything they need to know: which files to touch for each task, code, testing, documentation they might need to check, how to test it. Give them the whole plan as bite-sized tasks.

**DRY. YAGNI. TDD. Frequent commits.** Assume they are a skilled developer, but know almost nothing about our toolset or problem domain. Assume they don't know good test design very well.

**Announce at start:** "I'm using the writing-plans skill to create the implementation plan."
**Save plans to:** `docs/plans/YYYY-MM-DD-<plan-name>.md`

## Bite-Sized Task Granularity

**Each step is one action (2-5 minutes):**
- "Write the failing test" — step
- "Run it to make sure it fails" — step
- "Implement the minimal code to make the test pass" — step
- "Run the tests and make sure they pass" — step
- "Commit" — step

## Plan Document Header

**Every plan MUST start with this header:**

```markdown
# [Feature Name] Implementation Plan

> **For Qwen Code:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task.

**Goal:** [One sentence describing what this builds]
**Architecture:** [2-3 sentences about approach]
**Tech Stack:** [Key technologies/libraries]

---
```

## Task Structure

```markdown
### Task N: [Component Name]

**Files:**
- Create: `exact/path/to/file.ts`
- Modify: `exact/path/to/existing.ts:123-145`
- Test: `tests/exact/path/to/test.ts`

**Step 1: Write the failing test**
```typescript
function testSpecificBehavior() {
    const result = function(input);
    expect(result).toBe(expected);
}
```

**Step 2: Run test to verify it fails**
Run: `npm test -- tests/path/test.ts -t "test_name"`
Expected: FAIL with "function not defined"

**Step 3: Write minimal implementation**
```typescript
function function(input) {
    return expected;
}
```

**Step 4: Run test to verify it passes**
Run: `npm test -- tests/path/test.ts -t "test_name"`
Expected: PASS

**Step 5: Commit**
```bash
git add tests/path/test.ts src/path/file.ts
git commit -m "feat: add specific feature"
```
```

## Remember

- Exact file paths always
- Complete code in plan (not "add validation")
- Exact commands with expected output
- Reference relevant skills with @ syntax
- DRY, YAGNI, TDD, frequent commits

## Execution Handoff

After saving the plan, offer execution choice:

**"Plan complete and saved to `docs/plans/<date>-<name>.md`. Two execution options:**

**1. Subagent-Driven (this session)**
- I dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session (separate)**
- Open new session with executing-plans, batch execution with checkpoints

**Which approach?"**

**If Subagent-Driven chosen:**
- **REQUIRED SUB-SKILL:** Use `subagent-driven-development`
- Stay in this session
- Fresh subagent per task + code review

**If Parallel Session chosen:**
- Guide them to open new session in worktree
- **REQUIRED SUB-SKILL:** New session uses `executing-plans`
