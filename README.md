 ## Multiple Equalizer  📐 

It is made to equalize elements when necessary.
For example the most used case is in cards, so that when one has more content the other adjusts to its size even if it has less content.

### Instalation: 🔧


### Usage: 💻

`data-alloyEqualize-multiple =`  **Parent wrapper of the content to be equalized.** 🛸

 
`data-alloyequalize-watch-1, data-alloyequalize-watch-2 , data-alloyequalize-watch-3 =`  **Equalizable content.** 👽👽👽


📏 **Example:**

    ```
	    <div data-alloyEqualize-multiple>
		   <div data-alloyequalize-watch-1>Your amazing equalizable content here</div>
		   <div data-alloyequalize-watch-2>Your amazing equalizable content here</div>
		   <div data-alloyequalize-watch-3>Your amazing equalizable content here</div>
	    </div>
    ```
    
🪐 The end result would be something like this:

![multiple equalizer cards example](https://i.imgur.com/pMMVvVi.png)

### How it works: ⚙⚙⚙

- Each element inside the parent **data-alloy** data-alloyEqualize-multiple will have the same height as the tallest element

- Sibling items **[attr^="data-alloyequalize-watch-"]** are compared as long as they belong to the same parent element, regardless of whether the front-end visually displays a row