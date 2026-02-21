#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// Пути
const GLOBAL_SKILLS_DIR = path.join(os.homedir(), '.qwen', 'skills');
const SOURCE_DIR = path.join(__dirname, '..', 'skills');

/**
 * Рекурсивное копирование директории
 */
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Установка скиллов
 */
function installSkills() {
  console.log('🚀 Installing Qwen Superpowers...\n');
  
  // Создаём директорию скиллов, если не существует
  if (!fs.existsSync(GLOBAL_SKILLS_DIR)) {
    fs.mkdirSync(GLOBAL_SKILLS_DIR, { recursive: true });
    console.log(`📁 Created directory: ${GLOBAL_SKILLS_DIR}`);
  }
  
  // Копируем скиллы из пакета в целевую директорию
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error('❌ Skills directory not found in package');
    process.exit(1);
  }
  
  const skills = fs.readdirSync(SOURCE_DIR);
  let installedCount = 0;
  
  for (const skill of skills) {
    const srcPath = path.join(SOURCE_DIR, skill);
    const destPath = path.join(GLOBAL_SKILLS_DIR, `superpowers-${skill}`);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
      console.log(`✅ Installed: superpowers-${skill}`);
      installedCount++;
    }
  }
  
  console.log(`\n✨ Successfully installed ${installedCount} skill(s)!`);
  console.log(`📍 Location: ${GLOBAL_SKILLS_DIR}`);
  console.log('\nTo use: restart Qwen Code and ask it to help with a task.');
}

// Запуск
try {
  installSkills();
} catch (error) {
  console.error('❌ Error installing skills:', error.message);
  process.exit(1);
}
