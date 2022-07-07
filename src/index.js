const multipleEqualizer = () => {
    if(typeof document !== 'undefined'){
        const equilizerMultiContainers = document.querySelectorAll('[data-alloyEqualize-multiple]');
        if (equilizerMultiContainers.length) {
            equilizerMultiContainers.forEach((eContainer) => {
                let limitItems = eContainer.dataset.alloyequalizeMultiple ? eContainer.dataset.alloyequalizeMultiple : 10;
                for (let i = 0; i <= limitItems; i++) {
                    let equilizerItem = eContainer.querySelectorAll('[data-alloyequalize-watch-' + i + ']');
                    if (equilizerItem.length) {
                        let itemHeightPrevious;
                        let itemHighest = 0;
                        equilizerItem.forEach((el) => {
                            el.style.removeProperty('height');
                            let itemHeight = getInnerHeight(el);
                            if (itemHeightPrevious) {
                                if (itemHeight > itemHighest) {
                                    itemHighest = itemHeight;
                                }
                                itemHeightPrevious = itemHeight;
                            } else {
                                itemHeightPrevious = itemHeight;
                                itemHighest = itemHeight;
                            }
                        });
                        equalizeElements(equilizerItem, itemHighest);
                    }
                }
            });
        }
    }else {
        console.log('Welcome');
    }
}

function getInnerHeight(elm) {
    return elm.clientHeight
}

function equalizeElements(elements, height) {
    elements.forEach((el) => {
        el.style.height = height + "px";
    })
}

module.exports = { multipleEqualizer };