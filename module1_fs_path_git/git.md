# Upload code to github 
## First Time setup
- [ ] git config --global user.email sidathreddevil4321@example.com
- [ ] git config --global user.name "Sidanth5601"


## (You need to do it always) Hamesha karna hoga 
- [ ] git init
- [ ] create a file  .gitignore=> add node_modules to it which are hidden from viewing
- [ ] git add .
- [ ] git commit -m "commit message"
- [ ] create a repo on github
- [ ] git remote add origin **Your Repo Name**
- [ ] git push -u origin master


## How to see .git hidden files
ls -a

## how to delete .git folder
rm -rf .git


## git original recommendation to add already existing repo
git remote add origin https://github.com/Sidanth5601/fs-wcat.git
git branch -M main
git push -u origin main


## link for uncommiting my last commit
https://stackoverflow.com/questions/2845731/how-to-uncommit-my-last-commit-in-git


## again push 2nd time
git status 
git add --all
git commit
git push