A. Pre-Start/Configurations

  1. setting up the Acount
    a: setting up the username and Email:
      git config --global user.name "Avarile"
      git config --global user.email avarile.@gmail.com

    b. setting up the editor / snyc the win/Mac/linux
      git config --global core.editor "code --wait"  // when opened in editor, the console will hangup and waiting
      git config --global core.autocrlf input // if linux or mac   :  true //if windows

    c. edit the settings
      git config --global -e


  2. Initialise a Directory
    a. init a Directory, under the directory
    git init
    
B. this is an Example

we have File1 and File2 in the beginning. after we init the folder, those 2 files with be copied into the stagging area.
  at the Beginning: "git init" under the folder
  then we are comfirmed the File2 


each Commit contains:
1. Who made the commit
2. a message about what has been made
3. when the changes has been made
4. complete snapshot 

