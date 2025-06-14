import React, {useState, useEffect} from 'react';
import CreateProduct from './CreateProduct';
import InventoryTable from '../components/tables/InventoryTable';
import CRUDformat from '../components/CRUDformat';
import EditProduct from './EditProduct';

export default function Inventory() {
    const [motorcycles, setMotor] = useState([]);
    const [row, setRow] = useState([]);
    const [loading, setLoad] = useState(true);
    
    useEffect(() => {
        fetch('http://localhost:8000/api/motorcycle')
        .then(response => response.json())
        .then(data => {
            setMotor(data);
            setLoad(false);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            setLoad(true);
        })
    }, []);
    
    async function editMotor(id) {
        const response = await fetch("http://localhost:8000/api/motorcycle/" + id);

        if(!response.ok) {
            throw new Error('Motorcycle not found');
        }

        const data = await response.json();
        setRow(data);
        document.getElementById('editProduct').style.display = 'block';
    }

    return (
        <CRUDformat addModal={<CreateProduct />} modalId='createProduct' label="Unit">
            <InventoryTable motorcycles={motorcycles} loading={loading} editMotor={editMotor} />
            <EditProduct motor={row} />
        </CRUDformat>
    );
}