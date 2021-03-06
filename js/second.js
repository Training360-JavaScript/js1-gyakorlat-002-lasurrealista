/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementIsANumber`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementIsANumber`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/

const checker = (inputArray = [], item = true) => {
    return {
        exists: inputArray.includes(item),
        index: inputArray.findIndex( i => i === item ),
        allElementIsANumber: inputArray.every( 
            i => typeof i === 'string'
        ),
        someElementIsANumber: inputArray.some( 
            i => typeof i === 'number'
        ),
    };
};

