import bcrypt from 'bcryptjs';
import User from '../models/user.js';

export async function postUser(req,res){
    const body = req.body;
    try{
        const user = new User(body);
        //bcrypt
        user.password = bcrypt.hash(body.password,10);
        await user.save();
        res.status(200).jason({msg:'user created successfully'});
    }catch (error){
        res.status(500).jason({msg:'problem creating'});
    }
}