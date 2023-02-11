import OpenAIAPI from "react-openai-api";

let payload = {
    prompt: "Mario: Hi, how are you?",
    maxTokens: 25,
    temperature: 0.5,
    n: 1,
}
const OpenAi = () => {
    const handler = (response) => {
        console.log(response)
    }
    return <OpenAIAPI
    apiKey={"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"}
    payload={payload}
    responseHandler={handler}
  />
}

export default OpenAi