import { Schema, model, Document } from 'mongoose'

interface IClass extends Document{
    classRoomName:string
    seatsCount:number
    airCondition:String
}

const classRoomSchema= new Schema<IClass>(
    {
        classRoomName:{type:String,required:true},
        seatsCount:{type:Number,required:true},
        airCondition:{type:String,required:true}  
    },
    {timestamps:true}
)
const ClassRoom=model<IClass>('class',classRoomSchema)
export default ClassRoom