import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/course-categories`)
        .then(res => res.json())
        .then(data => setCategories(data))
    }, []);
    return (
        <div>
           {
            categories.map(category => <button key={category.id} className='btn btn-violet-400 m-2'><Link to={`/category/${category.id}`}>{category.category_name}</Link></button>)
           } 
        </div>
    );
};

export default Categories;