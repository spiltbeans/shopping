//React
import { useAtom } from 'jotai'
//Elements
import { Switch } from '@mui/material'

//Providers
import { encourageAtom, powerAtom } from '../state/State'
//CSS

const Options = () => {

    const [encourage, setEncourage] = useAtom(encourageAtom)
    const [power] = useAtom(powerAtom)
    const handleChange = e => {
        if (e.target.dataset.type === 'encourage') {
            setEncourage(prev => !prev)
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
            <div className={`flex flex-row justify-center items-center`}>
                <div className={`text-l`}>Restraint</div>
                <Switch disabled={!power} inputProps={{ 'data-type': 'encourage' }} onChange={handleChange} checked={encourage} />
                <div className={`text-l`}>Encouraging</div>
            </div>
        </div>
    )
}

export default Options