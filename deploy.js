import { publish } from 'gh-pages';

publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Vanditaajoshi/Ozapolyclinic.git',
    dotfiles: true
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      process.exit(1);
    } else {
      console.log('Successfully deployed to GitHub Pages!');
      console.log('Your site will be available at: https://vanditaajoshi.github.io/Ozapolyclinic/');
    }
  }
);

