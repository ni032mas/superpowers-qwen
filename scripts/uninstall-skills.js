#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// Пути
const SKILLS_DIR = path.join(os.homedir(), '.qwen', 'skills', 'superpowers');

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
  
  if (fs.existsSync(SKILLS_DIR)) {
    removeDirectory(SKILLS_DIR);
    console.log(`✅ Removed: ${SKILLS_DIR}`);
    console.log('\n✨ Qwen Superpowers uninstalled successfully!');
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
