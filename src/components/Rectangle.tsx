import { IconType } from 'react-icons';
import { Card, CardBody } from "@nextui-org/react";

type RectangleProps = {
    icon: IconType;
    colorIcon: string;
    label: string;
    value: string;
};

export const Rectangle: React.FC<RectangleProps> = ({ icon, colorIcon, label, value }) => {

    return (

        <Card>
            <CardBody>
                <div className='w-14 flex justify-center items-center'>
                    {
                        icon({ className: `text-4xl text-${colorIcon}` })
                    }
                </div>

                <div>
                    <p className='text-gray-500 text-xl opacity-80'>{label}</p>
                    <p className='text-xl'>{value}</p>
                </div>
            </CardBody>
        </Card>


    );
}