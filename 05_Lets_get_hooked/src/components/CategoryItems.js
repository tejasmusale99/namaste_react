import { useDispatch } from "react-redux";
import {addToCart} from '../utils/features/cartSlice'

const CategoryItems = ({data}) => {
    // console.log(data)

    const dispatch = useDispatch()

    const CartHandleCLick = (data) =>{
      dispatch(addToCart(data))
    }
    return(
       <>
       {data.map((item)=>{
        return (
          <div key={item?.card?.info?.id} className="menu-item">
            <div className="menu-left">
              <h3>{item?.card?.info?.name}</h3>
              <p className="price">
                {item?.card?.info?.price
                  ? "₹" + item?.card?.info?.price / 100
                  : "₹" + item?.card?.info?.defaultPrice / 100}
              </p>
              <p className="desc">{item?.card?.info?.description}</p>
            </div>

            <div className="menu-right">
              <div className="img-wrapper">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                    item?.card?.info?.imageId
                  }
                  alt="food"
                />
                <button className="add-btn" onClick={()=>CartHandleCLick(item.card)}>ADD</button>
              </div>
            </div>
          </div>
        );
       })}
       
       </>
    )
}

export default CategoryItems;