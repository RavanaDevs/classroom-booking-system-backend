import { Schema, model, Document } from 'mongoose'

interface IClass extends Document{
    classRoomName:string
    seatsCount:number
    airCondition:String
}

const classSchema= new Schema<IClass>(
    {
        classRoomName:{type:String,required:true},
        seatsCount:{type:Number,required:true},
        airCondition:{type:String,required:true}  
    },
    {timestamps:true}
)
const Class=model<IClass>('class',classSchema)
export default Class