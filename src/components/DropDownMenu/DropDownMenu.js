import React, { Component } from 'react';
import Button from '../Button/Button';
import { IoIosArrowDropdownCircle as DropDown } from 'react-icons/io';
import { IoIosArrowDropupCircle as DropUp } from 'react-icons/io';
import './style.css';

const CreateMenuList = ({ open, items, onSelect }) => {
    return open ? (
        <ul className='Menu__List'>
            {items.map((item, i) => (
                <li
                    className='Menu__Item'
                    key={`${item}_${i}`}
                    onClick={(event) => {
                        onSelect(event, item);
                    }}
                >
                    {item}
                </li>
            ))}
        </ul>
    ) : null;
};

class DropDownMenu extends Component {
    state = {
        open: this.props.open || false
    }

    toggle = () => {
        this.setState((prevState) => ({
            open: !prevState.open
        }));
    }

    close = () => {
        this.setState({ open: false })
    }

    render(){
        const { 
            className,
            selected,
            onSelect,
            placeholder,
            items,
            noDropIcon
        } = this.props;

        return(
            <div className={`Menu ${className}`}>
                <header className='Menu__Header'>
                    {noDropIcon ? (
                        <Button
                            onClick={this.toggle}
                            notCased
                            className={selected ? null : `Menu__Placeholder`}
                        >
                            {selected ? selected : placeholder}
                        </Button>
                    ) : (
                        <div 
                            className={selected ? 'Menu__SelectedItem' : 'Menu__Placeholder'}
                        >
                            {selected ? selected : placeholder}
                        </div>
                    )}
                    {noDropIcon ? null : (
                        <Button
                            icon={this.state.open ? DropUp : DropDown}
                            onClick={this.toggle}
                            className={'Menu__DropDownButton'}
                        />
                    )}
                </header>
                <CreateMenuList
                    open={this.state.open} 
                    items={items} 
                    onSelect={(event, item) => {
                        onSelect(item);
                        this.close(event);
                    }}
                />
            </div>
        );
    };
};

export default DropDownMenu;