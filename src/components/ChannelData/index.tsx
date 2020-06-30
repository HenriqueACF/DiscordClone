import React, {useRef, useEffect} from 'react';

import ChannelMessage,{ Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon  } from './styles';

const ChannelData: React.FC = () =>{

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;    
    useEffect(()=>{
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef]);

    return(
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n)=>(
                    <ChannelMessage
                        key={n}
                        author='Guilherme Rodz'
                        date='21/06/2020'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />
                ))}

                <ChannelMessage 
                    author='Diego Fernandes'
                    date='29/06/2020'
                    content={
                        <>
                            <Mention>@Guilherme Rodz</Mention>, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type='text' placeholder='Conversar em #chat-livre' />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;