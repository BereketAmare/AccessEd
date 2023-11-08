const User = require('../models/supporters')

const moment = require('moment');




module.exports.createSupport = async (req, res)=>{
    const {name, hometown, email} = req.body;
   
    try{
        const time = moment().format('YYYY-MM-DD HH:mm:ss');

        const user = await User.create({name, hometown, email, time})
        res.status(201).json(user)

    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

module.exports.gettop = async (req, res)=>{
 
    try {
        
        let posts = await User.find({})
        
        posts.sort((a, b) => {
            const timeA = new Date(a.time);
            const timeB = new Date(b.time);
            return timeB - timeA;
          });
        
        res.status(200).json(posts.slice(0, 3))

    } catch (error) {
        res.status(400).json({ error: error })
        
    }
}

// module.exports.getaverage = async (req, res)=>{
//     try {
//         // console.log("the process is",process.env.id)
//         let feedbacks = await fb.find({})
//         let average = 0
//         let text = ""
        
//         for (const doc of feedbacks) {
//             average += doc.rating;
//             text += doc.feedback;
//         }
        
//         const response = await openai.createCompletion({
//             model: 'text-davinci-003',
//             prompt: `summarize the text in the triple quotes into one sentence before you give me the sentence make sure the senterce
//             is a formal full sentence and the sentence can be maximum of 60 words, check again the sentence is a complete sentence before
//             giving me you'r response: """ ${text} """`,
//         })
        
//         const data = response.data.choices[0].text;
//         console.log(data)
//         console.log(response.data.choices[0].text.replace(/\n/g, '').replace(/\\/g, ''))
//         res.status(200).json({ average: average / feedbacks.length , feedbacks:  response.data.choices[0].text.replace(/\n/g, '').replace(/\\/g, '') })

//     } catch (error) {
//         res.status(400).json({ error })
        
//     }
// }
