import { Link } from "react-router-dom";
import Container from "../../components/Common/Container";
import BlogData from '../BlogPage/BlogData'
import { FaArrowRight, FaRegUser } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import DiscountSection from "../Home/DiscountSection/DiscountSection";

function Blog() {
  return (
    <>
      <Container>
        <div className="my-10">
          <h1 className="text-3xl font-bold mb-10 text-center">Our Blogs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BlogData?.map((item, index) => (
              <div key={index} className="border shadow-md group">
                <div className="w-full h-96 overflow-hidden">
                  <img src={item.img} alt="Product Image" className="w-full h-full group-hover:scale-105 duration-700" />
                </div>
                <div className="p-3 md:p-6 flex-1">
                  <div className="flex items-center gap-10 mb-2">
                    <div className="flex items-center gap-2">
                      <FaRegUser className="text-yellow-500"/>
                      <p className="text-gray-600">By Admin</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <BiCommentDetail className="text-yellow-500 text-xl"/>
                      <p className="text-gray-600">Comments</p>
                    </div>
                  </div>
                  <Link to={`/blogs/${item.id}`} state={{ productData: item }}>
                    {" "}
                    <h2 className="text-xl font-semibold mb-2 hover:text-blue-500">
                      {item.title}
                    </h2>
                  </Link>
                  <p className="text-md font-medium text-gray-600 tracking-wider mb-2">
                    {item.description.slice(0, 120) + "..."}
                  </p>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <p className="text-lg font-medium tracking-wider">View More</p>
                    <FaArrowRight className="text-xl"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <DiscountSection />

    </>
  );
}

export default Blog;