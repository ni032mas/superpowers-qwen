---
name: subagent-driven-development
description: Use for delegated task execution with 2-stage review. Fast iteration with fresh subagent per task.
disable-model-invocation: false
---

# Subagent-Driven Development

## Overview

Fast iteration through dispatching fresh subagent per task with code review between tasks. Catch issues before they compound.

**Core principle:** Fresh eyes on each task, review between tasks.

**Announce at start:** "I'm using the subagent-driven-development skill for fast iteration."

## The Process

### Step 1: Load Plan

1. Read implementation plan from `docs/plans/`
2. Identify next task to execute
3. Confirm previous task is completed and reviewed

### Step 2: Dispatch Subagent

**For each task:**

1. **Create fresh subagent:**
   - Use Task tool with type `general-purpose`
   - Give exact instructions for one task
   - Include acceptance criteria from plan

2. **Prompt for subagent:**
   ```
   Task: [Task name from plan]
   
   Plan Instructions:
   [Copy task steps from plan]
   
   Requirements:
   - Follow TDD (write tests first)
   - Commit after each passing test
   - Request code review when task complete
   
   Context:
   [Links to relevant files]
   ```

### Step 3: Code Review

**When subagent completes task:**

1. **Dispatch code-reviewer:**
   - Use `requesting-code-review` skill
   - Get feedback on code quality
   - Identify Critical/Important/Minor issues

2. **Act on feedback:**
   - Fix Critical issues immediately
   - Fix Important issues before next task
   - Track Minor issues for later

3. **Confirm ready:**
   - All issues addressed?
   - Tests passing?
   - Ready for next task?

### Step 4: Repeat

1. Mark task completed
2. Move to next task in plan
3. Dispatch fresh subagent
4. Repeat Step 3

### Step 5: Complete

When all tasks completed:
- Announce: "I'm using the finishing-a-development-branch skill"
- **REQUIRED SUB-SKILL:** Use `finishing-a-development-branch`

## Advantages

| Traditional | Subagent-Driven |
|-------------|-----------------|
| One agent for everything | Fresh agent per task |
| Review at end | Review between tasks |
| Problems compound | Problems caught early |
| Context accumulates | Context fresh |

## When to Use

**Ideal for:**
- Multi-task implementation plans
- Complex features with clear boundaries
- When fast quality is needed

**Less useful for:**
- Single simple tasks
- Tight coupling between tasks
- When context is critical for each task

## Prompt Template

```
You are an experienced developer working on this task.

## Task
[Task name and description]

## Plan
[Steps from implementation plan]

## Requirements
- TDD: write tests first
- Watch tests fail before implementation
- Minimal code to pass tests
- Commit after each passing test
- Request code review when ready

## Context
- Plan file: `docs/plans/XXX.md`
- Relevant files: [list]
- Previous task: [link]

## Done When
- [ ] All tests pass
- [ ] Code reviewed
- [ ] Issues fixed
- [ ] Commit made
```

## Integration

**Required from:**
- `writing-plans` — creates plan you execute

**Requires:**
- `requesting-code-review` — review after each task
- `finishing-a-development-branch` — complete development
