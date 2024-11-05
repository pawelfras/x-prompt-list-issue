import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

interface Options {
  numbers: string[];
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function schematicsListIssue(options: Options): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log("Selected numbers:", options.numbers);
    return tree;
  };
}
