//React
import { useAtom } from 'jotai'
//Elements
import { Switch } from '@mui/material'

//Providers
import { encourageAtom, restrainAtom, powerAtom } from '../state/State'
//CSS

const Options = () => {

    const [encourage, setEncourage] = useAtom(encourageAtom)
    const [restrain, setRestrain] = useAtom(restrainAtom)
    const [power] = useAtom(powerAtom)
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
            h-3/5
            flex
            flex-col
            bg-slate-100
            py-5
            items-center
        `}>
            <div className={`flex flex-row justify-center`}>
                <div className={`text-l`}>Encouraging</div>
                <Switch disabled={!power} inputProps={{ 'data-type': 'encourage' }} onChange={handleChange} checked={encourage} />
            </div>
            <div className={`flex flex-row justify-center`}>
                <div className={`text-l`}>Restraining</div>
                <Switch disabled={!power} inputProps={{ 'data-type': 'restrain' }} onChange={handleChange} checked={restrain} />
            </div>


        </div>
    )
}

export default Options