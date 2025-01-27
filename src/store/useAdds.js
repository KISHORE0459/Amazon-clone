import { create } from "zustand";

const useAdds = create((set) => ({
  adds: [
    "https://img.etimg.com/thumb/width-1600,height-900,imgsize-79641,resizemode-75,msid-71073977/small-biz/startups/newsbuzz/amazon-opens-its-homepage-to-display-ads.jpg",
    "https://technicallyautonomous.com/wp-content/uploads/2021/05/unnoticeable-components-1024x555.jpg",
    "https://www.teknicks.com/wp-content/uploads/amazon-website-homepage-showing-dresses-under-100-dollars.jpg",
  ],
}));

export default useAdds;
