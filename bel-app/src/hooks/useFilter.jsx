import { useState } from 'react';
import useProductList from './useProductList';

const useFilter = (initialFilter = 'all') => {
    const [filter, setFilter] = useState(initialFilter);
    const {products} = useProductList();

    const applyFilter = () => {
        if (filter === 'all') {
            return products;
        } else {
            return products.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()));
        }
    };
    

    return { filter, setFilter, applyFilter };
}

export default useFilter;



