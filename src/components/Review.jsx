import React from 'react'

import GooglePlaceReviews from './GooglePlacesReviews'

const Review = () => {
    const placeId = "ChIJ3bnj5l-RyzsRNMPDRJHmqTc";
    return (
        <div>
            <h1>Google Maps Reviews</h1>
            <GooglePlaceReviews placeId={placeId}/>
        </div>
  )
}

export default Review