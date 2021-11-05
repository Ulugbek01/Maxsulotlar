import React, { Component } from 'react';
import {ItemContainer} from './style'
// import {cardItemInfo} from '../../../utils/card.item';

import {ReactComponent as Path} from '../../../Icons/Path.svg'
import {ReactComponent as Delete} from '../../../Icons/delete.svg'

class index extends Component {

    // state = {
    //     lists: cardItemInfo,
    // }
    render() {
        const {id,url,title,category, price, additionalInfo } = this.props.value;

        // const getName = (id) => {
        //     const newData = this.state.lists.filter((value) => {
        //         return value.id !== id;
        //     })
        //     console.log(newData);

        //     this.setState({
        //         lists:newData,
        //     })
        // }
        
        return (
            <ItemContainer>
                <ItemContainer.Logo src={url} />
                <ItemContainer.Title>{title}</ItemContainer.Title>
                <ItemContainer.Category>{category}</ItemContainer.Category>
                <ItemContainer.Price>{price}</ItemContainer.Price>
                <ItemContainer.AdditionalInfo>{additionalInfo}</ItemContainer.AdditionalInfo>
                <ItemContainer.Icons>
                    <div><span><Path></Path></span></div>
                    <div><span><Delete onClick={() => this.props.onDelete(id)}></Delete></span></div>
                </ItemContainer.Icons>
            </ItemContainer>
        );
    }
}

export default index;