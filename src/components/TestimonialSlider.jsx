import React, { useState, useEffect } from 'react';
import Heading from './Heading';

const testimonials = [
  { id: 1, name: 'Steve Smith', quote: 'An amazing experience working with Stoira!' },
  { id: 2, name: 'Shane Watson', quote: 'Working with Stoira was top-notch.' },
  { id: 3, name: 'Shaun Tait', quote: 'Stoira’s expertise has been invaluable.' },
  { id: 4, name: 'Mitchell Starc', quote: 'Impressive work by Stoira, truly professional.' },
  { id: 5, name: 'Shaun Marsh', quote: 'Fantastic collaboration with Stoira team!' },
  { id: 6, name: 'David Warner', quote: 'Stoira’s solutions are game-changing.' },
  { id: 7, name: 'Pat Cummins', quote: 'Best experience I’ve had working with a team!' },
  { id: 8, name: 'Glenn Maxwell', quote: 'Stoira’s insights were spot on, thanks!' },
  { id: 9, name: 'Aaron Finch', quote: 'Really professional and helpful experience.' },
  { id: 10, name: 'Mitchell Johnson', quote: 'Efficient, clear, and impactful collaboration.' },
  { id: 11, name: 'Marcus Stoinis', quote: 'Professional and reliable team at Stoira!' },
  { id: 12, name: 'Josh Hazlewood', quote: 'Stoira delivered above expectations every time.' },
  { id: 13, name: 'James Pattinson', quote: 'Working with Stoira was an absolute pleasure.' },
  { id: 14, name: 'Usman Khawaja', quote: 'Stoira’s innovation was a game-changer for us!' },
  { id: 15, name: 'Matthew Wade', quote: 'Great teamwork and problem-solving with Stoira.' },
  { id: 16, name: 'Nathan Lyon', quote: 'Stoira brings amazing insight to any project.' },
  { id: 17, name: 'Glenn McGrath', quote: 'It was great collaborating with Stoira!' },
  { id: 18, name: 'Chris Lynn', quote: 'Highly efficient and supportive, thanks Stoira!' },
  { id: 19, name: 'Marnus Labuschagne', quote: 'Stoira’s service made a real difference.' },
  { id: 20, name: 'Cameron Green', quote: 'Best decision we made, working with Stoira.' },
  { id: 21, name: 'Travis Head', quote: 'Very professional and thorough approach.' },
  { id: 22, name: 'Alex Carey', quote: 'Stoira’s creativity helped us excel in the project.' },
  { id: 23, name: 'Kane Richardson', quote: 'Amazing experience! Really smooth process.' },
  { id: 24, name: 'Mark Waugh', quote: 'Stoira’s professionalism stands out every time.' },
  { id: 25, name: 'Adam Gilchrist', quote: 'Fantastic experience working with the Stoira team.' },
  { id: 26, name: 'Steve Waugh', quote: 'Collaborating with Stoira was a game-changer.' },
  { id: 27, name: 'Michael Clarke', quote: 'I couldn’t ask for a better experience with Stoira.' },
  { id: 28, name: 'Ricky Ponting', quote: 'Stoira brings innovation and efficiency to the table.' },
  { id: 29, name: 'Brad Hodge', quote: 'Truly professional and engaging experience!' },
  { id: 30, name: 'Shane Harwood', quote: 'Amazing results and a pleasure to work with.' },
  { id: 31, name: 'Mark Taylor', quote: 'Absolutely great working with Stoira’s team.' },
  { id: 32, name: 'Damien Martyn', quote: 'Clear communication and outstanding delivery!' },
  { id: 33, name: 'Simon Katich', quote: 'Stoira’s approach was exactly what we needed.' },
  { id: 34, name: 'Ben Hilfenhaus', quote: 'A pleasure working alongside Stoira.' },
  { id: 35, name: 'Peter Siddle', quote: 'The Stoira team delivered exactly what was needed.' },
  { id: 36, name: 'Ryan Harris', quote: 'Best decision we made, partnering with Stoira.' },
  { id: 37, name: 'John Hastings', quote: 'Stoira’s input was invaluable to our success.' },
  { id: 38, name: 'Luke Ronchi', quote: 'Great experience, looking forward to working again.' },
  { id: 39, name: 'Tom Moody', quote: 'Highly professional and very supportive team.' },
  { id: 40, name: 'Peter Nevill', quote: 'Stoira helped us elevate our performance!' },
  { id: 41, name: 'David Hussey', quote: 'Smooth process and excellent results with Stoira.' },
  { id: 42, name: 'Shaun Pollock', quote: 'Fantastic collaboration, Stoira really knows their stuff.' },
  { id: 43, name: 'Ben Dunk', quote: 'Incredible results and seamless experience.' },
  { id: 44, name: 'Daniel Christian', quote: 'Highly recommended, Stoira excels in everything.' },
  { id: 45, name: 'Jack Wildermuth', quote: 'Excellent service and seamless delivery from Stoira.' },
  { id: 46, name: 'Josh Philippe', quote: 'Working with Stoira was a top-notch experience.' },
  { id: 47, name: 'Chris Rogers', quote: 'Clear and concise, couldn’t have asked for more.' },
  { id: 48, name: 'Matt Renshaw', quote: 'Professionalism at its finest, great experience.' },
  { id: 49, name: 'Alex Doolan', quote: 'I highly recommend Stoira for any project.' },
  { id: 50, name: 'James Faulkner', quote: 'Unmatched service, I’ll work with Stoira again!' },
  { id: 51, name: 'Will Pucovski', quote: 'Incredible collaboration and insightful guidance.' },
  { id: 52, name: 'Liam Livingstone', quote: 'A great experience with a truly professional team.' },
  { id: 53, name: 'Ben McDermott', quote: 'Efficient, reliable, and always ahead of the game.' },
  { id: 54, name: 'Marcus North', quote: 'Working with Stoira was a game-changer for us.' },
  { id: 55, name: 'Michael Bevan', quote: 'I truly appreciate Stoira’s approach and insight.' },
  { id: 56, name: 'Mark Cosgrove', quote: 'Excellent collaboration and results with Stoira.' },
  { id: 57, name: 'Ryan Carters', quote: 'Stoira’s service is second to none in the field.' },
  { id: 58, name: 'David Morrow', quote: 'Truly remarkable support, couldn’t be happier.' },
  { id: 59, name: 'Chris Simpson', quote: 'Outstanding performance from the Stoira team!' },
  { id: 60, name: 'Ben Holt', quote: 'Very efficient and trustworthy, great experience.' },
  { id: 61, name: 'Damien Fleming', quote: 'One of the best teams I’ve worked with.' },
  { id: 62, name: 'Mark Knight', quote: 'The experience with Stoira was excellent.' },
  { id: 63, name: 'Stephen O’Keefe', quote: 'Highly professional and always ahead of the curve.' },
  { id: 64, name: 'Joe Burns', quote: 'Exceptional insights and guidance from Stoira.' },
  { id: 65, name: 'Peter Handscomb', quote: 'Smooth and productive process with Stoira.' },
  { id: 66, name: 'Aaron Hardie', quote: 'Great experience, highly recommend Stoira.' },
  { id: 67, name: 'David Willey', quote: 'Stoira’s team is always focused and on point.' },
  { id: 68, name: 'Jon Holland', quote: 'Excellent results from Stoira’s guidance.' },
  { id: 69, name: 'Ashton Agar', quote: 'A fantastic team with a fantastic product.' },
  { id: 70, name: 'Mark Waugh', quote: 'Great insights and a fantastic working environment.' },
  { id: 71, name: 'Nathan Bracken', quote: 'Stoira was instrumental in our success.' },
  { id: 72, name: 'Mike Hussey', quote: 'Thorough, reliable, and excellent results from Stoira.' },
  { id: 73, name: 'Brad Hodge', quote: 'Exceptional professionalism and results with Stoira.' },
  { id: 74, name: 'Peter Siddle', quote: 'Stoira helped us achieve amazing results!' },
  { id: 75, name: 'Adam Zampa', quote: 'Highly efficient, helpful, and supportive team.' },
  { id: 76, name: 'Daniel Vettori', quote: 'A true pleasure to work with the Stoira team.' },
  { id: 77, name: 'Chris Gayle', quote: 'Best service I’ve received in this field.' },
  { id: 78, name: 'Andrew McDonald', quote: 'Professional, efficient, and always reliable.' },
  { id: 79, name: 'Luke Butterworth', quote: 'Stoira’s approach is second to none!' },
  { id: 80, name: 'Steve O’Keefe', quote: 'It was great to work with such a professional team.' },
  { id: 81, name: 'James Hopes', quote: 'Stoira helped us achieve our goals effortlessly.' },
  { id: 82, name: 'Glenn Maxwell', quote: 'Stoira brought innovation to the table.' },
  { id: 83, name: 'Shane Watson', quote: 'A truly rewarding and productive experience!' },
  { id: 84, name: 'Alex Carey', quote: 'Couldn’t ask for a better experience with Stoira.' },
  { id: 85, name: 'Matthew Wade', quote: 'Amazing to work with such a talented team.' },
  { id: 86, name: 'Pat Cummins', quote: 'It was a pleasure working with Stoira.' },
  { id: 87, name: 'Glenn McGrath', quote: 'Always reliable and professional – excellent work.' },
  { id: 88, name: 'Shane Harwood', quote: 'Excellent service and delivery by Stoira.' },
  { id: 89, name: 'Usman Khawaja', quote: 'Very professional, quick, and effective service.' },
  { id: 90, name: 'Marnus Labuschagne', quote: 'Great experience, I highly recommend Stoira.' },
  { id: 91, name: 'Mitchell Starc', quote: 'Stoira really knows how to deliver outstanding results.' },
  { id: 92, name: 'Chris Lynn', quote: 'Efficient, effective, and professional team!' },
  { id: 93, name: 'Josh Hazlewood', quote: 'Stoira helped us exceed expectations every time.' },
  { id: 94, name: 'James Pattinson', quote: 'Fantastic experience, highly professional service.' },
  { id: 95, name: 'Travis Head', quote: 'Excellent experience, will definitely collaborate again.' },
  { id: 96, name: 'Cameron Green', quote: 'Great collaboration, strong results with Stoira.' },
  { id: 97, name: 'Nathan Lyon', quote: 'Working with Stoira was smooth and effective.' },
  { id: 98, name: 'Mitchell Johnson', quote: 'Really impressed with Stoira’s service and insights.' },
  { id: 99, name: 'David Warner', quote: 'Very efficient, excellent teamwork with Stoira.' },
  { id: 100, name: 'Glenn Maxwell', quote: 'Impressed with the results Stoira provided!' },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Heading title="Testimonials" />
      <div className="relative w-full max-w-6xl mx-auto px-4 py-10 ">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-4">
              <div className="bg-transparent rounded-lg shadow-lg p-6 md:p-8 h-full border-2 border-gray-700">
                <div className="flex items-center mb-4">
                
                  <div>
                    <h3 className="font-semibold text-lg text">{testimonial.name}</h3>
                    <p className="text-white">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
              currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
    </>
  );
};

export default TestimonialSlider;

