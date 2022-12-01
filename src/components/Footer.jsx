import React from 'react'

export const Footer = () => {
    const objects =  [

            {
                title:"UNCONDITIONAL",
                content:['Product sustantibility','Our story','Contact us']
            },
            {
                title:"Customer Service",
                content:['Shipping ','Returns & Refunds','Terms & Conditions']
            },
            
            {
                title:"",
                content:['facebook','instagram','Email']
            },
            
            
    ]
  return (
    <footer>
        <div className="w-100 d-flex flex-wrap ">
            <div className="col ol w-100 br-l p-2 br-r d-flex flex-column align-items-start justify-content-center">
                <img src='https://cdn.shopify.com/s/files/1/0638/5483/7977/files/Shopify_UNCONDITIONAL_Logo_140x.png?v=1660124218'/>
            </div>
            {objects.map((each)=> {
                return (
                    <>
                        <div className="col ol w-1000 br-r p-2 d-flex flex-column p-1 align-items-start justify-content-center">
                            <h5 className='h5'>{each.title}</h5>

                            {each.content.map((item)=> {
                                return (
                                    <span className='m-1'>{item}</span>
                                    )
                                })}
                        </div>
                    </>
                )
            })}
        </div>
    </footer>
  )
}
