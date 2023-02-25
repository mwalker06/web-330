/**
 * Title: http-client.js
 * Author: Megan Walker
 * Date: 02/25/23
 * Description: http-client for whatabook2.html
 * References: WEB 330 GitHub, & WEB 330 Assign_8
 */

// Importing the fetch API
export class HttpClient {
  // Creating a GET request
  // POST request
  async get(url, params = "") {
    url = new URL(url);
    url.search = new URLSearchParams(params);

    // Fetching the data
    const res = await fetch(url.toString(), {
      method: "GET",
    });

    // Returning the data
    return res.json();
  }
}
