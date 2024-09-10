import React from 'react';
import { Container, Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text, Switch, FormControl, FormHelperText, Input, FormLabel, Textarea, Button, HStack, Flex } from '@chakra-ui/react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './redux/todo';
import { data } from 'framer-motion/client';
import { DeleteIcon } from '@chakra-ui/icons';

const App = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);
    const newTodo = () => {
        if (title.trim().length === 0 || body.trim().length === 0) {
            alert("Please enter title and body");
            return;
        }
        dispatch(addTodo({
            id: Date.now(),
            title,
            body,
            complated: false
        }))

    }


    return (
        <Container maxW="1250px">
            <Card my="4">
                <CardHeader>
                    <Heading size="md" textAlign="center">Add members:</Heading>
                </CardHeader>
                <CardBody>
                    <FormControl>
                        <Stack spacing='4'>
                            <Box>
                                <FormLabel htmlFor='title'>Enter task title:</FormLabel>
                                <Input id='title' onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Task title ...' />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='body'>Enter task body:</FormLabel>
                                <Textarea id='body' onChange={(e) => setBody(e.target.value)} type='text' placeholder='Task title ...' />
                            </Box>
                            <Button onClick={() => newTodo()} colorScheme='cyan' type='submit'>Add new task</Button>
                        </Stack>
                    </FormControl>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Tasks:</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        {
                            todos.length && todos.map((item) => (
                                <Box key={item.id}>

                                    <Flex justify="space-between">
                                        <Box>
                                            <Heading size='xs' textDecoration={item.complated ? 'line-through' : "none"} textTransform='uppercase'>
                                                {item.title}
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                {item.body}
                                            </Text>
                                        </Box>
                                        <Flex gap="4" alignItems="center">
                                            <Switch onChange={() => dispatch(updateTodo(item.id))} isChecked={item.complated} />
                                            <Button leftIcon={<DeleteIcon/>} onClick={()=>dispatch(deleteTodo(item.id))} colorScheme='red'>Delete task</Button>
                                        </Flex>
                                    </Flex>
                                </Box>
                            ))
                        }

                    </Stack>
                </CardBody>
            </Card>
        </Container>
    );
};

export default App;