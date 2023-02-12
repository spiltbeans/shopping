import { useAtom } from 'jotai';
import { useQuery } from "@tanstack/react-query";
import { Configuration, OpenAIApi } from "openai";
import { itemAtom, powerAtom, encourageAtom } from "../state/State"


const useOpenAIApi = ({tone, goal, product}) => {
    const configuration = new Configuration({
        organization: process.env.REACT_APP_OPENAI_ORG, apiKey: process.env.REACT_APP_OPENAI_KEY
    })

    const openai = new OpenAIApi(configuration)

    const query_f = async () => {
        return await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Using a ${tone} and informal tone, ${goal} my choice to buy a ${product}`,
            max_tokens: 156,
            temperature: 0.9,
        }).then(r => r).catch(e => { console.log(e) })
    }

    return useQuery({
        queryKey: ['advice'],
        queryFn: product ? query_f : ()=>null
    })
}

const OpenAi = () => {
    const [item] = useAtom(itemAtom)
    const [tone] = useAtom(encourageAtom)
    const response = useOpenAIApi({
        tone: tone ? "friendly" : "judgemental", 
        goal: tone ? "validate" : "dissuade", 
        product: (tone && item === "") ? "Strathmore Spiral Sketch Book 9-Inch by 12-Inch,100-Sheet" : (item || "Apple Pencil Tips - 4 Pack")
    })
    
    return <>{JSON.stringify(response.data)}</>
}

export default OpenAi
