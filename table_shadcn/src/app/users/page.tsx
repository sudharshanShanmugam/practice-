"use client"


import{ useState, useEffect } from 'react';
import { User, columns } from '@/app/users/columns';
import { DataTable } from '@/components/auth/data-table';


const apiurl = 'https://6678f4fd0bd4525056206eb9.mockapi.io/users';

async function getUsers(): Promise<User[]> {
    const res = await fetch(apiurl);
    const data = await res.json();
    return data;
}

export default function Page() {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers();
            setData(users);
        };

        fetchData();
    }, []);

    return (
        <section className='py-24'>
            <div className='container'>
                <h1 className='text-2xl font-bold'>User Data</h1>
                <DataTable columns={columns} data={data} />
            </div>
        </section>
    );
}