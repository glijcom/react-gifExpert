import { useEffect, useState } from 'react';
import { AddCategory, GifGrid } from './components/';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dune'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    useEffect(() => {
        document.getElementById('s').focus();
    }, [])

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                //setCategories={setCategories} 
                onNewCategory={onAddCategory}
            />
            {
                categories.map(category =>
                    <GifGrid
                        key={category}
                        category={category} />

                )
            }
        </>
    )
}