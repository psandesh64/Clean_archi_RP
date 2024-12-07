export const formatISOString = (isoString: string): string => {
    const date = new Date(isoString);
  
    // Extract date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    // const hours = String(date.getHours()).padStart(2, '0');
    // const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');
  
    // Return formatted date
    return `${year}-${month}-${day}`;
    // return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
  
// Example usage
//   const isoString = "2024-11-29T12:24:29.473Z";
//   const formattedDate = formatISOString(isoString);
  //console.log(formattedDate); // Output: "2024-11-29 12:24:29"
  