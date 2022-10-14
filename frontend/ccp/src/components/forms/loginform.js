import {
    useToast,
    Button,
    HStack,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
// import { Add_Option, Add_Poll, Add_Team, Login } from '../../fetchData';
import { useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from "react-router-dom";
import SignupForm from './signupform.js';
export default function LoginForm() {
    const toast = useToast();
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [rollno, setrollno] = useState('');
    const [password, setpassword] = useState('');
    const [details, setdetails] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const mclose = () => {
        onClose();
    }
    useEffect(() => {
        console.log('from useeffect', details);
        console.log("loading",isLoading);
        if (details.length !== 0) {
            toast(
                {
                    status: 'success',
                    variant: 'left-accent',
                    position: 'bottom-right',
                    title: `Welcome to NITT Placement Portal :)${details}`,
                    isClosable: true,
                }
            )
            navigate(
                '/app/teams',
                {
                    state: {
                        id: parseInt(details[0]['id']),
                        name: details[0]['name'],
                    }
                }
            )
            setLoading(false);
        } else if (isLoading == true) {
            toast(
                {
                    status: 'error',
                    variant: 'left-accent',
                    position: 'bottom-right',
                    title: `Please Check your credentials or try signing up${details}`,
                    isClosable: true,
                }
            )
            setLoading(false);
        }
    }, [details]);
    return (
        <div>
            <Heading color={'pink.400'} textAlign='center' pb={10} pt={0}>Login</Heading>
            <FormControl isRequired>
                <FormLabel color={'white'} >Roll No</FormLabel>
                <Input placeholder={'username'} onChange={(event) => {
                    setrollno(event.target.value)
                }} value={rollno} color='blue.200' />
            </FormControl>
            <FormControl mt={4} isRequired>
                <FormLabel color={'white'}>password</FormLabel>
                <Input placeholder='password' type={'password'} color='blue.200' onChange={(event) => {
                    setpassword(event.target.value)
                }} value={password} />
            </FormControl>
            <HStack
                pt={10}
                justify={'center'}
                spacing={100}
            >
                <Button colorScheme='blue' mr={3} isLoading={isLoading}
                    onClick={async () => {
                        setLoading(true)
                        // const res=await Login({ rollno, password, setdetails });
                        const res=[];
                        console.log("Response.....:",res);
                        setdetails(res);   
                    }}
                >
                    Login
                </Button>
                <Button colorScheme={'blue'} onClick={onOpen}>Signup</Button>
                <Modal
                    isOpen={isOpen}
                    onClose={mclose}
                >
                    <ModalOverlay />
                    <ModalContent bg={'gray.800'} color={'white'}>
                        <ModalHeader alignSelf={'center'} fontSize={30}>Signup</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6} >
                            <SignupForm onClose={mclose}/>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </HStack>
        </div>
    )
}