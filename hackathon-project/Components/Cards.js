import {Box, HStack, Text, VStack} from "@chakra-ui/react";
import Image from "next/image";


export default function Card(props){
    return(
        <Box borderRadius={'lg'} borderWidth={'1px'} overflow={'auto'} width={props.width} height={props.height}>
            <HStack>
                <Image src={props.image} alt={'https://via.placeholder.com/150'} layout={'intrinsic'}/>
                <VStack alignItems={'flex-start'}>

                    <Text fontSize={'xl'} fontWeight={700}> {props.title} </Text>
                    <Text>{props.time}·{props.coinAmount}BLCN</Text>
                    <HStack>
                        {/*    PLACE USER CIRCLE AWESOME ICON HERE    */}
                        <Text fontSize={'small'}>{props.name}</Text>
                    </HStack>
                    <Text fontWeight={400} fontSize={'small'}>{props.videoDate}</Text>
                    <Text>{props.description}</Text>
                </VStack>
            </HStack>
        </Box>
    )
}