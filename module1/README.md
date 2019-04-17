# TypeScript - Starter
> [Live-Example](http://tsstarter.example.mikemitterer.at/) | [GitHub-Home](https://github.com/MikeMitterer/typescript-starter)

## Klonen in neues Dir

    git clone git@github.com:MikeMitterer/typescript-starter.git <new project> 
    cd <new project>
    rm -rf .git
    git init

    # GH Repo anlegen e.g. ts-signer
    git remote add origin git@github.com:MikeMitterer/ts-signer.git

    # Version auf 0.1.0 ziehen
    sed -i '' -e "s/\"version\": \".*\"/\"version\": \"0.1.0\"/" package.json | cat package.json | grep '"version'
    
    # Package-Name, Description und REPO-Url anpassen
    ws package.json
    
    # README rudimentär anpassen (Title + Home) 
    
    # Auf GIT pushen
    git add . && git commit -am "Initial release" && git push -u origin master       
     
## Deploy-Varianten aus packages.json

   - yarn clean
   
   - yarn deploy 
   Erstellt die nötigen Files in `lib`
   
   - yarn deploy:node
   Erstellt im `bin`-Folder das File app.js dass mit `node bin app.js` aufgerufen werden kann
   
   - yarn deploy:web
   Browser-Part wird in `dist` veröffentlicht. Kann mit `simplehttpserver dist/` getestet werden
   
   - yarn test | jest
   Führt die Unit-Tests aus
   
   
## Upgrade aller packages

    yarn-upgrade-latest






