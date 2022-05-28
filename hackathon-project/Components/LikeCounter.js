import {useState} from 'react'
import {Button, HStack} from "@chakra-ui/react";

export default function likeCounter(){

    const [likeCntr, setLikeCntr] = useState(0)

    const incrementCounter = () => {
        setLikeCntr(likeCntr + 1)
    }

    return (
        <>
            <HStack>
                <Button/>
            </HStack>


        </>

    )
}