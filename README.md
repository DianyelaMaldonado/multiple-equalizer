 ## Multiple Equalizer  📐 

It is made to equalize elements when necessary.
For example the most used case is in cards, so that when one has more content the other adjusts to its size even if it has less content.

### Instalation: 🔧

npm i multiple-equalizer

### Usage:

Import function:

    import { multipleEqualizer } from  "multiple-equalizer"; 
	
Call function on window load and resize:

    window.addEventListener('DOMContentLoaded', () => {
        // Run equalizer when fonts are loaded
        if (typeof document.fonts == 'undefined') {
            multipleEqualizer();
        } else {
            document.fonts.ready.then(function () {
                multipleEqualizer();
            })
        }
    })
    
    window.addEventListener('resize', () => {
        multipleEqualizer();
    })

### Props: 💻

| Property Name               | Description                                                                                                                                                                                                                               | Default Value |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| data-alloyEqualize-multiple | Main property of the plugin, this needs to be set on the parent/wrapper component of the elements that are going to be equalized. Its value is a number from 1 to N depending on how many elements of its children needs to be equalized. | 10             |
| data-alloyequalize-watch-N  | All the children elements that are going to be equalized needs to have this prop replacing the N with an integer number.                                                                                                                  | -             |

📏 **Example:**

	<div data-alloyEqualize-multiple="3">
		<div class="amazing-card">
			<div data-alloyequalize-watch-1>Your amazing card equalizable title here</div>
			<div data-alloyequalize-watch-2>Your amazing card equalizable summary here</div>
			<div data-alloyequalize-watch-3>Your amazing card equalizable author name here</div>
		</div>
		<div class="amazing-card">
			<div data-alloyequalize-watch-1>Your amazing card equalizable title here</div>
			<div data-alloyequalize-watch-2>Your amazing card equalizable summary here</div>
			<div data-alloyequalize-watch-3>Your amazing card equalizable author name here</div>
		</div>
		<div class="amazing-card">
			<div data-alloyequalize-watch-1>Your amazing card equalizable title here</div>
			<div data-alloyequalize-watch-2>Your amazing card equalizable summary here</div>
			<div data-alloyequalize-watch-3>Your amazing card equalizable author name here</div>
		</div>
	</div>
	
🥽 The end result would be something like this:

![multiple equalizer cards example](https://i.imgur.com/pMMVvVi.png)

### How it works: ⚙⚙⚙

- Each element inside the parent **data-alloyEqualize-multiple** will have the same height as the tallest element

- Sibling items **[attr^="data-alloyequalize-watch-"]** are compared as long as they belong to the same parent element, regardless of whether the front-end visually displays a row