import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";
import { useNavigate } from "react-router-dom";
const Category = ({ categories,refer }) => {
  //   console.log(categories);
  const navigate = useNavigate();
  return (
    <>
      <div className="shop-by-category"  >
        <div className="categories" >
          {categories?.data?.map((item) => (
            <div ref={refer}
              className="category" 
              onClick={() => navigate(`/category/${item.id}`)}
            >
              {item.attributes.img.data.map((item) => (
                < >
                  <img
                    src={process.env.REACT_APP_DEV_URL + item.attributes.url}
                    alt=""
                  />
                </>
              ))}
            </div>
          ))}
          {/* <img src={cat1} alt="cat1" /> */}

          {/* <div className="category">
            <img src={cat1} alt="cat1" />
          </div>
          <div className="category">
            <img src={cat1} alt="cat1" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Category;
