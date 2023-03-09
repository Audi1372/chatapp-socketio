import React from 'react'
import { IconButton, useDisclosure, Button } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { Image, Text } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'



const ProfileModel = ({ user, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {children ? (<span onClick={onOpen}>{children}</span>) : (
                <IconButton
                    color={"black"}
                    display={{ base: "flex" }}
                    icon={<ViewIcon />}
                    onClick={onOpen}
                />
            )}
            <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent h="410px">
                    <ModalHeader
                        fontSize="40px"
                        fontFamily="Work sans"
                        display="flex"
                        justifyContent="center">{(user.name).toUpperCase()}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display="flex"
                        flexDir='column'
                        alignItems="center"
                        justifyContent={'center'}>
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            src={user.pic}
                            alt={user.name}
                            style={{ border: "5px solid blue" }}

                        />
                        <Text fontSize={{ base: "28px", md: "30px" }}
                            fontFamily="Work sans">Email:{user.email}</Text>
                        <Button colorScheme='blue' onClick={onClose}>
                            Close
                        </Button>

                    </ModalBody>

                </ModalContent>
            </Modal>

        </>
    )
}

export default ProfileModel



