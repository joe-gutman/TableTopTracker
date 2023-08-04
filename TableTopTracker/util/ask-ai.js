import axios from 'axios';
const openAI_Key = "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";

const AskAI = async (prompt, input) => {
  try {
    const url = "https://api.openai.com/v1/engines/text-davinci-003/completions";
    const headers = {
      Authorization: `Bearer ${openAI_Key}`,
      "User-Agent": "Mozilla/5.0",
      "Content-Type": "application/json",
    };

    const data = {
      prompt: prompt + '\n' + command,
      max_tokens: 256,
    };
    console.log(prompt + '\n' + command);

    const response = await axios.post(url, data, { headers });
    const gptResponse = response.data.choices[0].text;
    console.log(gptResponse);
    return gptResponse;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
  }
};

export default AskAI;