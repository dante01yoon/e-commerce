import { INITIAL_DATA_TYPE, INITIAL_ITEM, SHOP_DATA, SHOP_DATA_TYPE } from "src/models";

export const buildInitialData = (fetchedData : SHOP_DATA_TYPE[] ): INITIAL_DATA_TYPE =>{ 
    const ItemIdStore = new Map<number,boolean>();
    let INITIAL_DATA_ARRAY:INITIAL_DATA_TYPE[] = fetchedData?.map((category: SHOP_DATA_TYPE) => {
      let items: INITIAL_ITEM[] = new Array<INITIAL_ITEM>();
      for(let item of category.items){
        let id = ~~ 1*Math.floor(Math.random()* 1 * 0xffce);
        while(ItemIdStore.has(id)){
          id = ~~ 1*Math.floor(Math.random()* 1 * 0xffce);
        }
        ItemIdStore.set(id,true);
        items.push({
          id,
          name: item.name,
          title:category.title,
          imageUrl: item.imageUrl,
          price: item.price
        });
      }
      return items; 
    });
    let INITIAL_DATA:INITIAL_DATA_TYPE = new Array<INITIAL_ITEM>()
    for( let SHOP_DATA of INITIAL_DATA_ARRAY) {
      INITIAL_DATA = [...INITIAL_DATA, ...SHOP_DATA]
    }
    return INITIAL_DATA; 
  }