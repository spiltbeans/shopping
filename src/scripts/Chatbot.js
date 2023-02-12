import axios from "axios";
import { useAtom } from 'jotai';
import { useQuery } from "@tanstack/react-query";
import { Configuration, OpenAIApi } from "openai";
import { itemAtom, powerAtom, encourageAtom, restrainAtom } from "../state/State"


const useOpenAIApi = (tone, goal, product) => {
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
        }).then(r => console.log(r)).catch(e => { console.log(e) })
    }

    return useQuery({
        queryKey: ['advice'],
        queryFn: product ? query_f : ()=>{}
    })
}

const OpenAi = () => {
    const [item, setItem] = useAtom(itemAtom)
    const [tone, setTone] = useAtom(encourageAtom)
    const { response } = useOpenAIApi({
        tone: tone ? "friendly" : "judgemental", 
        goal: tone ? "validate" : "dissuade", 
        product: (tone && item === "") ? "Strathmore Spiral Sketch Book 9-Inch by 12-Inch,100-Sheet" : (item || "Apple Pencil Tips - 4 Pack")
    })
    
    return <>response</>
}

export default OpenAi
