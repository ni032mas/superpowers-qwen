#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

// Пути
const GLOBAL_SKILLS_DIR = path.join(os.homedir(), '.qwen', 'skills');

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
function cleanupSkills() {
  console.log('🗑️  Cleaning up Qwen Superpowers skills...\n');
  
  let removedCount = 0;
  let notFoundCount = 0;
  
  for (const skill of SKILLS_TO_REMOVE) {
    const skillPath = path.join(GLOBAL_SKILLS_DIR, skill);
    if (fs.existsSync(skillPath)) {
      removeDirectory(skillPath);
      console.log(`✅ Removed: ${skill}`);
      removedCount++;
    } else {
      notFoundCount++;
    }
  }
  
  console.log('\n─────────────────────────────────────');
  if (removedCount > 0) {
    console.log(`✨ Successfully removed ${removedCount} skill(s)!`);
  }
  if (notFoundCount > 0) {
    console.log(`ℹ️  ${notFoundCount} skill(s) were not found (already removed?)`);
  }
  if (removedCount === 0) {
    console.log('✅ No skills found. Nothing to remove.');
  }
  console.log('─────────────────────────────────────\n');
}

// Запуск
try {
  cleanupSkills();
  process.exit(0);
} catch (error) {
  console.error('❌ Error during cleanup:', error.message);
  process.exit(1);
}
