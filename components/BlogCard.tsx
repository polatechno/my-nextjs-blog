import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Post } from '@/app/page'

const BlogCard: React.FC<Post> = ({ title, body, id }) => {
    return (
        <Link href={`/${id}`} className='flex items-center flex-row my-4'>
            <div className='flex-shrink-0 relative h-32 w-32'>
                <Image
                    className='rounded-lg object-cover'
                    src={`https://picsum.photos/300/200?random=${id}`}
                    alt='Blog thumbnail'
                    fill
                />
            </div>
            <div className='ml-4'>
                <h3 className='text-lg line-clamp-1'> {title}</h3>
                <p className='mt-1 line-clamp-2'>{body}</p>
            </div>
        </Link>
    )
}

export default BlogCard