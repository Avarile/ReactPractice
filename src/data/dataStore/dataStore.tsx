/**
 * Cache controller
 */

class Storage {
  static store = process.env.NODE_ENV === "development" ? window.localStorage : window.sessionStorage


  /**
   * get the cached value to the key
   * @param key
   * @returns {string | null}
   */
  static getStorage(key: any) {
    let value = this.store.getItem(key)
    return this.deserialize(value)
  }
  

  // todo: why not put objects inthe array???????????
  /**
   * set mutilple cache
   * @param args Array,even number item is key, odd number item is value 
   */
  static setMutipleStorage(args: []) {
    if (args.length > 0 && args.length % 2 === 0) {
      for (let i = 0, l = args.length; i < l; i++) {
        if (i % 2 === 0) {
          this.setStorage(args[i], args[i + 1])
        } else {
          throw new Error("Wrong data format");
        }
        
  

      }
    }
  }

  /**
   * remove cached data
   * @param key
   */
  static removeStorage(key: any) { 
    this.store.removeItem(key)
  }


  /**
   * purge all cached data
   */
  static purge() {
    this.store.purge()
  }

  /**
   * set current data according to the cached data
   * @param key
   * @param value
   * @returns {string}
   */
  static setValueByItem(key: any, value: any) {
    
   }


}
export default Storage
