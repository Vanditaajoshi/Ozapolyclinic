import { execSync } from 'child_process';
import { existsSync, cpSync, rmSync } from 'fs';

console.log('🚀 Starting deployment to GitHub Pages...\n');

// Step 1: Build the project
console.log('📦 Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Step 2: Create a temporary directory
const tempDir = '.gh-pages-temp';
if (existsSync(tempDir)) {
  rmSync(tempDir, { recursive: true, force: true });
}

// Step 3: Copy dist folder
console.log('📋 Copying build files...');
cpSync('dist', tempDir, { recursive: true });

// Step 4: Initialize git repo in temp directory
console.log('🔧 Setting up Git...');
execSync('git init', { cwd: tempDir, stdio: 'inherit' });
execSync('git add -A', { cwd: tempDir, stdio: 'inherit' });
execSync('git commit -m "Deploy to GitHub Pages"', { cwd: tempDir, stdio: 'inherit' });

// Step 5: Push to gh-pages branch
console.log('🚀 Deploying to GitHub Pages...');
execSync(`git push -f https://github.com/Vanditaajoshi/Ozapolyclinic.git HEAD:gh-pages`, { 
  cwd: tempDir, 
  stdio: 'inherit' 
});

// Step 6: Cleanup
rmSync(tempDir, { recursive: true, force: true });

console.log('\n✅ Successfully deployed to GitHub Pages!');
console.log('🌐 Your site will be available at: https://vanditaajoshi.github.io/Ozapolyclinic/');
console.log('\n💡 Note: It may take a few minutes for the site to be live.');
