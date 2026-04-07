
import openai from 'openai';

OPENAI_API_KEY = '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';
const client = new openai.OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});
async function generateResponse() {
  const userInput = document.getElementById('userInput').value;
  const responseElement = document.getElementById('response');
  
  try {
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userInput }
      ]
    });
    
    responseElement.textContent = response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating response:', error);
    responseElement.textContent = 'An error occurred while generating the response.';
  }
}
