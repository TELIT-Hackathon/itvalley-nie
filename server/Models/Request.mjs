import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const RequestSchema = new Schema({
    title: String,
    description: String,
    peopleNeeded: [{
        role: String,
        skills: [{
            id: String,
            level: Number,
        }],
        amount: Number
    }],
    interestedUsers: [ObjectId],
    closedAt: Date,
    createdBy: ObjectId
})

const Request = mongoose.model('Request', RequestSchema)
export default Request