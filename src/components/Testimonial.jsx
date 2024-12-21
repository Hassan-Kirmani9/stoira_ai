import React from 'react';
import Heading from './Heading';
import Section from './Section';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Leslie Alexander',
            role: 'Freelance React Developer',
            testimonial: '“Impressive work by Stoira, truly professional.”',
            avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png',
            rating: 5,
        },
        {
            name: 'Jacob Jones',
            role: 'Digital Marketer',
            testimonial: '“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”',
            avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png',
            rating: 5,
        },
        {
            name: 'Shaun Marsh',
            role: 'IOS DEveloper',
            testimonial: '“An amazing experience working with Stoira!.”',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg',

            rating: 4,
        },


    ];

    return (
        <Section crosses className="!px-0 !py-10 ">

            <section className="container   sm:py-16 ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-24">
                    <div className="flex flex-col items-center">
                        <div className="text-center">
                            <Heading title="Testimonials" className="mb-[-20px]" />
                        </div>



                        <div className="relative mt-10 md:mt-24 md:order-2">
                            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                                <div
                                    className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                                    style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}
                                ></div>
                            </div>

                            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="flex flex-col overflow-hidden shadow-xl">
                                        <div className="flex flex-col justify-between flex-1 border-solid border-2 rounded-3xl border-gray-400 bg-[#0e0c15ad] p-6 lg:py-8 lg:px-7">
                                            <div className="flex-1">
                                                <div className="flex items-center">
                                                    {/* Render star rating */}
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                            />
                                                        </svg>
                                                    ))}
                                                </div>

                                                <blockquote className="flex-1 mt-8">
                                                    <p className="text-lg leading-relaxed text-gray-500 font-pj">{testimonial.testimonial}</p>
                                                </blockquote>
                                            </div>

                                            <div className="flex items-center mt-8">
                                                <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={testimonial.avatar} alt={testimonial.name} />
                                                <div className="ml-4">
                                                    <p className="text-base font-bold text-gray-400 font-pj">{testimonial.name}</p>
                                                    <p className="mt-0.5 text-sm font-pj text-gray-600">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Section>

    );
};

export default Testimonials;
