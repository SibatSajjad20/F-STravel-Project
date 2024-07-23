/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://media.cntraveller.com/photos/617936a2a8f76267fba5d115/master/w_1600%2Cc_limit/The%2520Burj%2520Khalifa-GettyImages-1084264582.jpeg')",
        'custom-image-2':"url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/a8/2c/caption.jpg?w=1400&h=1400&s=1')",
        'custom-image-3':"url('https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg')",
        'custom-image-4':"url('https://media.timeout.com/images/105859738/750/422/image.jpg')",

      },
    },
  },
  plugins: [],
}

