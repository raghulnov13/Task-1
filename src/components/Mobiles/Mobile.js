
import React from 'react'
import Model from './model';
import './Mobile.css';
import NewMobile from './newMobile';
import { useState } from 'react';


function Mobile() {
    const [mobile, setMobile] = useState( [
        {
            brand:"Vivo",
            price:"30,000",
            year:2022,
            model:"https://static.toiimg.com/photo/msid-88471867/88471867.jpg",
        },
        {
            brand:"Apple",
            price:"1,40,000",
            year:2022,
            model:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/08/2536868-apple-iphone-14-plus-2.png",
        },
        {
            brand:"Oneplus",
            price:"80,000",
            year:2022,
            model:"https://s.yimg.com/os/creatr-uploaded-images/2022-01/03ee3a30-6c8f-11ec-b5ab-a5cda59c31fa",
        },
        {
            brand:"Oppo",
            price:"23,000",
            year:2022,
            model:"https://newmobilesreview.com/wp-content/uploads/2021/06/OPPO-Find-X4-Max-5G.jpg",
        },
        {
            brand:"Realme",
            price:"18,000",
            year:2022,
            model:"https://images.indianexpress.com/2022/02/Realme-9-Pro.jpg",
        },
        {
            brand:"Samsung",
            price:"35,000",
            year:2022,
            model:"https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/galaxy-s22-ultra-feature-section-mobile-720x540-feature-column.jpg?$FB_TYPE_J_F_MO_JPG$",
        },
    ]);
    const addNewMobileHandler=(mobile) =>{
        console.log(mobile);
        // mobile.push(mobile)
        setMobile((previousMobile)=>{
            return [...previousMobile, ...[mobile]]
        });

    }
    return (
        <div>
        <div className='new-mobile-container'>
        <NewMobile addMobile={addNewMobileHandler}/>
        </div>
        <div className='mobile-list'>
            {
                mobile.map((mobile, index)=>{
                    return <Model key={index} mobiledata={mobile} />
                })
            }
        </div>
        </div>
    )
}

export default Mobile;