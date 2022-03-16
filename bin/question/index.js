import inquirer from "inquirer";

export default () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'packageName',
            message: 'set package name',
            validate: (val) => {
                if(val) return true;
                return 'Please enter package name'
            }
        },
        {
            type: 'input',
            name: 'port',
            message: 'set port number',
            default(){
                return 8080;
            }
        },
        {
            type: 'confirm',
            name: 'hot',
            message: 'hot update or not',
            default(){
                return true
            }
        }
    ])
}