import { IconType } from 'react-icons';


type RectangleProps = {
    icon: IconType;
    colorIcon: string;
    label: string;
    value: string;
};

export const Rectangle: React.FC<RectangleProps> = ({ icon, colorIcon, label, value }) => {

    return (

        <div className="flex min-w-[250px] h-auto p-6 gap-8 bg-white items-center justify-center shadow-sm bor hover:shadow-md">

            <div className='w-14 flex justify-center items-center'>
                {
                    icon({ className: `text-4xl text-${colorIcon}` })
                }
            </div>

            <div>
                <p className='text-gray-500 text-xl opacity-80'>{label}</p>
                <p className='text-xl'>{value}</p>
            </div>

        </div>
    );
}