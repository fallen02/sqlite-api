const helper = require('./helper')

function createUser(user){
    return helper("admin").insert(user)
}
function getallAdmin(){
    return helper("admin").select("*")
}
function deleteUser(id){
    return helper("admin").where("id", id).del()
}

module.exports = {
    createUser,
    getallAdmin,
    deleteUser
}