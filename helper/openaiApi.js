
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const knowledgeBase = fs.readFileSync('helper/bot-training.txt', 'utf-8');

const chatCompletion = async (prompt) => {
  
console.log(prompt);
  
   
  
  try {
        const response = await openai.createChatCompletion(
            {
                model: 'gpt-3.5-turbo',
                messages: [
                  { "role": "system", "content":`You are a helpful assistant`},
                    { "role": "user", content: prompt + knowledgeBase  },
                  
                  { role: 'assistant', content: 'Hello, how can I assist you?' }
                ],
               
              
            }
        );

        let content = response.data.choices[0].message.content;
        console.log(content)
        return {
            status: 1,
            response: content
          
        };
    } catch (error) {
        return {
            status: 0,
            response: ''
        };
    }
};

module.exports = {
  chatCompletion
};
