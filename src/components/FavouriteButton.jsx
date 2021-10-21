import React,{memo} from 'react'

function FavouriteButton({addFavourite,id,isFavourite}) {
    return <button style={{width: '150px'}} type="button" class="btn btn-success" onClick={() => addFavourite(id)}>{!isFavourite ? 'Favourite': 'UnFavourite'}</button>
}

export default memo(FavouriteButton);
