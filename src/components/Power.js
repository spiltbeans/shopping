//React
import { useAtom } from 'jotai'
//Elements
import { PowerSettingsNew } from '@mui/icons-material'

//Providers
import { powerAtom } from '../state/State'
//CSS

const Power = () => {
    const [power,setPower] = useAtom(powerAtom)
    const handleClick =() =>setPower(prev=>!prev)
    return (
        <div className={`
            w-full
            h-1/5
            flex
            justify-center
            py-2
            items-center
            bg-slate-400
        `}>
            <PowerSettingsNew className={`${power ? '' : 'backdrop-brightness-75'} hover:cursor`}fontSize={'large'} onClick={handleClick} />
        </div>

    )
}

export default Power