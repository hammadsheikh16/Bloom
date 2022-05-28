import {Box, HStack, Spacer} from "@chakra-ui/react";
import logo from '../public/logoFORREST.png'
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Homepage(){


    return (
        <html style={{backgroundColor: '#F2F2F2'}}>
            <Box height={114} w={'full'} backgroundColor={'white'}>
                <HStack>
                    <Image src={logo} alt={'https://via.placeholder.com/150'}/>
                    <Spacer w={'full'}/>
                {/*    fontawesome here*/}
                </HStack>

            </Box>

        </html>


    )
}