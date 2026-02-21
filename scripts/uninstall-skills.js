#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// Пути
const GLOBAL_SKILLS_DIR = path.join(os.homedir(), '.qwen', 'skills');

// Список скиллов для удаления
const SKILLS_TO_REMOVE = [
  'brainstorming',
  'executing-plans',
  'finishing-a-development-branch',
  'requesting-code-review',
  'subagent-driven-development',
  'systematic-debugging',
  'test-driven-development',
  'writing-plans'
];

/**
 * Рекурсивное удаление директории
 */
function removeDirectory(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      removeDirectory(entryPath);
    } else {
      fs.unlinkSync(entryPath);
    }
  }
  
  fs.rmdirSync(dir);
}

/**
 * Удаление скиллов
 */
function uninstallSkills() {
  console.log('🗑️  Uninstalling Qwen Superpowers...\n');
  
  let removedCount = 0;
  
  for (const skill of SKILLS_TO_REMOVE) {
    const skillPath = path.join(GLOBAL_SKILLS_DIR, skill);
    if (fs.existsSync(skillPath)) {
      removeDirectory(skillPath);
      console.log(`✅ Removed: ${skill}`);
      removedCount++;
    }
  }
  
  if (removedCount > 0) {
    console.log(`\n✨ Successfully removed ${removedCount} skill(s)!`);
  } else {
    console.log('ℹ️  Qwen Superpowers not found. Nothing to remove.');
  }
}

// Запуск
try {
  uninstallSkills();
} catch (error) {
  console.error('❌ Error uninstalling skills:', error.message);
  process.exit(1);
}
