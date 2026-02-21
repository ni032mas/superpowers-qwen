---
name: systematic-debugging
description: "Use for bugs, errors, unexpected behavior, crashes, failures. 4-phase root cause analysis. Use when user says 'bug', 'error', 'not working', 'crash', 'fail', 'fix', 'debug', 'issue', 'problem', 'broken'."
---

# Systematic Debugging

## Overview

4-phase process for systematically finding the root cause of problems. Don't guess, don't jump to conclusions, don't fix symptoms.

**Core principle:** Understanding before fixing.

## When to Use

- Tests failing unexpectedly
- Feature working incorrectly
- Performance degradation
- Strange behavior in production
- Intermittent failures

## The 4 Phases

### Phase 1: Reproduction

**Goal:** Reliably reproduce the problem.

1. **Gather symptoms:**
   - What was expected?
   - What happened instead?
   - When did it happen?
   - How often does it happen?

2. **Minimize reproduction:**
   - Find minimal steps to reproduce
   - Remove noise and confounding factors
   - Create failing test if possible

3. **Confirm reproduction:**
   - Run reproduction steps
   - Ensure problem manifests consistently
   - Record exact conditions

**Don't move to Phase 2 until you can reliably reproduce.**

### Phase 2: Observation

**Goal:** Gather data about system behavior.

1. **Add logging:**
   - Log at entry/exit of suspicious functions
   - Log values of key variables
   - Log timing and sequence of events

2. **Instrument code:**
   - Add breakpoints for step-through debugging
   - Use profiler for performance issues
   - Add metrics for observability

3. **Gather context:**
   - System state when problem occurs
   - Preceding events
   - External dependencies (API, DB, network)

**Don't move to Phase 3 until you've gathered enough data.**

### Phase 3: Hypothesis

**Goal:** Formulate testable hypotheses about root cause.

1. **Generate hypotheses:**
   - List all possible explanations
   - Don't discard ideas prematurely
   - Consider edge cases and corner conditions

2. **Rank by likelihood:**
   - Which hypothesis best explains all symptoms?
   - Which is simplest (Occam's razor)?
   - Which is easiest to test?

3. **Design tests:**
   - For each hypothesis: how to confirm or refute?
   - Prioritize tests that quickly eliminate options
   - Plan experiments that give clear answers

**Don't move to Phase 4 until you have a testable hypothesis.**

### Phase 4: Verification

**Goal:** Confirm root cause and fix.

1. **Test hypotheses:**
   - Start with highest likelihood
   - Run experiment
   - Observe result

2. **Confirm cause:**
   - Hypothesis confirmed? Great.
   - Hypothesis refuted? Move to next.
   - Need more data? Return to Phase 2.

3. **Fix and prevent:**
   - Fix root cause (not symptom!)
   - Add test that catches this problem
   - Consider: how to prevent this class of problems?

## Anti-Patterns

### ❌ Premature Fix

**Symptom:** Start fixing before understanding cause.

**Why bad:** Fixing symptoms, not cause. Problem will return.

**Cure:** Stop. Return to Phase 1.

### ❌ Random Walk

**Symptom:** Making random changes hoping it helps.

**Why bad:** Even if it "works", don't know why.

**Cure:** Stop. Formulate hypothesis.

### ❌ Confirmation Bias

**Symptom:** Seeking data that confirms your theory.

**Why bad:** Miss real cause.

**Cure:** Actively try to refute your hypothesis.

### ❌ Single Hypothesis

**Symptom:** Fixating on one explanation.

**Why bad:** Might miss actual cause.

**Cure:** Generate 3+ hypotheses minimum.

## Verification Checklist

Before marking debugging complete:
- [ ] Can reliably reproduce problem
- [ ] Gathered data about system behavior
- [ ] Formulated 3+ hypotheses
- [ ] Tested and confirmed root cause
- [ ] Fixed root cause (not symptom)
- [ ] Added test that catches this problem
- [ ] Documented learnings

## Integration

**After debugging:**
- Use `test-driven-development` for fix
- Use `requesting-code-review` for verification
- Use `verification-before-completion` before finishing
