const Todo = require("./todo")

Todo.methods(["get", "post", "put", "delete"])
// codigo abaixo serve para quando o registro for atualizado,
// retornar o registro de fato atualizado e nao o antigo
// runValidators serve para quando for um update ele fazer
//as verificacoes de integridade de acordo com o schema
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;