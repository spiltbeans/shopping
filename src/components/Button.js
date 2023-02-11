import { useMemo } from "react"
import { useAtom } from "jotai"
import { appstateAtom } from '../state/State'



const Button = ({ onClick, message }) => {
    const [state, setState] = useAtom(appstateAtom)

    const handle = () => {
    
        setState(prev=>prev==='this is not a test' ? 'this is a test' : 'this is not a test')
    }
    const content = useMemo(() => {
        return <button onClick={handle}>{state}</button>
    }, [state])

    return (<>{content}</>)
}

export default Button