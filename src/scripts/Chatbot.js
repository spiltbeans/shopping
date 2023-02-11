import { Configuration, OpenAIApi } from "openai";

const OpenAi = () => {
    const configuration = new Configuration(
        {organization: "org-6eSQ1gEfyWI7VJzjTpGCfCOX", apiKey: process.env.REACT_APP_OPENAI_KEY}
    );
    const Openai = new OpenAIApi(configuration);
    const response = Openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Validate my choice to buy a GRACE KARIN Womens Casual High Waist Pencil Pants with Bow-Knot Pockets for Work is a good idea.",
        max_tokens: 320,
        temperature: 1,
      }).then(r=>console.log(r))
    return <></>
}

export default OpenAi
