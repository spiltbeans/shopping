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
            flex
            justify-center
            py-2
            bg-slate-400
        `}>
            <PowerSettingsNew className={`${power ? '' : 'backdrop-brightness-75'}`}fontSize={'large'} onClick={handleClick} />
        </div>

    )
}

export default Power