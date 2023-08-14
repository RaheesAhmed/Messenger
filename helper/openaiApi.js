
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Configuration, OpenAIApi } = require("openai");
const splitString = require('split-string');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const knowledgeBase = fs.readFileSync('helper/bot-training.txt', 'utf-8');
const knowledgeBase2 = fs.readFileSync('helper/bot-trading2.txt', 'utf-8');
const knowledgeBase3 = fs.readFileSync('helper/bot-traning3.txt', 'utf-8');
const knowledgeBase4 = fs.readFileSync('helper/training4.txt', 'utf-8');
const knowledgeBase5 = fs.readFileSync('helper/traning5.txt', 'utf-8');
const fullKnowledge=knowledgeBase + knowledgeBase2 + knowledgeBase3 + knowledgeBase4 + knowledgeBase5;
const chatCompletion = async (prompt) => {
  
console.log(prompt);
  
   
  
  try {
        const response = await openai.createChatCompletion(
            {
                model: 'gpt-3.5-turbo',
                messages: [
                  { "role": "system", "content":`You are a helpful assistant`},
                    { "role": "user", content: prompt + fullKnowledge  },
                  
                  { role: 'assistant', content: 'Hello, how can I assist you?' }
                ],
               
              
            }
        );

        let content = response.data.choices[0].message.content;

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
