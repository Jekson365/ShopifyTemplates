import React from 'react'
import { Subscirbe } from '../../components/Subscirbe'

export const Trending = () => {
  const products = [
    {
      name: "UNCONDITIONAL | BEIGE KNIT WITH A LOOSE NECK",
      img: "https://cdn.shopify.com/s/files/1/0638/5483/7977/products/K006_1728x.png?v=1669654583",
      price: "200.00$",
      newPrice: '150.00$',
      last: false,
      sale: false
    },
    {
      name: "ARCHIVE | WHITE TEXTURED LONGLINE SHIRTARCHIVE",
      img: "https://cdn.shopify.com/s/files/1/0638/5483/7977/products/Untitleddesign_48_1512x.png?v=1669391305",
      price: "180.00$",
      newPrice: '150.00$',
      last: false,
      sale: true
    },
    {
      name: "UNCONDITIONAL | BLACK AND WHITE STRIPED CASHMERE KNITTED JUMPER",
      img: "https://cdn.shopify.com/s/files/1/0638/5483/7977/products/AKS001_1512x.png?v=1669654620",
      price: "200.00$",
      newPrice: '150.00$',
      last: false,
      sale: false
    },
    {
      name: "UNCONDITIONAL | PEARL GREY CARDIGAN",
      img: "https://cdn.shopify.com/s/files/1/0638/5483/7977/products/1_3da28e56-9948-46fd-8226-e46bb8c2245b_1512x.png?v=1669735623",
      price: "200.00$",
      newPrice: '150.00$',
      last: true,
      sale: false
    },
  ]
  return (
    <div>
      <h1 className='text-center h1 m-3'>Trending</h1>
      <div className="w-100 br-t br-b">
        <div className="row  d-flex justify-content-center flex-wrap">

          {products.map((each) => {
            return (
              <>
                <div className={each.last ? "cardd br-l br-r" : "cardd br-l"} style={{ "height": "90vh", "overflow": "hidden" }}>
                  <div className="image-place w-100 bg-dark" style={{ "overflow": "hidden", "height": "85%" }}>
                    <img src={each.img} className='w-100 h-100' style={{ "objectFit": "cover" }} />
                  </div>
                  <div className="content d-flex pt-2" style={{ "padding": "0", "height": "15%" }}>
                    <h3 className='h6'>{each.name}</h3>
                    <div className="prices d-flex flex-column">

                      {each.sale ? <span className='p text-danger' style={{ "textDecoration": "line-through" }}>{each.price}</span> : ""}
                      <span className='p'
                        style={each.sale ? { "color": "green" } : { "color": "black" }}
                      >{each.sale ? each.newPrice : each.price}</span>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <Subscirbe />
    </div>
  )
}
