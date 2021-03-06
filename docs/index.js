(() => {
    
    const toggle = document.querySelector('input');
    const price = document.querySelectorAll('#cards div .price');
    const pricesArr = Array.from(price);
    
    const anualPricing = (pricesArr = []) => {
    
        return pricesArr.map(price => {
            setTimeout(() => {
                const text = price.innerText.split('');
                text.splice(3, 0, '9');
                text.shift();
                price.innerHTML = `<span>$</span>${text.join('')}`;
                return text; 
            }, 200);
        });
    
    }
    
    const monthlyPricing = (pricesArr = []) => {
    
        return pricesArr.map(price => {
            const text = price.innerText.split('');
            if (text.length >= 7) {
                setTimeout(() => {
                    text.splice(3, 1);
                    text.shift();
                    price.innerHTML = `<span>$</span>${text.join('')}`;
                    return text; 
                }, 200);
            } else {
                setTimeout(() => {
                    text.shift();
                    price.innerHTML = `<span>$</span>${text.join('')}`;
                }, 200);
            }
            
        });
    
    }

    
    
    toggle.addEventListener('change', () => {
        
        if (!toggle.checked) {
            anualPricing(pricesArr);
        } else {
            return monthlyPricing(pricesArr);
        }
    
    });

})();