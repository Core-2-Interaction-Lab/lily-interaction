<script src="scripts/main.js"></script>
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
let myVariable;
[
	{
		"year": 2023,
		"name": "Viva Magenta",
		"description": "Viva Magenta is a nuanced crimson red with pink tones that presents a balance between warm and cool. Rooted in nature, this hybrid colour is powerful, empowering and assertive, but not aggressive – it encourages experimentation and self-expression without restraint. Ultimately, this electrifying, boundary-less shade promotes optimism, joy and strength.",
		"image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/18-1750-viva-magenta-cotton-swatch-card-1669979036.jpg"
	},
{
		"year": 2022,
		"name": "Very Peri",
		"description": "Very Peri is a dynamic periwinkle blue hue with a vivifying violet red undertone. Futuristic in feeling and encouraging inventiveness and creativity, Very Peri blends the faithfulness and constancy of blue with the energy and excitement of red. A brand new shade, it marked the first time Pantone created a new colour in the history of its Colour of the Year forecasts.",
		"image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pantone-colour-year-very-peri-blue-purple-2022-1639045668.jpg?crop=0.338xw:0.760xh;0.325xw,0.117xh&resize=980:*"
	},
]
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made

