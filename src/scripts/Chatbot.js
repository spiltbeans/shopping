import { Configuration, OpenAIApi } from "openai";

const OpenAi = () => {
    const configuration = new Configuration({
        organization: process.env.REACT_APP_OPENAI_ORG, apiKey: process.env.REACT_APP_OPENAI_KEY
    })

    const openai = new OpenAIApi(configuration)
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Using a friendly tone, validate my choice to buy a GRACE KARIN Womens Casual High Waist Pencil Pants with Bow-Knot Pockets for Work.",
        max_tokens: 156,
        temperature: 0.8,
    }).then(r => console.log(r))
    return <></>
}

export default OpenAi
