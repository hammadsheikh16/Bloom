import {Box} from "@chakra-ui/react";
import Image from "next/image";


export default function Card(props){
    return(
        <Box borderRadius={'lg'} borderWidth={'1px'} overflow={'hidden'} width={props.width} height={props.height}>
            <HStack>
                <Image src={props.image} alt={''}/>
            </HStack>
        </Box>
    )
}