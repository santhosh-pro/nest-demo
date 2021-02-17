module.exports = function (plop) {
  
    plop.setGenerator('crud', {
        description: 'Creates NestJS crud',
        prompts: [{
          type: 'input',
          name: 'singularName',
          message: 'Enter Usecase Singular name'
        },
        {
          type: 'input',
          name: 'pluralName',
          message: 'Enter Usecase Plural name'
        }],
        actions: [
          {
            type: 'addMany',
            base: '.templates/crud/',
            destination: process.cwd(),
            templateFiles: '.templates/crud/'
          },
          {
            type: 'append',
            path: 'src/usecases/usecases.module.ts',
            pattern: `/* PLOP_INJECT_MODULE */`,
            template: `\t\t{{pascalCase singularName}}UseCaseModule,`,
          },
          {
            type: 'append',
            path: 'src/usecases/usecases.module.ts',
            pattern: `/* PLOP_INJECT_IMPORT */`,
            template: `import { {{pascalCase singularName}}UseCaseModule } from './{{dashCase singularName}}-use-case/{{dashCase singularName}}-use-case.module';`,
          },
        ]
      });

      plop.setGenerator('entity', {
        description: 'Create Entity',
        prompts: [{
          type: 'input',
          name: 'name',
          message: 'Enter Entity Name'
        }],
        actions: [
          {
            type: 'addMany',
            base: '.templates/entity/',
            destination: process.cwd(),
            templateFiles: '.templates/entity/'
          }
        ]
      });
};
