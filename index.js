/**
 * @module Discord-Services
 * @copyright un boxing man 2021
 * @license MIT
 */
const wump = require('wumpfetch');

module.exports = class dsClient {
  /**
   * Create Boats class
   * @constructor
   * @param {string} token - Your Discord Services token
   */
  constructor(token) {
    this.token = token;
    
  }



  /**
   * Post bot commands to the API.
   *
   * @param {string} botid - The bot's ID.
   * @param {string} command - The name of the command.
   * @param {string} desc - The description or what the command does.
   * @param {string} category - The type of command.
   */
  postCommands(botid, comma, desc, category) {
    if (!this.token) throw new TypeError('API token not provided');
    if (typeof comma !== 'string') throw new TypeError(' the command must be a string');
    if (typeof desc !== 'string') throw new TypeError('The description must be a string');
    if (typeof category !== 'string') throw new TypeError('the category must be a string');
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
        const res = await wump(`https://api.discordservices.net/bot/${botid}/commands`, {
          method: 'POST',
          headers: {
            'Authorization': this.token
          },
          data: {
            "command": comma,

            "desc": desc,

            "category": category
          }
        }).send();
        resolve(res.json());
      } catch (err) {
        reject(new Error(err));
      }
    });
  }


  /**
   * Post bot commands to the API.
   *
   * @param {string} botid - The bot's ID.
   * @param {string} title - The title of the news.
   * @param {string} content - The content of the news.
   * @param {boolean} error - The type of command.
   */
  postNews(botid, title, content, error) {
    if (!this.token) throw new TypeError('API token not provided');
    if (typeof title !== 'string') throw new TypeError(' the title must be a string');
    if (typeof content !== 'string') throw new TypeError('The content must be a string');
    if (typeof error !== `boolean`) throw new TypeError('the category must be a boolean');
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
        const res = await wump(`https://api.discordservices.net/bot/${botid}/news`, {
          method: 'POST',
          headers: {
            'Authorization': this.token
          },
          data: {
            "title": title,

            "content": content,

            "error": error
          }
        }).send();
        resolve(res.json());
      } catch (err) {
        reject(new Error(err));
      }
    });
  }

  /**
   * Post bot server count to API.
   *
   * @param {number} servercount - The bot's server count.
   * @param {string} botid - The bot's ID.
   */
  postStats(servercount, botid) {
    if (!this.token) throw new TypeError('API token not provided');
    if (typeof servercount !== 'number') throw new TypeError('Server count must be a number');
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
        const res = await wump(`https://api.discordservices.net/bot/${botid}/stats`, {
          method: 'POST',
          headers: {
            'Authorization': this.token
          },
          data: {
            'servers': servercount
          }
        }).send();
        resolve(res.json());
      } catch (err) {
        reject(new Error(err));
      }
    });
  }
};