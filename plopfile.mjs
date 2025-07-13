import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

export default function (
    /** @type {import('plop').NodePlopAPI} */
    plop
) {

    plop.setHelper('lowerSnakeCase', (value) => 
        value.match(/[A-Z][a-z]+/g).map(
            (e) => e.toLowerCase()
        ).join('_')
    );

    plop.setHelper('camelCase', (value) => {
        const splitted = value.split('');
        splitted[0] = splitted[0].toLowerCase();
        return splitted.join('');
    })

    plop.setGenerator('basics', {
        prompts: [
            {
                type: "input",
                name: "feature",
                message: "in which feature do you want to create this new resource (type an exist feature in /app):",
                validate: function (input) {
                    const __filename = fileURLToPath(import.meta.url);
                    const __dirname = dirname(__filename);
                    const appFile = __dirname + '/src/app/' + input;
                    if(fs.existsSync(appFile)){
                        return true;
                    }
                    console.log(`\n'${input}' does not exist, please type an existing feature in /app`);
                    return false;
                },
            },
            {
                type: "input",
                name: "resourceName",
                message: "Name your new resource (it must be provide in PascalCase):",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/app/{{feature}}/data/datasource/i_{{lowerSnakeCase resourceName}}_datasource.ts",
                templateFile: "templates/data/datasource/i_datasource.template.hbs",
                abortOnFail: true,
            },
            {
                type: "add",
                path: "src/app/{{feature}}/datasource/{{lowerSnakeCase resourceName}}_datasource.ts",
                templateFile: "templates/datasource/datasource.template.hbs",
                abortOnFail: true,
            },
            {
                type: "add",
                path: "src/app/{{feature}}/domain/repository/i_{{lowerSnakeCase resourceName}}_repository.ts",
                templateFile: "templates/domain/repository/i_repository.template.hbs",
                abortOnFail: true,
            },
            {
                type: "add",
                path: "src/app/{{feature}}/data/repository/{{lowerSnakeCase resourceName}}_repository.ts",
                templateFile: "templates/data/repository/repository.template.hbs",
                abortOnFail: true,
            },
            {
                type: "add",
                path: "src/app/{{feature}}/domain/service/i_{{lowerSnakeCase resourceName}}_service.ts",
                templateFile: "templates/domain/service/i_service.template.hbs",
                abortOnFail: true,
            },
            {
                type: "add",
                path: "src/app/{{feature}}/domain/service/{{lowerSnakeCase resourceName}}_service.ts",
                templateFile: "templates/domain/service/service.template.hbs",
                abortOnFail: true,
            },
            {
                type: "add",
                path: "src/app/{{feature}}/controller/{{lowerSnakeCase resourceName}}_controller.ts",
                templateFile: "templates/controller/controller.template.hbs",
                abortOnFail: true,
            },
        ]
    });
};
