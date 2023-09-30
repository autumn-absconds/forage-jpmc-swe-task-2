export interface Order {
  price: Number,
  size: Number,
}
/**
 * The datafeed server returns an array of ServerRespond with 2 stocks.
 * We do not have to manipulate the ServerRespond for the purpose of this task.
 */
export interface ServerRespond {
  stock: string,
  top_bid: Order,
  top_ask: Order,
  timestamp: Date,
}

class DataStreamer {
  // The url where datafeed server is listening
  static API_URL: string = 'http://localhost:8080/query?id=1';

  /**
   * Send request to the datafeed server and executes callback function on success
   * @param callback callback function that takes JSON object as its argument
   */
  static getData(callback: (data: ServerRespond[]) => void): void {
    const request = new XMLHttpRequest();
    request.open('GET', DataStreamer.API_URL,false);

    request.onload = () => {
      if (request.status === 200) {
        callback(JSON.parse(request.responseText));
      } else {
        alert('Request failed');
      }
    }

    request.send();
  }
}

// class DataStreamer {
//   static API_URL: string = 'http://localhost:8080/query?id=1';

//   static async getData(callback: (data: ServerRespond[]) => void): Promise<void> {
//     try {
//       const response = await fetch(DataStreamer.API_URL);
      
//       if (response.ok) {
//         const data = await response.json();
//         callback(data);
//       } else {
//         alert('Request failed');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }
// }




export default DataStreamer;