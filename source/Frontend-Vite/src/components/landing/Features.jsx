// import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import EventIcon from '@mui/icons-material/Event';
// import PaymentIcon from '@mui/icons-material/Payment';
// import PeopleIcon from '@mui/icons-material/People';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import SecurityIcon from '@mui/icons-material/Security';

// const Features = () => {
//   const features = [
//     {
//       icon: SearchIcon,
//       title: 'Smart Book Search',
//       description: 'Find your perfect book with our advanced search filters. Search by title, author, genre, or ISBN.',
//       color: 'text-blue-600',
//       bgColor: 'bg-blue-50',
//     },
//     {
//       icon: EventIcon,
//       title: 'Online Reservation',
//       description: 'Reserve books online and pick them up at your convenience. Get instant notifications.',
//       color: 'text-green-600',
//       bgColor: 'bg-green-50',
//     },
//     {
//       icon: PaymentIcon,
//       title: 'Secure Payments',
//       description: 'Integrated payment gateway for membership fees and fines. Multiple payment options available.',
//       color: 'text-purple-600',
//       bgColor: 'bg-purple-50',
//     },
//     {
//       icon: PeopleIcon,
//       title: 'Digital Membership',
//       description: 'Manage your membership digitally. Track borrowed books, due dates, and reading history.',
//       color: 'text-pink-600',
//       bgColor: 'bg-pink-50',
//     },
//     {
//       icon: BookmarkIcon,
//       title: 'Personal Library',
//       description: 'Create your reading lists, save favorites, and get personalized recommendations.',
//       color: 'text-indigo-600',
//       bgColor: 'bg-indigo-50',
//     },
//     {
//       icon: SecurityIcon,
//       title: 'Secure & Private',
//       description: 'Your data is encrypted and secure. We respect your privacy and protect your information.',
//       color: 'text-orange-600',
//       bgColor: 'bg-orange-50',
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Why Choose{' '}
//             <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               SmartLib Library
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Experience modern library management with cutting-edge features designed for book lovers.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-fade-in-up"
//                 style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
//               >
//                 {/* Icon */}
//                 <div className={`inline-flex p-4 rounded-xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                   <Icon className={feature.color} sx={{ fontSize: 32 }} />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>

//                 {/* Hover Effect Border */}
//                 <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color.replace('text-', 'from-')} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
//           <p className="text-gray-600 mb-6 text-lg">
//             Ready to explore our features?
//           </p>
//           <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
//             Get Started Today
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-violet-500 rounded-full blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-teal-500/10 text-teal-300 border border-teal-500/20 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-md">
              <AutoAwesomeIcon sx={{ fontSize: 16 }} />
              <span>Welcome to SmartLib Library</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Gateway to{' '}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Endless Knowledge
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl">
              Discover, reserve, and enjoy thousands of books from our extensive collection.
              Join our community of readers and experience seamless library management.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              {/* Primary Button */}
              <Link
                to="/books"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-teal-500/30 hover:scale-[1.02] transition-all duration-300"
              >
                <span>Explore Books</span>
                <ArrowForwardIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Button */}
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-8 py-4 border border-teal-400/40 text-teal-300 font-semibold rounded-xl hover:bg-teal-500/10 hover:border-teal-300 transition-all duration-300"
              >
                <MenuBookIcon className="mr-2" />
                <span>Login</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>10,000+ Books</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>5,000+ Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>24/7 Access</span>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:block">
            <div className="relative">

              {/* Decorative glow */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-teal-500/10 rounded-3xl rotate-6"></div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-cyan-500/10 rounded-3xl -rotate-6"></div>

              {/* Card */}
              <div className="relative bg-gray-900/70 backdrop-blur-xl border border-gray-700 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-all duration-300">

                {/* Books */}
                <div className="flex justify-center items-end space-x-3 h-64">
                  <div className="w-14 h-48 bg-gradient-to-b from-teal-400 to-teal-600 rounded-lg shadow-md"></div>
                  <div className="w-14 h-56 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-lg shadow-md"></div>
                  <div className="w-14 h-40 bg-gradient-to-b from-violet-400 to-violet-600 rounded-lg shadow-md"></div>
                  <div className="w-14 h-52 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-md"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-yellow-400/10 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-medium border border-yellow-400/20">
                  📚 New Arrivals
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border border-teal-400/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

