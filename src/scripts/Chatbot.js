import axios from "axios";
import { useAtom } from "atom";
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
        queryFn: query_f
    })
}

const OpenAi = () => {
    const [item, setItem] = useAtom(itemAtom)
    const [tone, setTone] = useAtom(encourageAtom)
    if(tone !== true) {
        if(item !== "") {
            const { response } = useOpenAIApi({tone: "judgemental", goal: "dissuade", product: item})
        }
        else {
            const { response } = useOpenAIApi({tone: "judgemental", goal: "dissaude", product: "Apple Pencil Tips - 4 Pack"})
        }
    }
    else {
        if(item !== "") {
            const { response } = useOpenAIApi({tone: "friendly", goal: "validate", product: item})
        }
        else {
            const { response } = useOpenAIApi({tone: "friendly", goal: "validate", product: "Strathmore Spiral Sketch Book 9-Inch by 12-Inch,100-Sheet"})
        }
    }
    return <>response</>
}

export default OpenAi
