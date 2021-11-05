import React, { Component } from 'react';
import CardItem from './CardItem'
import {cardItemInfo} from '../../utils/card.item';

class index extends Component {
    state = {
        cardItemInfo,
    }

    render() {

        const onDelete = (id)=> {
            let newData = this.state.cardItemInfo.filter((value)=> {
                return value.id !== id;
            })

            console.log(newData);
            this.setState({cardItemInfo: newData});
        }
        return (
            <div>
                {this.state.cardItemInfo.map((value) => {
                    return (
                        <CardItem onDelete={onDelete} value = {value} key={value.id}/>
                    )
                })} 
            </div>
        );
    }
}

export default index;