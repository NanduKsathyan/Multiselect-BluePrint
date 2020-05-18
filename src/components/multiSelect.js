import React, { useState } from 'react'
import { MenuItem } from "@blueprintjs/core";
import { MultiSelect } from "@blueprintjs/select";
const Selectors = () => {
    const defaultValues = ['one', 'two', 'three','four','five']
    const [selectedValue, setSelected] = useState([])
    const isSelected = (item) => {
        return getSelectedIndex(item) !== -1;
    }
    const getSelectedIndex = (item) => {
        return selectedValue.indexOf(item);
    }
    const handleClick = (item) => {
        if (!isSelected(item)) {
            setSelected([...selectedValue, item])
        } else {
            deselect(item);
        }
    };
    const handleTagRemove = (index) => {
        deselect(index);
    }
    const deselect = (index) => {
        let selected = selectedValue.filter((i) => i !== index);
        setSelected(selected)
    }
    const filterSearch = (query, items) => {
        return items.indexOf(query.toLowerCase()) >= 0
    };
    return (
        <MultiSelect
            selectedItems={selectedValue}
            items={defaultValues}
            itemPredicate={filterSearch}
            itemRenderer={(item, itemProps) =>
                <MenuItem
                    key={item}
                    text={item}
                    onClick={() => itemProps.handleClick(item)}
                    active={itemProps.modifiers.active}
                    className='custom-select'
                />
            }
            noResults='No Results'
            onItemSelect={handleClick}
            tagRenderer={item => item}
            tagInputProps={{ onRemove: handleTagRemove, placeholder: 'ex:One ...' }}
        />

    )
}
export default Selectors