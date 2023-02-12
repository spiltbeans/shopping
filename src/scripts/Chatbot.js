import { useMemo, useState } from 'react';
import { useAtom } from 'jotai';
import { useQuery } from "@tanstack/react-query";
import { Configuration, OpenAIApi } from "openai";
import { itemAtom, powerAtom, encourageAtom } from "../state/State"
import { Snackbar, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';


const useOpenAIApi = ({ tone, goal, product, power }) => {
    const configuration = new Configuration({
        organization: process.env.REACT_APP_OPENAI_ORG, apiKey: process.env.REACT_APP_OPENAI_KEY
    })

    const openai = new OpenAIApi(configuration)

    const query_f = async () => {
        return await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Using a ${tone} and informal tone, ${goal} my choice to buy a ${product}`,
            max_tokens: 85,
            temperature: 0.7,
        })
    }

    return useQuery({
        queryKey: [tone, product],
        queryFn: product && power ? query_f : () => null
    })
}

const OpenAi = () => {
    const [item] = useAtom(itemAtom)
    const [tone] = useAtom(encourageAtom)
    const [on] = useAtom(powerAtom)
    const response = useOpenAIApi({
        tone: tone ? "friendly" : "judgemental",
        goal: tone ? "validate" : "dissuade",
        product: (tone && item === "") ? "Strathmore Spiral Sketch Book 9-Inch by 12-Inch,100-Sheet" : (item || "Apple Pencil Tips - 4 Pack"),
        power: on
    })

    const [open, setOpen] = useState(false);
    const text = useMemo(() => {
        if (response.data !== undefined) {
            setOpen(true)
            return JSON.parse(JSON.stringify(response.data)).data.choices?.[0]?.text

        }

        return ""
    }, [response.isLoading, response.data])


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (<>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <Close fontSize="small" />
        </IconButton>
    </>)
    return <>
        <Snackbar open={open} sx={{ width: '10%' }} autoHideDuration={6000} onClose={handleClose} message={text} action={action}>

        </Snackbar></>
}

export default OpenAi