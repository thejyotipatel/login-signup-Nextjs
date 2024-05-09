import mongoose from 'mongoose'

const connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL!)

    const connection = mongoose.connection

    connection.on('connected', () => {
      console.log('MongoD connected successfully...')
    })

    connection.on('error', (err) => {
      console.log('Error on mangoDB...' + err)
      process.exit()
    })
  } catch (error) {
    console.log('Something want wrong!!!')
    console.log(error)
  }
}
export default connectDb
