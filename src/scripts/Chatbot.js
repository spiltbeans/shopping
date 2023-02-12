import { Configuration, OpenAIApi } from "openai";

const OpenAi = ({tone, goal, product}) => {
    const configuration = new Configuration({
        organization: process.env.REACT_APP_OPENAI_ORG, apiKey: process.env.REACT_APP_OPENAI_KEY 
    })


    const openai = new OpenAIApi(configuration)
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Using a ${tone} and informal tone, ${goal} my choice to buy a ${product}`,
        max_tokens: 156,
        temperature: 1,
    }).then(r => console.log(r))
    return <></>
}

export default OpenAi
