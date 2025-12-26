"use client";

import SubTitle from "../ui/Subtitle";

const Blog = () => {
     const blogPosts = [
    {
      id: 1,
      category: "Corporate",
      date: "November 4th",
      title: "AnyRide participates in Gitex Africa with new visions for future of RH in Nigeria",
      image: "/images/Blog-1.png",
      featured: true,
    },
    {
      id: 2,
      category: "Corporate",
      date: "November 4th",
      title: "AnyRide participates in Gitex Africa with new visions for future of RH in Nigeria",
       image: "/images/Blog-2.png",
    },
    {
      id: 3,
      category: "Corporate",
      date: "November 4th",
      title: "AnyRide participates in Gitex Africa with new visions for future of RH in Nigeria",
        image: "/images/Blog-3.png",
    },
    {
      id: 4,
      category: "Corporate",
      date: "November 4th",
      title: "AnyRide participates in Gitex Africa with new visions for future of RH in Nigeria",
     image: "/images/Blog-4.png",
    },
  ];

  return (
    <section className="container">
      <div className="py-[24px] md:py-[50px] lg:py-[72px]">
        <div>
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-8 md:mb-12.5 lg:mb-18">
            <div className="mb-2">
              <SubTitle text="Blog" bg="bg-[#A2060233]" />
            </div>

            <h2 className="text-[#02093A] w-full max-w-[211px] mx-auto text-center md:max-w-full">
              Latest from the blog
            </h2>

            <p className="text-[#545454] text-center text-[16px] md:text-[18px] leading-[160%] tracking-[-2%] w-full max-w-[253px] md:max-w-[143rem] mx-auto">
             Tips, stories, and updates for riders and drivers.
            </p>
          </div>
          {/* Blog posts will go here */}

            {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Post - Takes full width on mobile, left column on desktop */}
          <div className="lg:row-span-2">
            <article className="group cursor-pointer h-full">
              <div className="relative overflow-hidden rounded-2xl mb-4 h-[250px] lg:h-[438px]">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="inline-block bg-[#FFE5E5] text-[#A20602] text-xs font-semibold px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {blogPosts[0].date}
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#A20602] transition-colors">
                  {blogPosts[0].title}
                </h3>
              </div>
            </article>
          </div>

          {/* Right Column - Smaller Posts */}
          <div className="space-y-6">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="group cursor-pointer flex gap-4"
              >
                <div className="relative overflow-hidden rounded-xl flex-shrink-0 w-32 h-24 lg:w-[301px] lg:h-[184px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block bg-[#FFE5E5] text-[#A20602] text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs lg:text-sm">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-900 group-hover:text-[#A20602] transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
