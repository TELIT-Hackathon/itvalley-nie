import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const SkillSchema = new Schema({
    name: String,
    related: [{id:ObjectId, value:Number}]
})

const Skill = mongoose.model('Skill', SkillSchema)
export default Skill