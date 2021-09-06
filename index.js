(() => {
    
    const toggle = document.querySelector('input');
    const price = document.querySelectorAll('#cards div .price');
    
    const pricesArr = Array.from(price);
    
    const anualPricing = (pricesArr = []) => {
    
        return pricesArr.map(price => {
            const text = price.innerText.split('');
            text.splice(3, 0, '9');
            price.innerText = text.join('')
            return text; 
        });
    
    }
    
    const monthlyPricing = (pricesArr = []) => {
    
        return pricesArr.map(price => {
            const text = price.innerText.split('');
            if (text.length >= 7) {
                text.splice(3, 1);
                price.innerText = text.join('')
                return text; 
            } else {
                return text.join('');
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