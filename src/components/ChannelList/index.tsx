import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';



const ChannelList: React.FC = () =>{
    return(
        <Container>
            <Category>
                <span>Canais de Texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName='chat-livre'/>
            <ChannelButton channelName='faculdade'/>
            <ChannelButton channelName='trabalho'/>
            <ChannelButton channelName='chat-teste-1'/>
            <ChannelButton channelName='chat-teste-2'/> 
        </Container>
    )
};

export default ChannelList;