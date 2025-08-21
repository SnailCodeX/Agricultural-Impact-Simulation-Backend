const roles = require('../models/roles.models')

class RolesDao{
    async addRole(req , res, next){
        try{
            const {roleType} = req.body            
            const newRole = new roles({
                roleType: roleType
            })
            await newRole.save()
        if(!newRole){
                return res.json({
                success: false,
                data: [],
                message: "Role not added"
            })
        }
        return res.status(200).json({
            success: true,
            data: newRole,
            message: "Role added"
        })
        } catch(error){
            return next(error)
        }
    }
}
module.exports = RolesDao
