//REQUIRE IN OUR MONGOOSE
const mongoose = require('mongoose')

//(DESTRUCTURING) Shorthand for Schema constructor
const { Schema } = mongoose

//BREAD SCHEMA
const breadSchema = new Schema({
  //actual breakdown of the bread document (1 bread item/data)
    name: { type: String, required: true },
    hasGluten: { type: Boolean },
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
      type: String,
      enum: ['Big Bird', 'Elmo', 'Cookie Monster', 'Oscar the Grouch']
    }
})

breadSchema.methods.getBakedBy = function () {
  return `${this.name} was baked with love by ${this.baker}`
}


//BREAD MODEL
const Bread = mongoose.model('Bread', breadSchema)
//PART 1: THE VARIABLE WE'RE SAVING OUR MODEL TO.
//PART 2: MONGOOSE -> MONGOOSE METHOD THAT CREATES A MODEL FOR US
//PART 3: 'BREAD' -> ARG 1 IS THE NAME OF THE COLLECTION WE WANT TO CONNECT THIS MODEL TO.
//PART 4: BREADSCHEMA -> ARG 2 THE SCHEMA WE WANT OUR MODEL TO USE.

//EXPORT BREAD
module.exports = Bread 



// module.exports = [
//     {
//     name: 'Rye',
//     hasGluten: true,
//     image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//     name: 'French',
//     hasGluten: true,
//     image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//     },
//     {
//     name: 'Gluten-Free',
//     hasGluten: false,
//     image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//     name: 'Pumpernickel',
//     hasGluten: true,
//     image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     }
// ]
