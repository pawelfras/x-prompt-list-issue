# Getting Started With Schematics

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
Default numbers: []
```

To test with version v18.0.7, run:

```bash
npx @angular-devkit/schematics-cli@18.0.7 .:x-prompt-list-issue
```

Hit enter and see the expected output:

```bash
Default numbers: [1, 3]
```
# x-prompt-list-issue
