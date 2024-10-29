import React from 'react'
import { Post } from '../page';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        id: string
    },
    searchParams: object
}

const getPost = async (id: string): Promise<Post | null> => {
    try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);

        if (response.status == 404)
            return null

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseBody = await response.json();
        return responseBody;
    } catch (error) {
        throw new Error(`Caught exception: ${error}`);
    }
};

export default async function Page({ params }: PageProps) {
    console.log(params.id)

    const postDetail = await getPost(params.id);

    if (postDetail == null) {
        return notFound()
    }

    const { id, body, title } = postDetail
    return (
        <div className='flex flex-col items-center text-center'>
            <div className='relative w-full h-[540px] mt-4'>
                <Image
                    className='rounded-xl object-cover'
                    src={`https://picsum.photos/300/200?random=${id}`}
                    alt={title}
                    fill
                />
            </div>
            <h1 className='text-4xl mt-4'>{title}</h1>
            <p className='mt-4 text-xl'>{body}</p>

        </div>
    )
}

