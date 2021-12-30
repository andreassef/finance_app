import React from 'react';

import { TextInputProps } from 'react-native';
import { Container } from './styles';

type Props = TextInputProps; // instrutor fez isso aqui apenas para diminuir o nome da variavel de propriedade

export function Input({...rest}: Props) {
    return (
        <Container {...rest} />
    );
}