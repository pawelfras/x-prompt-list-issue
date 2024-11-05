# x-prompt list issue

This repository is a basic Schematic implementation that helps reproduce issue with default values for x-prompt when type is a list that occurs in @angular/cli version > v18.0.7.

### Testing
To test the issue locally, clone the repository and go to its location.
Run `npm install` to install dependencies and build the project by running `ng build`.
To test with latest version, run:

```bash
npx @angular-devkit/schematics-cli@latest .:x-prompt-list-issue
```
Hit enter and see the expected output:

```console
? Choose numbers (1 and 3 should be selected by default) 
Selected numbers: []
Nothing to be done.
```

To test with version v18.0.7, run:

```bash
npx @angular-devkit/schematics-cli@18.0.7 .:x-prompt-list-issue
```

Hit enter and see the expected output:

```console
? Choose numbers (1 and 3 should be selected by default) 1, 3
Selected numbers: [ 1, 3 ]
```
