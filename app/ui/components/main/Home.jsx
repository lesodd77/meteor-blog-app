import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const posts = [
  {
    title: 'Boost your conversion rate',
    href: 'blog',
    category: { name: 'Article', href: 'blog', color: 'bg-indigo-100 text-indigo-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Paul York',
      href: 'blog',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '6 min',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: 'blog',
    category: { name: 'Video', href: 'blog', color: 'bg-pink-100 text-pink-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Dessie Ryan',
      href: 'blog',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '4 min',
  },
  {
    title: 'Improve your customer experience',
    href: 'blog',
    category: { name: 'Case Study', href: 'blog', color: 'bg-green-100 text-green-800' },
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Easer Collins',
      href: 'blog',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '11 min',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Home = () => {
      useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });
  return (
    <main>
    <section
id="nav"
className="bg-slate-200 dark:bg-slate-800"
data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className=" animated z-40 bg-transparent mt-16 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8">
        <div className="rounded-2xl shadow-5xl relative z-2  border-opacity-30 backdrop-filter backdrop-blur-lg pb-3 pt-8 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-slate-100 opacity-.5 dark:bg-slate-800text-slate-900/10 [mask-image:linear-gradient(transparent,transparent)]">
        <div 
// @ts-ignore
        x="50%" y="100%" />
      </div>
      <div id="hero" className="relative bg-white dark:bg-slate-800 rounded-2xl mx-auto max-w-5xl mt-20 placeholder:pt-16 sm:px-6">
        <div className="relative rounded-lg pt-px sm:rounded-6xl">
          <div
className="relative  mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full shadow-lg md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)]"
data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
            <img
src="./img/photo-1594608661623-aa0bd3a69d98.jpg"
className="relative mx-auto h-44 w-44 overflow-hidden rounded-full shadow-lg md:float-right md:h-64 md:w-64"
data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
alt="" />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">

         <div
          className="max-w-lg shadow-lg rounded-md bg-slate-700 dark:text-gray-50 text-gray-700 mt-10 mb-22 p-4 font-sans text-4xl uppercase border-2 dark:border-sky-500 md:p-10 md:m-32 md:mx-0 md:text-5xl sm:text-white"
        >
        We Approach
       Things Deferently.
         </div>


            <p className="mt-8">

             <a
                href="enrollement"
className="p-3 px-6 pt-2 mt-3 text-white bg-sky-500 rounded baseline hover:bg-cyan-400"
data-aos="fade-right"
                >
               <span>Get Started</span>
             </a>
            </p>
          </div>
        </div>
      </div>
        </div>
        </div>
    </section>

    <section id="blog" className="bg-white dark:bg-slate-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8" data-aos="fade-left">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold dark:text-white text-gray-900 sm:text-4xl">Recent publications</h2>
          <p className="mt-3 text-xl dark:text-white text-gray-500 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
            arcu.
          </p>
        </div>
        <div className="mt-12  grid md:grid-cols-2 gap-12 pt-12 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className="inline-block">
                  <span
                    className={classNames(
                      post.category.color,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href={post.href} className="block mt-4">
                <p className="text-xl font-semibold dark:text-white  text-gray-900">{post.title}</p>
                <p className="mt-3 text-base dark:text-white text-gray-500">{post.description}</p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href={post.author.href}>
                    <span className="sr-only">{post.author.name}</span>
                    <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium dark:text-white text-gray-900">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <div className="flex space-x-1 text-sm dark:text-white  text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
  };