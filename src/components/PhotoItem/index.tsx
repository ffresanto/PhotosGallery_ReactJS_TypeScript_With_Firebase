import React from 'react'
import * as C from './styles';

type Props = {
    url: string;
    name: string;
}

export const PhotoItem = ({url, name}: Props) => {
    return (
        <div>
            <C.Container>
                <img src={url} alt={name} />
                <p>{ name }</p>
            </C.Container>
        </div>
    )
}
