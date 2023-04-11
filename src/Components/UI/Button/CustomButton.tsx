import React from 'react';
import { Button } from 'react-bootstrap';

type Props = {
    title : string
};

const CustomButton: React.FC<Props> = ({title}) => {
    return (
        <Button variant = "primary">{title}</Button>
    );
};

export default CustomButton;

