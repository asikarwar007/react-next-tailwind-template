import React from 'react';

interface AdProp {
    height: number,
    width: number,
}
export const AdAreaLarge: React.FC<AdProp> = ({ height, width }) => (
    <div style={{ height: `${height}px`, width: `${width}px` }} className={`realtive ad-area px-2`}>
        <h3 className="ads-caption hidden">Ad</h3>
        <div className="ads-image" style={{ height: `${height}px`, width: `${width}px` }}>
            <img src="/web/ads-full.png" className='object-cover' alt="Ads" style={{ height: `${height}px`, width: `${width}px` }}/>
        </div>
    </div>
);