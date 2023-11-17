import './style.scss'
import Header from '../../components/header'
import ProductHeading from '../../components/products'
import MiniCard from '../../components/MiniCard'
import RaitingCard from '../../components/raitingCard'
import FooterCard from '../../components/footer'

import {products} from '../../data/product'
import {featured_products} from '../../data/featured-products'

const HomePage = () => {
  return (
    <div className='homePage'>
      <Header/>
      <section className='category-sec'>
        <ProductHeading title={"Explore Categories"}/>

        <span className="category-cards">
          <div className="container">
          {
            products.map(item=>{
              return(
                <MiniCard
                    key={item.id}
                    img={item.img}
                    name={item.title}
                    stockCount={item.stockCount}
                    bgColor={item.bgColor}
                />
              )
            })
          }
          </div>
        </span>
      </section>

      <section className="featured">
        <ProductHeading title={"Featured Products"}/>
        <section className="featured-products">
          <div className="container">
            {
              featured_products.map(item=>{
                return(
                  <RaitingCard item={item}/>
                )
              })
            }
            
            
          </div>

        </section>
      </section>

      <FooterCard/>

    </div>
  )
}

export default HomePage