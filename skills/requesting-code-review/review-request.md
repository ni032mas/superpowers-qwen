# Code Review Request

## WHAT_WAS_IMPLEMENTED
Task 11: Menu Scene + Game Over - Complete scene management system with UI

## PLAN_OR_REQUIREMENTS
From `docs/plans/2026-02-21--cyberwick-implementation.md` - Task 11:

**Requirements:**
- Create MenuScene.ts with:
  - Pulsing title "CYBERWICK NEON REVENGE"
  - PLAY button with hover effects
  - Instructions text showing controls
- Create GameOverScene.ts with:
  - GAME OVER / VICTORY display based on outcome
  - RETRY button with hover effects
  - Stats/message text
- Update game.ts with scene management:
  - startGameScene() - transition from menu to game
  - showGameOver(victory) - show end screen
  - restartGame() - return to menu
- Update GameScene.ts:
  - Check player death -> show GAME OVER
  - Check boss defeat -> show VICTORY after 2 second delay

**Acceptance Criteria:**
- [x] MenuScene.ts created
- [x] GameOverScene.ts created
- [x] Menu works (PLAY button)
- [x] Game Over works
- [x] Victory works
- [x] RETRY works
- [x] Commit made
- [ ] Code review requested

## BASE_SHA
e7b0d379e1e3f79cfe1ce0a9a02392d282b0c6e4

## HEAD_SHA
8550e061758a60fc3ed0c9a159cef06fcd5d6358

## DESCRIPTION
Implemented complete scene management system with Menu and Game Over scenes. Features include:
- Animated pulsing title in menu
- Interactive buttons with hover effects
- Victory/Game Over detection
- Scene transitions (menu -> game -> gameover -> menu)
- Fixed Pixi.js v8 API compatibility (fill/stroke methods)
- Added WHITE color to constants

**Files changed:**
- Created: `src/scenes/MenuScene.ts`
- Created: `src/scenes/GameOverScene.ts`
- Modified: `src/game.ts` - scene management
- Modified: `src/scenes/GameScene.ts` - death/victory checks
- Modified: `src/utils/constants.ts` - added WHITE color

**Build status:** Successful (npx vite build passed)
**TypeScript:** No errors
