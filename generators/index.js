module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      // {
      //   type: 'add',
      //   path: '../src/components/{{properCase name}}/index.js',
      //   templateFile: 'component/index.ts.hbs',
      // },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/index.tsx',
        templateFile: 'component/tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.spec.tsx',
        templateFile: 'component/test.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.stories.ts',
        templateFile: 'component/stories.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/styles.ts',
        templateFile: 'component/styles.js.hbs',
      }
    ]
  });
}
