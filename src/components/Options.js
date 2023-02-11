//React
import { useAtom } from 'jotai'
//Elements
import { Switch } from '@mui/material'

//Providers
import { encourageAtom, restrainAtom } from '../state/State'
//CSS

const Options = () => {

    const [encourage, setEncourage] = useAtom(encourageAtom)
    const [restrain, setRestrain] = useAtom(restrainAtom)

    const handleChange = e => {
        if (e.target.dataset.type === 'encourage') {
            setEncourage(prev => !prev)
        } else if (e.target.dataset.type === 'restrain') {
            setRestrain(prev => !prev)
        }
    }
    return (
        <div className={`
            w-full
            h-full
            flex
            flex-col
            bg-slate-100
            py-5
        `}>
            <div className={`flex flex-row justify-center`}>
                <div className={`text-l`}>Encouraging</div>
                <Switch inputProps={{ 'data-type': 'encourage' }} onChange={handleChange} checked={encourage} />
            </div>
            <div className={`flex flex-row justify-center`}>
                <div className={`text-l`}>Restraining</div>
                <Switch inputProps={{ 'data-type': 'restrain' }} onChange={handleChange} checked={restrain} />
            </div>


        </div>
    )
}

export default Options