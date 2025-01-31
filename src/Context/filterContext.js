import { Children, createContext, useContext } from "react"

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null,
}

export const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({Children}) => {
    const value = {

    }
    return (
        <FilterContext.Provider value={value}>
            {Children}
        </FilterContext.Provider>
    )
}


export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}