import React from 'react'

export const TwoImages = () => {
    const items = [
        {
            img: "https://images.pexels.com/photos/5432147/pexels-photo-5432147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "steped in the darkness",
            color: "black"
        },
        {
            img: "https://images.pexels.com/photos/5456599/pexels-photo-5456599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Bathed in Light",
            color: "white",
        }
    ]
    return (
        <div className='br d-flex flex-wrap' style={{ "height": "100vh" }}>
            {items.map((each) => {
                return (
                    <>
                        <div className=" br-r col-md-6 bg-primary d-flex align-items-center justify-content-between flex-column cs" style={{ "backgroundImage": `url('${each.img}')` }}>
                            <h1 className="h2 h-100 text-center d-flex align-items-end"
                                style={{ "color": each.color, "textTransform": "uppercase" }}
                            >{each.name}</h1>   
                        </div>
                    </>
                )
            })}
        </div>
    )
}
