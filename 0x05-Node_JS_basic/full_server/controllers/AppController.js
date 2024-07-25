/**
 * Contains the miscellaneous route handlers.
 * @author Mutai Kelvin <https://github.com/Mutai05>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
