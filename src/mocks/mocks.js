import { format } from "date-fns";

import Image_1 from '../assets/img/image-1.png';
import Image_2 from '../assets/img/image-2.png';
import Image_3 from '../assets/img/image-3.png';
import Image_4 from '../assets/img/image-4.png';
import Image_5 from '../assets/img/image-5.png';
import Image_6 from '../assets/img/image-6.png';
import UserPhoto from '../assets/img/userPhoto.png';

const allArticles = [
    {
        id: 1,
        date: format(new Date(), 'MMM d'),
        author: 'Janay Wright',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'Humane Typography in the Digital Age',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict ' +
            'between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 0,
        category: 'Typography',
        image: Image_1
    },
    {
        id: 2,
        date: format(new Date(), 'MMM d'),
        author: 'Janay Wright',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'Humane Typography in the Digital Age',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 1650,
        category: 'Typography',
        image: Image_2
    },
    {
        id: 3,
        date: format(new Date(), 'MMM d'),
        author: 'Anthony J.Yeung',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'Johannes Gutenberg: The Birth of Movable...',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds   came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 100,
        category: 'Typography',
        image: Image_3
    },
    {
        id: 4,
        date: format(new Date(), 'MMM d'),
        author: 'Ella Alderson',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'The Origins of Social Stationery Lettering',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict ' +
            'between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 200,
        category: 'Typography',
        image: Image_4
    },
    {
        id: 5,
        date: format(new Date(), 'MMM d'),
        author: 'Soner Yıldırım',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'Perfecting the Art of Perfection',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 100,
        category: 'Typography',
        image: Image_5
    },
    {
        id: 6,
        date: format(new Date(), 'MMM d'),
        author: 'Ellane W',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'A Brief History of Typography',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict ' +
            'between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 700,
        category: 'Typography',
        image: Image_6
    },
    {
        id: 7,
        date: format(new Date(), 'MMM d'),
        author: 'Anthony J.Yeung',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'Johannes Gutenberg: The Birth of Movable...',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds   came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 100,
        category: 'Typography',
        image: Image_3
    },
    {
        id: 8,
        date: format(new Date(), 'MMM d'),
        author: 'Ella Alderson',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'The Origins of Social Stationery Lettering',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict ' +
            'between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 200,
        category: 'Typography',
        image: Image_4
    },
    {
        id: 9,
        date: format(new Date(), 'MMM d'),
        author: 'Soner Yıldırım',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'Perfecting the Art of Perfection',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 100,
        category: 'Typography',
        image: Image_5
    },
    {
        id: 10,
        date: format(new Date(), 'MMM d'),
        author: 'Ellane W',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'A Brief History of Typography',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict ' +
            'between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 450,
        category: 'Typography',
        image: Image_6
    },
    {
        id: 11,
        date: format(new Date(), 'MMM d'),
        author: 'Anthony J.Yeung',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'Johannes Gutenberg: The Birth of Movable...',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds   came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 900,
        category: 'Typography',
        image: Image_3
    },
    {
        id: 12,
        date: format(new Date(), 'MMM d'),
        author: 'Ella Alderson',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'The Origins of Social Stationery Lettering',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict ' +
            'between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 2000,
        category: 'Typography',
        image: Image_4
    },
    {
        id: 13,
        date: format(new Date(), 'MMM d'),
        author: 'Soner Yıldırım',
        avatar: UserPhoto,
        tag: '#Typography',
        title: 'Perfecting the Art of Perfection',
        description: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.\n' +
            '\n' +
            'The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. ' +
            'Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. ' +
            'The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. ' +
            'The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.\n' +
            '\n' +
            'But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. ' +
            'The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism ' +
            'and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. ' +
            'We have to go 500 years back in time to meet the first one.',
        count: 2500,
        category: 'Typography',
        image: Image_5
    },
];

export default allArticles;