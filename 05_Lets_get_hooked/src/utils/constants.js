export const cdnUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"


// export const logoUrl = new URL(
//   "../assets/SwaadpointLogo.png",
//   import.meta.url
// ).href;


  export const logoUrl =
  typeof window === "undefined"
    ? "test-logo.png" // fallback for Jest/Node
    : new URL("../assets/SwaadpointLogo.png", import.meta.url).href;