//React

//Elements
import { InfoOutlined } from '@mui/icons-material';

//Providers

//CSS

const handleInformation = () => console.log('information triggered')
const Header = () => {
    return (
        <div className={`
        w-full
        h-1/5
        flex
        flex-row 
        gap-x-10 
        justify-center 
        justify-self-center 
        items-center 
        py-2
        bg-slate-300
        `}>
            <div className={`text-2xl`}>Inner Voice</div>
            <InfoOutlined className={'hover:backdrop-brightness-90 cursor-pointer'} onClick={handleInformation} />
        </div>
    )

}

export default Header