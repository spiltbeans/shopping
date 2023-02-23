import { useMemo, useState } from 'react';
import { useAtom } from 'jotai';
import { useQuery } from "@tanstack/react-query";
import { Configuration, OpenAIApi } from "openai";
import { itemAtom, powerAtom, encourageAtom } from "../state/State"
import { Snackbar, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import ReactDOM from 'react-dom';

const useOpenAIApi = ({ tone, goal, item, power }) => {
    const configuration = new Configuration({
        organization: process.env.REACT_APP_OPENAI_ORG, apiKey: process.env.REACT_APP_OPENAI_KEY
    })

    const openai = new OpenAIApi(configuration)

    const query_f = async () => {
        return await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Using a ${tone} and informal tone, ${goal} my choice to buy a ${item}`,
            max_tokens: 85,
            temperature: 0.7,
        })
    }

    return useQuery({
        queryKey: [tone, item],
        queryFn: item && power ? query_f : () => null
    })
}

const OpenAi = () => {
    const [item] = useAtom(itemAtom)
    const [tone] = useAtom(encourageAtom)
    const [power] = useAtom(powerAtom)
    console.log(item)
    const response = useOpenAIApi({
        tone: ((item).toString().toUpperCase().includes('PILOT')) ? "judgemental" : "friendly",
        goal: ((item).toString().toUpperCase().includes('PILOT'))  ? "dissuade" : "validate",
        item: item,
        power: power
    })

    const [open, setOpen] = useState(false);
    const text = useMemo(() => {
        console.log(response.data)
        if (response.data !== undefined) {
            setOpen(true)
            return JSON.parse(JSON.stringify(response.data))?.data.choices?.[0]?.text

        }

        return ""
    }, [response.isLoading, response.data])


    const handleClose = (event, reason) => {

        let s = document.getElementById('snackbar')
        if (s.parentNode) {
            s.parentNode.removeChild(s);
        }
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

    const snack = document.createElement('div')
    snack.id = "snackbar";
    document.body.appendChild(snack)
    ReactDOM.render(<Snackbar open={open} sx={{ width: '10%' }} autoHideDuration={6000} onClose={handleClose} message={text} action={action} />, snack)
    return <></>
}

export default OpenAi