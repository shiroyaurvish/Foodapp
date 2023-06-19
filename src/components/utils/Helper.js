
export function filterData(searchInput, restaurents) {
    const filterData = restaurents.filter(
      (restaurent) =>
        restaurent?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  
      //  if(restaurent.name.includes(searchInput)){
      //   return restaurent
      //  }
    );
  
    return filterData;
  }